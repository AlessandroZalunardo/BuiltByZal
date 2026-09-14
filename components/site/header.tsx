"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  ["/", "Home"],
  ["/services", "Services"],
  ["/industries", "Industries"],
  ["/styles", "Styles"],
  ["/about", "About"],
  ["/contact", "Contact"],
];

export function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="Built By Zal home"
      className={`brand ${footer ? "footer-brand" : ""}`}
    >
      <img
        src="/images/zal-logo.png"
        alt=""
        width="44"
        height="44"
        className="brand-logo"
      />
      <span>
        Built By <span className="brand-zal">Zal</span>
        <span className="brand-period">.</span>
      </span>
    </Link>
  );
}

export default function Header() {
  const path = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const header = useRef<HTMLElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    }

    function closeOutside(event: PointerEvent) {
      if (!header.current?.contains(event.target as Node)) setMenuOpen(false);
    }

    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOutside);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOutside);
    };
  }, [menuOpen]);

  return (
    <header ref={header} className="site-header">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="container header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([href, label]) => (
            <Link
              key={href}
              href={href}
              aria-current={path === href ? "page" : undefined}
            >
              {label}
            </Link>
          ))}
        </nav>
        <Link href="/contact" className="header-cta">
          Let’s talk <ArrowUpRight />
        </Link>
        <button
          ref={menuButton}
          type="button"
          className="menu-toggle"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
      <nav
        id="mobile-navigation"
        className="mobile-navigation"
        aria-label="Mobile navigation"
        hidden={!menuOpen}
      >
        {links.map(([href, label]) => (
          <Link
            key={href}
            href={href}
            aria-current={path === href ? "page" : undefined}
            onClick={() => setMenuOpen(false)}
          >
            {label}
            <ArrowUpRight />
          </Link>
        ))}
      </nav>
    </header>
  );
}
