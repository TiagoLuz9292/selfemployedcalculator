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
    intro: "Undercharging is the most common financial mistake freelancers make. These calculators work backwards from your actual costs — taxes, expenses, vacation, and desired income — to give you a rate that covers everything. Whether you charge hourly, per day, per project, or on retainer, use these tools before quoting any client.",
  },
  {
    slug: "income-tax",
    name: "Income & Tax",
    description: "Estimate your take-home pay after self-employment tax, VAT, quarterly estimated taxes, and income deductions.",
    icon: "🧾",
    intro: "Self-employed people pay more tax than employees — and they pay it differently, in quarterly instalments rather than via payroll withholding. These calculators show exactly what you owe, when you owe it, and how much of every invoice to set aside. Use them at the start of each year and after any major income change.",
  },
  {
    slug: "business-health",
    name: "Business Health",
    description: "Track profit margins, billable hours targets, utilization rates, and break-even thresholds for your freelance business.",
    icon: "📊",
    intro: "Revenue is vanity, profit is sanity. Many freelancers earn good rates but still struggle financially because they don't track the numbers that matter — utilization rate, true profit margin, and break-even threshold. These tools give you a clear picture of whether your business is actually healthy, and what needs to change if it isn't.",
  },
  {
    slug: "client-projects",
    name: "Client & Projects",
    description: "Calculate project profitability, late payment interest, and invoice totals for every client engagement.",
    icon: "📋",
    intro: "Not all clients are profitable. A client who pays slowly, requests constant revisions, or takes up disproportionate admin time can cost more than they're worth. These calculators help you quantify client and project value so you can make clear decisions about who to work with, what to charge, and when to walk away.",
  },
  {
    slug: "financial-planning",
    name: "Financial Planning",
    description: "Plan your emergency fund, retirement contributions, and savings strategy as an irregular-income earner.",
    icon: "🏦",
    intro: "Irregular income makes personal finance harder — you can't just set a fixed monthly savings amount when your income varies by 3× from month to month. These calculators are built for the realities of freelance cash flow: how much emergency fund you actually need, how to save for retirement as a self-employed person, and how to build financial stability without a predictable paycheck.",
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
