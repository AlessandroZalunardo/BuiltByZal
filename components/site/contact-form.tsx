"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { ArrowUpRight, Check, LoaderCircle } from "lucide-react";
import { consultationSchema, industries, services } from "@/lib/consultation";
import { contactEmail } from "@/lib/contact-details";

const fields = [
  {
    name: "name",
    label: "Your name",
    type: "text",
    autoComplete: "name",
    placeholder: "Full name",
    max: 100,
    required: true,
  },
  {
    name: "email",
    label: "Email address",
    type: "email",
    autoComplete: "email",
    placeholder: "you@yourbusiness.com",
    max: 254,
    required: true,
  },
  {
    name: "company",
    label: "Business name",
    type: "text",
    autoComplete: "organization",
    placeholder: "Your business",
    max: 150,
    required: true,
  },
  {
    name: "phone",
    label: "Phone",
    type: "tel",
    autoComplete: "tel",
    placeholder: "Your phone number",
    max: 40,
    required: false,
  },
];

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const successHeading = useRef<HTMLHeadingElement>(null);
  const pending = useRef(false);
  const lastRequest = useRef({ id: "", body: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [failure, setFailure] = useState("");
  const [busy, setBusy] = useState(false);
  const [reference, setReference] = useState("");
  const [emailLink, setEmailLink] = useState(`mailto:${contactEmail}`);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    for (const name of ["industry", "service"]) {
      const select = form.current?.elements.namedItem(
        name,
      ) as HTMLSelectElement | null;
      const value = params.get(name);
      if (
        select &&
        value &&
        Array.from(select.options).some((option) => option.value === value)
      ) {
        select.value = value;
      }
    }
  }, []);

  useEffect(() => {
    if (reference) successHeading.current?.focus();
  }, [reference]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending.current) return;
    const values = new FormData(event.currentTarget);
    const result = consultationSchema.safeParse({
      name: values.get("name"),
      email: values.get("email"),
      company: values.get("company"),
      phone: values.get("phone"),
      industry: values.get("industry"),
      service: values.get("service"),
      message: values.get("message"),
      consent: values.get("consent") === "on",
      companyUrl: values.get("companyUrl"),
    });
    setFailure("");
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of result.error.issues) {
        fieldErrors[String(issue.path[0])] = issue.message;
      }
      setErrors(fieldErrors);
      const firstField = form.current?.elements.namedItem(
        Object.keys(fieldErrors)[0],
      ) as HTMLElement | null;
      firstField?.focus();
      return;
    }

    setErrors({});
    const data = result.data;
    const body = JSON.stringify(data);
    if (body !== lastRequest.current.body) {
      lastRequest.current = { id: crypto.randomUUID(), body };
    }
    const emailBody = [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Business: ${data.company}`,
      `Phone: ${data.phone}`,
      `Industry: ${data.industry}`,
      `Service: ${data.service}`,
      "",
      data.message,
    ].join("\n");
    setEmailLink(
      `mailto:${contactEmail}?subject=${encodeURIComponent(`Website enquiry — ${data.company}`)}&body=${encodeURIComponent(emailBody)}`,
    );
    pending.current = true;
    setBusy(true);

    try {
      const response = await fetch("/api/consultations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, requestId: lastRequest.current.id }),
        signal: AbortSignal.timeout(20000),
      });
      const reply = await response.json().catch(() => null);
      if (!response.ok || typeof reply?.reference !== "string") {
        throw new Error(
          reply?.error || "We couldn’t send your enquiry. Please try again.",
        );
      }
      setReference(reply.reference);
    } catch (error) {
      const timedOut =
        error instanceof Error &&
        ["TimeoutError", "AbortError"].includes(error.name);
      setFailure(
        timedOut
          ? "The connection timed out. Your details are still here; please try again."
          : error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      );
    } finally {
      setBusy(false);
      pending.current = false;
    }
  }

  if (reference) {
    return (
      <div className="contact-form-card success-card" role="status">
        <div className="success-icon">
          <Check />
        </div>
        <p className="eyebrow">Request sent</p>
        <h2 ref={successHeading} tabIndex={-1}>
          You’re one step closer.
        </h2>
        <p>
          Your consultation request is on its way to Built By Zal. I’ll review
          your project details and get back to you using the contact information
          you provided.
        </p>
        <div className="request-reference">
          <span>Your reference</span>
          <strong>{reference}</strong>
        </div>
        <Link href="/" className="primary-button">
          Back to home <ArrowUpRight />
        </Link>
      </div>
    );
  }

  return (
    <div className="contact-form-card">
      <div className="form-title">
        <h2 id="form-title">Tell us about your project.</h2>
        <p>A few details to get the conversation started.</p>
      </div>
      <form
        ref={form}
        onSubmit={submit}
        noValidate
        aria-busy={busy}
        aria-labelledby="form-title"
      >
        <fieldset disabled={busy} className="form-grid">
          <legend className="sr-only">Your consultation request</legend>
          {fields.map((field) => (
            <div className="form-field" key={field.name}>
              <label htmlFor={field.name}>
                {field.label}{" "}
                {field.required ? (
                  <span>*</span>
                ) : (
                  <span className="optional">Optional</span>
                )}
              </label>
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                autoComplete={field.autoComplete}
                placeholder={field.placeholder}
                maxLength={field.max}
                required={field.required}
                aria-invalid={Boolean(errors[field.name])}
                aria-describedby={
                  errors[field.name] ? `${field.name}-error` : undefined
                }
              />
              {errors[field.name] && (
                <p className="field-error" id={`${field.name}-error`}>
                  {errors[field.name]}
                </p>
              )}
            </div>
          ))}
          <div className="form-field">
            <label htmlFor="industry">
              Your industry <span>*</span>
            </label>
            <select
              id="industry"
              name="industry"
              defaultValue=""
              required
              aria-invalid={Boolean(errors.industry)}
              aria-describedby={errors.industry ? "industry-error" : undefined}
            >
              <option value="" disabled>
                Select an industry
              </option>
              {industries.map((industry) => (
                <option key={industry} value={industry}>
                  {industry}
                </option>
              ))}
            </select>
            {errors.industry && (
              <p className="field-error" id="industry-error">
                {errors.industry}
              </p>
            )}
          </div>
          <div className="form-field">
            <label htmlFor="service">
              What do you need? <span>*</span>
            </label>
            <select
              id="service"
              name="service"
              defaultValue=""
              required
              aria-invalid={Boolean(errors.service)}
              aria-describedby={errors.service ? "service-error" : undefined}
            >
              <option value="" disabled>
                Select a service
              </option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
            {errors.service && (
              <p className="field-error" id="service-error">
                {errors.service}
              </p>
            )}
          </div>
          <div className="form-field full-width">
            <label htmlFor="message">
              A little about your project <span>*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              minLength={15}
              maxLength={4000}
              required
              placeholder="What does your business do, and what would you like your website to do?"
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message && (
              <p className="field-error" id="message-error">
                {errors.message}
              </p>
            )}
          </div>
          <div className="honey-field" aria-hidden="true">
            <label htmlFor="companyUrl">Leave this empty</label>
            <input
              id="companyUrl"
              name="companyUrl"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>
          <div className="consent-field full-width">
            <input
              type="checkbox"
              id="consent"
              name="consent"
              required
              aria-invalid={Boolean(errors.consent)}
              aria-describedby={errors.consent ? "consent-error" : undefined}
            />
            <label htmlFor="consent">
              I agree to have my details used to respond to this enquiry.{" "}
              <a href="#your-information">About your information</a>
            </label>
          </div>
          {errors.consent && (
            <p className="field-error full-width" id="consent-error">
              {errors.consent}
            </p>
          )}
          {failure && (
            <p className="form-error full-width" role="alert">
              {failure}
            </p>
          )}
          <button
            type="submit"
            className="primary-button form-submit full-width"
            disabled={busy}
          >
            {busy ? (
              <>
                <LoaderCircle className="spin" />
                Sending your request…
              </>
            ) : (
              <>
                Request a free consultation <ArrowUpRight />
              </>
            )}
          </button>
          <p className="form-footnote full-width">
            No commitment. Just a conversation about what’s possible.
          </p>
        </fieldset>
      </form>
      <p className="direct-email">Prefer email?{" "}
  <a
    href="mailto:Alessandrozalunardo05@gmail.com"
    className="font-semibold text-[#5B8CFF] hover:text-[#7CA5FF] hover:underline transition-colors"
  >
    Alessandrozalunardo05@gmail.com
  </a>
</p>
</div>
  );
}
