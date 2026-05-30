# Affiliate Program Setup — FreelanceCalc

All 5 affiliate links in `src/data/affiliates.ts` are currently placeholder homepage URLs.
Every click generates zero revenue until replaced with real tracking links.

---

## Programs to Apply For

### 1. FreshBooks
- **Apply at:** https://www.freshbooks.com/partners/affiliates
- **Network:** Impact (formerly Impact Radius)
- **Commission:** ~$10 per free trial signup, up to $200 per paid conversion (varies by tier)
- **Used on pages:** invoice calculator, quarterly tax, self-employment tax, comparison pages
- **Notes:** Approval is quick (1-3 days). They accept new sites but ask for traffic estimates — be honest, say you're newly launched with SEO content targeting freelancers.

### 2. QuickBooks (Intuit)
- **Apply at:** https://www.intuit.com/partners/affiliate-program/
- **Network:** Commission Junction (CJ Affiliate)
- **Commission:** ~$10–15 per trial, varies by product
- **Used on pages:** tax calculators, comparison pages (freshbooks-vs-quickbooks)
- **Notes:** Intuit is stricter — they may want to see traffic before approving. Apply anyway and reapply after 30 days if rejected.

### 3. Bonsai
- **Apply at:** https://www.hellobonsai.com/affiliate
- **Commission:** 25% recurring for 12 months on paid plans
- **Used on pages:** invoicing, contract, client management related pages
- **Notes:** Recurring commission makes this the highest long-term value program. Apply first.

### 4. Wise (formerly TransferWise)
- **Apply at:** https://wise.com/affiliates
- **Network:** Wise runs its own in-house program
- **Commission:** Fixed fee per verified customer (varies by region, typically $30–50)
- **Used on pages:** VAT calculator, invoice calculator, international freelancer content
- **Notes:** Strong fit for UK/EU freelancers. Easy approval process.

### 5. Deel
- **Apply at:** https://www.deel.com/partners/affiliates
- **Commission:** High (B2B product — $100–500 per converted client)
- **Used on pages:** IR35 glossary page, international contractor comparison pages
- **Notes:** Deel targets businesses hiring contractors, not freelancers themselves. Lower click volume but high value per conversion. Apply after getting some traffic.

---

## After Approval — What to Do

1. Get your unique tracking URL from each program's dashboard
2. Open `src/data/affiliates.ts`
3. Replace each placeholder URL with your tracking URL:

```ts
export const affiliateLinks: Record<string, string> = {
  freshbooks: "https://www.freshbooks.com/partner/YOUR_ID",  // replace this
  quickbooks: "https://quickbooks.intuit.com/?ref=YOUR_ID",  // replace this
  bonsai:     "https://www.hellobonsai.com/r/YOUR_ID",        // replace this
  wise:       "https://wise.com/invite/YOUR_ID",              // replace this
  deel:       "https://www.deel.com/signup?ref=YOUR_ID",      // replace this
};
```

4. The `rel="sponsored"` attribute is already on all affiliate links — do not remove it.
5. Push and deploy. No other code changes needed.

---

## Priority Order

Apply in this order — highest commission value first:

1. **Bonsai** — recurring 25% commission, quick approval
2. **FreshBooks** — most pages reference it, fast approval
3. **Wise** — easy approval, good fit for international users
4. **QuickBooks** — slower approval, but high-volume comparisons reference it
5. **Deel** — apply after 30 days of traffic
