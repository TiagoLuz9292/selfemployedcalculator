# 2026 US Tax Values — Verified ✅
**Verified:** 2026-05-30 via ChatGPT deep search (IRS Rev. Proc. 2025-32 + SSA + official sources)
**Status:** All values confirmed and implemented in the codebase.

## Confirmed 2026 Values

| Item | 2025 | 2026 | Source |
|---|---|---|---|
| TCJA status | Active | Extended by P.L. 119-21 (One Big Beautiful Bill, signed July 4 2025) | Congressional record |
| Bracket rates | 10/12/22/24/32/35/37% | Same | IRS Rev. Proc. 2025-32 |
| 10% bracket top — single | $11,925 | $12,400 | IRS Rev. Proc. 2025-32 |
| 12% bracket top — single | $48,475 | $50,400 | IRS Rev. Proc. 2025-32 |
| 22% bracket top — single | $103,350 | $105,700 | IRS Rev. Proc. 2025-32 |
| 24% bracket top — single | $197,300 | $201,775 | IRS Rev. Proc. 2025-32 |
| 32% bracket top — single | $250,525 | $256,225 | IRS Rev. Proc. 2025-32 |
| 35% bracket top — single | $626,350 | $640,600 | IRS Rev. Proc. 2025-32 |
| 10% bracket top — married | $23,850 | $24,800 | IRS Rev. Proc. 2025-32 |
| 12% bracket top — married | $96,950 | $100,800 | IRS Rev. Proc. 2025-32 |
| 22% bracket top — married | $206,700 | $211,400 | IRS Rev. Proc. 2025-32 |
| 24% bracket top — married | $394,600 | $403,550 | IRS Rev. Proc. 2025-32 |
| 32% bracket top — married | $501,050 | $512,450 | IRS Rev. Proc. 2025-32 |
| 35% bracket top — married | $751,600 | $768,700 | IRS Rev. Proc. 2025-32 |
| Standard deduction — single | $15,000 | $16,100 | IRS Rev. Proc. 2025-32 |
| Standard deduction — married | $30,000 | $32,200 | IRS Rev. Proc. 2025-32 |
| SE tax rate | 15.3% | 15.3% (unchanged) | IRS Schedule SE |
| 92.35% adjustment factor | 0.9235 | 0.9235 (unchanged) | IRS Schedule SE |
| SS wage base | $176,100 | $184,500 | SSA announcement |
| Additional Medicare Tax (0.9%) | $200k/$250k thresholds | Same (not inflation-indexed) | IRS / ACA |
| SEP-IRA annual limit | $70,000 | $72,000 | IRS Rev. Proc. 2025-32 |
| Solo 401(k) employee deferral | $23,500 | $24,500 | IRS Rev. Proc. 2025-32 |
| Solo 401(k) catch-up 50-59 & 64+ | $7,500 | $8,000 | IRS Rev. Proc. 2025-32 |
| Solo 401(k) catch-up 60-63 (SECURE 2.0) | $11,250 | $11,250 (unchanged) | IRS |
| SIMPLE IRA employee limit | $16,500 | $17,000 | IRS Rev. Proc. 2025-32 |
| SIMPLE IRA catch-up 50+ | $3,500 | $4,000 | IRS Rev. Proc. 2025-32 |
| SIMPLE IRA catch-up 60-63 (SECURE 2.0) | — | $5,250 (new 2026) | IRS |
| Q1 due date | Apr 15 | Apr 15 | IRS |
| Q2 due date | Jun 16 (Jun 15 was Sunday) | **Jun 15** (Monday in 2026) | IRS |
| Q3 due date | Sep 15 | Sep 15 | IRS |
| Q4 due date | Jan 15, 2026 | Jan 15, 2027 | IRS |
| UK VAT standard rate | 20% | 20% (unchanged) | HMRC |
| UK VAT registration threshold | £90,000 | £90,000 (unchanged) | HMRC |
| UK Late Payment statutory rate | 8% + BoE base | 8% + BoE base (unchanged) | UK Late Payment Act |
| Bank of England base rate | — | 3.75% as of May 2026 | Bank of England |
| UK statutory late payment rate | — | 11.75% (8% + 3.75%) | Derived |

---

# Original ChatGPT Deep Search Prompt (for future re-verification)

Use this prompt with ChatGPT using the **"Search"** or **"Deep Research"** option.
Paste the block below as your message.

---

## PROMPT (copy everything below this line)

---

I am building a freelance tax calculator website and need verified, official 2026 IRS tax
values for the United States. Please search the IRS website (irs.gov), official IRS
Revenue Procedures, and authoritative tax sources to confirm the exact current values for
each item listed below. For each item, state: the confirmed value, the IRS source document
or URL, and whether the value changed from 2025 to 2026.

