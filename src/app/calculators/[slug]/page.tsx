import { notFound } from "next/navigation";
import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { calculators, getCalculatorBySlug, getRelatedCalculators } from "@/data/calculators";
import { getComparisonBySlug } from "@/data/comparisons";
import { buildCalculatorMetadata } from "@/lib/seo/metadata";
import { buildCalculatorSchema, buildHowToSchema } from "@/lib/seo/jsonLd";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { CalculatorShell } from "@/components/calculators/CalculatorShell";
import { FaqSection } from "@/components/content/FaqSection";
import { EducationBlock } from "@/components/content/EducationBlock";
import { RelatedTools } from "@/components/content/RelatedTools";
import { RelatedPosts } from "@/components/content/RelatedPosts";
import { KeyTermsBlock } from "@/components/content/KeyTermsBlock";
import { AdSlot } from "@/components/monetization/AdSlot";
import { PartnerBlock } from "@/components/monetization/AffiliateBlock";
import { CATEGORY_PARTNERS } from "@/data/affiliates";
import { getRelatedPosts } from "@/lib/content/relatedPosts";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return calculators.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const calc = getCalculatorBySlug(slug);
  if (!calc) return {};
  return buildCalculatorMetadata(calc);
}

export default async function CalculatorPage({ params }: PageProps) {
  const { slug } = await params;
  const calc = getCalculatorBySlug(slug);
  if (!calc) notFound();

  const related = getRelatedCalculators(slug);
  const relatedPosts = getRelatedPosts(calc.category, undefined, 3);
  const relatedComparisons = (calc.relatedComparisonSlugs ?? [])
    .map((s) => getComparisonBySlug(s))
    .filter(Boolean);

  const HOWTO_SLUGS = new Set([
    "freelance-hourly-rate-calculator",
    "self-employment-tax-calculator",
    "1099-tax-calculator",
    "quarterly-tax-calculator",
    "freelance-take-home-pay-calculator",
  ]);

  const partners = CATEGORY_PARTNERS[calc.category];

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <JsonLd schema={buildCalculatorSchema(calc)} />
      {HOWTO_SLUGS.has(slug) && <JsonLd schema={buildHowToSchema(calc)} />}

      <div className="mb-6">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Calculators", href: "/calculators" },
            { label: calc.shortName, href: `/calculators/${calc.slug}` },
          ]}
        />
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-3">{calc.name}</h1>
        <p className="text-muted-foreground leading-relaxed max-w-2xl">{calc.description}</p>
      </div>

      <AdSlot position="top" className="mb-6" />

      <Suspense fallback={<div className="h-96 rounded-xl border border-border animate-pulse bg-card" />}>
        <CalculatorShell meta={calc} />
      </Suspense>

      <PartnerBlock
        featuredKeys={partners?.featured}
        secondaryKeys={partners?.secondary}
        className="mt-8"
      />

      <EducationBlock
        title={calc.educationContent.title}
        body={calc.educationContent.body}
      />

      <KeyTermsBlock slug={slug} category={calc.category} />

      <AdSlot position="between-content" className="my-8" />

      <FaqSection faqs={calc.faqs} />

      <RelatedTools tools={related} />

      {relatedComparisons.length > 0 && (
        <div className="mt-8">
          <h2 className="text-base font-semibold mb-4">Related Comparisons</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {relatedComparisons.map((comp) =>
              comp ? (
                <Link
                  key={comp.slug}
                  href={`/compare/${comp.slug}`}
                  className="rounded-lg border border-border bg-card p-4 hover:border-primary/40 hover:bg-secondary/20 transition-all text-sm font-medium"
                >
                  {comp.title}
                </Link>
              ) : null
            )}
          </div>
        </div>
      )}

      <RelatedPosts posts={relatedPosts} />
    </div>
  );
}
