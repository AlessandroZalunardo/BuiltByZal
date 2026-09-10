import type { Metadata } from "next";
import { MessageSquare, PencilRuler, ArrowUpRight } from "lucide-react";
import { Eyebrow } from "@/components/site/shared";
import ContactForm from "@/components/site/contact-form";
export const metadata: Metadata = {
  title: "Book a Free Website Consultation",
  description:
    "Tell Built By Zal about your business and request a free website consultation. Custom websites, online stores, and redesigns.",
};
export default function Contact() {
  return (
    <main id="main-content">
      <section className="container contact-layout">
        <div className="contact-copy">
          <Eyebrow>Let’s talk</Eyebrow>
          <h1>
            Your next website
            <br />
            starts with a<br />
            <span className="blue-text">conversation.</span>
          </h1>
          <p>
            Tell us about your business and what you have in mind. You don’t
            need to have it all figured out.
          </p>
          <div className="consultation-details">
            <h2>What happens next?</h2>
            <div>
              <MessageSquare />
              <p>
                <strong>We get to know your business.</strong>
                <span>
                  Your goals, your customers, and what you need from your
                  website.
                </span>
              </p>
            </div>
            <div>
              <PencilRuler />
              <p>
                <strong>We talk through the possibilities.</strong>
                <span>
                  A practical direction, the right scope, and answers to your
                  questions.
                </span>
              </p>
            </div>
            <div>
              <ArrowUpRight />
              <p>
                <strong>You decide on the next step.</strong>
                <span>
                  A clear proposal before any work begins. No pressure to
                  commit.
                </span>
              </p>
            </div>
          </div>
          <div className="consultation-note">
            <span>Free consultation</span>
            <span>No obligation</span>
          </div>
        </div>
        <ContactForm />
      </section>
      <section id="your-information" className="container information-note">
        <h2>Your information</h2>
        <p>
          Your details are used to respond to your enquiry. The form sends them
          through our email provider to Built By Zal’s inbox; they are not
          displayed publicly. To request a correction or deletion, email
          alessandro.zalunardo@gmail.com.
        </p>
      </section>
    </main>
  );
}
