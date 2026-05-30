# Compare Pages — Pricing Source of Truth
**Last verified:** 2026-05-30
**Method:** Live WebFetch of each platform's pricing page

This document is the authoritative reference for all pricing shown in comparison pages.
Update it every time a price is changed in `src/data/comparisons.ts`.

---

## Verification Status Legend
- ✅ **Confirmed** — fetched live on 2026-05-30
- ⚠️ **Estimated** — live page blocked/timed out; value from knowledge or secondary source
- 🔄 **Re-verify** — fetch date older than 6 months

---

## How to Re-verify Each Platform

| Platform | Pricing URL | What to check |
|---|---|---|
| FreshBooks | https://www.freshbooks.com/pricing | Lite regular price (ignore promo); client limit per plan |
| QuickBooks Solopreneur | https://quickbooks.intuit.com/solopreneur/ | Monthly price; features included |
| Wave | https://www.waveapps.com/pricing | Starter (free?); Pro monthly price; payment processing % |
| Bonsai | https://www.hellobonsai.com/pricing | Which plan includes contracts/proposals; monthly prices |
| Toggl Track | https://toggl.com/track/pricing/ | Free plan limits; Starter paid price |
| Harvest | https://www.getharvest.com/pricing | Free plan exists?; Teams monthly price |
| Wise | https://wise.com/us/pricing/ | Transfer fee %; how many currencies for local bank details |
| PayPal | https://www.paypal.com/us/webapps/mpp/merchant-fees | Domestic % + fixed fee; international surcharge; currency conversion % |
| Deel | https://www.deel.com/pricing | Contractor management monthly fee per contractor |
| Remote | https://remote.com/pricing | Contractor management monthly fee per contractor |
| Fiverr | https://www.fiverr.com/pages/fees-structure | Seller service fee % |
| Upwork | https://www.upwork.com/i/pricing/ | Freelancer service fee %; Connects cost per proposal |

---

## Platform-by-Platform Pricing

---

### FreshBooks ✅
**Verified:** 2026-05-30 | **URL:** freshbooks.com/pricing

> ⚠️ FreshBooks always runs large promotions (currently 70% off for 4 months). The prices
> below are the **regular list prices** that users pay after any promotional period expires.
> Use list prices in comparisons — not promo prices.

| Plan | Regular Price | Client limit | Key extras |
|---|---|---|---|
| **Lite** | **$23/mo** | 5 clients | Invoicing, expenses, tax reports |
| **Plus** | **$43/mo** | 50 clients | + Proposals, e-signatures, retainers, accounting reports |
| **Premium** | **$70/mo** | Unlimited | + Project profitability, custom email templates |
| **Select** | Custom | Unlimited | + Dedicated support, lower transaction fees |

**Payment processing:** 2.9% + $0.30 per transaction (via Stripe integration)
**Free trial:** 30-day money-back guarantee

---

### QuickBooks Solopreneur ⚠️
**Verified:** Unable to confirm — US pricing pages timed out on fetch
**URL to check:** quickbooks.intuit.com/solopreneur/

| Plan | Estimated Price | Notes |
|---|---|---|
| **Solopreneur** | **~$20/mo** | US-only product (formerly QuickBooks Self-Employed, rebranded 2024) |

> ⚠️ Solopreneur is a US-only product. The global pricing page (quickbooks.intuit.com/global/pricing/)
> shows QuickBooks Online (Simple Start €21/mo, Essentials €31/mo, Plus €45/mo) — a different,
> more complex product for businesses. Do not confuse the two.
> Verify Solopreneur pricing manually at the US URL above.

**Key features:** TurboTax integration, Schedule C tracking, mileage tracking, expense categorization
**Free trial:** 30 days

---

### Wave ✅
**Verified:** 2026-05-30 | **URL:** waveapps.com/pricing

| Plan | Price | Key features |
|---|---|---|
| **Starter** | **Free** | Invoicing, accounting, expense tracking — unlimited invoices, unlimited clients |
| **Pro** | **$19/mo** (or $190/year) | + Auto bank import, receipt scanning, automated payment reminders, branding |
| **Wave Advisors** | $199/mo+ | Dedicated human bookkeeper service |

