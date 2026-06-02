import { NextResponse } from "next/server";
import { siteConfig } from "@/data/site";
import { calculators } from "@/data/calculators";
import { comparisons } from "@/data/comparisons";
import { glossaryTerms } from "@/data/glossary";
import { getAllPosts } from "@/lib/content/mdx";

const INDEXNOW_KEY = "36081CE1F0334DB7BDA0F8BDB33FFBF0";

export async function GET(request: Request) {
  const secret = process.env.CRON_SECRET;
  if (secret) {
    const auth = request.headers.get("authorization");
    if (auth !== `Bearer ${secret}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  }

  if (!INDEXNOW_KEY) {
    return NextResponse.json({ error: "INDEXNOW_KEY env var not set" }, { status: 500 });
  }

  const base = siteConfig.url;
  const posts = getAllPosts();

  const urls = [
    base,
    `${base}/calculators`,
    `${base}/compare`,
    `${base}/blog`,
    `${base}/glossary`,
    `${base}/about`,
    `${base}/contact`,
    ...calculators.map((c) => `${base}/calculators/${c.slug}`),
    ...comparisons.map((c) => `${base}/compare/${c.slug}`),
    ...posts.map((p) => `${base}/blog/${p.slug}`),
    ...glossaryTerms.map((t) => `${base}/glossary/${t.slug}`),
  ];

  const payload = {
    host: new URL(base).hostname,
    key: INDEXNOW_KEY,
    keyLocation: `${base}/${INDEXNOW_KEY}.txt`,
    urlList: urls,
  };

  const [bing, indexnow] = await Promise.all([
    fetch("https://www.bing.com/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(payload),
    }),
    fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(payload),
    }),
  ]);

  return NextResponse.json({
    submitted: urls.length,
    bing: bing.status,
    indexnow: indexnow.status,
  });
}
