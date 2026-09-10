import type { Metadata } from "next";
import Image from "next/image";
import { Expand } from "lucide-react";
import { ClosingCTA, PageIntro } from "@/components/site/shared";

export const metadata: Metadata = {
  title: "Website Styles",
  description:
    "Explore modern website design examples for trades, interior designers, landscapers, and online stores. Find a look for your business with Built By Zal.",
};

const styles = [
  {
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
    <main id="main-content">
      <PageIntro
        label="Website styles"
        title="Find a look you love."
        accent="Make it your own."
        description="A few example designs to help you picture your website. Browse the styles and let me know what catches your eye—your site will be built around your own brand and content."
      />

      <section className="container styles-gallery" aria-label="Website design examples">
        {styles.map((style, index) => (
          <figure className="style-example" key={style.name}>
            <a
              className="style-preview"
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
                sizes="(max-width: 800px) 100vw, (max-width: 1400px) 50vw, 626px"
                priority={index === 0}
              />
              <span className="style-expand" aria-hidden="true">
                <Expand strokeWidth={1.5} />
              </span>
            </a>

            <figcaption className="style-caption">
              <p className="style-industry">{style.industry}</p>
              <h2>{style.name}</h2>
              <p className="style-description">{style.description}</p>
            </figcaption>
          </figure>
        ))}
      </section>

      <ClosingCTA />
    </main>
  );
}
