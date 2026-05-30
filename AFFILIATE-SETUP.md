# Affiliate Program Setup — FreelanceCalc

All 5 affiliate links in `src/data/affiliates.ts` are currently placeholder homepage URLs.
Every click generates zero revenue until replaced with real tracking links.

---

## Priority Order — Apply in This Sequence

### PHASE 0 — Apply Immediately (Before Traffic)

These approve new sites and are already wired into the site code.

---

#### 1. Bonsai
- **Apply at:** https://www.hellobonsai.com/affiliate
- **Commission:** 25% recurring for 12 months on paid plans
- **Where it appears:** Invoicing, contract, client management pages, comparison pages
- **Why first:** Recurring commission = highest long-term value per conversion. Quick approval.
- **Status:** Placeholder URL in `affiliates.ts` — replace after approval

---

#### 2. FreshBooks
- **Apply at:** https://www.freshbooks.com/partners/affiliates
- **Network:** Impact (formerly Impact Radius)
- **Commission:** ~$10 per free trial signup, up to $200 per paid conversion
- **Where it appears:** Invoice calculator, quarterly tax, self-employment tax, all comparison pages
- **Why second:** Most pages on the site reference FreshBooks. Fast approval (1-3 days).
- **Notes:** Say you're newly launched with SEO content targeting freelancers.
- **Status:** Placeholder URL in `affiliates.ts` — replace after approval

---

#### 3. TurboTax Self-Employed (Intuit)
- **Apply at:** https://turbotax.intuit.com/affiliates
- **Commission:** $15–25 per paid filing
- **Where it appears:** Quarterly tax calculator, self-employment tax calculator, 1099 calculator
- **Why third:** CRITICAL for tax season. These are the highest-traffic pages on the site during Jan–April.
- **Status:** Not yet in code — needs to be added to `affiliates.ts` after approval

---

#### 4. H&R Block Online
- **Apply at:** https://affiliates.hrblock.com
- **Commission:** $15–25 per signup
- **Where it appears:** Same tax calculator pages as TurboTax — position as the alternative
- **Why fourth:** Pairs with TurboTax. Two tax options on the same page doubles conversion chances.
- **Status:** Not yet in code — needs to be added to `affiliates.ts` after approval

---

#### 5. Wise (formerly TransferWise)
- **Apply at:** https://wise.com/affiliates
- **Network:** In-house program
- **Commission:** Fixed fee per verified customer (~$30–50 depending on region)
- **Where it appears:** VAT calculator, invoice calculator, international freelancer content, comparison pages
- **Why fifth:** Easy approval, strong fit for UK/EU freelancers. Wise vs PayPal comparison page already live.
- **Status:** Placeholder URL in `affiliates.ts` — replace after approval

---

### PHASE 1 — Apply After 30 Days

Wait for some indexed pages and light traffic before applying to these.

---

#### 6. HoneyBook
- **Apply at:** https://www.honeybook.com/affiliates
- **Commission:** $75–150 per signup
- **Where it appears:** Creative freelancer pages, client management, proposals, contracts
- **Why:** High commission per conversion. Very popular in design/photography freelancer niche.
- **Status:** Not yet in code — add to `affiliates.ts`

---

#### 7. Toggl Track
- **Apply at:** https://toggl.com/affiliates
- **Commission:** $30–50 per paid account
- **Where it appears:** Billable hours calculator, utilization rate calculator, time tracking blog post
- **Why:** Direct fit for the billable hours tools. Toggl vs Harvest comparison page already exists.
- **Status:** Not yet in code — add to `affiliates.ts`

---

#### 8. Harvest
- **Apply at:** https://www.getharvest.com/affiliates
- **Commission:** Revenue share (check current terms on their page)
- **Where it appears:** Same pages as Toggl — position as the alternative
- **Why:** Pairs with Toggl on the comparison page. Same audience.
- **Status:** Not yet in code — add to `affiliates.ts`

---

#### 9. QuickBooks Self-Employed (Intuit)
- **Apply at:** https://www.intuit.com/partners/affiliate-program/
- **Network:** Commission Junction (CJ Affiliate)
- **Commission:** ~$10–15 per trial
- **Where it appears:** Tax calculators, FreshBooks vs QuickBooks comparison page
- **Why:** Intuit may require some traffic before approving. Apply after 30 days.
- **Status:** Placeholder URL in `affiliates.ts` — replace after approval

---

