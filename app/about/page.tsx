import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, MessagesSquare, ScanEye, Hammer } from "lucide-react";
import { ClosingCTA, PageIntro, Eyebrow } from "@/components/site/shared";
export const metadata: Metadata = {
  title: "About Built By Zal",
  description:
    "Meet Alessandro, the person behind Built By Zal. Independent website design and development based in Ontario.",
};
export default function About() {
  return (
    <main id="main-content">
      <PageIntro
        label="The person behind the build"
        title="Built by someone"
        accent="who cares about the details."
        description="An independent web design business with a simple idea: good businesses deserve websites that do them justice."
      />
      <section className="container about-story">
        <div className="founder-panel">
          <div className="founder-top">
        <div className="founder-monogram" aria-hidden="true">
          AZ<span>.</span>
        </div>

  <img
    src="/images/Headshot.png"
    alt="Alessandro Zalunardo"
    className="founder-photo"
    width={180}
    height={180}
  />
</div>
          <div className="founder-caption">
            <h2>Alessandro Zalunardo</h2>
            <p>Founder & website developer</p>
            <span>Ontario, Canada</span>
          </div>
        </div>
        <div className="story-copy">
          <Eyebrow>Hi, I’m Alessandro.</Eyebrow>
          <h2>
            From building on site
            <br />
            to building online.
          </h2>
          <p>
            Before getting into software development, I worked as a rough-in plumber alongside my cousin, who owned his own business. That gave me firsthand experience seeing how much responsibility comes with running a company—not just doing the work, but managing clients, organizing jobs, answering calls, giving quotes, staying on schedule, and making sure customers are happy. I saw how quickly things can get busy and how important trust, reliability, and a strong reputation are. That experience is a big reason I built Built By Zal. I want to help business owners look more professional online, make it easier for customers to find and contact them, and give them a website that actually supports the way they run their business.
          </p>
          <p>
            Built By Zal brings that same mindset to websites. I want to help
            business owners put their best foot forward online with a site that
            looks professional, feels like them, and is easy for their customers
            to use.
          </p>
          <p>
            You work directly with the person building your website. We talk
            about what you need, figure out the right direction, and work
            through the details together.
          </p>
          <Link href="/contact" className="text-link">
            Let’s talk about your website <ArrowUpRight />
          </Link>
        </div>
      </section>
      <section className="section container">
        <div className="section-heading">
          <div>
            <Eyebrow>How I like to work</Eyebrow>
            <h2>
              Built Around You.
              <br />
              Straightforward communication.
            </h2>
          </div>
        </div>
        <div className="values-grid">
          {[
            {
              icon: MessagesSquare,
              title: "A direct conversation",
              text: "Tell me what you have in mind. I’ll explain the options in plain language and keep you involved.",
            },
            {
              icon: ScanEye,
              title: "Care in the details",
              text: "The layout, the words, the way a page works on your phone. The small things shape the whole experience.",
            },
            {
              icon: Hammer,
              title: "Built around your needs",
              text: "We start with what your business actually needs and agree on a clear scope before the work begins.",
            },
          ].map((v) => (
            <div className="value-item" key={v.title}>
              <v.icon strokeWidth={1.4} />
              <h3>{v.title}</h3>
              <p>{v.text}</p>
            </div>
          ))}
        </div>
      </section>
      <ClosingCTA />
    </main>
  );
}
