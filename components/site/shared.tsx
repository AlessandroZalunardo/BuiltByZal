import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="eyebrow">
      <span aria-hidden="true" /> {children}
    </p>
  );
}
export function ClosingCTA() {
  return (
    <section className="closing-cta">
      <div className="container cta-inner">
        <div>
          <Eyebrow>Your next chapter starts here</Eyebrow>
          <h2>
            Let’s build something
            <br />
            <span>worth clicking.</span>
          </h2>
        </div>
        <div className="cta-right">
          <p>
            Tell us what you have in mind.
            <br />
            We’ll work out the next step together.
          </p>
          <Link href="/contact" className="primary-button">
            Book a free consultation <ArrowUpRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
export function PageIntro({
  label,
  title,
  accent,
  description,
}: {
  label: string;
  title: string;
  accent: string;
  description: string;
}) {
  return (
    <section className="page-intro container">
      <Eyebrow>{label}</Eyebrow>
      <h1>
        {title}
        <br />
        <span className="blue-text">{accent}</span>
      </h1>
      <p>{description}</p>
    </section>
  );
}
