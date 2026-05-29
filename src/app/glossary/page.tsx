import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { glossaryTerms } from "@/data/glossary";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = buildPageMetadata({
  title: "Freelance Glossary",
  description:
    "Plain-English definitions of freelance and self-employment terms: hourly rate, utilization rate, self-employment tax, VAT, retainer, IR35, and more.",
  path: "/glossary",
  keywords: [
    "freelance glossary",
    "self employment terms",
    "what is utilization rate",
    "what is IR35",
    "freelance tax terms",
  ],
});

export default function GlossaryPage() {
  const sorted = [...glossaryTerms].sort((a, b) => a.term.localeCompare(b.term));

  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <div className="mb-6">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Glossary", href: "/glossary" },
          ]}
        />
      </div>

      <div className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
            <BookOpen className="h-5 w-5 text-primary" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight">Freelance Glossary</h1>
        </div>
        <p className="text-muted-foreground leading-relaxed max-w-2xl">
          Plain-English explanations of the terms every freelancer and independent contractor
          needs to know — from hourly rate to IR35, utilization rate to VAT.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {sorted.map((term) => (
          <Link
            key={term.slug}
            href={`/glossary/${term.slug}`}
            className="group rounded-xl border border-border bg-card p-5 hover:border-primary/40 hover:bg-secondary/20 transition-all flex flex-col gap-2"
          >
            <div className="flex items-start justify-between gap-2">
              <h2 className="font-semibold leading-tight group-hover:text-primary transition-colors">
                {term.term}
              </h2>
              <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all mt-0.5" />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 flex-1">
              {term.shortDef}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
