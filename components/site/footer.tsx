import Link from "next/link";
import { Brand } from "./header";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div>
            <Brand footer />
            <p>Good business deserves a great website.</p>
          </div>
          <nav aria-label="Footer navigation">
            <Link href="/services">Services</Link>
            <Link href="/industries">Industries</Link>
            <Link href="/styles">Styles</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <div className="footer-location">
            Based in Ontario.
            <br />
            <span>Building beyond it.</span>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Built By Zal. All rights reserved.
          </span>
          <Link href="/contact#your-information">Your information</Link>
          <span>Thoughtfully designed. Personally built.</span>
        </div>
      </div>
    </footer>
  );
}
