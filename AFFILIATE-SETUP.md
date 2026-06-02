# Affiliate Program Setup — Self Employed Calculator

All 5 affiliate links in `src/data/affiliates.ts` are currently placeholder homepage URLs.
Every click generates zero revenue until replaced with real tracking links.

---

## Status Summary (last updated 2026-06-02)

| Program | Status |
|---|---|
| **Wise** | ✅ LIVE — `wise.com/invite/drhc/tiagomanuelm10` |
| **Mercury** | ⛔ SKIPPED — requires US-registered business |
| **HoneyBook** | ⛔ SKIPPED — US/Canada only |
| **Bonsai** | ⏳ PENDING — applied, awaiting approval |
| **FreshBooks** | ⏳ PENDING — applied via Awin network, awaiting approval |
| **Wave** | 🔲 TODO — apply at waveapps.com/partners |
| **CJ Affiliate** (TurboTax, H&R Block, QuickBooks) | 🔲 TODO — ready to apply (88 pages indexed) |
| **Toggl** | 🔲 TODO — apply at toggl.com/affiliates |
| **Harvest** | 🔲 TODO — apply at getharvest.com/affiliates |
| **Relay** | 🔲 TODO — apply at relayfi.com/partners |
| **Deel** | ⏸ LATER — after 3 months |
| **Remote.com** | ⏸ LATER — after 3 months |
| **1Password** | ⏸ LATER — after 3 months |
| **Wise full affiliate** | ⏸ LATER — apply at wise.com/affiliates after 30 days |

---

## Phase 0 — Do Today

### 1. Wise ✓ DONE — https://wise.com/invite/drhc/tiagomanuelm10
- **Website:** https://wise.com
- **Referral link (instant, no approval needed):** Sign up for a free Wise personal or business account at https://wise.com — your referral link is available immediately in the dashboard. No application, no approval.
- **Affiliate program (higher commissions, requires approval):** https://wise.com/affiliates — apply separately after 30 days for the cash-per-customer rate
- **Commission:** Referral gives account credit to both parties; affiliate program pays ~$30–50 cash per verified customer
- **When exactly:** Get the referral link today. Apply for the full affiliate program at 30 days.
- **Status in code:** Placeholder in `affiliates.ts` — replace with referral link immediately, upgrade to affiliate link after approval

---

### 2. Mercury Bank — SKIPPED (requires US-registered business)
- **Website:** https://mercury.com
- **Referral link (instant, no approval needed):** Open a free Mercury business account at https://mercury.com — referral link is available immediately in the dashboard. No application needed.
- **Commission:** $30–50 per account opened via your link
- **When exactly:** Open an account today and get the link. No traffic requirement.
- **Status in code:** Not yet in `affiliates.ts` — add immediately after getting the link

---

### 3. HoneyBook — SKIPPED (US/Canada only)
- **Website:** https://www.honeybook.com
- **Referral link (instant, lower commission):** Create a HoneyBook account — referral link likely available immediately in the dashboard. Lower commission than the affiliate program.
- **Affiliate program (higher commissions):** https://www.honeybook.com/affiliates — apply after 10 pages indexed
- **Commission:** Referral varies; affiliate program pays $75–150 per signup
- **When exactly:** Check for instant referral link today. Apply for full affiliate program after 10 pages indexed.
- **Status in code:** Not yet in `affiliates.ts`

---

### 4. Bonsai — ⏳ PENDING APPROVAL
- **Website:** https://www.hellobonsai.com
- **Apply at:** https://www.hellobonsai.com/affiliate
- **Commission:** 25% recurring for 12 months on paid plans
- **Status in code:** Placeholder in `affiliates.ts` — replace after approval

---

### 5. FreshBooks — ⏳ PENDING APPROVAL (via Awin network)
- **Website:** https://www.freshbooks.com
- **Network:** Awin (not Impact as originally planned — freshbooks.com/partners/affiliates redirects to Awin)
- **Commission:** ~$10 per free trial signup, up to $200 per paid conversion
- **Status in code:** Placeholder in `affiliates.ts` — replace after approval

---

