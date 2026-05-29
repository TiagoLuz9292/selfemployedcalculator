import Link from "next/link";
import { calculators } from "@/data/calculators";
import { categories } from "@/data/categories";
import { comparisons } from "@/data/comparisons";
import { getAllPosts } from "@/lib/content/mdx";
import { ArrowRight, Calculator, Shield, TrendingUp, Zap } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PartnerBlock } from "@/components/monetization/AffiliateBlock";

const FEATURED_SLUGS = [
  "freelance-hourly-rate-calculator",
  "freelance-take-home-pay-calculator",
  "self-employment-tax-calculator",
  "project-quote-calculator",
  "invoice-total-calculator",
  "quarterly-tax-calculator",
];

const features = [
  {
    icon: Zap,
    title: "Instant Results",
    description: "All calculations run in your browser. Zero latency, zero server calls.",
  },
  {
    icon: Shield,
    title: "No Data Stored",
    description: "Your income figures never leave your device. We log nothing.",
  },
  {
    icon: TrendingUp,
    title: "URL Shareable",
    description: "Share any pre-filled calculator with a client or accountant via URL — inputs included.",
  },
  {
    icon: Calculator,
    title: "Built for Freelancers",
    description: "Every tool is designed around the real decisions independent professionals face: rates, taxes, invoices, and planning.",
  },
];

export default function HomePage() {
  const featuredCalcs = FEATURED_SLUGS
    .map((slug) => calculators.find((c) => c.slug === slug))
    .filter(Boolean) as typeof calculators;
  const recentPosts = getAllPosts().slice(0, 3);
  const totalCalcs = calculators.length;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/50">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto max-w-5xl px-4 py-20 md:py-28">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary font-medium mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {totalCalcs} Free Tools
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-4">
              Freelance Calculators — Set Rates, Track Tax, Invoice Clients
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
              Free tools for independent contractors: hourly rate, self-employment tax, take-home
              pay, project quotes, invoices, and retirement planning. Free, instant, shareable by URL.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/calculators" className={cn(buttonVariants({ size: "lg" }))}>
                View All Tools
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/calculators/freelance-hourly-rate-calculator"
                className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
              >
                Hourly Rate Calculator
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Calculators */}
      {featuredCalcs.length > 0 && (
        <section className="container mx-auto max-w-5xl px-4 py-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Popular Tools</h2>
            <Link
              href="/calculators"
              className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
            >
              All {totalCalcs} tools <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredCalcs.map((calc) => (
              <Link
                key={calc.slug}
                href={`/calculators/${calc.slug}`}
                className="group rounded-xl border border-border bg-card p-5 hover:border-primary/40 hover:bg-secondary/20 transition-all"
              >
                <p className="font-semibold leading-tight mb-2">{calc.shortName}</p>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                  {calc.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground capitalize">
                    {categories.find((c) => c.slug === calc.category)?.name}
                  </span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Partners */}
      <section className="container mx-auto max-w-5xl px-4 pb-16">
        <PartnerBlock />
      </section>

      {/* Features */}
      <section className="border-t border-border/50 bg-card/30">
        <div className="container mx-auto max-w-5xl px-4 py-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Built for Freelancers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div key={f.title} className="space-y-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card">
                  <f.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-sm">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Browse by Category */}
      {categories.length > 0 && (
        <section className="container mx-auto max-w-5xl px-4 py-16">
          <h2 className="text-2xl font-bold mb-8">Browse by Category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {categories.map((cat) => {
              const toolCount = calculators.filter((c) => c.category === cat.slug).length;
              if (toolCount === 0) return null;
              return (
                <Link
                  key={cat.slug}
                  href={`/category/${cat.slug}`}
                  className="group rounded-lg border border-border bg-card p-4 hover:border-primary/40 hover:bg-secondary/20 transition-all"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{cat.icon}</span>
                      <h3 className="font-semibold text-sm">{cat.name}</h3>
                    </div>
                    <span className="text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded-full">
                      {toolCount} tools
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{cat.description}</p>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {/* Comparisons */}
      {comparisons.length > 0 && (
        <section className="border-t border-border/50 bg-card/30">
          <div className="container mx-auto max-w-5xl px-4 py-16">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold">Tool Comparisons</h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Invoicing software, payment platforms, and pricing strategies — compared objectively.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {comparisons.map((comp) => (
                <Link
                  key={comp.slug}
                  href={`/compare/${comp.slug}`}
                  className="group rounded-lg border border-border bg-card p-4 hover:border-primary/40 hover:bg-secondary/20 transition-all flex items-center justify-between gap-2"
                >
                  <span className="text-sm font-medium">{comp.title}</span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Recent from blog */}
      {recentPosts.length > 0 && (
        <section className="container mx-auto max-w-5xl px-4 py-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">From the Blog</h2>
            <Link
              href="/blog"
              className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
            >
              All articles <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {recentPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-xl border border-border bg-card p-5 hover:border-primary/40 hover:bg-secondary/20 transition-all flex flex-col gap-2"
              >
                <span className="text-xs text-primary/80 bg-primary/10 px-2 py-0.5 rounded-full self-start capitalize">
                  {post.category.replace("-", " ")}
                </span>
                <p className="font-semibold text-sm leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </p>
                <p className="text-xs text-muted-foreground">{post.readingTime}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* SEO footer text */}
      <section className="border-t border-border/50">
        <div className="container mx-auto max-w-4xl px-4 py-16">
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Free Freelance Calculators — Built for Independent Professionals</h2>
            <p className="text-muted-foreground leading-relaxed text-sm">
              FreelanceCalc provides 20 free calculators designed specifically for freelancers, independent
              contractors, and consultants. Whether you're setting your first hourly rate, estimating
              quarterly taxes, or calculating the true profitability of a client, every tool runs instantly
              in your browser with no signup required.
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm">
              All calculations happen on your device — your income figures, tax rates, and financial data
              never leave your browser. Every calculator is shareable by URL, so you can pre-fill inputs and
              send the link to a client or accountant. The site is funded by affiliate partnerships with
              tools like FreshBooks, Bonsai, and Wise, which are featured in our comparison pages.
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Our tools cover the full freelance financial workflow: rate calculators help you set hourly,
              day, and project rates; tax calculators estimate self-employment tax, quarterly payments, and
              take-home pay; business health tools track profit margins, utilization rates, and break-even
              points; and financial planning tools guide you through emergency funds, retirement
              contributions, and savings strategies on irregular income.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
