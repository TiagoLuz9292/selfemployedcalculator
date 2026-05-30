# Compare Pages Fix Plan
**Created:** 2026-05-30
**Source:** COMPARE-AUDIT.md — 13 issues across 7 pages
**File to edit:** `src/data/comparisons.ts`

---

## Fix 1 — `freshbooks-vs-quickbooks-self-employed` (Critical + Significant + Minor)

QuickBooks Self-Employed was discontinued in 2024 and migrated to QuickBooks Solopreneur.
FreshBooks Lite price changed from $17/mo to $19/mo. FreshBooks added mileage tracking in 2023.

### Changes:
| Field | Old | New |
|---|---|---|
| `title` | "FreshBooks vs QuickBooks for Freelancers" | "FreshBooks vs QuickBooks Solopreneur for Freelancers" |
| `entityB` | "QuickBooks Self-Employed" | "QuickBooks Solopreneur" |
| `description` | "…vs QuickBooks Self-Employed…" | "…vs QuickBooks Solopreneur…" |
| `keywords[1]` | "freshbooks vs quickbooks self employed" | "freshbooks vs quickbooks solopreneur" |
| `keywords[4]` | "quickbooks self employed review" | "quickbooks solopreneur review" |
| Row: Starting price — `a` | "$17/mo (Lite)" | "$19/mo (Lite)" |
| Row: Starting price — `b` | "$15/mo" | "$20/mo" |
| Row: Starting price — winner | "b" | "a" (FreshBooks now cheaper: $19 < $20) |
| Row: Mileage tracking — `a` | "No" | "Yes (mobile app)" |
| Row: Mileage tracking — winner | "b" | "tie" |
| FAQ[0] answer | "QuickBooks Self-Employed wins…" | "QuickBooks Solopreneur wins…" |
| FAQ[1] answer | "QuickBooks Self-Employed has a TurboTax…" | "QuickBooks Solopreneur has a TurboTax…" |
| FAQ[2] answer | "$17/month (Lite)… Plus plan at $30/month" | "$19/month (Lite)… Plus plan at $33/month" |
| FAQ[3] question | "Is QuickBooks Self-Employed the same as QuickBooks Online?" | "Is QuickBooks Solopreneur the same as QuickBooks Online?" |
| FAQ[3] answer | Full rewrite — QBSE discontinued, replaced by Solopreneur | See implementation |
| `summary` | "QuickBooks Self-Employed wins…" | "QuickBooks Solopreneur wins…" |
| `verdict` | Two instances of "QuickBooks Self-Employed" | "QuickBooks Solopreneur" |

---

## Fix 2 — `bonsai-vs-freshbooks` (Significant)

FreshBooks Lite is now $19/mo, not $17/mo.

### Changes:
| Field | Old | New |
|---|---|---|
| Row: Starting price — `b` | "$17/mo" | "$19/mo" |
| Row: Starting price — winner | "b" | "b" (Bonsai $21 > FreshBooks $19, winner unchanged) |
| FAQ[2] answer | "costs slightly more than FreshBooks Lite" | update phrasing to reflect $2 gap ($21 vs $19) |

---

## Fix 3 — `wise-vs-paypal-freelancers` (Moderate)

Wise supports 40+ currencies (not 50+). Local bank details available in 20+ currencies (not 10+).

### Changes:
| Field | Old | New |
|---|---|---|
| Row: Multi-currency account — `a` | "Yes (50+ currencies)" | "Yes (40+ currencies)" |
| FAQ[2] answer | "local bank details in 10+ currencies" | "local bank details in 20+ currencies" |

---

## Fix 4 — `freelance-vs-full-time-salary` (Minor)

Health insurance costs have risen. The $300-700/mo range understates 2026 US marketplace rates.

### Changes:
| Field | Old | New |
|---|---|---|
| Row: Health insurance — `a` | "Self-funded ($300-700/mo)" | "Self-funded ($400-900/mo)" |

---

## Fix 5 — `freshbooks-vs-wave` (Significant + Minor)

FreshBooks Lite is now $19/mo. Wave introduced a Pro paid tier in 2023 (~$16/mo) but the core free plan still exists.

### Changes:
| Field | Old | New |
|---|---|---|
| Row: Monthly cost — `a` | "$17/mo (Lite)" | "$19/mo (Lite)" |
| Row: Monthly cost — winner | "b" (Wave free wins) | "b" (unchanged — Wave free still wins vs $19) |
| FAQ[0] answer | Wave is purely free | Add mention: "Wave also offers a Pro tier (~$16/mo) with automated reminders and premium support, but the free tier covers all essential invoicing and accounting." |
| `summary` | "Wave is completely free" | "Wave's core plan is free" |
| `verdict` | "Wave is completely free" | "Wave's core plan is free" |

---

## Fix 6 — `fiverr-vs-upwork` (Critical + Minor)

Upwork changed to a flat 10% fee in May 2023 (removed old 20%/10%/5% tiered system).
Upwork's Connects bidding system (paid tokens per proposal) is not mentioned.

### Changes:
| Field | Old | New |
|---|---|---|
| Row: Platform fee — `b` | "90% (10% above $10k lifetime)" | "90% (flat 10% service fee)" |
| Row: Platform fee — winner | "b" | "b" (unchanged — Upwork 10% still beats Fiverr 20%) |
| **New row** (after Payment protection) | — | `{ feature: "Proposal bidding cost", a: "None (free to list gigs)", b: "Yes — Connects tokens required", winner: "a" }` |
| FAQ[1] Fiverr % answer | "higher than Upwork's 10% for top earners" | "higher than Upwork's flat 10% service fee" |
| FAQ[2] Upwork % answer | Full tiered structure (20%/10%/5%) — WRONG | Rewrite: Upwork charges a flat 10% on all earnings since May 2023 |
| `verdict` | "Long-term clients at $50-150/hr compound…" | Keep, but remove any implication of Upwork's tiered fee advantage |

---

## Fix 7 — `toggl-vs-harvest` (Minor)

Toggl free plan no longer has a 1-workspace limit. Harvest removed its free plan in 2023.

### Changes:
| Field | Old | New |
|---|---|---|
| Row: Free plan — `a` | "Yes (unlimited tracking, 1 workspace)" | "Yes (unlimited tracking)" |
| Row: Free plan — `b` | "Yes (1 seat, 2 projects)" | "No (free plan removed 2023)" |
| Row: Free plan — winner | "a" | "a" (unchanged) |
| FAQ[0] Toggl free: "up to 5 users" | verify current limit — keep as stated, note in FAQ it may vary |

---

## Implementation Order

1. Fix 1 (QBSE → Solopreneur) — biggest change, do first
2. Fix 6 (Upwork fees) — second critical fix
3. Fix 5 (FreshBooks/Wave) — FreshBooks price + Wave Pro tier
4. Fix 2 (Bonsai/FreshBooks price)
5. Fix 3 (Wise currencies)
6. Fix 4 (Health insurance range)
7. Fix 7 (Toggl/Harvest free plans)

---

## Items NOT fixed (require live price verification before touching)

- Deel `$49/contractor/mo` — ⚠️ verify at deel.com/pricing before updating
- Remote `$29/contractor/mo` — ⚠️ verify at remote.com/pricing before updating
- Bonsai `$21/mo` — ⚠️ verify at hellobonsai.com/pricing
- Toggl paid plan `$10/seat/mo` — ⚠️ verify at toggl.com/track/pricing
- Harvest paid plan `$12/seat/mo` — ⚠️ verify at getharvest.com/pricing
