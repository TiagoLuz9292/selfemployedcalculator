// All values are brand homepage placeholders until real affiliate tracking URLs are approved.
// When approved, give Claude Code the tracking URL and it will replace the placeholder.
// Using brand homepages (not empty strings) so all buttons render during pre-launch preview.
export const affiliateLinks: Record<string, string> = {
  // Phase 0
  freshbooks:  "https://www.freshbooks.com",    // PLACEHOLDER — replace with Awin tracking URL after approval
  bonsai:      "https://www.hellobonsai.com",    // PLACEHOLDER — replace with Bonsai affiliate tracking URL after approval
  wise:        "https://wise.com/invite/drhc/tiagomanuelm10",

  // Phase 1 — CJ Affiliate (blocked on Payoneer approval)
  quickbooks:  "https://quickbooks.intuit.com", // PLACEHOLDER — replace with CJ Affiliate tracking URL after approval
  turbotax:    "https://turbotax.intuit.com",   // PLACEHOLDER — replace with CJ Affiliate tracking URL after approval
  hrblock:     "https://www.hrblock.com",       // PLACEHOLDER — replace with CJ Affiliate tracking URL after approval
  toggl:       "https://toggl.com/track",       // PLACEHOLDER — replace with PartnerStack tracking URL after approval

  // Phase 2 — after 3 months
  deel:        "https://www.deel.com",          // PLACEHOLDER — replace with Deel affiliate tracking URL after approval
  remote:      "https://remote.com",            // PLACEHOLDER — replace with Remote affiliate tracking URL after approval
  "1password": "https://1password.com",         // PLACEHOLDER — replace with 1Password affiliate tracking URL after approval
};

// Contextual affiliate keys per calculator/blog category.
// featured = large primary buttons; secondary = small pill buttons.
// Keys with empty placeholder URLs above are silently hidden until replaced.
export const CATEGORY_PARTNERS: Record<string, { featured: string[]; secondary: string[] }> = {
  "rate-pricing":       { featured: ["freshbooks", "bonsai"],  secondary: ["quickbooks"] },
  "income-tax":         { featured: ["turbotax", "hrblock"],   secondary: ["quickbooks"] },
  "client-projects":    { featured: ["freshbooks", "bonsai"],  secondary: ["quickbooks"] },
  "business-health":    { featured: ["toggl", "freshbooks"],   secondary: ["bonsai"] },
  "financial-planning": { featured: ["freshbooks", "wise"],    secondary: ["turbotax", "bonsai"] },
  "international":      { featured: ["deel", "remote"],        secondary: ["wise"] },
};

// Contextual keys for /compare pages, keyed by comparison category.
export const COMPARE_CATEGORY_PARTNERS: Record<string, { featured: string[]; secondary: string[] }> = {
  "software":   { featured: ["freshbooks", "bonsai"],  secondary: ["quickbooks"] },
  "payments":   { featured: ["wise", "deel"],           secondary: ["remote"] },
  "strategy":   { featured: ["freshbooks", "bonsai"],  secondary: ["quickbooks"] },
  "platforms":  { featured: ["deel", "remote"],        secondary: ["freshbooks"] },
};

// Maps glossary term slugs → category slug for partner selection.
export const GLOSSARY_TERM_CATEGORY: Record<string, string> = {
  "hourly-rate":             "rate-pricing",
  "day-rate":                "rate-pricing",
  "retainer":                "rate-pricing",
  "value-based-pricing":     "rate-pricing",
  "utilization-rate":        "business-health",
  "billable-hours":          "business-health",
  "profit-margin":           "business-health",
  "break-even":              "business-health",
  "overhead":                "business-health",
  "net-income":              "business-health",
  "scope-creep":             "client-projects",
  "late-payment-interest":   "client-projects",
  "client-profitability":    "client-projects",
  "invoice":                 "client-projects",
  "self-employment-tax":     "income-tax",
  "quarterly-estimated-tax": "income-tax",
  "vat":                     "income-tax",
  "take-home-pay":           "income-tax",
  "emergency-fund":          "financial-planning",
  "ir35":                    "international",
};
