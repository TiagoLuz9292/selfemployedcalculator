import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BarChart2, Shield, Calculator, TrendingUp } from "lucide-react";
import { calculators } from "@/data/calculators";
import { getAllPosts } from "@/lib/content/mdx";

export const metadata: Metadata = {
  title: "About FreelanceCalc",
  description: "FreelanceCalc provides 20 free calculators for freelancers and independent contractors — hourly rates, taxes, invoices, and financial planning tools.",
  robots: { index: true, follow: true },
};

const pillars = [
  {
    icon: Calculator,
    title: "Accurate Calculations",
    body: "Every formula is based on published IRS rules, HMRC guidance, and standard accounting practices. We cite sources and update tools when tax rates change.",
  },
  {
    icon: Shield,
    title: "No Data Collected",
    body: "Your income, tax rates, and financial data never leave your device. All calculations run entirely in your browser. We store nothing.",
  },
  {
    icon: TrendingUp,
    title: "Built for Freelancers",
    body: "Every tool is designed around real freelance decisions — setting a day rate, estimating quarterly taxes, calculating whether a client is profitable.",
  },
  {
    icon: BarChart2,
    title: "Always Free",
    body: "Every tool is free with no account required. We are funded through advertising and affiliate partnerships with invoicing and payment tools.",
  },
];

export default function AboutPage() {
  const totalCalcs = calculators.length;
  const totalPosts = getAllPosts().length;

  return (
    <div className="container mx-auto max-w-3xl px-4 py-12">

      <div className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight mb-4">About FreelanceCalc</h1>
        <p className="text-muted-foreground leading-relaxed text-base">
          FreelanceCalc is a free toolkit for freelancers, independent contractors, and consultants.
          It provides 20 calculators covering every financial decision in the freelance lifecycle —
          from setting your first rate to planning for retirement on irregular income.
        </p>
      </div>

      <section className="mb-12 space-y-4">
        <h2 className="text-xl font-bold">Why We Built This</h2>
        <p className="text-muted-foreground leading-relaxed">
          Most freelancers undercharge — not because they lack skill, but because calculating a fair
          rate is surprisingly complicated. You have to account for taxes (which are higher as a
          freelancer), paid vacation you're effectively giving up, overhead costs, and the profit
          margin that keeps your business healthy. Without the right tools, most people guess.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          FreelanceCalc makes these calculations instant and shareable. Every tool runs in your
          browser with no data sent anywhere. You can pre-fill inputs and share the URL with a
          client, accountant, or fellow freelancer. It's the toolkit we wished existed when we
          started freelancing.
        </p>
      </section>

      <section className="mb-12 grid grid-cols-2 sm:grid-cols-3 gap-4">
        {[
          { value: `${totalCalcs}+`, label: "Free tools" },
          { value: `${totalPosts}+`, label: "Guides & articles" },
          { value: "0", label: "Data collected" },
        ].map((stat) => (
          <div key={stat.label} className="rounded-xl border border-border bg-card p-5 text-center">
            <p className="text-3xl font-bold text-primary mb-1">{stat.value}</p>
            <p className="text-xs text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </section>

      <section className="mb-12 space-y-4">
        <h2 className="text-xl font-bold">What We Stand For</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {pillars.map((p) => (
            <div key={p.title} className="rounded-xl border border-border bg-card p-5 space-y-2">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-secondary">
                  <p.icon className="h-4 w-4 text-primary" />
                </div>
                <h3 className="font-semibold text-sm">{p.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12 space-y-3">
        <h2 className="text-xl font-bold">Affiliate Disclosure</h2>
        <p className="text-muted-foreground leading-relaxed">
          This site is free to use and always will be. To keep it running, some pages contain affiliate
          links. If you sign up through one of these links, we may receive a commission — at no cost to you.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Our tools, articles, and comparisons are written independently. Affiliate relationships do not
          influence what we build or how we present information.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          The site also displays advertisements served by Google AdSense. See our{" "}
          <Link href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link> for details.
        </p>
      </section>

      <section className="mb-12 rounded-xl border border-border bg-card/50 p-5 space-y-2">
        <h2 className="text-base font-semibold">Disclaimer</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          All calculators, articles, and comparisons are provided for educational and informational
          purposes only. Tax rules vary by country, state, and individual circumstances. Nothing on
          this site constitutes financial, tax, or legal advice. Always consult a qualified accountant
          or tax professional before making financial decisions.
        </p>
      </section>

      <div className="flex flex-wrap gap-3">
        <Link
          href="/calculators"
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Browse all tools
          <ArrowRight className="h-4 w-4" />
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/50 px-4 py-2.5 text-sm font-medium hover:border-primary/40 hover:bg-secondary transition-colors"
        >
          Get in touch
        </Link>
      </div>
    </div>
  );
}
