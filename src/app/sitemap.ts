import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { calculators } from "@/data/calculators";
import { categories } from "@/data/categories";
import { comparisons } from "@/data/comparisons";
import { glossaryTerms } from "@/data/glossary";
import { getAllPosts } from "@/lib/content/mdx";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const posts = getAllPosts();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteConfig.url, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${siteConfig.url}/calculators`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteConfig.url}/compare`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteConfig.url}/blog`, lastModified: now, changeFrequency: "daily", priority: 0.8 },
    { url: `${siteConfig.url}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${siteConfig.url}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
    { url: `${siteConfig.url}/privacy-policy`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
  ];

  const calculatorRoutes: MetadataRoute.Sitemap = calculators.map((calc) => ({
    url: `${siteConfig.url}/calculators/${calc.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const categoryRoutes: MetadataRoute.Sitemap = categories.map((cat) => ({
    url: `${siteConfig.url}/category/${cat.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const compareRoutes: MetadataRoute.Sitemap = comparisons.map((c) => ({
    url: `${siteConfig.url}/compare/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const glossaryRoutes: MetadataRoute.Sitemap = [
    { url: `${siteConfig.url}/glossary`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    ...glossaryTerms.map((t) => ({
      url: `${siteConfig.url}/glossary/${t.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];

  return [...staticRoutes, ...calculatorRoutes, ...categoryRoutes, ...blogRoutes, ...compareRoutes, ...glossaryRoutes];
}
