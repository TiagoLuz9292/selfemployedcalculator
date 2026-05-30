# ChatGPT Deep Search Prompt — 2026 US Tax Values

Use this prompt with ChatGPT using the **"Search"** or **"Deep Research"** option to get
current, verified 2026 IRS values. Paste the entire block below as your message.

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
