export interface Category {
  slug: string;
  name: string;
  description: string;
  icon: string;
  intro?: string;
}

export const categories: Category[] = [
  {
    slug: "rate-pricing",
    name: "Rate & Pricing",
    description: "Tools to calculate what to charge clients — hourly rates, day rates, project quotes, retainer pricing, and value-based fees.",
    icon: "💰",
    intro: "Set rates that cover your costs, pay you fairly, and win the right clients.",
  },
  {
    slug: "income-tax",
    name: "Income & Tax",
    description: "Estimate your take-home pay after self-employment tax, VAT, quarterly estimated taxes, and income deductions.",
    icon: "🧾",
    intro: "Understand what you actually keep after the taxman takes his cut.",
  },
  {
    slug: "business-health",
    name: "Business Health",
    description: "Track profit margins, billable hours targets, utilization rates, and break-even thresholds for your freelance business.",
    icon: "📊",
    intro: "Know your numbers so you can grow a sustainable solo business.",
  },
  {
    slug: "client-projects",
    name: "Client & Projects",
    description: "Calculate project profitability, late payment interest, and invoice totals for every client engagement.",
    icon: "📋",
    intro: "Make sure every client and project is worth the time you put in.",
  },
  {
    slug: "financial-planning",
    name: "Financial Planning",
    description: "Plan your emergency fund, retirement contributions, and savings strategy as an irregular-income earner.",
    icon: "🏦",
    intro: "Build financial security even when your income varies month to month.",
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export interface GlossaryTerm {
  slug: string;
  term: string;
  shortDef: string;
  body: string;
  relatedSlugs?: string[];
  keywords?: string[];
}

export const glossaryTerms: GlossaryTerm[] = [];