**Payment processing fees:**
- Starter: 2.9% + $0.60 per credit card transaction; 3.4% + $0.60 for Amex
- Pro: 2.9% + $0 for first 10 transactions/month, then 2.9% + $0.60 thereafter

> The free Starter plan is genuinely free with no client or invoice caps — no expiry.
> Pro adds useful automations but the core invoicing/accounting is not paywalled.

---

### Bonsai ✅
**Verified:** 2026-05-30 | **URL:** hellobonsai.com/pricing

> ⚠️ Bonsai restructured plans in 2024. The old "Starter" ($21/mo) is gone.
> **Contracts and proposals require the Essentials plan ($25/mo) — not Basic.**
> Basic ($15/mo) excludes contracts, proposals, and e-signing entirely.

| Plan | Monthly price | Annual price | Contracts/proposals? |
|---|---|---|---|
| **Basic** | $15/mo | $9/mo | ❌ No |
| **Essentials** | $25/mo | $19/mo | ✅ Yes |
| **Premium** | $39/mo | $29/mo | ✅ Yes + advanced project tools |
| **Elite** | $59/mo | $49/mo (min. 3 users) | ✅ Yes + Xero, custom import |

**Free trial:** 7 days (full features)
**Note:** The relevant starting price for freelancers who need contracts is **$25/mo** (Essentials, monthly billing).

---

### Toggl Track ✅
**Verified:** 2026-05-30 | **URL:** toggl.com/track/pricing/

| Plan | Price | Notes |
|---|---|---|
| **Free** | $0 | Unlimited time tracking, unlimited projects, unlimited clients |
| **Starter** | **$9/seat/mo** | + Billable rates, time rounding, required fields, scheduled reports |
| **Premium** | $18/seat/mo | + Fixed fee projects, timesheet approval, project forecasts |
| **Enterprise** | Custom | Dedicated support, SSO |

**Free trial:** 30 days on paid plans
**Note:** Free plan has no meaningful limits for solo freelancers — most use it indefinitely.

---

### Harvest ✅
**Verified:** 2026-05-30 | **URL:** getharvest.com/pricing

| Plan | Price | Notes |
|---|---|---|
| **Free** | $0 forever | 1 seat, 2 projects — time tracking, invoicing, expense tracking |
| **Teams** | **$11/seat/mo** (monthly) / $9/seat/mo (annual) | Unlimited seats, unlimited projects, team reporting, accounting integrations |
| **Enterprise** | $17.50/seat/mo (monthly) / $14/seat/mo (annual) | + Profitability reporting, timesheet approvals, SAML SSO |

**Free plan:** Confirmed active as of 2026-05-30. Limited to 1 seat and 2 projects — sufficient for simple solo tracking.
**Note:** Toggl's free plan is more generous (unlimited projects vs 2). Winner on free plan = Toggl.

---

### Wise ✅
**Verified:** 2026-05-30 | **URL:** wise.com/us/pricing/ and wise.com/gb/pricing/

| Feature | Detail |
|---|---|
| **Account fee** | Free |
| **Transfer fee** | From 0.57% (varies by currency pair) |
| **Receiving (local bank details)** | Free for local currency payments |
| **International wire receiving** | USD SWIFT: $6.11 | GBP SWIFT: £2.16 | EUR SWIFT: €2.39 |
| **Local bank account details** | **22 currencies** |
| **Debit card** | £7/€8 one-time fee (no subscription) |
| **Exchange rate** | Mid-market (no spread) |

**Currencies for local bank details:** USD, EUR, GBP, AUD, CAD, SGD, NZD, HUF, RON, PHP, and more (22 total)
**Note:** Wise's transfer fee is "from 0.57%" — the 0.6-0.9% range previously cited is directionally correct for common currency pairs.

---

