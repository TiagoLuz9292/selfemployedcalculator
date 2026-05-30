import type { Metadata } from "next";
import { calculators } from "@/data/calculators";
import { categories } from "@/data/categories";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { CalculatorSearch } from "@/components/calculators/CalculatorSearch";

export const metadata: Metadata = buildPageMetadata({
  title: "Free Freelance Calculators",
  description:
    "20 free freelance calculators for hourly rates, taxes, invoices, project quotes, profit margins, and more. All run in your browser — no signup required.",
  path: "/calculators",
  keywords: [
    "freelance calculators",
    "freelance hourly rate calculator",
    "self employment tax calculator",
    "invoice calculator",
    "project quote calculator",
  ],
});

const clientCalcs = calculators.map(({ slug, name, shortName, description, category, keywords }) => ({
  slug,
  name,
  shortName,
  description,
  category,
  keywords,
}));

const clientCats = categories.map(({ slug, name, description }) => ({
  slug,
  name,
  description,
}));

export default function CalculatorsPage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight mb-3">
          Free Freelance Calculators
        </h1>
        <p className="text-muted-foreground max-w-xl leading-relaxed">
          {calculators.length} free tools for freelancers and independent contractors — rate
          setting, tax estimates, invoices, project quotes, profit margins, and financial planning.
        </p>
      </div>

      <CalculatorSearch calculators={clientCalcs} categories={clientCats} />
    </div>
  );
}
