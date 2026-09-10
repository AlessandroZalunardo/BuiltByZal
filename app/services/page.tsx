import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Check,
  Monitor,
  ShoppingBag,
  RefreshCw,
} from "lucide-react";
import { ClosingCTA, PageIntro, Eyebrow } from "@/components/site/shared";
export const metadata: Metadata = {
  title: "Website Design & Development Services",
  description:
    "Custom business websites, online stores, and website redesigns. A clear process from first conversation to launch with Built By Zal.",
};
const services = [
  {
    id: "business-websites",
    n: "01",
    icon: Monitor,
    name: "Business websites",
    tag: "Turn visitors into conversations.",
    image: "/images/business-website-demo.png",
    imageAlt: "Business website concept designed by Built By Zal",
    imageWidth: 1267,
    imageHeight: 667,
    description:
      "A clear, professional home for your business. We put your services, your work, and your contact details where people need them, with a design that makes the right first impression.",
    features: [
      "Custom design that fits your business",
      "Service and project pages",
      "Mobile-friendly layouts",
      "Enquiry and consultation forms",
      "Clear page structure for search engines",
    ],
    service: "Business website",
  },
  {
    id: "online-stores",
    n: "02",
    icon: ShoppingBag,
    name: "Online stores",
    tag: "A shopping experience that feels like you.",
    image: "/images/online-store-demo.png",
    imageAlt: "Online store concept designed by Built By Zal",
    imageWidth: 1267,
    imageHeight: 667,
    description:
      "From a first collection to a growing catalogue, your online store should bring your brand to life and make finding the right product easy. We plan the right storefront and platform around what you sell.",
    features: [
      "A storefront with your brand’s personality",
      "Clear product and collection layouts",
      "An experience designed for mobile shoppers",
      "Platform and checkout setup scoped to your needs",
      "A practical handover for managing your store",
    ],
    service: "Online store",
  },
  {
    id: "website-redesigns",
    n: "03",
    icon: RefreshCw,
    name: "Website redesigns",
    tag: "Your next chapter deserves a fresh start.",
    image: "/images/website-redesign-demo.png",
    imageAlt: "Website redesign concept by Built By Zal",
    imageWidth: 1222,
    imageHeight: 555,
    description:
      "If your business has moved forward but your website hasn’t, let’s change that. We look at what’s working, what’s getting in the way, and what your customers actually need.",
    features: [
      "A review of your current website",
      "A fresh visual direction",
      "Simpler navigation and clearer content",
      "Better layouts across screen sizes",
      "A considered plan for moving to the new site",
    ],
    service: "Website redesign",
  },
];
export default function Services() {
  return (
    <main id="main-content">
      <PageIntro
        label="Our services"
        title="Built with purpose."
        accent="Made to work for you."
        description="A first website, a new online store, or a much-needed refresh. Let’s build the right thing for your business."
      />
      <section className="container service-details">
  {services.map((service) => (
    <article id={service.id} key={service.id} className="service-showcase">

      <div className="service-showcase-info">
        <div className="service-showcase-top">
          <span>{service.n}</span>
          <service.icon strokeWidth={1.25} />
        </div>

        <h2>{service.name}</h2>

        <p className="service-showcase-description">
          {service.description}
        </p>

        <Link
          href={`/contact?service=${encodeURIComponent(service.service)}`}
          className="service-showcase-link"
        >
          View example <ArrowUpRight />
        </Link>
      </div>

      <div className="service-showcase-visual">
        <Image
          src={service.image}
          alt={service.imageAlt}
          width={1200}
          height={800}
          className="service-showcase-image"
        />
      </div>

    </article>
  ))}
</section>
      <section className="section process-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <Eyebrow>From idea to online</Eyebrow>
              <h2>
                Clear steps.
                <br />
                No guesswork.
              </h2>
            </div>
            <p>We agree on the scope and quote before the build begins.</p>
          </div>
          <div className="process-grid">
            {[
              [
                "01",
                "Let’s talk",
                "We start with your business, your customers, and what you need your website to do.",
              ],
              [
                "02",
                "Find the direction",
                "We agree on the pages, features, and visual direction before getting into the details.",
              ],
              [
                "03",
                "Build & refine",
                "Your site comes together, with time for you to review it and share feedback.",
              ],
              [
                "04",
                "Ready for launch",
                "We check the essentials and walk you through the next steps for going live.",
              ],
            ].map(([n, title, text]) => (
              <div className="process-step" key={n}>
                <span>{n}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ClosingCTA />
    </main>
  );
}
