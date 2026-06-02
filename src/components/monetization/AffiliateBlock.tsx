"use client";

import Link from "next/link";
import { ExternalLink, FileText, Globe } from "lucide-react";
import { track } from "@/lib/analytics";
import { affiliateLinks } from "@/data/affiliates";

interface PartnerBlockProps {
  featuredKeys?: string[];
  secondaryKeys?: string[];
  className?: string;
}

const PARTNER_META: Record<string, { name: string; cta: string }> = {
  freshbooks:  { name: "FreshBooks",  cta: "Try FreshBooks Free" },
  bonsai:      { name: "Bonsai",      cta: "Try Bonsai Free" },
  quickbooks:  { name: "QuickBooks",  cta: "QuickBooks Self-Employed" },
  turbotax:    { name: "TurboTax",    cta: "File with TurboTax" },
  hrblock:     { name: "H&R Block",   cta: "File with H&R Block" },
  toggl:       { name: "Toggl Track", cta: "Try Toggl Free" },
  "1password": { name: "1Password",   cta: "Try 1Password" },
  wise:        { name: "Wise",        cta: "Open a Wise Account" },
  deel:        { name: "Deel",        cta: "Try Deel Free" },
  remote:      { name: "Remote",      cta: "Try Remote Free" },
};

// Left panel: invoicing, tax, accounting, time tracking
const LEFT_KEYS  = new Set(["freshbooks", "bonsai", "quickbooks", "turbotax", "hrblock", "toggl", "1password"]);
// Right panel: banking, payments, international
const RIGHT_KEYS = new Set(["wise", "deel", "remote"]);

// Home page defaults (no keys passed)
const HOME_FEATURED  = ["freshbooks", "bonsai", "wise", "deel"];
const HOME_SECONDARY = ["quickbooks", "toggl", "turbotax", "remote"];

export function PartnerBlock({ featuredKeys, secondaryKeys, className }: PartnerBlockProps) {
  const featured  = featuredKeys  ?? HOME_FEATURED;
  const secondary = secondaryKeys ?? (featuredKeys ? [] : HOME_SECONDARY);

  const leftFeatured   = featured.filter((k)  => LEFT_KEYS.has(k)  && !!affiliateLinks[k]);
  const rightFeatured  = featured.filter((k)  => RIGHT_KEYS.has(k) && !!affiliateLinks[k]);
  const leftSecondary  = secondary.filter((k) => LEFT_KEYS.has(k)  && !!affiliateLinks[k]);
  const rightSecondary = secondary.filter((k) => RIGHT_KEYS.has(k) && !!affiliateLinks[k]);

  const hasLeft  = leftFeatured.length > 0  || leftSecondary.length > 0;
  const hasRight = rightFeatured.length > 0 || rightSecondary.length > 0;

  if (!hasLeft && !hasRight) return null;

  return (
    <div className={className}>
      <div className="rounded-xl border border-emerald-500/25 bg-card overflow-hidden shadow-[0_0_30px_8px_rgba(52,211,153,0.08),0_0_70px_20px_rgba(52,211,153,0.04)]">
        <div className="flex flex-col md:flex-row">

          {/* Left — Invoicing, Tax & Tools */}
          {hasLeft && (
            <div className={`${hasRight ? "md:w-[60%] border-b md:border-b-0 md:border-r border-border/50" : "w-full"} p-5`}>
              <div className="flex items-center gap-2 mb-1">
                <FileText className="h-4 w-4 text-emerald-400 shrink-0" />
                <p className="text-sm font-bold text-emerald-400">Invoicing, Tax &amp; Tools</p>
              </div>
              <p className="text-xs text-muted-foreground mb-4">
                Bill clients, track time, and file taxes — software built for the self-employed
              </p>

              {leftFeatured.length > 0 && (
                <div className="flex gap-2 mb-3 flex-wrap">
                  {leftFeatured.map((k) => {
                    const link = affiliateLinks[k];
                    const meta = PARTNER_META[k];
                    return (
                      <Link
                        key={k}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                        onClick={() => track("affiliate_click", { partner: k, panel: "left-featured" })}
                        className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-4 py-3 text-sm font-semibold text-emerald-400 hover:bg-emerald-500/20 hover:text-emerald-300 transition-colors"
                      >
                        {meta?.cta ?? meta?.name ?? k}
                        <ExternalLink className="h-3.5 w-3.5 shrink-0" />
                      </Link>
                    );
                  })}
                </div>
              )}

              {leftSecondary.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {leftSecondary.map((k) => {
                    const link = affiliateLinks[k];
                    const meta = PARTNER_META[k];
                    return (
                      <Link
                        key={k}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                        onClick={() => track("affiliate_click", { partner: k, panel: "left-secondary" })}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-secondary px-3 py-1.5 text-xs font-medium hover:bg-muted hover:text-primary transition-colors"
                      >
                        {meta?.name ?? k}
                        <ExternalLink className="h-3 w-3 text-muted-foreground" />
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* Right — Banking & Payments */}
          {hasRight && (
            <div className={`${hasLeft ? "md:w-[40%]" : "w-full"} p-5`}>
              <div className="flex items-center gap-2 mb-1">
                <Globe className="h-4 w-4 text-amber-400 shrink-0" />
                <p className="text-sm font-bold text-amber-400">Banking &amp; Payments</p>
              </div>
              <p className="text-xs text-muted-foreground mb-4">
                Business banking and international payment tools for freelancers
              </p>

              <div className="flex flex-col gap-2">
                {rightFeatured.map((k) => {
                  const link = affiliateLinks[k];
                  const meta = PARTNER_META[k];
                  return (
                    <Link
                      key={k}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      onClick={() => track("affiliate_click", { partner: k, panel: "right-featured" })}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-amber-400/40 bg-amber-400/10 px-4 py-3 text-sm font-semibold text-amber-300 hover:bg-amber-400/20 hover:text-amber-200 transition-colors"
                    >
                      {meta?.cta ?? meta?.name ?? k}
                      <ExternalLink className="h-3.5 w-3.5 shrink-0" />
                    </Link>
                  );
                })}
                {rightSecondary.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-1">
                    {rightSecondary.map((k) => {
                      const link = affiliateLinks[k];
                      const meta = PARTNER_META[k];
                      return (
                        <Link
                          key={k}
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer sponsored"
                          onClick={() => track("affiliate_click", { partner: k, panel: "right-secondary" })}
                          className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-secondary px-3 py-1.5 text-xs font-medium hover:bg-muted hover:text-primary transition-colors"
                        >
                          {meta?.name ?? k}
                          <ExternalLink className="h-3 w-3 text-muted-foreground" />
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export { PartnerBlock as AffiliateBlock };
