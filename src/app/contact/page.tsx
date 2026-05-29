import type { Metadata } from "next";
import Link from "next/link";
import { Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch — feedback, suggestions, partnerships, or general questions.",
  robots: { index: true, follow: true },
};

const CONTACT_EMAIL = "tiagoluz92@gmail.com";

const topics = [
  {
    title: "Bug reports or calculation errors",
    body: "Found a result that doesn't look right? Let us know which tool, what inputs you used, and what result you expected.",
  },
  {
    title: "Feature suggestions",
    body: "Missing a tool you'd find useful? We're actively building — suggestions are taken seriously.",
  },
  {
    title: "Content corrections",
    body: "If any data, rules, or details are out of date, please flag it. Accuracy matters.",
  },
  {
    title: "Partnership or advertising enquiries",
    body: "For partnerships, affiliate arrangements, or advertising enquiries beyond Google AdSense.",
  },
  {
    title: "Privacy or data requests",
    body: "For GDPR requests, data enquiries, or anything related to our Privacy Policy.",
  },
];

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-12">

      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight mb-3">Contact</h1>
        <p className="text-muted-foreground leading-relaxed">
          We read every message and respond to the ones we can. The best way to reach us is by email.
        </p>
      </div>

      <div className="rounded-xl border border-primary/30 bg-primary/5 p-6 mb-10 flex items-center gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/15 shrink-0">
          <Mail className="h-5 w-5 text-primary" />
        </div>
        <div>
          <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-1">
            Email us at
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-lg font-semibold text-primary hover:underline"
          >
            {CONTACT_EMAIL}
          </a>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-5">What to write about</h2>
        <div className="space-y-3">
          {topics.map((t) => (
            <div key={t.title} className="rounded-lg border border-border bg-card p-4 space-y-1">
              <h3 className="text-sm font-semibold">{t.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{t.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-xl border border-border bg-card/50 p-5 mb-10 space-y-2">
        <h2 className="text-sm font-semibold">Response times</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          We aim to respond within 2–3 business days. We do not provide personalised professional advice.
        </p>
      </section>

      <p className="text-xs text-muted-foreground leading-relaxed mb-8">
        See our{" "}
        <Link href="/privacy-policy" className="text-primary hover:underline">
          Privacy Policy
        </Link>{" "}
        for information on how we handle any data you send us.
      </p>

      <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
        ← Back to Home
      </Link>
    </div>
  );
}
