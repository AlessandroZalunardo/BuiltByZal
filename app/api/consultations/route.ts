import { z } from "zod";
import { consultationSchema } from "@/lib/consultation";
import { contactEmail } from "@/lib/contact-details";

const requestSchema = consultationSchema.extend({
  requestId: z.string().uuid(),
});

function reply(body: object, status = 200) {
  return Response.json(body, {
    status,
    headers: { "Cache-Control": "no-store" },
  });
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) {
    return reply(
      { error: "Please submit your enquiry from this website." },
      403,
    );
  }
  if (!request.headers.get("content-type")?.includes("application/json")) {
    return reply({ error: "Please use the consultation form." }, 415);
  }

  let body: unknown;
  try {
    const reader = request.body?.getReader();
    if (!reader) return reply({ error: "Your request is empty." }, 400);
    const decoder = new TextDecoder();
    let text = "";
    let size = 0;
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > 24000) {
        await reader.cancel();
        return reply(
          { error: "Your message is too long. Please shorten it." },
          413,
        );
      }
      text += decoder.decode(value, { stream: true });
    }
    body = JSON.parse(text + decoder.decode());
  } catch {
    return reply(
      { error: "We couldn’t read your request. Please try again." },
      400,
    );
  }

  const result = requestSchema.safeParse(body);
  if (!result.success) {
    return reply(
      { error: "Please check your details and complete the required fields." },
      400,
    );
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();
  const from =
    process.env.CONTACT_FROM_EMAIL?.trim() ||
    "Built By Zal <onboarding@resend.dev>";
  if (!apiKey || apiKey.includes("your_") || apiKey.includes("xxxx")) {
    console.error(
      "Contact form: add RESEND_API_KEY to .env.local or your hosting environment.",
    );
    return reply(
      {
        error:
          "The form isn’t available right now. Please email your project details using the link below.",
      },
      503,
    );
  }

  const data = result.data;
  const reference = `BBZ-${data.requestId.slice(0, 8).toUpperCase()}`;
  const emailText = [
    "NEW BUILT BY ZAL CONSULTATION",
    "",
    `Reference: ${reference}`,
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone || "Not provided"}`,
    `Business: ${data.company}`,
    `Industry: ${data.industry}`,
    `Service: ${data.service}`,
    "",
    "PROJECT DETAILS",
    data.message,
    "",
    "The sender agreed to be contacted about this enquiry.",
  ].join("\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        // Retrying the same request won’t create a second email.
        "Idempotency-Key": `consultation/${data.requestId}`,
      },
      body: JSON.stringify({
        from,
        to: [contactEmail],
        reply_to: data.email,
        subject: `Website enquiry — ${data.company.replace(/[\r\n]+/g, " ")}`,
        text: emailText,
      }),
      signal: AbortSignal.timeout(12000),
    });
    const sent = await response.json().catch(() => null);
    if (!response.ok || typeof sent?.id !== "string") {
      console.error(
        "Contact email rejected:",
        response.status,
        sent?.name || "invalid_response",
      );
      return reply(
        {
          error:
            "Your enquiry couldn’t be sent. Please try again or email us directly below.",
        },
        502,
      );
    }
    return reply({ reference });
  } catch {
    console.error("Contact email service did not respond.");
    return reply(
      {
        error:
          "We couldn’t confirm your enquiry was sent. Your details are still here; please try again.",
      },
      504,
    );
  }
}
