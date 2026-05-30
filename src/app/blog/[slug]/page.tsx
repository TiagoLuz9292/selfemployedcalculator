import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import type { ComponentPropsWithoutRef } from "react";
import { getAllPostSlugs, getPost } from "@/lib/content/mdx";
import { getCalculatorBySlug } from "@/data/calculators";
import { getComparisonBySlug } from "@/data/comparisons";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { PartnerBlock } from "@/components/monetization/AffiliateBlock";
import { siteConfig } from "@/data/site";
import { Calendar, Clock, ArrowLeft } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return buildPageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${slug}`,
    keywords: post.keywords,
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const relatedCalcs = (post.relatedCalcSlugs ?? [])
    .map((s) => getCalculatorBySlug(s))
    .filter(Boolean);

  const relatedComparisons = (post.relatedComparisonSlugs ?? [])
    .map((s) => getComparisonBySlug(s))
    .filter(Boolean);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    url: `${siteConfig.url}/blog/${slug}`,
  };

  return (
    <div className="container mx-auto max-w-3xl px-4 py-8">
      <JsonLd schema={articleSchema} />

      <div className="mb-6">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: post.title, href: `/blog/${slug}` },
          ]}
        />
      </div>

      <article>
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-full font-medium capitalize">
              {post.category.replace("-", " ")}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-4">
            {post.title}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            {post.description}
          </p>
          <div className="flex items-center gap-5 text-sm text-muted-foreground pb-6 border-b border-border">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {post.readingTime}
            </span>
          </div>
        </header>

        <div className="prose-article">
          <MDXRemote
            source={post.content}
            options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
            components={{
              a: ({ href, children, ...props }: ComponentPropsWithoutRef<"a">) => {
                const external = href?.startsWith("http");
                if (external) {
                  return (
                    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
                      {children}
                    </a>
                  );
                }
                return <Link href={href ?? "/"}>{children}</Link>;
              },
            }}
          />
        </div>
      </article>

      {(relatedCalcs.length > 0 || relatedComparisons.length > 0) && (
        <div className="mt-12 pt-8 border-t border-border">
          <h2 className="text-base font-semibold mb-6">Related Tools</h2>
          {relatedCalcs.length > 0 && (
            <div className="mb-6">
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Calculators</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {relatedCalcs.map((calc) =>
                  calc ? (
                    <Link
                      key={calc.slug}
                      href={`/calculators/${calc.slug}`}
                      className="rounded-lg border border-border bg-card p-4 hover:border-primary/40 hover:bg-secondary/20 transition-all text-sm font-medium"
                    >
                      {calc.shortName}
                    </Link>
                  ) : null
                )}
              </div>
            </div>
          )}
          {relatedComparisons.length > 0 && (
            <div>
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Comparisons</h3>
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
        </div>
      )}

      <PartnerBlock className="mt-10" />

      <div className="mt-12 pt-8 border-t border-border">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>
      </div>
    </div>
  );
}
