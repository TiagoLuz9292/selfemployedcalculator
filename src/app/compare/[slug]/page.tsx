import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { comparisons, getComparisonBySlug } from "@/data/comparisons";
import { getCalculatorBySlug } from "@/data/calculators";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { PartnerBlock } from "@/components/monetization/AffiliateBlock";
import { CheckCircle2, MinusCircle } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return comparisons.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const comp = getComparisonBySlug(slug);
  if (!comp) return {};
  return buildPageMetadata({
    title: `${comp.title}: Full Comparison`,
    description: comp.description,
    path: `/compare/${slug}`,
    keywords: comp.keywords,
  });
}

function WinnerBadge({ winner, side }: { winner?: "a" | "b" | "tie"; side: "a" | "b" }) {
  if (!winner || winner === "tie") return <span className="text-muted-foreground/40 text-xs">—</span>;
  if (winner === side) return <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />;
  return <MinusCircle className="h-4 w-4 text-muted-foreground/30 shrink-0" />;
}

export default async function ComparisonPage({ params }: PageProps) {
  const { slug } = await params;
  const comp = getComparisonBySlug(slug);
  if (!comp) notFound();

  const relatedCalcs = (comp.relatedCalcSlugs ?? [])
    .map((s) => getCalculatorBySlug(s))
    .filter(Boolean);

  const relatedComparisons = (comp.relatedComparisonSlugs ?? [])
    .map((s) => getComparisonBySlug(s))
    .filter(Boolean);

  const featuredPartnerKeys = [
    comp.entityA.toLowerCase().replace(/\s+/g, ""),
    comp.entityB.toLowerCase().replace(/\s+/g, ""),
  ];

  return (
    <div className="container mx-auto max-w-3xl px-4 py-10">
      <div className="mb-6">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Compare", href: "/compare" },
            { label: comp.title, href: `/compare/${slug}` },
          ]}
        />
      </div>

      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight mb-3">{comp.title}</h1>
        <p className="text-muted-foreground leading-relaxed">{comp.description}</p>
      </div>

      {/* Comparison table */}
      <div className="mb-2 grid grid-cols-[1fr_auto_auto] gap-4 px-4">
        <span className="text-xs text-muted-foreground uppercase tracking-wider">Feature</span>
        <span className="text-sm font-semibold text-center w-32">{comp.entityA}</span>
        <span className="text-sm font-semibold text-center w-32">{comp.entityB}</span>
      </div>

      <div className="rounded-xl border border-border overflow-hidden mb-10">
        {comp.rows.map((row, i) => (
          <div
            key={i}
            className={`grid grid-cols-[1fr_auto_auto] gap-4 items-center px-4 py-3 border-b border-border/50 last:border-0 ${
              i % 2 === 0 ? "bg-card" : "bg-card/60"
            }`}
          >
            <span className="text-sm text-muted-foreground">{row.feature}</span>
            <div className="flex items-center justify-end gap-1.5 w-32">
              <span className="text-sm text-right">{row.a}</span>
              <WinnerBadge winner={row.winner} side="a" />
            </div>
            <div className="flex items-center justify-end gap-1.5 w-32">
              <span className="text-sm text-right">{row.b}</span>
              <WinnerBadge winner={row.winner} side="b" />
            </div>
          </div>
        ))}
      </div>

      {/* Verdict */}
      <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 mb-10">
        <h2 className="text-base font-bold mb-2 text-primary">Verdict</h2>
        <p className="text-muted-foreground leading-relaxed text-sm">{comp.verdict}</p>
      </div>

      <PartnerBlock featuredKeys={featuredPartnerKeys} className="mb-10" />

      {relatedCalcs.length > 0 && (
        <div className="mb-8">
          <h2 className="text-base font-semibold mb-4">Related Calculators</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {relatedCalcs.map((calc) =>
              calc ? (
                <Link
                  key={calc.slug}
                  href={`/calculators/${calc.slug}`}
                  className="rounded-lg border border-border bg-card p-4 hover:border-primary/40 hover:bg-secondary/20 transition-all text-sm font-medium"
                >
                  {calc.shortName}
                </Link>
              ) : null
            )}
          </div>
        </div>
      )}

      {relatedComparisons.length > 0 && (
        <div>
          <h2 className="text-base font-semibold mb-4">Related Comparisons</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {relatedComparisons.map((c) =>
              c ? (
                <Link
                  key={c.slug}
                  href={`/compare/${c.slug}`}
                  className="rounded-lg border border-border bg-card p-4 hover:border-primary/40 hover:bg-secondary/20 transition-all text-sm font-medium"
                >
                  {c.title}
                </Link>
              ) : null
            )}
          </div>
        </div>
      )}
    </div>
  );
}
