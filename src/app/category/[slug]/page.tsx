import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { categories, getCategoryBySlug } from "@/data/categories";
import { calculators } from "@/data/calculators";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { PartnerBlock } from "@/components/monetization/AffiliateBlock";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};
  return buildPageMetadata({
    title: `${category.name} Calculators`,
    description: category.description,
    path: `/category/${slug}`,
  });
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const tools = calculators.filter((c) => c.category === slug);

  return (
    <div className="container mx-auto max-w-4xl px-4 py-10">
      <div className="mb-6">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Calculators", href: "/calculators" },
            { label: category.name, href: `/category/${slug}` },
          ]}
        />
      </div>

      <div className="mb-10">
        <div className="text-3xl mb-3">{category.icon}</div>
        <h1 className="text-3xl font-bold tracking-tight mb-3">{category.name} Calculators</h1>
        <p className="text-muted-foreground leading-relaxed max-w-xl">{category.description}</p>
        {category.intro && (
          <p className="text-sm text-muted-foreground mt-2 italic">{category.intro}</p>
        )}
      </div>

      {tools.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tools.map((calc) => (
            <Link
              key={calc.slug}
              href={`/calculators/${calc.slug}`}
              className="group rounded-xl border border-border bg-card p-5 hover:border-primary/40 hover:bg-secondary/20 transition-all flex items-start justify-between gap-3"
            >
              <div className="flex-1 min-w-0">
                <h2 className="font-semibold text-sm mb-1.5 group-hover:text-primary transition-colors">
                  {calc.name}
                </h2>
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">{calc.description}</p>
              </div>
              <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all mt-0.5" />
            </Link>
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-border p-10 text-center text-muted-foreground">
          <p className="text-sm">Tools for this category are coming soon.</p>
          <Link href="/calculators" className="inline-block mt-4 text-xs text-primary hover:underline">
            Browse all calculators →
          </Link>
        </div>
      )}

      <PartnerBlock className="mt-12" />
    </div>
  );
}
