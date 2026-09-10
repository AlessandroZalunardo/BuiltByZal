import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ClosingCTA, Eyebrow } from "@/components/site/shared";

export const metadata: Metadata = {
  title: "Website Styles",
  description:
    "Explore modern website design examples for trades, interior designers, landscapers, and online stores. Find a look for your business with Built By Zal.",
};

const styles = [
  {
    slug: "dark-bold",
    name: "Dark & bold",
    industry: "Trades & construction",
    description:
      "Strong headings, rich colours, and large project photos that put your work front and centre.",
    image: "/images/business-website-demo.png",
    width: 1267,
    height: 667,
    alt: "Example of a dark construction website on a laptop and phone, with a large architectural photograph and bold headline",
  },
  {
    slug: "warm-minimal",
    name: "Warm & minimal",
    industry: "Interiors & creative studios",
    description:
      "Soft neutrals, elegant type, and plenty of breathing room. A calm, considered home for your portfolio.",
    image: "/images/styles/warm-minimal.png",
    width: 1536,
    height: 1024,
    alt: "Example of a cream interior design website on a laptop and phone, with elegant typography and warm living room photography",
  },
  {
    slug: "fresh-natural",
    name: "Fresh & natural",
    industry: "Landscaping & outdoor living",
    description:
      "Light backgrounds, natural greens, and inviting photography that help people picture the possibilities.",
    image: "/images/styles/fresh-natural.png",
    width: 1536,
    height: 1024,
    alt: "Example of a light landscaping website on a laptop and phone, with forest green details and a sunlit garden",
  },
  {
    slug: "modern-storefront",
    name: "Modern storefront",
    industry: "Clothing & lifestyle brands",
    description:
      "A clean, product-focused layout with striking imagery and room for your brand's personality.",
    image: "/images/online-store-demo.png",
    width: 1267,
    height: 667,
    alt: "Example of a modern black clothing store website on a laptop and phone, with a featured hoodie and a clear product grid",
  },
];

export default function StylesPage() {
  return (
    <main id="main-content" className="styles-page">
      <section className="styles-intro-shell">
        <div className="container styles-intro">
          <div className="styles-intro-copy">
            <Eyebrow>Website styles</Eyebrow>
            <h1>
              Find a look you love.
              <br />
              <span className="blue-text">Make it your own.</span>
            </h1>
            <p>
              These are example directions to inspire your project. Every
              website is fully customized to your business, goals, and brand.
            </p>
          </div>

          <div className="styles-intro-note" aria-hidden="true">
            <span>Different industries.</span>
            <span>Same high standards.</span>
            <span>A website that works for you.</span>
            <i />
          </div>
        </div>
      </section>

      <section
        className="container styles-showcase-grid"
        aria-label="Website design examples"
      >
        {styles.map((style, index) => (
          <article
            className={`style-showcase style-showcase-${style.slug}`}
            key={style.name}
          >
            <div className="style-showcase-copy">
              <p className="style-industry">{style.industry}</p>
              <h2>{style.name}</h2>
              <p className="style-description">{style.description}</p>

              <a
                className="style-view-button"
                href={style.image}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open the ${style.name} example image full size in a new tab`}
              >
                View style
                <ArrowRight aria-hidden="true" />
              </a>
            </div>

            <a
              className="style-showcase-visual"
              href={style.image}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open the ${style.name} example image full size in a new tab`}
            >
              <Image
                src={style.image}
                alt={style.alt}
                width={style.width}
                height={style.height}
                sizes="(max-width: 800px) 100vw, 50vw"
                priority={index === 0}
              />
            </a>
          </article>
        ))}
      </section>

      <ClosingCTA />
    </main>
  );
}
