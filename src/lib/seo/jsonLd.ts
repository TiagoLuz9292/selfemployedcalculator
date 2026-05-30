import { siteConfig } from "@/data/site";
import type { CalculatorMeta } from "@/types/calculator";
import type { BreadcrumbItem } from "@/types/seo";

export function buildCalculatorSchema(calc: CalculatorMeta): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: calc.name,
    description: calc.description,
    url: `${siteConfig.url}/calculators/${calc.slug}`,
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  };
}

export function buildFaqSchema(faqs: { question: string; answer: string }[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `${siteConfig.url}${item.href}`,
    })),
  };
}

export function buildHowToSchema(calc: CalculatorMeta): Record<string, unknown> {
  const steps = calc.fields
    .filter((f) => f.type !== "hidden")
    .map((f, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: f.label,
      text: f.helpText
        ? `${f.helpText}`
        : `Enter your ${f.label.toLowerCase()}${f.unit ? ` in ${f.unit}` : ""}.`,
    }));

  steps.push({
    "@type": "HowToStep",
    position: steps.length + 1,
    name: "Read your results",
    text: "Your results appear instantly on the right. All calculations run in your browser — no data is sent to any server.",
  });

  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `How to use the ${calc.name}`,
    description: calc.description,
    tool: [{ "@type": "HowToTool", name: calc.name }],
    step: steps,
  };
}

export function buildWebsiteSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/calculators?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}
