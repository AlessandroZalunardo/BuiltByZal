import type { Metadata } from "next";
import Header from "@/components/site/header";
import Footer from "@/components/site/footer";
import "./globals.css";
export const metadata: Metadata = {
  title: {
    default: "Built By Zal — Custom Websites for Your Business",
    template: "%s | Built By Zal",
  },
  description:
    "Custom websites for plumbing companies, landscapers, interior designers, clothing brands, and growing businesses. Thoughtfully designed. Personally built.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-CA" className="dark">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
