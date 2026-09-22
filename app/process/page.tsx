import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check, Plus } from "lucide-react";
import { PageIntro, Eyebrow, ClosingCTA } from "@/components/site/shared";

export const metadata: Metadata = {
  title: "The Process & Frequently Asked Questions",
  description: "Explore how a Built By Zal website project works, what to prepare, and questions to discuss before your project starts.",
};
const steps = [
  ["Let's talk", "Tell me about your business, who you want to reach, and what your current website is missing. No technical knowledge needed."],
  ["Make a clear plan", "We work through the pages, features, visual direction, budget, and timing. Your proposal sets out the scope and payment stages before work begins."],
  ["Design, build, review", "I build around the agreed direction and share the work for your feedback. We keep changes focused on the plan and discuss any extra requests before adding them."],
  ["Get ready to launch", "We review the content, mobile layout, links, and agreed features. Then we arrange launch, account access, and any ongoing support included in your proposal."],
];
const questions = [
  ["How much will my website cost?", "It depends on the pages, content, and features you need. A straightforward business website and an online store involve different work. Tell me your budget and priorities so I can put together a suitable proposal with the costs and payment stages."],
  ["How long does a website take?", "The schedule depends on the project size and when content and feedback are ready. We discuss a realistic timeline before starting. If you have a launch date in mind, mention it in your enquiry."],
  ["What if I don't know which style I want?", "That's fine. Browse the Styles page and save a few examples you like. You can also share websites from other businesses and tell me what you like about them. The examples are starting points for your own direction."],
  ["Can you improve my existing website?", "Yes. Share your current website and the parts that aren't working for you. We can discuss a redesign or a more focused update, depending on the platform and the changes you need."],
  ["Do I need a domain or hosting already?", "No. We can discuss the domain name and hosting setup as part of the project. Domain registration, hosting, and paid services may have separate recurring charges; these should be set out in your proposal."],
  ["Who owns the website and accounts?", "Ownership, account access, and the handover should be agreed in writing before work starts. Your proposal should explain what files and access you receive, when they transfer, and any third-party licences that apply."],
  ["Can I ask for changes during the build?", "Yes. The proposal sets out the review stages and included revisions. If you want extra pages or features beyond the agreed scope, we'll discuss the cost and effect on the timeline before proceeding."],
  ["Can I sell products or take bookings?", "Yes, depending on the setup your business needs. Tell me about your products or booking process so we can plan the right features. Payment providers and booking services can have their own fees and account requirements."],
  ["What happens if I need updates after launch?", "We can discuss ongoing maintenance or individual updates. The proposal should clearly separate the initial build from any ongoing service, including what's covered and how extra work is charged."],
  ["Do I need everything ready before contacting you?", "No. Start with your business name, what you do, and what you'd like the website to achieve. The checklist on this page can help you prepare as the project takes shape."],
];
export default function Process() {
  return <main id="main-content" className="process-page">
    <PageIntro label="Process & FAQ" title="A clear plan." accent="From first chat to launch." description="You focus on your business. I'll walk you through the website, one step at a time." />
    <nav className="container process-jumps" aria-label="On this page">
      <a href="#how-it-works">How it works <span>↗</span></a>
      <a href="#what-to-prepare">What to prepare <span>↗</span></a>
      <a href="#questions">Common questions <span>↗</span></a>
    </nav>
    <section className="container section" id="how-it-works" aria-labelledby="process-heading">
      <Eyebrow>Simple from the start</Eyebrow><h2 id="process-heading">Here's how we get there.</h2>
      <ol className="process-steps">{steps.map(([title, text], i) => <li key={title}><span className="process-number">0{i + 1}</span><h3>{title}</h3><p>{text}</p></li>)}</ol>
    </section>
    <section className="container preparation-panel" id="what-to-prepare" aria-labelledby="prepare-heading">
      <div><Eyebrow>A little preparation helps</Eyebrow><h2 id="prepare-heading">Bring your ideas.<br />We'll work out the details.</h2><p>You don't need everything on day one. Gather what you have and we can talk through the gaps.</p><Link href="/styles" className="text-link">Explore website styles <ArrowUpRight /></Link></div>
      <ul>{["Your business name, services, and contact details", "Your logo, colours, and any brand guidelines", "Photos and written content you can use", "A few websites or styles you like", "The main action you want visitors to take", "Your preferred launch date and budget"].map(text => <li key={text}><Check aria-hidden="true" /><span>{text}</span></li>)}</ul>
    </section>
    <section className="container section faq-layout" id="questions" aria-labelledby="faq-heading">
      <div><Eyebrow>Before we begin</Eyebrow><h2 id="faq-heading">Good questions.<br />Clear answers.</h2><p>Something else on your mind? Tell me about it when you get in touch.</p><Link href="/contact" className="text-link">Ask a question <ArrowUpRight /></Link></div>
      <div className="faq-list">{questions.map(([question,answer]) => <details key={question}><summary>{question}<Plus aria-hidden="true" /></summary><p>{answer}</p></details>)}</div>
    </section>
    <ClosingCTA />
  </main>;
}
