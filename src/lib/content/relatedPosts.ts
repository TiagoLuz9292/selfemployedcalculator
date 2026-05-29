import { getAllPosts } from "@/lib/content/mdx";

const CATEGORY_POSTS: Record<string, string[]> = {
  "rate-pricing": [
    "how-to-calculate-freelance-hourly-rate",
    "how-to-price-a-freelance-project",
    "value-based-pricing-freelance-guide",
    "how-to-set-a-day-rate-consultant",
    "retainer-agreements-freelancers-guide",
  ],
  "income-tax": [
    "how-to-pay-quarterly-taxes-freelancer",
    "vat-guide-for-freelancers",
    "freelance-vs-full-time-salary-comparison",
  ],
  "business-health": [
    "what-is-a-good-freelance-utilization-rate",
    "how-to-track-freelance-profit-margin",
    "freelance-break-even-guide",
    "best-invoicing-software-freelancers",
  ],
  "client-projects": [
    "how-to-handle-late-payments-freelance",
    "client-profitability-guide",
    "wise-vs-paypal-international-freelancers",
    "deel-vs-remote-international-contractors",
  ],
  "financial-planning": [
    "emergency-fund-calculator-freelancers",
    "how-to-save-for-retirement-freelancer",
    "irregular-income-budgeting-guide",
  ],
};

export function getRelatedPosts(category: string, currentSlug?: string, limit = 3) {
  const allPosts = getAllPosts();
  const targetSlugs = CATEGORY_POSTS[category] ?? [];

  return targetSlugs
    .filter((s) => s !== currentSlug)
    .map((slug) => allPosts.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => p !== undefined)
    .slice(0, limit);
}