#### 10. Mercury Bank
- **Apply at:** https://mercury.com/refer
- **Commission:** $30–50 per account opened
- **Where it appears:** Financial planning calculators, freelancer banking blog post (planned)
- **Why:** High fit for US-based freelancers who need a business bank account.
- **Status:** Not yet in code — add to `affiliates.ts`

---

#### 11. Wave
- **Apply at:** https://www.waveapps.com/partners
- **Commission:** Payment processing revenue share (2.9% + $0.60 per transaction)
- **Where it appears:** FreshBooks vs Wave comparison page, invoicing blog post
- **Why:** Free product = high conversion rate. Revenue comes from their payment processing.
- **Status:** Not yet in code — add to `affiliates.ts`

---

### PHASE 2 — Apply After 3 Months

These require meaningful traffic or are lower priority.

---

#### 12. Deel
- **Apply at:** https://www.deel.com/partners/affiliates
- **Commission:** $100–500 per converted client (B2B)
- **Where it appears:** IR35 glossary page, Deel vs Remote comparison page
- **Why:** Very high value per conversion but targets businesses hiring contractors, not freelancers. Lower click volume.
- **Status:** Placeholder URL in `affiliates.ts` — replace after approval

---

#### 13. Remote.com
- **Apply at:** https://remote.com/partners
- **Commission:** Similar to Deel — B2B EOR platform
- **Where it appears:** Deel vs Remote comparison page
- **Why:** Pairs with Deel on the comparison page. Alternative option.
- **Status:** Not yet in code — add to `affiliates.ts`

---

#### 14. Relay Bank
- **Apply at:** https://relayfi.com/partners
- **Commission:** $25–40 per account
- **Where it appears:** Freelancer banking blog post (planned), financial planning pages
- **Why:** Alternative to Mercury for US freelancers wanting a business account.
- **Status:** Not yet in code — add to `affiliates.ts`

---

#### 15. 1Password Business
- **Apply at:** https://1password.com/partners/affiliates
- **Commission:** $20–40 per signup
- **Where it appears:** Tax deductions blog post (password managers as a deductible expense)
- **Why:** Low priority but contextual — appears naturally in the deductions content.
- **Status:** Not yet in code

---

## Other Monetization (Non-Affiliate)

### Google AdSense
- Ad slot infrastructure is already in the codebase (`src/components/monetization/AdSlot.tsx`)
- Controlled by `NEXT_PUBLIC_ADS_ENABLED` environment variable — currently disabled
- Apply at: https://adsense.google.com
- Apply after 20–30 pages are indexed and receiving organic traffic
- Financial disclaimer is already in the footer (required for AdSense approval on financial content)

### Direct Sponsorships (Phase 4 — 20k+ monthly visitors)
- Target: FreshBooks, Bonsai, HoneyBook for sponsored placement
- Revenue potential: $500–2,000/month per sponsorship
- Approach: Email their partnerships team directly once you have traffic data

### Email List
- Planned lead magnet: "Freelance Rate Setting Worksheet" or "2026 Tax Deadline Calendar"
- Monetise via affiliate promotions to subscribers and annual "best tools" roundup email

---

## After Approval — How to Add a New Affiliate

1. Get your unique tracking URL from the program's dashboard
2. Open `src/data/affiliates.ts`
3. Add or replace the entry:

```ts
export const affiliateLinks: Record<string, string> = {
  freshbooks:  "https://www.freshbooks.com/partner/YOUR_ID",
  quickbooks:  "https://quickbooks.intuit.com/?ref=YOUR_ID",
  bonsai:      "https://www.hellobonsai.com/r/YOUR_ID",
  wise:        "https://wise.com/invite/YOUR_ID",
  deel:        "https://www.deel.com/signup?ref=YOUR_ID",
  honeybook:   "https://www.honeybook.com/r/YOUR_ID",     // add when approved
  turbotax:    "https://turbotax.intuit.com/?ref=YOUR_ID", // add when approved
  hrblock:     "https://www.hrblock.com/?ref=YOUR_ID",     // add when approved
  toggl:       "https://toggl.com/track/?ref=YOUR_ID",     // add when approved
  harvest:     "https://www.getharvest.com/?ref=YOUR_ID",  // add when approved
  mercury:     "https://mercury.com/r/YOUR_ID",            // add when approved
  wave:        "https://www.waveapps.com/r/YOUR_ID",       // add when approved
};
```

4. The `rel="sponsored"` attribute is already on all affiliate links — do not remove it.
5. Wire the new key into `AffiliateBlock.tsx` if the new program needs its own card.
6. Push and deploy.
