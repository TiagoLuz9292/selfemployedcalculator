import type { Metadata } from "next";
import { getAllPosts } from "@/lib/content/mdx";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { BlogFilter } from "@/components/blog/BlogFilter";

export const metadata: Metadata = buildPageMetadata({
  title: "Freelance Blog",
  description:
    "Guides on freelance rate-setting, taxes, invoicing, client management, and financial planning for independent contractors and consultants.",
  path: "/blog",
  keywords: [
    "freelance guides",
    "how to calculate freelance rate",
    "freelance tax guide",
    "freelance invoicing tips",
    "freelance financial planning",
  ],
});

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight mb-3">Freelance Blog</h1>
        <p className="text-muted-foreground max-w-xl leading-relaxed">
          In-depth guides on freelance rates, taxes, invoicing, client management, and financial
          planning for independent contractors.
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="rounded-xl border border-border bg-card p-10 text-center">
          <p className="text-muted-foreground">Articles coming soon.</p>
        </div>
      ) : (
        <BlogFilter posts={posts} />
      )}

    </div>
  );
}
