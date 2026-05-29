"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function GlobalError({ error }: { error: Error }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container mx-auto max-w-3xl px-4 py-20 text-center">
      <h2 className="text-xl font-bold mb-3">Something went wrong</h2>
      <p className="text-muted-foreground mb-6">An unexpected error occurred. Please refresh the page.</p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/50 px-4 py-2.5 text-sm font-medium hover:bg-secondary transition-colors"
      >
        Go to Home
      </Link>
    </div>
  );
}
