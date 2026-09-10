import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  ArrowUpRight,
  Check,
  House,
  Leaf,
  Monitor,
  RefreshCw,
  ShoppingBag,
  Smartphone,
  Wrench,
} from "lucide-react";

import { ClosingCTA, Eyebrow } from "@/components/site/shared";

const services = [
  {
    icon: Monitor,
    title: "Business websites",
    text: "Make a strong first impression. Show people what you do and make it easy to get in touch.",
    href: "/services#business-websites",
    number: "01",
  },
  {
    icon: ShoppingBag,
    title: "Online stores",
    text: "Give your products a proper home, with a shopping experience that feels like your brand.",
    href: "/services#online-stores",
    number: "02",
  },
  {
    icon: RefreshCw,
    title: "Website redesigns",
    text: "Outgrown your current website? Bring your design, content, and customer experience up to date.",
    href: "/services#website-redesigns",
    number: "03",
  },
];

const approach = [
  {
    icon: Smartphone,
    title: "Looks right on every screen",
    text: "A thoughtful experience on phones, tablets, and desktops.",
  },
  {
    icon: Monitor,
    title: "Designed around your business",
    text: "Your services, your personality, and a clear path for your customers.",
  },
  {
    icon: Check,
    title: "A straightforward process",
    text: "Clear scope, direct communication, and a chance to review along the way.",
  },
];

const industries = [
  { icon: Wrench, label: "Plumbing & trades" },
  { icon: Leaf, label: "Landscaping" },
  { icon: House, label: "Interior design" },
  { icon: ShoppingBag, label: "Clothing & lifestyle" },
];

export default function Home() {
  return (
    <main id="main-content">
      <section className="home-hero">
        <div className="hero container">
          <div className="hero-copy">
            <Eyebrow>Independent web design & development</Eyebrow>

            <h1>
              Good business.
              <br />
              Great <span className="blue-text">website.</span>
            </h1>

            <p className="hero-description">
              You put everything into your business.
              <br className="desktop-break" />
              Your website should show it.
            </p>

            <p className="hero-detail">
              Custom websites for service businesses, creative studios, and brands
              ready for their next chapter.
            </p>

            <div className="hero-actions">
              <Link href="/contact" className="primary-button">
                Let&apos;s build your website
                <ArrowUpRight />
              </Link>

              <Link className="text-link" href="/services">
                Explore our services
                <ArrowRight />
              </Link>
            </div>

            <div className="hero-note">
              <span className="small-cross">+</span>
              Thoughtfully designed. Personally built by Alessandro Zalunardo.
            </div>
          </div>

          <div className="hero-art" aria-hidden="true">
            <Image
              className="hero-studio-image"
              src="/images/home-hero-studio.png"
              alt=""
              width={912}
              height={585}
              priority
            />
          </div>
        </div>
      </section>

      <div className="industry-band">
        <div className="container industry-band-inner">
          <p>
            Built for your
            <br />
            <strong>kind of business.</strong>
          </p>

          {industries.map((industry) => {
            const IndustryIcon = industry.icon;
            return (
              <div className="industry-band-item" key={industry.label}>
                <IndustryIcon strokeWidth={1.5} aria-hidden="true" />
                <span>{industry.label}</span>
                <ArrowRight className="industry-band-arrow" aria-hidden="true" />
              </div>
            );
          })}
        </div>
      </div>

      <section className="section container home-services-intro">
        <div className="section-heading home-section-heading">
          <div>
            <Eyebrow>What we do</Eyebrow>

            <h2>
              Built to grow <span className="blue-text">your business</span>
            </h2>
          </div>

          <div className="service-note">
            <p>
              A good website should build trust before someone even contacts
              you. I focus on clear design, fast performance, and making it easy
              for visitors to understand your business, reach out, and become
              customers.
            </p>
            <Link className="text-link service-note-link" href="/services">
              Explore services
              <ArrowRight />
            </Link>
          </div>
        </div>

        <div className="service-grid">
          {services.map((service) => {
            const ServiceIcon = service.icon;

            return (
              <Link
                href={service.href}
                key={service.title}
                className="service-card"
              >
                <div className="card-top">
                  <ServiceIcon strokeWidth={1.5} />
                  <span>{service.number}</span>
                </div>

                <h3>{service.title}</h3>

                <p>{service.text}</p>

                <span className="card-link">
                  Find out more
                  <ArrowUpRight />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="section showcase-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <Eyebrow>Different businesses. Same attention to detail.</Eyebrow>

              <h2>
                Your industry.
                <br />
                <span className="muted-heading">Your own identity.</span>
              </h2>
            </div>

            <Link href="/industries" className="text-link">
              Who we build for
              <ArrowUpRight />
            </Link>
          </div>

          <div className="showcase-grid">
            <Link href="/industries#interior-design" className="showcase">
              <div className="showcase-image">
                <Image
                  src="/images/interior.png"
                  alt="Contemporary living room with natural stone, walnut, and soft neutral furniture"
                  width={1536}
                  height={1024}
                />

                <span className="image-arrow">
                  <ArrowUpRight />
                </span>
              </div>

              <div className="showcase-caption">
                <h3>Let the work speak.</h3>

                <span>Interior design & creative studios</span>
              </div>
            </Link>

            <Link href="/industries#landscaping" className="showcase">
              <div className="showcase-image">
                <Image
                  src="/images/landscape.png"
                  alt="Contemporary residential landscape with a stone walkway and ornamental planting"
                  width={1536}
                  height={1024}
                />

                <span className="image-arrow">
                  <ArrowUpRight />
                </span>
              </div>

              <div className="showcase-caption">
                <h3>Turn good work into new work.</h3>

                <span>Landscaping & service businesses</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="section container approach-section">
        <div>
          <Eyebrow>The Built By Zal approach</Eyebrow>

          <h2>
            Made for people.
            <br />
            Built for business.
          </h2>

          <p className="section-intro">
            A website should look the part and make the next step obvious. We
            bring both together.
          </p>

          <Link href="/about" className="text-link">
            Meet the person behind the build
            <ArrowUpRight />
          </Link>
        </div>

        <div className="approach-list">
          {approach.map((item) => {
            const ApproachIcon = item.icon;

            return (
              <div className="approach-item" key={item.title}>
                <ApproachIcon strokeWidth={1.5} />

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <ClosingCTA />
    </main>
  );
}