### PayPal ✅
**Verified:** 2026-05-30 | **URL:** paypal.com/us/webapps/mpp/merchant-fees

> ⚠️ PayPal raised fees. The old 2.9% + $0.30 figure is outdated.

| Transaction type | Fee |
|---|---|
| **Domestic (US)** | **3.49% + $0.49** |
| **International surcharge** | +1.50% on top of domestic rate |
| **International total (approx.)** | ~4.99% + $0.49 |
| **Currency conversion spread** | 3.00%–4.00% |

**Note:** These are standard commercial transaction rates. PayPal has multiple rate tiers based on account type and monthly volume.

---

### Deel ✅
**Verified:** 2026-05-30 | **URL:** deel.com/pricing

| Service | Price |
|---|---|
| **Contractor Management** | **$49/contractor/mo** |
| **Contractor of Record (CoR)** | $325/contractor/mo |
| **EOR (Employer of Record)** | Contact sales |

**Paid by:** The hiring company, not the contractor
**Free for contractors:** Yes — contractors pay nothing to use Deel

---

### Remote ✅
**Verified:** 2026-05-30 | **URL:** remote.com/pricing

| Service | Price |
|---|---|
| **Contractor Management** | **$29/contractor/mo** |
| **Contractor Management Plus** | $99/contractor/mo (+ $100k indemnity protection) |
| **Contractor of Record** | $325/contractor/mo |

**Paid by:** The hiring company, not the contractor
**Free for contractors:** Yes

---

### Fiverr ⚠️
**Verified:** Unable — pricing page returned 403 (login required)
**URL to check:** fiverr.com/pages/fees-structure

| Fee | Amount |
|---|---|
| **Seller service fee** | **20% of each order** |
| **Buyer service fee** | $2.50 for orders under $40; 5% for larger orders |

> This 20% rate has been Fiverr's standard for many years and is widely confirmed across
> industry sources. Confidence: high. Verify manually if needed.

---

### Upwork ⚠️
**Verified:** Unable — support pages returned 403 (login required)
**URL to check:** upwork.com/i/pricing/

| Fee | Amount |
|---|---|
| **Freelancer service fee** | **Flat 10% on all earnings** |
| **Connects (proposal bidding)** | ~6 Connects per proposal; Connects purchased in bundles |

> Upwork changed from the tiered 20%/10%/5% system to a flat **10%** in **May 2023**.
> This is widely documented and confirmed in the ChatGPT deep research response.
> Confidence: high. Verify manually if changed.

---

## Changes Applied to comparisons.ts from This Verification

| Date | Change | Reason |
|---|---|---|
| 2026-05-30 | FreshBooks Lite $17 → $19 | Stale price (prior estimate) |
| 2026-05-30 | FreshBooks Lite $19 → $23 | Live confirmation: regular price is $23/mo |
| 2026-05-30 | QuickBooks SE → Solopreneur | Product discontinued/rebranded in 2024 |
| 2026-05-30 | Upwork tiered → flat 10% | Changed May 2023 |
| 2026-05-30 | Harvest free plan reverted to "Yes" | Live confirmation: free plan still active |
| 2026-05-30 | Harvest paid $12 → $11/mo | Live confirmation |
| 2026-05-30 | Toggl paid $10 → $9/mo | Live confirmation |
| 2026-05-30 | Bonsai $21 → $25 (Essentials) | Restructured plans; contracts need Essentials |
| 2026-05-30 | Wave Pro $16 → $19/mo | Live confirmation |
| 2026-05-30 | PayPal 2.9%+$0.30 → 3.49%+$0.49 | Live confirmation: fees raised |
| 2026-05-30 | Wise "50+ currencies" → "40+" | Correction (live says 22 local bank details) |

---

## Items Still Requiring Manual Verification

| Platform | What to check | Why not confirmed |
|---|---|---|
| QuickBooks Solopreneur | Exact US monthly price | US pages timed out |
| Fiverr | 20% fee still current | 403 on pricing page |
| Upwork | 10% flat fee still current | 403 on pricing page |
