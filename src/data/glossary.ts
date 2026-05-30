export interface GlossaryTerm {
  slug: string;
  term: string;
  shortDef: string;
  body: string;
  relatedSlugs?: string[];
  relatedTerms?: string[];
  relatedComparisonSlugs?: string[];
  keywords?: string[];
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    slug: "hourly-rate",
    term: "Hourly Rate",
    shortDef: "The amount a freelancer charges per hour of work, calculated to cover expenses, taxes, and desired income.",
    keywords: ["freelance hourly rate", "how to calculate hourly rate freelance", "what hourly rate should I charge"],
    relatedSlugs: ["freelance-hourly-rate-calculator", "day-rate-calculator", "billable-hours-calculator"],
    relatedTerms: ["day-rate", "billable-hours", "value-based-pricing"],
    relatedComparisonSlugs: ["hourly-vs-project-pricing", "freelance-vs-full-time-salary"],
    body: `## What Is a Freelance Hourly Rate?

A freelance hourly rate is the amount you charge clients for each hour of billable work. Unlike an employee salary, your hourly rate must cover not just your income but also taxes, business expenses, unpaid vacation time, and a profit buffer.

## How to Calculate Your Hourly Rate

The basic formula:

> **Hourly Rate = (Annual Income Goal + Expenses) ÷ Annual Billable Hours**

- **Annual income goal**: what you want to take home after taxes
- **Business expenses**: software, equipment, insurance, professional development
- **Annual billable hours**: total working hours minus vacation, sick days, and admin time

For example, if you want $70,000 take-home, have $10,000 in expenses, and can bill 1,200 hours per year, your minimum rate is $80,000 ÷ 1,200 = **$67/hour**.

## Common Mistakes

- **Forgetting taxes**: as a self-employed person you pay self-employment tax (15.3% in the US) on top of income tax. Your rate must absorb this.
- **Overestimating billable hours**: most freelancers can realistically bill 60-75% of their working time. The rest goes to admin, business development, and unpaid projects.
- **Ignoring profit**: a business without profit has no buffer for slow months. Add 15-20% above break-even.

## When to Raise Your Rate

Review your rate at least annually. Raise it when: your skills have improved significantly, your demand exceeds your capacity, or your cost of living has increased.`,
  },
  {
    slug: "day-rate",
    term: "Day Rate",
    shortDef: "A fixed price charged per day of work, commonly used by consultants and contractors on project-based engagements.",
    keywords: ["day rate freelance", "consultant day rate", "how to calculate day rate"],
    relatedSlugs: ["day-rate-calculator", "freelance-hourly-rate-calculator", "retainer-rate-calculator"],
    relatedTerms: ["hourly-rate", "retainer", "billable-hours"],
    relatedComparisonSlugs: ["hourly-vs-project-pricing"],
    body: `## What Is a Day Rate?

A day rate (also called a daily rate) is a fixed fee charged for a full day of work, typically 7-8 hours. It's the standard billing unit for consultants, contractors, and interim managers who work on-site or on time-boxed projects.

## Day Rate vs Hourly Rate

Day rates offer several advantages over hourly billing:
- **Simpler invoicing**: no need to track every hour
- **Higher effective rate**: clients often pay more per hour for the certainty of a day commitment
- **Better for on-site work**: avoids awkward time-tracking in client environments

A typical conversion: **Day Rate = Hourly Rate × 7.5 to 8 hours**

## How to Set Your Day Rate

Start with your hourly rate and multiply by your working day length. Many consultants add a 10-20% premium to the hourly equivalent to reflect the commitment and simplicity of day-rate billing.

Example: $80/hour × 8 hours = $640 base day rate. With a 15% premium = **$736/day**.

## Day Rate Norms by Industry

Day rates vary significantly by sector. Senior technology consultants in the UK typically command £500-900/day. In the US, independent management consultants often charge $800-2,000/day. Always research market rates in your specific niche.`,
  },
  {
    slug: "retainer",
    term: "Retainer",
    shortDef: "A recurring monthly payment from a client in exchange for guaranteed access to a set number of hours or deliverables.",
    keywords: ["freelance retainer", "retainer agreement freelance", "monthly retainer fee"],
    relatedSlugs: ["retainer-rate-calculator", "client-profitability-calculator", "freelance-hourly-rate-calculator"],
    relatedTerms: ["day-rate", "client-profitability", "utilization-rate"],
    relatedComparisonSlugs: ["hourly-vs-project-pricing", "bonsai-vs-freshbooks"],
    body: `## What Is a Freelance Retainer?

A retainer is a recurring arrangement where a client pays a fixed monthly fee in exchange for a guaranteed block of your time or a set of deliverables. It's one of the most valuable income structures for freelancers because it provides predictable, recurring revenue.

## Types of Retainers

**Time-based retainer**: Client pays for X hours per month. Unused hours may roll over or expire — agree upfront.

**Deliverable-based retainer**: Client pays for specific recurring outputs (e.g., 4 blog posts/month, weekly social media management). Hours are not tracked.

**On-call retainer**: Client pays a smaller fee for priority access and response time, with additional hourly billing for actual work.

## How to Price a Retainer

Most freelancers apply a 10-20% discount to their standard hourly rate in exchange for the payment security:

> **Monthly Retainer = (Hourly Rate × Monthly Hours) × (1 - Discount %)**

Example: $80/hr × 20 hrs × 0.9 (10% discount) = **$1,440/month**

## Retainer Best Practices

- Always define what happens to unused hours (expiry is most common)
- Require 30-60 day notice for cancellation
- Review and renegotiate annually
- Get it in writing — a retainer contract protects both parties`,
  },
  {
    slug: "utilization-rate",
    term: "Utilization Rate",
    shortDef: "The percentage of total working time spent on billable client work, a key measure of freelance business efficiency.",
    keywords: ["freelance utilization rate", "billable utilization rate", "what is a good utilization rate freelancer"],
    relatedSlugs: ["utilization-rate-calculator", "billable-hours-calculator", "profit-margin-calculator"],
    relatedTerms: ["billable-hours", "break-even", "retainer"],
    relatedComparisonSlugs: ["hourly-vs-project-pricing", "toggl-vs-harvest"],
    body: `## What Is Utilization Rate?

Utilization rate measures what percentage of your available working time is spent on billable client work. It's one of the most important KPIs for any freelance business.

> **Utilization Rate = (Billable Hours ÷ Total Working Hours) × 100**

Example: If you worked 160 hours in a month and billed 120 of them, your utilization rate is **75%**.

## What Is a Good Utilization Rate?

Industry benchmarks for freelancers:
- **Below 50%**: Danger zone — you're spending most time on non-billable work
- **50-65%**: Below average — room for significant improvement
- **65-75%**: Good — sustainable for most freelancers
- **75-85%**: Excellent — high efficiency, may risk burnout without buffer
- **Above 85%**: Very high — little room for business development or learning

## Why Utilization Rate Matters

A low utilization rate means you're working many hours but billing only a fraction of them. If you work 200 hours but bill only 80, you're effectively earning at 40% of your stated hourly rate.

## How to Improve Utilization Rate

- **Productize services**: fixed-scope offerings reduce non-billable proposal time
- **Set admin blocks**: batch all admin tasks into defined time slots
- **Use retainers**: guaranteed monthly billing without new sales cycles
- **Track your time**: you can't improve what you don't measure`,
  },
  {
    slug: "billable-hours",
    term: "Billable Hours",
    shortDef: "Hours worked on client projects that can be charged to the client, as opposed to non-billable hours spent on admin, sales, or professional development.",
    keywords: ["billable hours freelancer", "what are billable hours", "how to track billable hours"],
    relatedSlugs: ["billable-hours-calculator", "utilization-rate-calculator", "freelance-hourly-rate-calculator"],
    relatedTerms: ["utilization-rate", "hourly-rate", "break-even"],
    relatedComparisonSlugs: ["hourly-vs-project-pricing", "toggl-vs-harvest"],
    body: `## What Are Billable Hours?

Billable hours are the hours you can legitimately charge to a client. They typically include time spent directly on their project — designing, writing, coding, consulting, reviewing, or communicating about the project.

Non-billable hours include: business development, networking, admin tasks, invoicing, professional development, and internal meetings.

## Calculating Your Annual Billable Hours Target

> **Annual Billable Hours = (Working Days/Year) × (Hours/Day) × (1 - Admin Time %)**

Example:
- 52 weeks × 5 days = 260 working days
- Minus 15 vacation + 5 sick days = 240 working days
- 240 days × 8 hours = 1,920 available hours
- Minus 25% admin time = **1,440 billable hours/year**
- Divided by 48 working weeks = **30 billable hours/week**

## Setting a Realistic Billable Hours Target

Most freelancers can bill 25-35 hours per week sustainably. Going above 40 billable hours weekly for extended periods leads to burnout and leaves no time for business development.

## Tracking Billable Hours

Use time tracking tools (Toggl, Harvest, Clockify) even on fixed-price projects — this helps you understand the true cost of your work and improve future quotes.`,
  },
  {
    slug: "profit-margin",
    term: "Profit Margin",
    shortDef: "The percentage of revenue that remains as profit after deducting all business expenses — a core measure of freelance business health.",
    keywords: ["freelance profit margin", "what is a good profit margin freelancer", "how to calculate profit margin freelance"],
    relatedSlugs: ["profit-margin-calculator", "break-even-calculator", "client-profitability-calculator"],
    relatedTerms: ["overhead", "break-even", "net-income"],
    relatedComparisonSlugs: ["hourly-vs-project-pricing"],
    body: `## What Is Profit Margin for Freelancers?

Profit margin measures how much of your revenue becomes actual profit after expenses. Two key types:

**Gross Profit Margin**: Revenue minus direct costs (e.g., subcontractors, project-specific expenses)
> Gross Margin = (Revenue - COGS) ÷ Revenue × 100

**Net Profit Margin**: Revenue minus all expenses including overhead
> Net Margin = (Revenue - All Expenses) ÷ Revenue × 100

## What Is a Good Profit Margin for Freelancers?

Because most freelancers have low overhead compared to product businesses, healthy margins are higher:
- **Below 20% net**: Concerning — most revenue is consumed by costs
- **20-40% net**: Average for a freelance services business
- **40-60% net**: Good — your pricing covers costs with healthy surplus
- **Above 60% net**: Excellent — typical for high-value consulting or productized services

## Why Low Margins Are Dangerous

A freelancer with a 15% net margin earning $100,000 gross keeps only $15,000 in profit. After taxes and personal drawings, there's almost nothing for business investment or emergencies. Raising rates or cutting unnecessary expenses is critical.

## Improving Your Profit Margin

- **Raise rates**: a 10% rate increase on existing work costs nothing to deliver
- **Reduce subcontractor use**: outsourcing work at thin margins eats profit
- **Eliminate unused subscriptions**: SaaS tools accumulate quickly
- **Productize services**: fixed-scope offerings improve efficiency and margin`,
  },
  {
    slug: "self-employment-tax",
    term: "Self-Employment Tax",
    shortDef: "The 15.3% US tax paid by freelancers covering both the employer and employee portions of Social Security and Medicare.",
    keywords: ["self employment tax", "SE tax freelancer", "self employed tax rate", "15.3 self employment tax"],
    relatedSlugs: ["self-employment-tax-calculator", "quarterly-tax-calculator", "freelance-take-home-pay-calculator"],
    relatedTerms: ["quarterly-estimated-tax", "take-home-pay", "net-income"],
    relatedComparisonSlugs: ["freshbooks-vs-quickbooks-self-employed", "freelance-vs-full-time-salary"],
    body: `## What Is Self-Employment Tax?

In the US, self-employment (SE) tax is a 15.3% tax that covers Social Security (12.4%) and Medicare (2.9%). As an employee, you pay half (7.65%) and your employer pays the other half. As a freelancer, you pay both halves yourself.

## How It's Calculated

SE tax applies to 92.35% of your net self-employment income (a built-in deduction for the "employer equivalent" portion):

> SE Tax = Net Earnings × 0.9235 × 0.153

Example: $60,000 net earnings × 0.9235 × 0.153 = **$8,478 in SE tax**

## The SE Tax Deduction

You can deduct half of your SE tax from your gross income, reducing your taxable income for federal income tax purposes:

> Deductible Amount = SE Tax ÷ 2 = $4,239 (in the example above)

## SE Tax Thresholds

- Social Security tax (12.4%) applies only up to the wage base limit ($168,600 in 2024)
- Medicare (2.9%) applies to all earnings
- An additional 0.9% Medicare surtax applies to income above $200,000 (single filers)

## Quarterly Payments

SE tax is paid as part of your quarterly estimated tax payments. Missing quarterly deadlines can result in IRS underpayment penalties.`,
  },
  {
    slug: "quarterly-estimated-tax",
    term: "Quarterly Tax",
    shortDef: "Estimated tax payments made four times per year by freelancers to cover income and self-employment tax owed to the IRS.",
    keywords: ["quarterly estimated tax freelancer", "how to pay quarterly taxes", "quarterly tax due dates", "IRS quarterly payments"],
    relatedSlugs: ["quarterly-tax-calculator", "self-employment-tax-calculator", "emergency-fund-calculator"],
    relatedTerms: ["self-employment-tax", "take-home-pay", "emergency-fund"],
    relatedComparisonSlugs: ["freshbooks-vs-quickbooks-self-employed"],
    body: `## What Are Quarterly Estimated Tax Payments?

Unlike employees who have taxes withheld from each paycheck, freelancers must pay estimated taxes directly to the IRS (and often to their state) four times per year. These payments cover income tax and self-employment tax on income earned in each quarter.

## Who Must Pay Quarterly?

You must pay quarterly estimated taxes if you expect to owe at least $1,000 in federal taxes for the year after subtracting withholding and credits.

## Due Dates (2024-2025)

| Quarter | Income Covers | Due Date |
|---------|---------------|----------|
| Q1 | January 1 – March 31 | April 15 |
| Q2 | April 1 – May 31 | June 15 |
| Q3 | June 1 – August 31 | September 15 |
| Q4 | September 1 – December 31 | January 15 |

## How Much to Pay

Use the **safe harbor rule** to avoid underpayment penalties:
- Pay 100% of last year's tax liability (110% if prior year AGI exceeded $150,000)
- OR pay 90% of the current year's estimated tax liability

The safe harbor based on prior year is easiest to calculate: divide last year's total tax bill by 4.

## How to Pay

Use the IRS Direct Pay system at irs.gov/directpay or set up an EFTPS account for scheduled payments.`,
  },
  {
    slug: "vat",
    term: "VAT",
    shortDef: "Value Added Tax — a consumption tax added to the price of goods and services at each stage of production, collected by businesses and remitted to tax authorities.",
    keywords: ["VAT freelancer", "what is VAT", "do freelancers charge VAT", "VAT registration threshold"],
    relatedSlugs: ["vat-calculator-freelancer", "invoice-total-calculator", "freelance-take-home-pay-calculator"],
    relatedTerms: ["invoice", "take-home-pay", "ir35"],
    relatedComparisonSlugs: ["wise-vs-paypal-freelancers", "freshbooks-vs-quickbooks-self-employed"],
    body: `## What Is VAT?

Value Added Tax (VAT) is a consumption tax levied on goods and services. Unlike US sales tax (which is only charged at final sale), VAT is collected at every stage of the supply chain, with businesses reclaiming the VAT they paid on their inputs.

In the UK the standard VAT rate is 20%. EU rates vary: 19% (Germany), 20% (France), 23% (Ireland). Other countries have their own systems (e.g. GST in Australia/Canada).

## When Must Freelancers Register for VAT?

**UK**: You must register when your taxable turnover exceeds £90,000 in any 12-month period (2024/25 threshold).

**EU**: Each country has its own registration threshold. Cross-border B2C sales above €10,000/year may require EU VAT registration or use of the One Stop Shop (OSS) scheme.

**US**: No federal VAT. State sales tax may apply depending on your state and the nature of your services.

## VAT on Invoices

Once registered, you must:
1. Add VAT to your invoice (e.g., £1,000 + £200 VAT = £1,200 total)
2. Show your VAT registration number on invoices
3. File VAT returns (typically quarterly) and remit the collected VAT

## Reverse Charge for International Clients

When billing B2B clients in other EU countries, the **reverse charge** mechanism applies — you invoice without VAT, and the client self-accounts for VAT. This simplifies cross-border billing significantly.`,
  },
  {
    slug: "take-home-pay",
    term: "Take-Home Pay",
    shortDef: "The net income a freelancer keeps after paying all taxes, business expenses, health insurance, and other deductions from gross revenue.",
    keywords: ["freelance take home pay", "freelancer net income after taxes", "self employed take home pay calculator"],
    relatedSlugs: ["freelance-take-home-pay-calculator", "self-employment-tax-calculator", "freelance-income-goal-calculator"],
    relatedTerms: ["self-employment-tax", "net-income", "quarterly-estimated-tax"],
    relatedComparisonSlugs: ["freelance-vs-full-time-salary"],
    body: `## What Is Freelance Take-Home Pay?

Take-home pay is what you actually keep from your freelance income after all deductions. For freelancers, the gap between gross revenue and net take-home is typically much larger than for employees.

## What Reduces Your Take-Home Pay?

**Business expenses** (reduce taxable income):
- Software, subscriptions, equipment
- Home office deduction
- Professional development
- Health insurance premiums (deductible if self-employed)

**Self-employment tax** (15.3% of net earnings × 0.9235)

**Federal income tax** (10-37% depending on income and filing status)

**State income tax** (0-13.3% depending on state)

**Other deductions**:
- Health insurance (if not deducted above the line)
- Retirement contributions
- Quarterly payment shortfalls

## A Rough Rule of Thumb

As a general starting point: set aside **25-35% of every payment** you receive for taxes. The exact percentage depends on your income level, state, and deductions.

## Calculating Your True Take-Home

Use our take-home pay calculator to input your specific situation — gross income, business expenses, federal and state tax rates, health insurance, and retirement contributions — and see your net annual and monthly take-home.`,
  },
  {
    slug: "break-even",
    term: "Break-even Point",
    shortDef: "The minimum revenue or billable hours a freelancer must achieve to cover all business costs without profit or loss.",
    keywords: ["freelance break even point", "break even analysis freelancer", "minimum revenue freelancer"],
    relatedSlugs: ["break-even-calculator", "profit-margin-calculator", "billable-hours-calculator"],
    relatedTerms: ["overhead", "profit-margin", "billable-hours"],
    relatedComparisonSlugs: ["freelance-vs-full-time-salary"],
    body: `## What Is a Freelance Break-even Point?

Your break-even point is the minimum revenue you need to cover all your fixed costs — the point where your business makes neither profit nor loss. Understanding this number is essential for setting rates and knowing when you can afford to turn down work.

## Break-even Formula

> **Break-even Revenue = Fixed Costs ÷ (1 - Variable Cost %)**

Example:
- Monthly fixed costs: $3,000 (rent, software, insurance, etc.)
- Variable cost rate: 10% (e.g., payment processing fees, project-specific expenses)
- Break-even revenue = $3,000 ÷ 0.9 = **$3,333/month**

## Break-even in Billable Hours

If your hourly rate is $75:
> Break-even Hours = $3,333 ÷ $75 = **44.4 hours/month** ≈ 11 hours/week

## Why Break-even Matters

If you don't know your break-even, you might take on low-paying work that keeps you busy but doesn't actually cover your costs. Knowing your break-even helps you:
- Set a floor rate below which you won't work
- Evaluate whether a slow month is a financial crisis or merely inconvenient
- Plan how many hours/clients you need at minimum

## Fixed vs Variable Costs

**Fixed costs**: don't change with output — rent, insurance, subscriptions, accountant fees
**Variable costs**: scale with revenue — payment processing (2-3%), subcontractor costs, project expenses`,
  },
  {
    slug: "value-based-pricing",
    term: "Value-Based Pricing",
    shortDef: "A pricing strategy where you charge based on the business value or ROI your work creates for the client, rather than hours spent.",
    keywords: ["value based pricing freelance", "how to charge based on value", "value based fees consultant"],
    relatedSlugs: ["value-based-pricing-calculator", "project-quote-calculator", "freelance-hourly-rate-calculator"],
    relatedTerms: ["hourly-rate", "scope-creep", "client-profitability"],
    relatedComparisonSlugs: ["hourly-vs-project-pricing"],
    body: `## What Is Value-Based Pricing?

Value-based pricing means setting your fee based on the economic value you create for the client rather than the time you spend creating it. If your SEO work generates $200,000 in new revenue for a client, charging $2,000 (1% of value) is arguably underpriced, while charging $20,000 (10%) is justified by the ROI.

## How to Calculate a Value-Based Price

The basic formula:

> **Project Price = Client ROI × Value Capture %**

Common value capture rates: 5-20% depending on certainty of ROI, competitive intensity, and your track record.

Example: Client expects $100,000 in additional revenue from your marketing campaign. At 15% capture: **$15,000 project price**.

## How to Have the Value Conversation

1. **Ask the client what success looks like** — what's the business outcome they're trying to achieve?
2. **Quantify the opportunity** — how much revenue, cost savings, or risk reduction is at stake?
3. **Anchor to value before quoting** — establish the ROI framing before discussing price
4. **Present a range** — offer 2-3 options at different investment levels with different scope

## When Value-Based Pricing Works Best

- Measurable business outcomes (revenue, leads, cost savings)
- Strong track record you can point to
- Sophisticated clients who think in ROI terms
- Work with large leverage (one piece of code used by thousands of users)`,
  },
  {
    slug: "emergency-fund",
    term: "Emergency Fund",
    shortDef: "A cash reserve set aside to cover essential living expenses during income gaps, typically 3-6 months of expenses for employees and 6-12 months for freelancers.",
    keywords: ["emergency fund freelancer", "how much emergency fund freelancer", "self employed emergency fund"],
    relatedSlugs: ["emergency-fund-calculator", "savings-rate-calculator", "break-even-calculator"],
    relatedTerms: ["quarterly-estimated-tax", "overhead", "break-even"],
    relatedComparisonSlugs: ["freelance-vs-full-time-salary"],
    body: `## What Is an Emergency Fund?

An emergency fund is a liquid savings reserve kept separate from business accounts, used only for genuine financial emergencies — unexpected expenses or income gaps that could otherwise derail your finances.

## Why Freelancers Need a Larger Emergency Fund

The standard advice for employees is 3-6 months of expenses. For freelancers, **6-12 months** is more appropriate because:
- Income is irregular and can drop to zero suddenly
- There's no unemployment insurance for most self-employed individuals
- Business emergencies (laptop failure, losing a major client) and personal emergencies can hit simultaneously
- Finding new clients or closing new contracts takes time

## How Much Do You Need?

> **Target Fund = Monthly Essential Expenses × Months of Coverage**

Include in your monthly expenses: rent/mortgage, food, utilities, minimum debt payments, health insurance, essential business costs. Exclude discretionary spending.

If your monthly essentials are $3,500 and you want 6 months of coverage: **$21,000 target**.

## Where to Keep Your Emergency Fund

Keep it in a high-yield savings account (HYSA) — separate from your checking account so it's not tempting to spend, but accessible within 1-3 business days. Current rates (2024) are often 4-5% APY.

## How to Build It

Start with 1 month as your initial goal. Once the business is stable and you have consistent income, aim for 3 months, then 6. Direct a fixed percentage of every payment received (e.g., 10%) into the emergency fund until fully funded.`,
  },
  {
    slug: "late-payment-interest",
    term: "Late Payment Interest",
    shortDef: "Interest charged on overdue invoices, calculated as an annual percentage of the outstanding amount applied to the number of days past the due date.",
    keywords: ["late payment interest freelancer", "how to charge interest on late invoices", "late payment law UK"],
    relatedSlugs: ["late-payment-interest-calculator", "invoice-total-calculator", "client-profitability-calculator"],
    relatedTerms: ["invoice", "client-profitability", "scope-creep"],
    relatedComparisonSlugs: ["bonsai-vs-freshbooks", "wise-vs-paypal-freelancers"],
    body: `## What Is Late Payment Interest?

Late payment interest is the additional charge you can apply to invoices that remain unpaid after the agreed payment term. It compensates you for the financial cost of being paid late and incentivizes prompt payment.

## Legal Framework

**UK**: Under the Late Payment of Commercial Debts (Interest) Act 1998, businesses can claim statutory interest of **8% above the Bank of England base rate** on unpaid B2B invoices. In 2024, with the base rate at ~5.25%, this means a statutory rate of ~13.25%.

**US**: No single federal law governs late payment interest. Most states allow businesses to charge interest on overdue invoices if the rate is stated in the contract. Common practice is 1.5%/month (18% annually) or the maximum allowed by state law.

**EU**: Under the Late Payments Directive, businesses can charge interest of 8% above the ECB reference rate.

## How to Charge Late Payment Interest

> **Interest = Invoice Amount × (Annual Rate ÷ 365) × Days Overdue**

Example: $2,000 invoice, 18% annual rate, 45 days overdue:
$2,000 × (0.18 ÷ 365) × 45 = **$44.38 interest**

## Prevention is Better Than Cure

- State payment terms clearly on every invoice (Net 14 or Net 30)
- Include your late payment interest rate in your contract or terms
- Send polite reminder emails at 7, 14, and 30 days past due
- Require a deposit on larger projects`,
  },
  {
    slug: "client-profitability",
    term: "Client Profitability",
    shortDef: "A measure of how much profit a specific client relationship generates after accounting for all time spent — billable and non-billable — on that client.",
    keywords: ["client profitability freelancer", "how to measure client profitability", "profitable clients freelance"],
    relatedSlugs: ["client-profitability-calculator", "project-quote-calculator", "profit-margin-calculator"],
    relatedTerms: ["profit-margin", "scope-creep", "utilization-rate"],
    relatedComparisonSlugs: ["bonsai-vs-freshbooks"],
    body: `## What Is Client Profitability?

Client profitability is the true profit generated by a client after accounting for all time you spend on their work — not just the hours you bill, but also non-billable time like emails, revisions, admin, and relationship management.

A client paying $3,000/month might look good until you realize you're spending 50 hours on them (billed + unbilled), making your effective rate just $60/hour versus your target of $80/hour.

## How to Calculate Client Profitability

> **Effective Hourly Rate = Total Revenue from Client ÷ Total Hours Spent (billed + unbilled)**

If your target rate is $80/hour and your effective rate on a client is $55/hour, they are significantly unprofitable relative to your opportunity cost.

## Why Some High-Revenue Clients Aren't Worth It

Revenue is vanity, profit is sanity. The most demanding clients often generate the lowest effective rates because they:
- Require excessive revisions and back-and-forth
- Have slow internal processes that waste your time
- Generate high non-billable admin hours (reporting, meetings, approvals)
- Pay late, requiring credit management effort

## The 80/20 Rule for Freelancers

Most freelancers find that 20% of their clients generate 80% of their profit. Identifying and gently offboarding unprofitable clients frees time for higher-value work or recovery.

## When to Fire a Client

Consider parting ways when: the effective rate is consistently below your minimum acceptable rate, the client is consistently late to pay, or the relationship is consistently stressful with no signs of improvement.`,
  },
  {
    slug: "scope-creep",
    term: "Scope Creep",
    shortDef: "The gradual expansion of a project beyond its originally agreed deliverables, often without corresponding increases in budget or timeline.",
    keywords: ["scope creep freelance", "what is scope creep", "how to prevent scope creep"],
    relatedSlugs: ["project-quote-calculator", "client-profitability-calculator", "retainer-rate-calculator"],
    relatedTerms: ["value-based-pricing", "late-payment-interest", "client-profitability"],
    relatedComparisonSlugs: ["hourly-vs-project-pricing", "bonsai-vs-freshbooks"],
    body: `## What Is Scope Creep?

Scope creep occurs when a project gradually expands beyond its original definition — additional features are requested, deliverables change, or the client's expectations evolve — without the budget or timeline being adjusted accordingly.

For fixed-price freelance projects, scope creep directly eats into your profit. An extra 10 hours on a project priced at $3,000 (40 hours × $75/hr) reduces your effective rate from $75/hr to $60/hr.

## Common Causes of Scope Creep

- Poorly defined project requirements at the start
- No written contract or Statement of Work
- Client stakeholder changes during the project
- Friendly relationships that make it awkward to say no
- Vague terms like "minor revisions" or "as needed"

## How to Prevent Scope Creep

**Before the project:**
- Define deliverables in precise, measurable terms
- Specify what is NOT included (exclusions list)
- State the number of revision rounds included
- Get sign-off on specifications before starting work

**During the project:**
- Document change requests in writing immediately
- Present a change order with additional cost and timeline for any out-of-scope work
- Don't start additional work until change orders are approved

## When It Happens Anyway

Use the phrase: *"That sounds like a great addition — it's outside our original scope, so I'll send over a brief change order for your approval before we proceed."* Professional, clear, and fair.`,
  },
  {
    slug: "overhead",
    term: "Overhead",
    shortDef: "The fixed business costs a freelancer incurs regardless of how much client work they do — rent, software, insurance, and other ongoing expenses.",
    keywords: ["freelance overhead costs", "business overhead freelancer", "fixed costs freelancer"],
    relatedSlugs: ["break-even-calculator", "profit-margin-calculator", "freelance-hourly-rate-calculator"],
    relatedTerms: ["break-even", "profit-margin", "net-income"],
    relatedComparisonSlugs: ["hourly-vs-project-pricing"],
    body: `## What Is Overhead for Freelancers?

Overhead refers to the ongoing costs of running your freelance business that aren't directly tied to a specific client or project. Unlike project costs (e.g., stock photos for a specific design project), overhead is constant whether you have 0 clients or 10.

## Common Freelance Overhead Costs

**Tech & software**: project management tools, design software, accounting software, communication tools, cloud storage — often $200-500/month total.

**Professional services**: accountant, lawyer (contract review), professional indemnity insurance — often $200-500/month.

**Home office**: a portion of rent/mortgage, utilities, internet, dedicated phone — calculate based on % of home used for work.

**Professional development**: courses, books, conferences — budget 3-5% of annual revenue.

**Marketing**: website hosting, domain, LinkedIn Premium, portfolio tools.

## Including Overhead in Your Rate

Your hourly rate must cover all overhead, not just your target income:

> **Rate = (Income Goal + Annual Overhead) ÷ Annual Billable Hours**

If you have $15,000/year in overhead and bill 1,200 hours/year, that adds **$12.50/hour** to your minimum rate.

## Tracking and Reducing Overhead

Review your overhead quarterly. Cancel unused subscriptions — they accumulate quickly. Annual payment options for software often save 20-30% versus monthly.`,
  },
  {
    slug: "net-income",
    term: "Net Income",
    shortDef: "A freelancer's total earnings after deducting all business expenses and taxes — the actual profit the business generates.",
    keywords: ["freelance net income", "net income vs gross income freelancer", "self employed net income"],
    relatedSlugs: ["freelance-take-home-pay-calculator", "profit-margin-calculator", "self-employment-tax-calculator"],
    relatedTerms: ["take-home-pay", "profit-margin", "self-employment-tax"],
    relatedComparisonSlugs: ["freelance-vs-full-time-salary"],
    body: `## What Is Net Income for Freelancers?

Net income is what remains from your gross revenue after subtracting all business expenses. It's different from take-home pay — net income is a business measure (before personal taxes), while take-home pay is what you keep after paying both business expenses and personal taxes.

> **Net Income = Gross Revenue - Business Expenses**

Example: $100,000 revenue - $20,000 expenses = **$80,000 net income**

Your take-home pay would then be net income minus self-employment tax and income taxes.

## Net Income vs Gross Revenue

| Term | Definition |
|------|-----------|
| Gross Revenue | Total client payments received |
| Net Income | Revenue minus all business expenses |
| Taxable Income | Net income minus SE tax deduction and other adjustments |
| Take-Home Pay | Taxable income minus all taxes paid |

## Net Income for Tax Purposes

Self-employment tax in the US is based on your **net earnings from self-employment**, which is your net income minus adjustments. This is why maximizing legitimate business deductions reduces your SE tax, not just your income tax.

## Improving Net Income

The fastest ways to improve net income are:
1. **Raise rates** — increases revenue without increasing work
2. **Reduce overhead** — auditing subscriptions often finds quick savings
3. **Maximize deductions** — home office, equipment depreciation, health insurance

Track net income monthly to spot trends. A month with high revenue but thin net income often signals an invoicing or expense problem.`,
  },
  {
    slug: "ir35",
    term: "IR35",
    shortDef: "UK tax legislation designed to combat disguised employment — determining whether a contractor working through a limited company should be taxed as an employee.",
    keywords: ["IR35 freelancer", "what is IR35 UK", "IR35 rules contractor", "inside outside IR35"],
    relatedSlugs: ["self-employment-tax-calculator", "freelance-take-home-pay-calculator"],
    relatedTerms: ["take-home-pay", "self-employment-tax", "vat"],
    relatedComparisonSlugs: ["deel-vs-remote-contractors"],
    body: `## What Is IR35?

IR35 (officially the "off-payroll working rules") is UK tax legislation aimed at contractors who work through a personal service company (PSC) or limited company. It determines whether a contractor's engagement is genuinely self-employed or is "disguised employment" — working like an employee but paying lower taxes by routing income through a company.

## Inside vs Outside IR35

**Outside IR35**: You are genuinely self-employed. You control how and when you do the work, you have multiple clients, you can substitute another person to do the work, and you bear financial risk. You pay contractor taxes (lower).

**Inside IR35**: The engagement resembles employment — you work exclusively at the client's site, under their direction, with no substitution right. You must pay broadly the same taxes as an employee (higher), even if working through a company.

## Who Determines IR35 Status?

Since April 2021, for medium and large private sector clients, the **client** (not you) determines your IR35 status using a Status Determination Statement (SDS).

For small companies and some public sector engagements, you may still self-determine.

## Indicators of Being Outside IR35

- Right of substitution (can send someone else to do the work)
- Multiple clients simultaneously
- Control over how you work, not just what you deliver
- Genuine financial risk (can lose money on the contract)
- Not integrated into the client's team or management structure

## The Financial Impact of IR35

Being caught inside IR35 can cost a contractor tens of thousands of pounds annually in additional tax and National Insurance. Getting specialist legal advice on contract wording is worth the investment for long-term engagements.`,
  },
  {
    slug: "invoice",
    term: "Invoice",
    shortDef: "A formal document sent to a client requesting payment for goods or services rendered, detailing the amounts, descriptions, and payment terms.",
    keywords: ["freelance invoice", "how to create an invoice freelancer", "what to include on a freelance invoice"],
    relatedSlugs: ["invoice-total-calculator", "late-payment-interest-calculator", "vat-calculator-freelancer"],
    relatedTerms: ["late-payment-interest", "vat", "client-profitability"],
    relatedComparisonSlugs: ["freshbooks-vs-quickbooks-self-employed", "bonsai-vs-freshbooks", "freshbooks-vs-wave"],
    body: `## What Is a Freelance Invoice?

An invoice is a legal payment request that documents the work you've done and the amount owed. A proper invoice protects you legally, helps your client process payment correctly, and creates a paper trail for your accounting records.

## What to Include on a Freelance Invoice

**Required:**
- Your name, business name, and address
- Your client's name and address
- Unique invoice number
- Invoice date and payment due date
- Itemized list of services with descriptions and amounts
- Total amount due
- Payment methods and instructions

**If VAT-registered (UK/EU):**
- Your VAT registration number
- VAT amount per line item
- Total excluding VAT and total including VAT

**Recommended:**
- Late payment interest rate (e.g., "2% per month on overdue amounts")
- Your bank details for direct transfer
- Your invoice terms (Net 14, Net 30, etc.)

## Common Invoice Terms

| Term | Meaning |
|------|---------|
| Net 30 | Payment due 30 days after invoice date |
| Due on receipt | Payment expected immediately |
| 50% upfront | Half paid before work begins |
| Milestone billing | Payment tied to project deliverables |

## Freelance Invoice Best Practices

- Send invoices immediately upon completing work or at month-end for retainers
- Number invoices sequentially (avoids confusion)
- Follow up automatically at 7 and 14 days if unpaid
- Use invoicing software (FreshBooks, Bonsai, Wave) to track payment status`,
  },
];

export function getTermBySlug(slug: string): GlossaryTerm | undefined {
  return glossaryTerms.find((t) => t.slug === slug);
}