**I need answers to ALL of the following:**

---

### 1. TCJA Extension Status
Was the Tax Cuts and Jobs Act (TCJA) extended beyond its scheduled expiration of
December 31, 2025? Specifically:
- Are the 2026 federal income tax brackets still 10 / 12 / 22 / 24 / 32 / 35 / 37%?
- Or did the brackets revert to pre-2018 rates (10 / 15 / 25 / 28 / 33 / 35 / 39.6%)?
- What legislation extended or replaced the TCJA, and when was it signed?

### 2. 2026 Federal Income Tax Brackets
Please give me the exact 2026 tax brackets for:
- **Single filers** — the income thresholds for each bracket (10%, 12%, 22%, 24%, 32%, 35%, 37%)
- **Married Filing Jointly** — the income thresholds for each bracket

For reference, the 2025 brackets I currently have hardcoded are:
Single: 10% up to $11,925 | 12% up to $48,475 | 22% up to $103,350 | 24% up to $197,300 |
32% up to $250,525 | 35% up to $626,350 | 37% above $626,350

Married: 10% up to $23,850 | 12% up to $96,950 | 22% up to $206,700 | 24% up to $394,600 |
32% up to $501,050 | 35% up to $751,600 | 37% above $751,600

### 3. 2026 Standard Deduction
What is the standard deduction for 2026 for:
- Single filers
- Married Filing Jointly

For reference, 2025 values: Single = $15,000 | Married = $30,000

### 4. Self-Employment (SE) Tax Rate
Confirm: is the self-employment tax rate still 15.3% for 2026?
- Social Security portion: 12.4%
- Medicare portion: 2.9%
- Is the 92.35% net earnings adjustment still the correct multiplier?

### 5. Social Security Wage Base for 2026
What is the Social Security wage base for 2026?
(This is the income ceiling above which the 12.4% Social Security tax no longer applies —
only the 2.9% Medicare tax continues above this threshold.)
For reference, the 2025 wage base was $176,100.

### 6. Additional Medicare Tax
Confirm: is the Additional Medicare Tax (0.9%) still in effect for 2026?
- Single filers: applies above what income threshold?
- Married Filing Jointly: applies above what income threshold?
For reference, 2025 thresholds: Single = $200,000 | Married = $250,000

### 7. Retirement Account Contribution Limits for 2026
Please confirm the exact 2026 IRS limits for each account type:

**SEP-IRA**
- Annual defined contribution limit (the ceiling for employer/SEP contributions)
- For reference, 2025 limit: $70,000

**Solo 401(k)**
- Employee elective deferral limit
- For reference, 2025 limit: $23,500
- Standard catch-up contribution limit (ages 50–59 and 64+)
- For reference, 2025 limit: $7,500
- Enhanced catch-up limit for ages 60–63 (SECURE 2.0)
- For reference, 2025 limit: $11,250
- Total combined limit (employee + employer)
- For reference, 2025 limit: $70,000 (plus catch-up)

**SIMPLE IRA**
- Employee contribution limit
- For reference, 2025 limit: $16,500
- Catch-up contribution limit (age 50+)
- For reference, 2025 limit: $3,500

### 8. SEP-IRA Contribution Formula for Sole Proprietors
Confirm the correct IRS formula for calculating the maximum SEP-IRA contribution
for a self-employed sole proprietor (not an S-corp or partnership):

I believe the correct formula from IRS Publication 560 is:
1. SE tax = net self-employment income × 0.9235 × 0.153
2. Compensation = net income − (SE tax ÷ 2)
3. Max SEP contribution = compensation × 20% (which equals 25% ÷ 1.25, resolving the
   circular formula), capped at the annual limit

Is this formula still correct for 2026? The effective rate should be approximately
18.587% of net self-employment income. Please confirm or correct.

### 9. Quarterly Estimated Tax Due Dates for 2026
What are the exact quarterly estimated tax payment due dates for tax year 2026?
(These sometimes shift when a standard date falls on a weekend or holiday.)
- Q1 2026:
- Q2 2026:
- Q3 2026:
- Q4 2026 (paid in January 2027):

### 10. UK VAT — Any Changes?
Is the UK standard VAT rate still 20% in 2026?
Is the UK VAT registration threshold still £90,000?

### 11. UK Late Payment Statutory Interest
Is the UK Late Payment of Commercial Debts (Interest) Act statutory interest rate
still calculated as 8% above the Bank of England base rate?
What is the current Bank of England base rate as of May 2026?
(So I can give users a realistic default for the late payment calculator.)

---

Please provide a structured answer covering all 11 items, with sources where possible.
