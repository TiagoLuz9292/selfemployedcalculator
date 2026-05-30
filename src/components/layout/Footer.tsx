import Link from "next/link";
import { siteConfig } from "@/data/site";
import { categories } from "@/data/categories";
import { calculators } from "@/data/calculators";
import { comparisons } from "@/data/comparisons";
import { affiliateLinks } from "@/data/affiliates";
import { BarChart2, ExternalLink } from "lucide-react";

// TODO: Add display names for affiliate keys that appear in the footer partner row.
// Keys must match src/data/affiliates.ts.
const PARTNER_NAMES: Record<string, string> = {
  freshbooks: "FreshBooks",
  quickbooks: "QuickBooks",
  bonsai:     "Bonsai",
  wise:       "Wise",
  deel:       "Deel",
};
const partnerKeys = Object.keys(affiliateLinks);

export function Footer() {
  const featuredCalcs = calculators.slice(0, 4);
  const featuredComparisons = comparisons.slice(0, 4);

  return (
    <footer className="border-t border-border/50 bg-card mt-16">
      <div className="container mx-auto max-w-6xl px-4 py-12">

        {partnerKeys.length > 0 && (
          <div className="mb-10 pb-10 border-b border-border/50">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Partners</p>
            <div className="flex flex-wrap gap-3">
              {partnerKeys.map((key) => (
                <a
                  key={key}
                  href={affiliateLinks[key]}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-amber-400 transition-colors"
                >
                  {PARTNER_NAMES[key] ?? key}
                  <ExternalLink className="h-3 w-3" />
                </a>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          <div className="space-y-3">
            <Link href="/" className="flex items-center gap-2 font-bold">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary">
                <BarChart2 className="h-3.5 w-3.5 text-primary-foreground" />
              </div>
              {siteConfig.name}
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {siteConfig.tagline}. Free professional tools.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Top Tools</h3>
            <ul className="space-y-2">
              {featuredCalcs.map((calc) => (
                <li key={calc.slug}>
                  <Link href={`/calculators/${calc.slug}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {calc.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Categories</h3>
            <ul className="space-y-2">
              {categories.slice(0, 5).map((cat) => (
                <li key={cat.slug}>
                  <Link href={`/category/${cat.slug}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Compare</h3>
            <ul className="space-y-2">
              {featuredComparisons.map((c) => (
                <li key={c.slug}>
                  <Link href={`/compare/${c.slug}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {c.entityA} vs {c.entityB}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/compare" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  All comparisons →
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Resources</h3>
            <ul className="space-y-2">
              {["/blog", "/calculators", "/glossary", "/about", "/contact"].map((href) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-muted-foreground hover:text-foreground transition-colors capitalize">
                    {href.slice(1).replace("-", " ")}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border/50 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <span className="text-xs text-muted-foreground">·</span>
            <p className="text-xs text-muted-foreground">
              FreelanceCalc provides educational tools only. Nothing on this site constitutes financial, tax, or legal advice. Consult a qualified professional for your specific situation.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