### 6. Wave
- **Website:** https://www.waveapps.com
- **Apply at:** https://www.waveapps.com/partners
- **Requires application:** Yes — but Wave is a free product so they want distribution. Accepts new sites.
- **Commission:** Payment processing revenue share (2.9% + $0.60 per transaction processed through Wave)
- **When exactly:** Apply now. No traffic requirement.
- **Status in code:** Not yet in `affiliates.ts` — add after approval

---

## Phase 1 — After 15–20 Pages Indexed

Not about traffic — about looking like a real, established site to the approval team.

### 7. TurboTax Self-Employed
- **Website:** https://turbotax.intuit.com/self-employed
- **Apply at:** https://turbotax.intuit.com/affiliates via CJ Affiliate — create a CJ account first at https://www.cj.com
- **Requires application:** Yes — CJ Affiliate network, moderate selectivity. Wants an established-looking site.
- **Commission:** $15–25 per paid filing
- **When exactly:** After 15–20 pages indexed. Must be approved before October to catch tax season (Jan–April peak traffic on these pages).
- **Status in code:** Not yet in `affiliates.ts` — add after approval

---

### 8. H&R Block
- **Website:** https://www.hrblock.com
- **Apply at:** https://affiliates.hrblock.com — also via CJ Affiliate (same account as TurboTax)
- **Requires application:** Yes — apply to both TurboTax and H&R Block at the same time via your CJ account. One application process covers both.
- **Commission:** $15–25 per signup
- **When exactly:** Same timing as TurboTax — apply both together after 15–20 pages indexed.
- **Status in code:** Not yet in `affiliates.ts` — add after approval

---

### 9. QuickBooks Self-Employed
- **Website:** https://quickbooks.intuit.com/self-employed
- **Apply at:** https://www.intuit.com/partners/affiliate-program — also via CJ Affiliate (same account as TurboTax and H&R Block)
- **Requires application:** Yes — stricter than FreshBooks. May reject new sites. Apply at the same time as TurboTax/H&R Block. If rejected, reapply at 60 days.
- **Commission:** $10–15 per trial
- **When exactly:** Apply via CJ at the same time as TurboTax and H&R Block.
- **Status in code:** Placeholder in `affiliates.ts` — replace after approval

---

### 10. Toggl Track
- **Website:** https://toggl.com/track
- **Apply at:** https://toggl.com/affiliates (own platform)
- **Requires application:** Yes — approves content sites without needing traffic.
- **Commission:** $30–50 per paid account
- **When exactly:** After 10–20 pages indexed and the billable hours / utilization rate calculator pages are live.
- **Status in code:** Not yet in `affiliates.ts` — add after approval

---

### 11. Harvest
- **Website:** https://www.getharvest.com
- **Apply at:** https://www.getharvest.com/affiliates (own platform)
- **Requires application:** Yes — similar selectivity to Toggl. Apply both at the same time.
- **Commission:** Revenue share (check current terms on their page)
- **When exactly:** Apply at the same time as Toggl.
- **Status in code:** Not yet in `affiliates.ts` — add after approval

---

### 12. Relay Bank
- **Website:** https://relayfi.com
- **Apply at:** https://relayfi.com/partners
- **Referral link (instant):** Check inside a Relay account dashboard — may have an instant referral link like Mercury.
- **Commission:** $25–40 per account opened
- **When exactly:** Check for instant referral first. If not, apply after 20 pages indexed.
- **Status in code:** Not yet in `affiliates.ts` — add after getting link or approval

---

## Phase 2 — After 3 Months

These are B2B products or programs that explicitly want traffic data before approving.

### 13. Deel
- **Website:** https://www.deel.com
- **Apply at:** https://www.deel.com/partners/affiliates
- **Requires application:** Yes — formal partner program, selective. They will ask for traffic numbers. Bring Search Console data showing impressions on the IR35 and international contractor pages.
- **Commission:** $100–500 per converted client (B2B — businesses hiring contractors)
- **When exactly:** After 3 months.
- **Status in code:** Placeholder in `affiliates.ts` — replace after approval

---

### 14. Remote.com
- **Website:** https://remote.com
- **Apply at:** https://remote.com/partners
- **Requires application:** Yes — similar selectivity to Deel. Apply both at the same time.
- **Commission:** B2B EOR platform — high value per conversion (check current rates)
- **When exactly:** Apply at the same time as Deel.
- **Status in code:** Not yet in `affiliates.ts` — add after approval

