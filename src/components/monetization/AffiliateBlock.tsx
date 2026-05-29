"use client";

import Link from "next/link";
import { ExternalLink, FileText, Globe } from "lucide-react";
import { track } from "@vercel/analytics";
import { affiliateLinks } from "@/data/affiliates";

interface PartnerBlockProps {
  featuredKeys?: string[];
  className?: string;
}

const PARTNER_META: Record<string, { name: string; cta: string }> = {
  freshbooks: { name: "FreshBooks", cta: "Try FreshBooks Free" },
  bonsai:     { name: "Bonsai",     cta: "Try Bonsai Free" },
  quickbooks: { name: "QuickBooks", cta: "QuickBooks Self-Employed" },
  wise:       { name: "Wise",       cta: "Open a Wise Account" },
  deel:       { name: "Deel",       cta: "Try Deel Free" },
};

const INVOICING_KEYS  = ["freshbooks", "bonsai", "quickbooks"];
const PAYMENTS_KEYS   = ["wise", "deel"];
const DEFAULT_FEATURED_INVOICING = ["freshbooks", "bonsai"];
const DEFAULT_FEATURED_PAYMENTS  = ["wise", "deel"];

export function PartnerBlock({ featuredKeys, className }: PartnerBlockProps) {
  const invoicingFeatured = (featuredKeys ?? DEFAULT_FEATURED_INVOICING)
    .filter((k) => INVOICING_KEYS.includes(k) && !!affiliateLinks[k]);
  const invoicingSecondary = INVOICING_KEYS
    .filter((k) => !invoicingFeatured.includes(k) && !!affiliateLinks[k]);

  const paymentsFeatured = (featuredKeys ?? DEFAULT_FEATURED_PAYMENTS)
    .filter((k) => PAYMENTS_KEYS.includes(k) && !!affiliateLinks[k]);
  const paymentsSecondary = PAYMENTS_KEYS
    .filter((k) => !paymentsFeatured.includes(k) && !!affiliateLinks[k]);

  const hasInvoicing = invoicingFeatured.length > 0 || invoicingSecondary.length > 0;
  const hasPayments  = paymentsFeatured.length > 0 || paymentsSecondary.length > 0;

  if (!hasInvoicing && !hasPayments) return null;

  return (
    <div className={className}>
      <div className="rounded-xl border border-emerald-500/25 bg-card overflow-hidden shadow-[0_0_30px_8px_rgba(52,211,153,0.08),0_0_70px_20px_rgba(52,211,153,0.04)]">
        <div className="flex flex-col md:flex-row">

          {/* Left — Invoicing & Accounting ~60% */}
          {hasInvoicing && (
            <div className={`${hasPayments ? "md:w-[60%] border-b md:border-b-0 md:border-r border-border/50" : "w-full"} p-5`}>
              <div className="flex items-center gap-2 mb-1">
                <FileText className="h-4 w-4 text-emerald-400 shrink-0" />
                <p className="text-sm font-bold text-emerald-400">Invoicing & Accounting</p>
              </div>
              <p className="text-xs text-muted-foreground mb-4">
                Bill clients, track expenses, and stay tax-ready — tools built for freelancers
              </p>

              {invoicingFeatured.length > 0 && (
                <div className="flex gap-2 mb-3 flex-wrap">
                  {invoicingFeatured.map((k) => {
                    const link = affiliateLinks[k];
                    const meta = PARTNER_META[k];
                    if (!link) return null;
                    return (
                      <Link
                        key={k}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                        onClick={() => track("affiliate_click", { partner: k, panel: "invoicing" })}
                        className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-4 py-3 text-sm font-semibold text-emerald-400 hover:bg-emerald-500/20 hover:text-emerald-300 transition-colors"
                      >
                        {meta?.cta ?? meta?.name ?? k}
                        <ExternalLink className="h-3.5 w-3.5 shrink-0" />
                      </Link>
                    );
                  })}
                </div>
              )}

              {invoicingSecondary.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {invoicingSecondary.map((k) => {
                    const link = affiliateLinks[k];
                    const meta = PARTNER_META[k];
                    if (!link) return null;
                    return (
                      <Link
                        key={k}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                        onClick={() => track("affiliate_click", { partner: k, panel: "invoicing-secondary" })}
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

          {/* Right — Payments & Compliance ~40% */}
          {hasPayments && (
            <div className={`${hasInvoicing ? "md:w-[40%]" : "w-full"} p-5`}>
              <div className="flex items-center gap-2 mb-1">
                <Globe className="h-4 w-4 text-amber-400 shrink-0" />
                <p className="text-sm font-bold text-amber-400">Payments & Compliance</p>
              </div>
              <p className="text-xs text-muted-foreground mb-4">
                Get paid globally and manage international contractor compliance
              </p>

              <div className="flex flex-col gap-2">
                {paymentsFeatured.map((k) => {
                  const link = affiliateLinks[k];
                  const meta = PARTNER_META[k];
                  if (!link) return null;
                  return (
                    <Link
                      key={k}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      onClick={() => track("affiliate_click", { partner: k, panel: "payments" })}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-amber-400/40 bg-amber-400/10 px-4 py-3 text-sm font-semibold text-amber-300 hover:bg-amber-400/20 hover:text-amber-200 transition-colors"
                    >
                      {meta?.cta ?? meta?.name ?? k}
                      <ExternalLink className="h-3.5 w-3.5 shrink-0" />
                    </Link>
                  );
                })}
                {paymentsSecondary.map((k) => {
                  const link = affiliateLinks[k];
                  const meta = PARTNER_META[k];
                  if (!link) return null;
                  return (
                    <Link
                      key={k}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      onClick={() => track("affiliate_click", { partner: k, panel: "payments-secondary" })}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-secondary px-3 py-1.5 text-xs font-medium hover:bg-muted hover:text-primary transition-colors"
                    >
                      {meta?.name ?? k}
                      <ExternalLink className="h-3 w-3 text-muted-foreground" />
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export { PartnerBlock as AffiliateBlock };
