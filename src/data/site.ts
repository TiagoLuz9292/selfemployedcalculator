export const siteConfig = {
  name: "FreelanceCalc",
  tagline: "Free Freelance Calculators for Independent Professionals",
  description:
    "Free freelance calculators for hourly rates, taxes, invoices, project quotes, and profit margins. 20 tools built for independent contractors and consultants.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://freelancecalc.io",
  ogImage: "/og-default.png",
  twitterHandle: "@freelancecalc",
  keywords: [
    "freelance calculator",
    "freelance hourly rate calculator",
    "self employment tax calculator",
    "freelance take home pay calculator",
    "project quote calculator",
    "invoice calculator freelancer",
    "freelance profit margin calculator",
    "quarterly tax calculator freelancer",
    "day rate calculator",
  ],
} as const;
