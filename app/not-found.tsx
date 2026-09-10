import Link from "next/link";
import { ArrowLeft } from "lucide-react";
export default function NotFound() {
  return (
    <main id="main-content" className="container not-found">
      <p className="eyebrow">404 · Page not found</p>
      <h1>
        This page took
        <br />a wrong turn.
      </h1>
      <p>Let’s get you back to something worth clicking.</p>
      <Link href="/" className="primary-button">
        <ArrowLeft />
        Back to home
      </Link>
    </main>
  );
}