---

### 15. 1Password Business
- **Website:** https://1password.com/business
- **Apply at:** https://1password.com/partners/affiliates
- **Requires application:** Yes — standard affiliate application, moderate selectivity. Low priority.
- **Commission:** $20–40 per signup
- **When exactly:** After 3 months. Contextual only — appears in the tax deductions blog post.
- **Status in code:** Not yet in `affiliates.ts` — add after approval

---

## Non-Affiliate Monetization

### Google AdSense
- **Apply at:** https://adsense.google.com
- Infrastructure already in the codebase (`src/components/monetization/AdSlot.tsx`), controlled by `NEXT_PUBLIC_ADS_ENABLED` env variable — currently disabled
- Apply after 20–30 pages indexed and receiving at least some organic traffic
- Financial disclaimer already in the footer (required for AdSense approval on financial content)

### Direct Sponsorships
- Target companies: FreshBooks, Bonsai, HoneyBook
- Revenue potential: $500–2,000/month per sponsorship
- Apply after 20k+ monthly visitors — email their partnerships team directly with traffic data

### Email List
- Start building from day 1
- Planned lead magnet: "Freelance Rate Setting Worksheet" or "2026 Tax Deadline Calendar"
- Monetise via affiliate promotions to subscribers and an annual "best tools" roundup email

---

## Contextual Placement — Which Affiliates Appear Where

**Do not show all affiliates on every page.** Each page shows only the 2–4 most relevant partners for
the user's current intent. A visitor on a quarterly tax calculator is in "filing" mode — TurboTax and
H&R Block are highly relevant; Toggl is noise. Contextual placement = higher click-through and a block
that doesn't look like a generic ad banner.

The mapping lives in `src/data/affiliates.ts` under three exported constants:

| Constant | Used by |
|---|---|
| `CATEGORY_PARTNERS` | `/calculators/[slug]` and `/blog/[slug]` pages, keyed by category slug |
| `COMPARE_CATEGORY_PARTNERS` | `/compare/[slug]` pages, keyed by comparison category |
| `GLOSSARY_TERM_CATEGORY` | `/glossary/[term]` pages — maps term slug → category slug, then uses `CATEGORY_PARTNERS` |

The home page (`/`) uses the `PartnerBlock` default (no keys passed), which shows a curated cross-category set.

**Current category → affiliate mapping:**

| Category | Featured (large buttons) | Secondary (small pills) |
|---|---|---|
| `rate-pricing` | FreshBooks, Bonsai | HoneyBook, QuickBooks |
| `income-tax` | TurboTax, H&R Block | QuickBooks, Wave |
| `client-projects` | FreshBooks, Bonsai | HoneyBook, Wave |
| `business-health` | Toggl, Harvest | FreshBooks, Bonsai |
| `financial-planning` | Mercury, Wave | Relay, FreshBooks |
| `international` | Deel, Remote | Wise, Mercury |

Partners with empty placeholder URLs are silently hidden — the button only appears once the real tracking URL is set.

---

## After Approval — How to Add a New Affiliate URL

**Every time you get an approved affiliate tracking URL, give it to Claude Code and it will replace
the placeholder automatically.** Just say something like:

> "I got approved for TurboTax — here's the link: https://turbotax.intuit.com/?cjaffid=YOUR_ID"

Claude Code will find the matching key in `src/data/affiliates.ts` and replace the placeholder.
The button will then appear on all relevant pages on next deploy.

**Manual steps (if doing it yourself):**

1. Get your unique tracking URL from the program's dashboard
2. Open `src/data/affiliates.ts`
3. Find the key (e.g. `turbotax`) and replace the empty string `""` or placeholder URL with your tracking URL:

```ts
turbotax: "https://turbotax.intuit.com/?cjaffid=YOUR_ID",
```

4. The `rel="sponsored"` attribute is already on all affiliate links in `AffiliateBlock.tsx` — do not remove it.
5. Push and deploy — the button appears automatically on all pages where that key is in `CATEGORY_PARTNERS`.
