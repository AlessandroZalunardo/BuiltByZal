import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Wrench, Sprout, Armchair, Shirt } from "lucide-react";
import { ClosingCTA, PageIntro, Eyebrow } from "@/components/site/shared";
export const metadata: Metadata = {
  title: "Websites for Trades, Designers & Brands",
  description:
    "Websites tailored to plumbing companies, landscapers, interior designers, clothing brands, and other businesses.",
};
const industries = [
  {
    id: "plumbing-trades",
    icon: Wrench,
    n: "01",
    name: "Plumbing & trades",
    headline: "Be the business they call.",
    text: "When someone needs a reliable tradesperson, clarity matters. Show what you do, where you work, and how to reach you without making people hunt for it.",
    features: [
      "Services and service areas",
      "Easy-to-find contact details",
      "Project photos and customer enquiries",
    ],
    image: "/images/plumbing.png",
    alt: "Plumbing installation",
    industry: "Plumbing & trades",
  },
  {
    id: "landscaping",
    icon: Sprout,
    n: "02",
    name: "Landscaping",
    headline: "Let them see the possibilities.",
    text: "Your work transforms outdoor spaces. Give it room to shine with a website that shows your projects and makes it easy to start a conversation about the next one.",
    features: [
      "Project galleries",
      "Clear service descriptions",
      "Quote request forms",
    ],
    image: "/images/landscape.png",
    alt: "Designed residential garden with a geometric walkway and lush planting",
    industry: "Landscaping",
  },
  {
    id: "interior-design",
    icon: Armchair,
    n: "03",
    name: "Interior design",
    headline: "A website with your eye for detail.",
    text: "Your online presence should feel as considered as the spaces you create. Make room for your photography, your point of view, and the story behind your work.",
    features: [
      "Image-led project pages",
      "Your process and design approach",
      "Consultation enquiries",
    ],
    image: "/images/interior.png",
    alt: "Elegant contemporary living room in natural stone and walnut",
    industry: "Interior design",
  },
  {
    id: "clothing-brands",
    icon: Shirt,
    n: "04",
    name: "Clothing & lifestyle",
    headline: "Make your brand feel like a brand.",
    text: "Build an online home with the same character as your collection. From a focused brand website to an online store, the experience should carry your identity through every page.",
    features: [
      "Collection and campaign pages",
      "Brand-focused product presentation",
      "Online store planning and setup",
    ],
    image: "/images/clothing.png",
    alt: "Clothing brand collection",
    industry: "Clothing & lifestyle",
  },
];
export default function Industries() {
  return (
    <main id="main-content">
      <PageIntro
        label="Who we build for"
        title="Different industries."
        accent="One high standard."
        description="Every business has a different story. Your website should be built around yours."
      />
      <section className="container industries-list">
        {industries.map((industry) => (
          <article
            key={industry.id}
            id={industry.id}
            className={`industry-detail ${industry.image ? "with-image" : ""}`}
          >
            <div className="industry-detail-copy">
              <div className="industry-kicker">
                <industry.icon strokeWidth={1.5} />
                <span>{industry.name}</span>
                <span className="industry-number">{industry.n}</span>
              </div>
              <h2>{industry.headline}</h2>
              <p>{industry.text}</p>
              <ul>
                {industry.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <Link
                className="text-link"
                href={`/contact?industry=${encodeURIComponent(industry.industry)}`}
              >
                Let’s talk about your business <ArrowUpRight />
              </Link>
            </div>
            {industry.image && (
              <figure className="industry-figure">
                <img
                  src={industry.image}
                  alt={industry.alt}
                  width="1536"
                  height="1024"
                  loading="lazy"
                />
              </figure>
            )}
          </article>
        ))}
      </section>
      <section className="container other-industry">
        <Eyebrow>Something different?</Eyebrow>
        <h2>Your business doesn’t have to fit a box.</h2>
        <p>
          These are just a few of the businesses we build for. Tell us what you
          do, and let’s explore what your website could be.
        </p>
        <Link href="/contact" className="text-link">
          Tell us about your business <ArrowUpRight />
        </Link>
      </section>
      <ClosingCTA />
    </main>
  );
}
