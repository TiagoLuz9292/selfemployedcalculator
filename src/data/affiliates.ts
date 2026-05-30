// Empty string = placeholder (button hidden until replaced). See AFFILIATE-SETUP.md for signup links.
// When approved, give Claude Code the tracking URL and it will replace the placeholder.
const P = "";

export const affiliateLinks: Record<string, string> = {
  // Phase 0 — instant referral or apply now (no traffic needed)
  freshbooks:  "https://www.freshbooks.com",     // PLACEHOLDER — replace with Impact network tracking URL after approval
  bonsai:      "https://www.hellobonsai.com",     // PLACEHOLDER — replace with hellobonsai.com affiliate tracking URL after approval
  wise:        "https://wise.com",               // PLACEHOLDER — replace with wise.com/invite/YOUR_ID referral URL
  wave:        P,                                // replace with waveapps.com affiliate URL after approval
  honeybook:   P,                                // replace with honeybook.com/r/YOUR_ID after referral or affiliate approval
  mercury:     P,                                // replace with mercury.com/r/YOUR_ID after opening account

  // Phase 1 — after 15–20 pages indexed
  quickbooks:  "https://quickbooks.intuit.com",  // PLACEHOLDER — replace with CJ Affiliate tracking URL after approval
  turbotax:    P,                                // replace with CJ Affiliate tracking URL after approval
  hrblock:     P,                                // replace with CJ Affiliate tracking URL after approval
  toggl:       P,                                // replace with toggl.com affiliate tracking URL after approval
  harvest:     P,                                // replace with getharvest.com affiliate tracking URL after approval
  relay:       P,                                // replace with relayfi.com/r/YOUR_ID after approval

  // Phase 2 — after 3 months
  deel:        "https://www.deel.com",           // PLACEHOLDER — replace with deel.com affiliate tracking URL after approval
  remote:      P,                                // replace with remote.com affiliate tracking URL after approval
  "1password": P,                                // replace with 1password.com affiliate tracking URL after approval
};

// Contextual affiliate keys per calculator/blog category.
// featured = large primary buttons; secondary = small pill buttons.
// Keys with empty placeholder URLs above are silently hidden until replaced.
export const CATEGORY_PARTNERS: Record<string, { featured: string[]; secondary: string[] }> = {
  "rate-pricing":       { featured: ["freshbooks", "bonsai"],  secondary: ["honeybook", "quickbooks"] },
  "income-tax":         { featured: ["turbotax", "hrblock"],   secondary: ["quickbooks", "wave"] },
  "client-projects":    { featured: ["freshbooks", "bonsai"],  secondary: ["honeybook", "wave"] },
  "business-health":    { featured: ["toggl", "harvest"],      secondary: ["freshbooks", "bonsai"] },
  "financial-planning": { featured: ["mercury", "wave"],       secondary: ["relay", "freshbooks"] },
  "international":      { featured: ["deel", "remote"],        secondary: ["wise", "mercury"] },
};

// Contextual keys for /compare pages, keyed by comparison category.
export const COMPARE_CATEGORY_PARTNERS: Record<string, { featured: string[]; secondary: string[] }> = {
  "software":   { featured: ["freshbooks", "bonsai"],  secondary: ["quickbooks", "wave", "honeybook"] },
  "payments":   { featured: ["wise", "mercury"],       secondary: ["relay", "deel"] },
  "strategy":   { featured: ["freshbooks", "bonsai"],  secondary: ["quickbooks", "honeybook"] },
  "platforms":  { featured: ["deel", "remote"],        secondary: ["honeybook", "freshbooks"] },
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
