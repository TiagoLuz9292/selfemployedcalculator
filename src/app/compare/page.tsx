import type { Metadata } from "next";
import Link from "next/link";
import { comparisons } from "@/data/comparisons";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { PartnerBlock } from "@/components/monetization/AffiliateBlock";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = buildPageMetadata({
  title: "Freelance Tool Comparisons",
  description:
    "Side-by-side comparisons of invoicing software, payment platforms, and pricing strategies for freelancers. Objective data to help you choose the right tools.",
  path: "/compare",
  keywords: [
    "freshbooks vs quickbooks freelancer",
    "bonsai vs freshbooks",
    "wise vs paypal freelancers",
    "hourly vs project pricing",
    "freelance vs full time salary",
    "deel vs remote contractors",
  ],
});

const CATEGORY_LABELS: Record<string, string> = {
  software: "Invoicing & Accounting Software",
  payments: "Payment Platforms",
  strategy: "Pricing & Income Strategy",
  platforms: "Contractor Platforms",
};

export default function ComparePage() {
  const grouped = comparisons.reduce<Record<string, typeof comparisons>>((acc, c) => {
    const key = (c as { category?: string }).category ?? "strategy";
    if (!acc[key]) acc[key] = [];
    acc[key].push(c);
    return acc;
  }, {});

  return (
    <div className="container mx-auto max-w-3xl px-4 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight mb-3">Freelance Tool Comparisons</h1>
        <p className="text-muted-foreground leading-relaxed max-w-xl">
          Objective side-by-side comparisons for the decisions that matter most — invoicing software,
          payment processors, pricing strategies, and contractor platforms.
        </p>
      </div>

      {Object.keys(grouped).length > 0 ? (
        <div className="space-y-10">
          {Object.entries(grouped).map(([cat, items]) => (
            <section key={cat}>
              <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                {CATEGORY_LABELS[cat] ?? cat}
              </h2>
              <div className="space-y-2">
                {items.map((comp) => (
                  <Link
                    key={comp.slug}
                    href={`/compare/${comp.slug}`}
                    className="group flex items-start justify-between gap-4 rounded-xl border border-border bg-card p-5 hover:border-primary/40 hover:bg-secondary/20 transition-all"
                  >
                    <div>
                      <p className="font-semibold mb-1">{comp.title}</p>
                      <p className="text-sm text-muted-foreground line-clamp-1">{comp.description}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all mt-1" />
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      ) : (
        <div className="space-y-2">
          {comparisons.map((comp) => (
            <Link
              key={comp.slug}
              href={`/compare/${comp.slug}`}
              className="group flex items-start justify-between gap-4 rounded-xl border border-border bg-card p-5 hover:border-primary/40 hover:bg-secondary/20 transition-all"
            >
              <div>
                <p className="font-semibold mb-1">{comp.title}</p>
                <p className="text-sm text-muted-foreground line-clamp-1">{comp.description}</p>
              </div>
              <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all mt-1" />
            </Link>
          ))}
        </div>
      )}

      <PartnerBlock className="mt-12" />
    </div>
  );
}
