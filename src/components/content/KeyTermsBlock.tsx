import Link from "next/link";
import { BookMarked } from "lucide-react";
import { getTermBySlug } from "@/data/glossary";

// TODO: Map each category slug → 3-4 glossary term slugs to show below that category's calculators.
// These terms must exist in src/data/glossary.ts.
const CATEGORY_TERMS: Record<string, string[]> = {
  "rate-pricing":      ["hourly-rate", "day-rate", "retainer", "value-based-pricing"],
  "income-tax":        ["self-employment-tax", "quarterly-estimated-tax", "vat", "take-home-pay"],
  "business-health":   ["utilization-rate", "billable-hours", "profit-margin", "break-even", "overhead"],
  "client-projects":   ["invoice", "late-payment-interest", "client-profitability", "scope-creep"],
  "financial-planning":["emergency-fund", "net-income", "take-home-pay"],
};

const SLUG_TERMS: Record<string, string[]> = {
  "freelance-hourly-rate-calculator":   ["hourly-rate", "billable-hours", "overhead", "utilization-rate"],
  "day-rate-calculator":                ["day-rate", "hourly-rate", "retainer"],
  "project-quote-calculator":           ["hourly-rate", "scope-creep", "overhead"],
  "retainer-rate-calculator":           ["retainer", "hourly-rate", "client-profitability"],
  "value-based-pricing-calculator":     ["value-based-pricing", "hourly-rate", "profit-margin"],
  "self-employment-tax-calculator":     ["self-employment-tax", "take-home-pay", "quarterly-estimated-tax"],
  "freelance-take-home-pay-calculator": ["take-home-pay", "self-employment-tax", "net-income"],
  "quarterly-tax-calculator":           ["quarterly-estimated-tax", "self-employment-tax", "take-home-pay"],
  "vat-calculator-freelancer":          ["vat", "invoice", "net-income"],
  "profit-margin-calculator":           ["profit-margin", "overhead", "break-even"],
  "billable-hours-calculator":          ["billable-hours", "utilization-rate", "hourly-rate"],
  "utilization-rate-calculator":        ["utilization-rate", "billable-hours", "profit-margin"],
  "break-even-calculator":              ["break-even", "overhead", "profit-margin"],
  "client-profitability-calculator":    ["client-profitability", "hourly-rate", "scope-creep"],
  "late-payment-interest-calculator":   ["late-payment-interest", "invoice", "client-profitability"],
  "invoice-total-calculator":           ["invoice", "vat", "late-payment-interest"],
  "emergency-fund-calculator":          ["emergency-fund", "net-income", "take-home-pay"],
  "savings-rate-calculator":            ["net-income", "emergency-fund", "take-home-pay"],
  "retirement-contribution-calculator": ["self-employment-tax", "net-income", "take-home-pay"],
  "freelance-income-goal-calculator":   ["hourly-rate", "take-home-pay", "net-income"],
};

interface KeyTermsBlockProps {
  slug: string;
  category: string;
}

export function KeyTermsBlock({ slug, category }: KeyTermsBlockProps) {
  const termSlugs = SLUG_TERMS[slug] ?? CATEGORY_TERMS[category] ?? [];
  const terms = termSlugs
    .map((s) => getTermBySlug(s))
    .filter((t): t is NonNullable<typeof t> => t !== undefined);

  if (terms.length === 0) return null;

  return (
    <section className="mt-10">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold flex items-center gap-2">
          <BookMarked className="h-4 w-4 text-primary" />
          Key Terms
        </h2>
        <Link
          href="/glossary"
          className="text-xs text-muted-foreground hover:text-primary transition-colors"
        >
          Full glossary →
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {terms.map((term) => (
          <Link
            key={term.slug}
            href={`/glossary/${term.slug}`}
            className="group rounded-xl border border-border bg-card p-4 hover:border-primary/40 hover:bg-secondary/20 transition-all"
          >
            <p className="font-semibold text-sm group-hover:text-primary transition-colors mb-1">
              {term.term}
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
              {term.shortDef}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
