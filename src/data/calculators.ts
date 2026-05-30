import type { CalculatorMeta } from "@/types/calculator";

export const calculators: CalculatorMeta[] = [
  // ─── RATE & PRICING ────────────────────────────────────────────────────────
  {
    slug: "freelance-hourly-rate-calculator",
    name: "Freelance Hourly Rate Calculator",
    shortName: "Hourly Rate Calculator",
    description:
      "Calculate your optimal freelance hourly rate based on your income goal, billable hours, overhead costs, and desired profit margin.",
    longDescription:
      "Set a rate that covers your taxes, business expenses, and desired income. This calculator factors in vacation time, administrative overhead, and a profit buffer so you're never undercharging.",
    category: "rate-pricing",
    keywords: [
      "freelance hourly rate calculator",
      "how to calculate freelance hourly rate",
      "what hourly rate should I charge as a freelancer",
      "freelance rate calculator",
      "self employed hourly rate calculator",
    ],
    fields: [
      {
        id: "desiredAnnualIncome",
        label: "Desired Annual Income",
        type: "number",
        unit: "$",
        min: 0,
        defaultValue: 80000,
        helpText: "Your target take-home before taxes (add ~30-35% to account for taxes)",
      },
      {
        id: "billableHoursPerWeek",
        label: "Billable Hours per Week",
        type: "number",
        unit: "hrs",
        min: 1,
        max: 60,
        defaultValue: 30,
        helpText: "Hours you can realistically bill to clients per week (most freelancers: 25-35)",
      },
      {
        id: "vacationWeeks",
        label: "Vacation Weeks per Year",
        type: "number",
        unit: "weeks",
        min: 0,
        max: 12,
        defaultValue: 4,
        helpText: "Weeks off including holidays. Unpaid — so your rate must cover this gap.",
      },
      {
        id: "overheadExpenses",
        label: "Annual Overhead Expenses",
        type: "number",
        unit: "$",
        min: 0,
        defaultValue: 5000,
        helpText: "Software, equipment, insurance, accounting fees, and other fixed business costs",
      },
      {
        id: "profitMarginPct",
        label: "Profit Margin",
        type: "number",
        unit: "%",
        min: 0,
        max: 50,
        defaultValue: 20,
        helpText: "Buffer above break-even. 15-25% is typical for freelancers.",
      },
    ],
    relatedSlugs: ["day-rate-calculator", "project-quote-calculator", "billable-hours-calculator"],
    relatedComparisonSlugs: ["hourly-vs-project-pricing", "freelance-vs-full-time-salary"],
    faqs: [
      {
        question: "How do I calculate my freelance hourly rate?",
        answer:
          "Add your desired annual income plus overhead expenses, then divide by your annual billable hours. Adjust upward by your desired profit margin. For example: ($80,000 + $5,000) / 1,440 hours × 1.20 profit = ~$71/hr.",
      },
      {
        question: "Should I factor in taxes when setting my rate?",
        answer:
          "Yes — as a freelancer you pay self-employment tax (15.3% in the US) on top of income tax. Your 'desired income' field should be your gross target, not take-home. Add 30-35% to your net income goal when entering it here.",
      },
      {
        question: "How many billable hours per week is realistic?",
        answer:
          "Most freelancers bill 25-35 hours per week sustainably. The rest goes to admin, sales, networking, and professional development. Entering 40+ is possible for short periods but leads to burnout.",
      },
      {
        question: "What if my calculated rate is higher than market rates?",
        answer:
          "Either reduce your income goal, increase billable hours, or cut expenses. If you can't close the gap, consider whether freelancing in this niche is financially viable at your target income — or whether you need to specialize to command higher rates.",
      },
      {
        question: "How often should I recalculate my rate?",
        answer:
          "Annually at minimum. Also recalculate when: your expenses increase significantly, your skills or specialization improve, your demand consistently exceeds your capacity, or you change countries (different tax rates).",
      },
    ],
    educationContent: {
      title: "How to Calculate Your Freelance Hourly Rate",
      body: `Setting your freelance hourly rate is one of the most important decisions in your business. Too low, and you can't sustain yourself financially. Too high, and you struggle to win clients.

The correct approach is to work backward from your financial needs. Start with your income goal — what you want to take home after taxes. Add your annual business overhead (software, insurance, accounting). Then factor in the hours you can realistically bill each week, adjusted for vacation time.

Most freelancers forget two critical adjustments: profit margin and admin time. A 15-20% profit margin above break-even gives you a buffer for slow months and business reinvestment. Admin time — the hours you spend on proposals, invoicing, and business development — is real work you do but can't bill. Reduce your billable hours estimate to reflect this reality.

Finally, your rate must be sustainable, not just mathematically correct. Research what peers with similar experience charge in your niche. If your calculated rate is above market, that's your signal to specialize, raise your perceived value, or consider whether the niche is viable for your income goals.`,
    },
  },
  {
    slug: "day-rate-calculator",
    name: "Day Rate Calculator",
    shortName: "Day Rate Calculator",
    description:
      "Convert your freelance hourly rate to a day rate, or calculate the optimal day rate for consulting and contracting engagements.",
    longDescription:
      "Day rates are the standard billing unit for consultants and contractors. This calculator converts your hourly rate to a daily rate and lets you add a markup for the commitment of a full day booking.",
    category: "rate-pricing",
    keywords: [
      "day rate calculator freelance",
      "consultant day rate calculator",
      "how to calculate day rate",
      "freelance daily rate",
      "contractor day rate",
    ],
    fields: [
      {
        id: "hourlyRate",
        label: "Hourly Rate",
        type: "number",
        unit: "$",
        min: 0,
        defaultValue: 75,
        helpText: "Your standard hourly rate",
      },
      {
        id: "hoursPerDay",
        label: "Hours per Day",
        type: "number",
        unit: "hrs",
        min: 1,
        max: 12,
        defaultValue: 8,
        helpText: "Standard working day length. Most clients expect 7-8 hours.",
      },
      {
        id: "dayRateMarkup",
        label: "Day Rate Markup",
        type: "number",
        unit: "%",
        min: 0,
        max: 50,
        defaultValue: 0,
        helpText: "Optional premium for the certainty of a day commitment. 10-20% is common.",
      },
    ],
    relatedSlugs: ["freelance-hourly-rate-calculator", "retainer-rate-calculator", "project-quote-calculator"],
    relatedComparisonSlugs: ["hourly-vs-project-pricing"],
    faqs: [
      {
        question: "How is a day rate different from an hourly rate?",
        answer:
          "A day rate is a fixed fee for a full working day, regardless of exact hours. It's simpler to invoice, removes the need for detailed time tracking, and is the norm for on-site consulting work. Many consultants add a 10-20% premium versus their hourly equivalent.",
      },
      {
        question: "How many hours should a day rate cover?",
        answer:
          "Typically 7-8 hours. Some contracts specify a half-day rate for less than 4 hours. Be clear in your contract what a 'day' means to avoid disputes.",
      },
      {
        question: "Should I charge a markup over my hourly rate for a day rate?",
        answer:
          "Many freelancers do — the client gets certainty of your full attention for the day, which has value. A 10-20% markup is common. However, in competitive markets some freelancers keep day rates flat or even slightly discounted for the guaranteed booking.",
      },
      {
        question: "When should I use a day rate instead of hourly?",
        answer:
          "Use day rates for on-site engagements, workshop facilitation, training days, and any work where you're giving a client your full, undivided attention for the day. Hourly is better for async work where your client only needs specific hours.",
      },
    ],
    educationContent: {
      title: "How to Set Your Freelance Day Rate",
      body: `Day rates are the currency of consulting. Rather than tracking every hour, you and your client agree on a fixed daily fee — clean, professional, and easy to invoice.

The simplest starting point is your hourly rate multiplied by your working day length. But many consultants add a 10-20% premium above the pure hourly equivalent. The reasoning: a client booking a full day gets your committed, uninterrupted attention — that certainty has value worth paying for.

Day rates also reflect market positioning. In the UK, for example, a senior technology consultant charging £500/day is signaling mid-market positioning. At £800-900/day, they're signaling senior expert status. Research current rates in your niche on platforms like People Per Hour, LinkedIn, or industry surveys.

When transitioning from hourly to day-rate billing, communicate the change as a simplification benefit for the client: "I'm moving to a day rate model — it's cleaner for both of us and removes the need for detailed timesheets." Most clients appreciate the predictability.`,
    },
  },
  {
    slug: "project-quote-calculator",
    name: "Project Quote Calculator",
    shortName: "Project Quote Calculator",
    description:
      "Build an accurate freelance project quote accounting for estimated hours, complexity buffers, revision rounds, and expenses.",
    longDescription:
      "Scope creep kills freelance profitability. This calculator builds in a complexity buffer and revision allowance so your fixed-price quotes stay profitable.",
    category: "rate-pricing",
    keywords: [
      "freelance project quote calculator",
      "how to quote a freelance project",
      "freelance project pricing calculator",
      "fixed price project calculator",
      "freelance quote template",
    ],
    fields: [
      {
        id: "estimatedHours",
        label: "Estimated Hours",
        type: "number",
        unit: "hrs",
        min: 1,
        defaultValue: 40,
        helpText: "Your best estimate of core work hours",
      },
      {
        id: "hourlyRate",
        label: "Hourly Rate",
        type: "number",
        unit: "$",
        min: 0,
        defaultValue: 75,
        helpText: "Your standard hourly rate",
      },
      {
        id: "complexityBuffer",
        label: "Complexity Buffer",
        type: "number",
        unit: "%",
        min: 0,
        max: 100,
        defaultValue: 20,
        helpText: "Buffer for unknowns. 20-30% is typical; complex projects deserve 40-50%.",
      },
      {
        id: "revisionHours",
        label: "Revision Hours Included",
        type: "number",
        unit: "hrs",
        min: 0,
        defaultValue: 5,
        helpText: "Hours budgeted for client feedback and revisions",
      },
      {
        id: "expenses",
        label: "Direct Expenses",
        type: "number",
        unit: "$",
        min: 0,
        defaultValue: 0,
        helpText: "Stock photos, fonts, tools, or other project-specific costs to pass through",
      },
    ],
    relatedSlugs: ["freelance-hourly-rate-calculator", "client-profitability-calculator", "profit-margin-calculator"],
    relatedComparisonSlugs: ["hourly-vs-project-pricing", "bonsai-vs-freshbooks"],
    faqs: [
      {
        question: "What complexity buffer should I use?",
        answer:
          "20-30% for well-defined projects with experienced clients. 30-50% for complex technical projects, new client relationships, or anything with unclear requirements. Never use 0% — even simple projects have surprises.",
      },
      {
        question: "Should I include revision hours in my project quote?",
        answer:
          "Yes, always. Define how many revision rounds are included (typically 2-3) and what qualifies as a revision vs. a scope change. State this clearly in your proposal so clients know additional rounds will be charged separately.",
      },
      {
        question: "How do I handle scope creep on fixed-price projects?",
        answer:
          "Have a change order process ready. When a client requests something outside scope, respond immediately: 'That's a great addition — it's outside our original scope, so I'll send a change order for X hours before we proceed.' Don't start out-of-scope work without written approval.",
      },
      {
        question: "Should I show clients my hourly rate on a project quote?",
        answer:
          "Generally no. Present a project price, not a breakdown that invites the client to negotiate hours. A client who sees '60 hours × $75 = $4,500' will negotiate each line. A client who sees '$4,500 for the complete project' negotiates the total.",
      },
      {
        question: "What if my quote is higher than the client's budget?",
        answer:
          "Don't discount — de-scope. Identify what's essential vs. nice-to-have and offer a reduced scope at the same effective rate. This protects your profitability and teaches clients to value your time correctly.",
      },
    ],
    educationContent: {
      title: "How to Quote a Freelance Project Without Undercharging",
      body: `Fixed-price projects are the most profitable form of freelance work — when scoped correctly. The key is building enough buffers into your estimate to absorb the inevitable unknowns.

Start with your honest time estimate for the core work. Then add a complexity buffer: 20% for well-defined projects, 30-40% for complex or technical work, 50% if requirements are still unclear. This isn't padding — it's responsible risk management.

Always include revision hours explicitly. Define 'revisions' in your contract (typically 2-3 rounds of consolidated feedback), and make clear that additional rounds are billed separately. Then add any direct project expenses: stock photography, specialized tools, printing, or travel.

The resulting quote reflects the true cost of delivering the project. Present it as a total with a clear scope document — not an itemized breakdown that invites line-by-line negotiation. A strong proposal explains what the client gets, not how you calculated it.`,
    },
  },
  {
    slug: "retainer-rate-calculator",
    name: "Retainer Rate Calculator",
    shortName: "Retainer Rate Calculator",
    description:
      "Calculate a fair monthly retainer rate with an appropriate discount for guaranteed recurring work.",
    longDescription:
      "Retainers are the holy grail of freelance income — predictable, recurring revenue. This calculator helps you price a retainer that's attractive to clients while still profitable for you.",
    category: "rate-pricing",
    keywords: [
      "retainer rate calculator freelance",
      "freelance monthly retainer pricing",
      "how to price a retainer freelance",
      "consultant retainer calculator",
      "retainer fee calculator",
    ],
    fields: [
      {
        id: "hoursPerMonth",
        label: "Hours per Month",
        type: "number",
        unit: "hrs",
        min: 1,
        defaultValue: 20,
        helpText: "Committed hours you'll provide each month",
      },
      {
        id: "hourlyRate",
        label: "Standard Hourly Rate",
        type: "number",
        unit: "$",
        min: 0,
        defaultValue: 75,
        helpText: "Your regular hourly rate for ad-hoc work",
      },
      {
        id: "retainerDiscount",
        label: "Retainer Discount",
        type: "number",
        unit: "%",
        min: 0,
        max: 30,
        defaultValue: 10,
        helpText: "Discount for guaranteed monthly income. 5-15% is typical.",
      },
    ],
    relatedSlugs: ["day-rate-calculator", "freelance-hourly-rate-calculator", "client-profitability-calculator"],
    relatedComparisonSlugs: ["hourly-vs-project-pricing", "bonsai-vs-freshbooks"],
    faqs: [
      {
        question: "What discount should I offer for a retainer?",
        answer:
          "5-15% is typical. The discount compensates the client for the commitment and predictability they provide you. More than 15-20% starts to undermine the value of your standard rate.",
      },
      {
        question: "What happens to unused retainer hours?",
        answer:
          "This is negotiable, but most retainers are 'use it or lose it' — unused hours expire each month. This is fair because you kept that capacity available for the client. Some freelancers allow a small rollover (e.g., up to 25% of one month's hours) as a goodwill gesture.",
      },
      {
        question: "How do I transition an existing client to a retainer?",
        answer:
          "Identify clients you're billing consistently each month. Propose a retainer as a win-win: they get priority access and a lower effective rate; you get predictable income. Start with a 3-month trial retainer at a small discount, then evaluate.",
      },
      {
        question: "Should retainer clients get priority over other work?",
        answer:
          "Yes — that's part of what they're paying for. Retainer clients should receive faster response times and protected capacity. Make this explicit in your retainer agreement.",
      },
    ],
    educationContent: {
      title: "How to Price and Structure a Freelance Retainer",
      body: `Retainers are the most valuable income structure for freelancers — they provide recurring revenue without constant selling. The key is pricing them fairly: attractive enough to incentivize the client's commitment, profitable enough to be worth your while.

A typical retainer offers a 5-15% discount on your standard hourly rate in exchange for guaranteed monthly hours. The client benefits from predictable costs and priority access; you benefit from income certainty and less time spent on business development.

Structure matters as much as price. Define exactly what's included: how many hours, what kind of work, what's out of scope, response time expectations, and what happens to unused hours. Get it in writing with a 30-60 day cancellation clause on both sides.

Review your retainers quarterly. If a client consistently uses all their hours and needs more, raise the rate at renewal — or propose an expanded retainer. If they rarely use their hours, consider offering a smaller package. The goal is a retainer that works long-term for both parties.`,
    },
  },
  {
    slug: "value-based-pricing-calculator",
    name: "Value-Based Pricing Calculator",
    shortName: "Value-Based Pricing Calculator",
    description:
      "Calculate a value-based project price by capturing a percentage of the ROI your work generates for the client.",
    longDescription:
      "Value-based pricing lets you charge based on the outcome you create, not hours spent. Use this calculator to anchor your price to client ROI and justify higher fees.",
    category: "rate-pricing",
    keywords: [
      "value based pricing calculator freelance",
      "how to charge based on value freelance",
      "value based fees consultant",
      "ROI based pricing freelance",
      "freelance pricing strategy",
    ],
    fields: [
      {
        id: "clientROI",
        label: "Client ROI / Business Value",
        type: "number",
        unit: "$",
        min: 0,
        defaultValue: 50000,
        helpText: "The business outcome your work creates — revenue generated, costs saved, or risk reduced",
      },
      {
        id: "valueCapturePct",
        label: "Value Capture %",
        type: "number",
        unit: "%",
        min: 1,
        max: 50,
        defaultValue: 15,
        helpText: "Your share of the value created. 5-20% is typical depending on certainty and track record.",
      },
      {
        id: "projectDurationWeeks",
        label: "Project Duration",
        type: "number",
        unit: "weeks",
        min: 1,
        defaultValue: 4,
        helpText: "How long the project takes to complete",
      },
    ],
    relatedSlugs: ["freelance-hourly-rate-calculator", "project-quote-calculator", "profit-margin-calculator"],
    relatedComparisonSlugs: ["hourly-vs-project-pricing"],
    faqs: [
      {
        question: "What is value-based pricing for freelancers?",
        answer:
          "Value-based pricing means setting your fee based on the economic value you create for the client, rather than time spent. If your SEO work generates $200,000 in new revenue, charging $20,000 (10%) is justified by the ROI — regardless of how many hours it took.",
      },
      {
        question: "How do I find out the client's ROI?",
        answer:
          "Ask during your discovery process: 'What does success look like for you, and what's that worth to your business?' For leads generated, estimate: leads × conversion rate × average deal size. For cost savings, the math is direct. For risk reduction, estimate the cost of the problem you're solving.",
      },
      {
        question: "What percentage should I capture?",
        answer:
          "5-20% is typical. Higher percentages are justified when: you have strong proof your work delivers the ROI, the client has high certainty about the outcome, or the work is highly leveraged (e.g., code used by thousands of users). Use 5-10% when starting out with value-based pricing.",
      },
      {
        question: "What if the client won't tell me their business metrics?",
        answer:
          "Make conservative estimates publicly: 'Based on industry benchmarks, I'd expect this campaign to generate around X leads, worth approximately $Y to a business with your conversion rates. Does that sound right?' Most clients will correct you with better numbers.",
      },
    ],
    educationContent: {
      title: "Value-Based Pricing: Charge What You're Worth",
      body: `Value-based pricing is the most powerful pricing strategy available to freelancers — but also the most misunderstood. The core idea is simple: price based on what your work is worth to the client, not how long it takes you.

An experienced copywriter who writes a sales page in 4 hours shouldn't charge 4 × $75 = $300 if that page generates $50,000 in sales. The value created is $50,000; charging $5,000 (10%) is both more profitable and more defensible than any hourly calculation.

The key is anchoring the conversation to ROI before discussing price. During your discovery call, find out: what's the business problem, what does solving it mean financially, and what have they tried before? Quantify the opportunity together. When you then present a price, frame it as a percentage of the value created — clients immediately understand the logic.

Value-based pricing requires confidence and track record. Start by applying it to one or two clients where you have clear evidence of ROI. Build case studies. Use those results to justify premium pricing with future clients.`,
    },
  },
  // ─── INCOME & TAX ──────────────────────────────────────────────────────────
  {
    slug: "self-employment-tax-calculator",
    name: "Self-Employment Tax Calculator",
    shortName: "Self-Employment Tax Calculator",
    description:
      "Estimate your self-employment tax (SE tax), federal income tax, and total tax bill as a freelancer or independent contractor.",
    longDescription:
      "As a freelancer you pay both sides of Social Security and Medicare (15.3%). This calculator estimates your total US tax burden including SE tax, federal income tax, and state tax.",
    category: "income-tax",
    keywords: [
      "self employment tax calculator",
      "SE tax calculator freelancer",
      "self employed tax calculator US",
      "freelancer tax estimate",
      "independent contractor tax calculator",
    ],
    fields: [
      {
        id: "grossIncome",
        label: "Gross Freelance Income",
        type: "number",
        unit: "$",
        min: 0,
        defaultValue: 80000,
        helpText: "Total revenue before any deductions",
      },
      {
        id: "deductibleExpenses",
        label: "Deductible Business Expenses",
        type: "number",
        unit: "$",
        min: 0,
        defaultValue: 10000,
        helpText: "Software, equipment, home office, professional development, etc.",
      },
      {
        id: "stateTaxRate",
        label: "State Income Tax Rate",
        type: "number",
        unit: "%",
        min: 0,
        max: 15,
        defaultValue: 5,
        helpText: "Your state's income tax rate. 0% for TX, FL, WA, NV. ~5% for average states. ~9-13% for CA, NY.",
      },
    ],
    relatedSlugs: ["freelance-take-home-pay-calculator", "quarterly-tax-calculator", "freelance-hourly-rate-calculator"],
    relatedComparisonSlugs: ["freelance-vs-full-time-salary", "freshbooks-vs-quickbooks-self-employed"],
    faqs: [
      {
        question: "What is self-employment tax?",
        answer:
          "Self-employment tax (SE tax) is the 15.3% tax covering Social Security (12.4%) and Medicare (2.9%). As an employee, you and your employer each pay half (7.65%). As a freelancer, you pay both halves yourself — but you can deduct half of SE tax when calculating your income tax.",
      },
      {
        question: "How is SE tax calculated?",
        answer:
          "SE tax applies to 92.35% of your net self-employment income (the IRS allows a small reduction to account for the 'employer equivalent' portion). So: SE Tax = Net Earnings × 0.9235 × 15.3%.",
      },
      {
        question: "Can I reduce my self-employment tax?",
        answer:
          "Legitimate business deductions reduce your net self-employment income, which directly reduces your SE tax. A home office deduction, equipment depreciation, health insurance premiums, and retirement contributions can all reduce your taxable self-employment income.",
      },
      {
        question: "How accurate is this calculator?",
        answer:
          "It provides a reasonable estimate using 2024 single-filer federal brackets. Your actual tax depends on filing status, additional deductions, credits, and state-specific rules. Always consult a tax professional for your actual return.",
      },
      {
        question: "Do I owe SE tax if I only made a small amount freelancing?",
        answer:
          "You owe SE tax if your net self-employment income is $400 or more. Even small amounts of freelance income require filing Schedule SE. There's no threshold exemption that eliminates SE tax for part-time freelancers.",
      },
    ],
    educationContent: {
      title: "Understanding Self-Employment Tax for Freelancers",
      body: `Self-employment tax is the biggest tax surprise for new freelancers. When you were an employee, your employer silently paid half of your Social Security and Medicare taxes. As a freelancer, you pay both halves yourself — a total of 15.3% of net earnings.

The good news: you can deduct half of SE tax from your income when calculating federal income tax. This partially offsets the burden, though the net effect is still significantly more tax than most employees pay at equivalent income levels.

SE tax applies to 92.35% of your net self-employment income (a technical adjustment the IRS allows). On $60,000 of net income, that's $60,000 × 0.9235 × 0.153 = approximately $8,478 in SE tax alone, before any income tax.

The most effective way to reduce SE tax is through legitimate business deductions that reduce your net self-employment income: home office, equipment depreciation, health insurance premiums, and retirement contributions. Every dollar of deductible business expense saves you not just income tax but also ~14% in SE tax.`,
    },
  },
  {
    slug: "freelance-take-home-pay-calculator",
    name: "Freelance Take-Home Pay Calculator",
    shortName: "Take-Home Pay Calculator",
    description:
      "Calculate your true freelance take-home pay after self-employment tax, income tax, business expenses, health insurance, and retirement contributions.",
    longDescription:
      "See the full picture of what you actually keep from your freelance income after all deductions and taxes.",
    category: "income-tax",
    keywords: [
      "freelance take home pay calculator",
      "self employed take home pay",
      "freelancer net income calculator",
      "how much do freelancers actually take home",
      "independent contractor take home pay",
    ],
    fields: [
      { id: "grossIncome", label: "Gross Freelance Income", type: "number", unit: "$", min: 0, defaultValue: 80000, helpText: "Total client payments received" },
      { id: "businessExpenses", label: "Annual Business Expenses", type: "number", unit: "$", min: 0, defaultValue: 10000, helpText: "Software, equipment, home office, insurance, etc." },
      { id: "federalTaxRate", label: "Estimated Federal Tax Rate", type: "number", unit: "%", min: 0, max: 37, defaultValue: 22, helpText: "Your marginal federal rate: 12% (<$47k), 22% (<$100k), 24% (<$192k)" },
      { id: "stateTaxRate", label: "State Income Tax Rate", type: "number", unit: "%", min: 0, max: 15, defaultValue: 5, helpText: "0% for no-income-tax states (TX, FL, WA), ~9-13% for CA/NY" },
      { id: "healthInsurance", label: "Monthly Health Insurance", type: "number", unit: "$/mo", min: 0, defaultValue: 400, helpText: "Self-paid health insurance premium per month" },
      { id: "retirementContribution", label: "Monthly Retirement Contribution", type: "number", unit: "$/mo", min: 0, defaultValue: 500, helpText: "Monthly contributions to SEP-IRA, Solo 401k, etc." },
    ],
    relatedSlugs: ["self-employment-tax-calculator", "quarterly-tax-calculator", "profit-margin-calculator"],
    relatedComparisonSlugs: ["freelance-vs-full-time-salary"],
    faqs: [
      {
        question: "Why is freelance take-home so much lower than gross revenue?",
        answer:
          "Freelancers face multiple deductions that employees don't see: self-employment tax (15.3%), health insurance (typically employer-subsidized for employees), retirement savings with no employer match, and business expenses. A freelancer earning $100,000 gross might take home $55,000-65,000 after all these deductions.",
      },
      {
        question: "Can I deduct health insurance as a freelancer?",
        answer:
          "Yes — self-employed individuals can deduct 100% of health insurance premiums for themselves, spouse, and dependents above the line (reducing your AGI). This is one of the most valuable deductions available to freelancers.",
      },
      {
        question: "How do I estimate my federal tax rate?",
        answer:
          "Use your marginal rate as a conservative estimate: 12% if taxable income is under $47,150, 22% if under $100,525, 24% if under $191,950. Your effective rate will be lower, but the marginal rate is a safe planning assumption.",
      },
      {
        question: "What percentage of income should I set aside for taxes?",
        answer:
          "As a starting rule of thumb: set aside 25-35% of every payment for taxes. The exact amount depends on your income level, state, deductions, and retirement contributions. Our quarterly tax calculator can give you a more precise estimate.",
      },
      {
        question: "Should retirement contributions be included in take-home calculation?",
        answer:
          "It depends on how you define 'take-home.' Retirement contributions are deferred income — you'll access it later. Including them shows your true spendable income now. This calculator includes them so you can see the realistic picture of your monthly cash flow.",
      },
    ],
    educationContent: {
      title: "Your Real Freelance Take-Home Pay After All Deductions",
      body: `The gap between gross freelance revenue and actual take-home pay surprises almost every new freelancer. A $100,000 revenue figure is compelling until you subtract self-employment tax, income taxes, health insurance, retirement savings, and business expenses — and realize you're keeping $55,000-65,000.

This isn't bad news — it's essential information for setting your rates correctly. Knowing your true take-home tells you whether your current rate is financially sustainable or whether you need to charge more.

The biggest deduction most freelancers underestimate is self-employment tax. At 15.3% of net earnings (applied to 92.35% of income), a freelancer earning $80,000 pays approximately $11,300 in SE tax alone — before any income tax.

Health insurance is the second major variable. Employer-sponsored coverage is often worth $5,000-15,000/year in employer contributions. As a freelancer, you pay all of this yourself, reducing your effective take-home significantly. This is why the true breakeven between freelance income and a salary requires earning roughly 1.5× the equivalent salary.`,
    },
  },
  {
    slug: "quarterly-tax-calculator",
    name: "Quarterly Tax Estimate Calculator",
    shortName: "Quarterly Tax Calculator",
    description:
      "Calculate how much to pay in quarterly estimated taxes to avoid IRS underpayment penalties as a freelancer.",
    longDescription:
      "Freelancers must pay taxes quarterly. This calculator estimates your quarterly payment using both the safe harbor rule and current-year projection.",
    category: "income-tax",
    keywords: [
      "quarterly tax calculator freelancer",
      "estimated quarterly taxes freelance",
      "how much to pay quarterly taxes",
      "IRS quarterly payment calculator",
      "self employed quarterly tax estimate",
    ],
    fields: [
      { id: "annualNetIncome", label: "Projected Annual Net Income", type: "number", unit: "$", min: 0, defaultValue: 60000, helpText: "Expected net profit after business expenses for the full year" },
      { id: "priorYearTaxes", label: "Prior Year Total Tax (optional)", type: "number", unit: "$", min: 0, defaultValue: 0, helpText: "Your total federal tax from last year's return (for safe harbor calculation)" },
      { id: "alreadyPaidThisYear", label: "Already Paid This Year", type: "number", unit: "$", min: 0, defaultValue: 0, helpText: "Quarterly payments already made this tax year" },
    ],
    relatedSlugs: ["self-employment-tax-calculator", "freelance-take-home-pay-calculator", "emergency-fund-calculator"],
    relatedComparisonSlugs: ["freshbooks-vs-quickbooks-self-employed"],
    faqs: [
      {
        question: "When are quarterly tax payments due?",
        answer:
          "Q1: April 15 | Q2: June 15 | Q3: September 15 | Q4: January 15 of the following year. Missing these dates triggers an underpayment penalty, currently around 8% annually on the unpaid amount.",
      },
      {
        question: "What is the safe harbor rule for quarterly taxes?",
        answer:
          "The safe harbor protects you from underpayment penalties if you pay either: (1) 100% of last year's total tax (110% if prior year AGI exceeded $150,000), OR (2) 90% of the current year's estimated tax. Meeting either threshold means no penalty even if you owe at filing.",
      },
      {
        question: "How do I pay quarterly estimated taxes?",
        answer:
          "Use IRS Direct Pay at irs.gov/directpay (free, instant), the EFTPS system (Electronic Federal Tax Payment System), or mail a check with Form 1040-ES voucher. Most states also require separate quarterly payments — check your state's tax authority website.",
      },
      {
        question: "What if my income is highly variable month to month?",
        answer:
          "You can use the 'annualized income installment method' (Form 2210, Schedule AI) to match your payments to actual quarterly income rather than equal quarterly amounts. This prevents overpaying in slow quarters and underpaying in busy ones.",
      },
    ],
    educationContent: {
      title: "How to Calculate and Pay Quarterly Estimated Taxes",
      body: `As a freelancer, nobody withholds taxes from your paychecks. The IRS requires you to estimate and pay taxes four times per year — miss these payments and you'll face an underpayment penalty, currently around 8% annually on the shortfall.

The safest approach is the safe harbor rule: pay 100% of last year's total federal tax bill (110% if your prior year AGI exceeded $150,000), divided across four equal quarterly payments. This guarantees no underpayment penalty regardless of how much you earn this year.

If you're new to freelancing with no prior year reference, estimate your current year's tax: calculate your expected net income, apply SE tax (15.3% × 0.9235), subtract half of SE tax to get adjusted income, apply your federal bracket, and pay 90% of that total in quarterly installments.

Set up automatic transfers to a dedicated tax savings account every time a client pays you. Aim to set aside 25-35% of each payment. This way, quarterly payment deadlines become a non-event — the money is already sitting there.`,
    },
  },
  {
    slug: "vat-calculator-freelancer",
    name: "VAT Calculator for Freelancers",
    shortName: "VAT Calculator",
    description:
      "Add or remove VAT from freelance invoice amounts. Works for UK (20%), EU rates, and any custom VAT percentage.",
    longDescription:
      "Whether adding VAT to a net invoice or working out the net from a VAT-inclusive price, this calculator handles both directions for any rate.",
    category: "income-tax",
    keywords: [
      "vat calculator freelancer",
      "add vat to invoice freelance",
      "vat calculator uk",
      "remove vat from price",
      "vat calculator 20 percent",
    ],
    fields: [
      {
        id: "netAmount",
        label: "Amount",
        type: "number",
        unit: "$",
        min: 0,
        defaultValue: 1000,
        helpText: "Enter the net amount (excl. VAT) when adding VAT, or the gross amount (incl. VAT) when removing",
      },
      {
        id: "vatRate",
        label: "VAT Rate",
        type: "number",
        unit: "%",
        min: 0,
        max: 30,
        defaultValue: 20,
        helpText: "UK standard rate: 20%. EU rates: typically 19-25% depending on country.",
      },
      {
        id: "calcMode",
        label: "Calculation Mode",
        type: "select",
        options: [
          { label: "Add VAT to net amount", value: "add-vat" },
          { label: "Remove VAT from gross amount", value: "remove-vat" },
        ],
        defaultValue: "add-vat",
        helpText: "Add VAT: calculate invoice total from net. Remove VAT: find net from a VAT-inclusive amount.",
      },
    ],
    relatedSlugs: ["invoice-total-calculator", "freelance-take-home-pay-calculator", "self-employment-tax-calculator"],
    relatedComparisonSlugs: ["freshbooks-vs-quickbooks-self-employed", "wise-vs-paypal-freelancers"],
    faqs: [
      {
        question: "When do freelancers need to charge VAT?",
        answer:
          "In the UK: when your taxable turnover exceeds £90,000 in any 12-month period. In EU countries: thresholds vary by country. In the US: there's no federal VAT, but state sales tax may apply to certain services.",
      },
      {
        question: "How do I show VAT on a freelance invoice?",
        answer:
          "Show the net amount, the VAT rate and amount separately, and the gross total. Also display your VAT registration number. Example: Services £1,000 + VAT at 20% £200 = Total £1,200. VAT Reg: GB123456789.",
      },
      {
        question: "Do I charge VAT to international clients?",
        answer:
          "For B2B clients in other EU countries: usually not — the reverse charge mechanism applies and they self-account for VAT. For B2C international clients: depends on the country and nature of services. Consult an accountant for your specific situation.",
      },
      {
        question: "Can I reclaim VAT on business purchases if I'm VAT registered?",
        answer:
          "Yes — one of the benefits of VAT registration is reclaiming input VAT on qualifying business purchases. This can be significant if you buy expensive software, equipment, or use other VAT-registered suppliers.",
      },
    ],
    educationContent: {
      title: "VAT for Freelancers: When to Charge and How to Calculate",
      body: `VAT (Value Added Tax) is a consumption tax charged at each stage of production. If you're a VAT-registered freelancer, you charge VAT on your invoices, collect it from clients, and remit the net amount (collected VAT minus VAT you've paid on business purchases) to the tax authority quarterly.

Registration thresholds vary by country. In the UK, the standard rate is 20% and you must register when turnover exceeds £90,000/year. In Germany the rate is 19%, France 20%, and Ireland 23% for most services.

The mechanics are simple: if your net fee is £1,000 and you add 20% VAT, you invoice the client for £1,200. You keep £1,000 and send £200 to HMRC (minus any input VAT you've paid on supplies). The VAT is not income — it flows through your business.

For international B2B clients within the EU, the reverse charge mechanism usually applies: you invoice without VAT, and the client accounts for it in their own country. For US-based clients, there's typically no VAT obligation for digital services delivered from the UK/EU.`,
    },
  },
  // ─── BUSINESS HEALTH ───────────────────────────────────────────────────────
  {
    slug: "profit-margin-calculator",
    name: "Freelance Profit Margin Calculator",
    shortName: "Profit Margin Calculator",
    description:
      "Calculate your freelance gross and net profit margin to understand how much of your revenue you actually keep.",
    longDescription:
      "Profit margin is the clearest measure of freelance business health. This calculator shows both gross and net margins so you can see where revenue disappears.",
    category: "business-health",
    keywords: [
      "freelance profit margin calculator",
      "self employed profit margin",
      "how to calculate profit margin freelance",
      "gross margin freelancer",
      "net profit margin calculator",
    ],
    fields: [
      { id: "revenue", label: "Annual Revenue", type: "number", unit: "$", min: 0, defaultValue: 80000, helpText: "Total client payments received" },
      { id: "cogs", label: "Direct Costs (COGS)", type: "number", unit: "$", min: 0, defaultValue: 10000, helpText: "Costs directly tied to delivering client work: subcontractors, project expenses, etc." },
      { id: "operatingExpenses", label: "Annual Operating Expenses", type: "number", unit: "$", min: 0, defaultValue: 15000, helpText: "All other business costs: software, insurance, marketing, accounting, equipment" },
    ],
    relatedSlugs: ["freelance-hourly-rate-calculator", "billable-hours-calculator", "break-even-calculator"],
    relatedComparisonSlugs: ["hourly-vs-project-pricing"],
    faqs: [
      {
        question: "What is a good profit margin for a freelancer?",
        answer:
          "Net margins above 40% are healthy for service businesses with low overhead. Margins below 20% are concerning. Pure solo freelancers with minimal costs often achieve 50-70% net margins. Those who rely on subcontractors or have high overhead will see lower margins.",
      },
      {
        question: "What's the difference between gross and net profit margin?",
        answer:
          "Gross margin deducts only direct costs (subcontractors, project-specific expenses). Net margin deducts all costs including fixed overhead. Gross margin tells you if your pricing is right for the work delivered. Net margin tells you if the whole business is profitable.",
      },
      {
        question: "How can I improve my profit margin?",
        answer:
          "Raise rates (fastest impact), reduce or eliminate subcontractor use on thin-margin work, audit and cut unused subscriptions, and productize services to reduce scope creep. A 10% rate increase with no other changes goes straight to profit.",
      },
      {
        question: "Should I track profit margin monthly?",
        answer:
          "Yes. Monthly tracking helps you spot trends early — a declining margin often signals rate stagnation, increased expenses, or taking on less profitable clients. Compare month-over-month and year-over-year.",
      },
    ],
    educationContent: {
      title: "Understanding Freelance Profit Margin",
      body: `Profit margin is the clearest measure of how financially healthy your freelance business is. Revenue tells you how busy you are; profit margin tells you if the business is actually working.

For freelancers, gross profit margin is calculated by subtracting direct project costs (subcontractors, project-specific tools, client expenses you cover) from revenue. Net profit margin deducts all remaining overhead — software subscriptions, insurance, accounting, marketing, and equipment.

A healthy solo freelancer with minimal overhead can achieve 50-70% net margins. Those who regularly subcontract work or have significant fixed costs should target 30-45%. Below 20% is a warning sign: either expenses are too high, rates are too low, or both.

The fastest way to improve your margin is to raise rates — a 10% increase in your hourly rate with the same volume of work goes entirely to profit, assuming your costs are fixed. The second fastest: eliminate or renegotiate subscriptions and services you're no longer getting full value from.`,
    },
  },
  {
    slug: "billable-hours-calculator",
    name: "Billable Hours Target Calculator",
    shortName: "Billable Hours Calculator",
    description:
      "Calculate how many billable hours per week you need to hit your income target after accounting for vacation, sick days, and admin time.",
    longDescription:
      "Know exactly how many client hours you need each week to reach your annual income goal — with realistic adjustments for time off and non-billable work.",
    category: "business-health",
    keywords: [
      "billable hours calculator freelance",
      "how many hours to bill freelancer",
      "freelance billable hours target",
      "weekly billable hours calculator",
      "freelance income target calculator",
    ],
    fields: [
      { id: "targetAnnualIncome", label: "Target Annual Income", type: "number", unit: "$", min: 0, defaultValue: 80000, helpText: "Gross revenue goal for the year" },
      { id: "hourlyRate", label: "Hourly Rate", type: "number", unit: "$", min: 1, defaultValue: 75 },
      { id: "vacationDays", label: "Vacation Days", type: "number", unit: "days", min: 0, max: 60, defaultValue: 20, helpText: "Annual paid or unpaid vacation days" },
      { id: "sickDays", label: "Sick Days", type: "number", unit: "days", min: 0, max: 30, defaultValue: 5, helpText: "Days off for illness — budget for these even if you hope not to need them" },
      { id: "adminTimePct", label: "Admin Time %", type: "number", unit: "%", min: 0, max: 50, defaultValue: 20, helpText: "% of working time on non-billable admin, sales, invoicing. 15-30% is typical." },
    ],
    relatedSlugs: ["freelance-hourly-rate-calculator", "utilization-rate-calculator", "profit-margin-calculator"],
    relatedComparisonSlugs: ["hourly-vs-project-pricing"],
    faqs: [
      {
        question: "How many billable hours per week is sustainable?",
        answer:
          "Most freelancers can sustain 25-35 billable hours per week long-term. 40+ billable hours per week is possible short-term but typically unsustainable — there's no time for admin, business development, or rest.",
      },
      {
        question: "What counts as admin time?",
        answer:
          "Invoicing, chasing payments, writing proposals, new client emails, bookkeeping, professional development, networking, marketing, and strategic planning. It's all valuable work — you just can't bill it to clients.",
      },
      {
        question: "What if the calculator says I need more hours than are available?",
        answer:
          "You need to raise your rate. If 1,440 available billable hours/year at $75/hr = $108,000 capacity but you need $120,000, your rate needs to be $83/hr minimum. The calculator's shortfall indicator flags this scenario.",
      },
      {
        question: "How do I reduce admin time?",
        answer:
          "Automate invoicing and payment reminders (FreshBooks, Bonsai). Use proposal templates. Batch email responses to specific time blocks. Set up accounting automation. Many freelancers can cut admin time by 30-50% with the right tools.",
      },
    ],
    educationContent: {
      title: "Setting Your Billable Hours Target",
      body: `Knowing how many billable hours you need each week is fundamental to running a sustainable freelance business. Without this number, you're either overworking or underearning — and often both.

The calculation starts with your revenue goal divided by your rate — that's your raw hours needed. But the available hours in a year are significantly less than 52 × 40. Subtract vacation and sick days, then apply a realistic estimate of non-billable admin time (15-30% for most freelancers).

If the resulting weekly billable hours target feels too high (above 35), you have two options: raise your rate or reduce your income goal. There's no third option — you cannot sustainably bill more than ~35 hours per week without sacrificing business development, learning, and quality of life.

Track your actual billable hours weekly. The gap between target and actual is your most important business metric. If you're consistently below target, identify whether it's a demand problem (not enough clients) or an efficiency problem (too much time on non-billable work).`,
    },
  },
  {
    slug: "utilization-rate-calculator",
    name: "Utilization Rate Calculator",
    shortName: "Utilization Rate Calculator",
    description:
      "Calculate your freelance utilization rate — the percentage of working time spent on billable client work.",
    longDescription:
      "Utilization rate is the clearest measure of how efficiently you're converting working hours into billable income. Benchmark against healthy ranges for freelancers.",
    category: "business-health",
    keywords: [
      "freelance utilization rate calculator",
      "billable utilization rate freelancer",
      "what is a good utilization rate freelancer",
      "freelancer efficiency calculator",
      "billable vs non billable hours",
    ],
    fields: [
      { id: "billableHours", label: "Billable Hours (this period)", type: "number", unit: "hrs", min: 0, defaultValue: 120, helpText: "Hours billed to clients in the measurement period" },
      { id: "totalWorkingHours", label: "Total Working Hours (this period)", type: "number", unit: "hrs", min: 1, defaultValue: 176, helpText: "Total hours worked including admin, sales, etc. (typical full month = 176 hrs)" },
    ],
    relatedSlugs: ["billable-hours-calculator", "profit-margin-calculator", "break-even-calculator"],
    relatedComparisonSlugs: ["hourly-vs-project-pricing"],
    faqs: [
      {
        question: "What is a good utilization rate for freelancers?",
        answer:
          "70-80% is a healthy target for most freelancers. Below 60% means too much non-billable work. Above 85% leaves little room for business development, learning, or handling emergencies.",
      },
      {
        question: "How often should I calculate my utilization rate?",
        answer:
          "Monthly is ideal. It gives you a meaningful sample size and aligns with invoicing cycles. Some freelancers track weekly to catch issues early, but weekly variance can be misleading.",
      },
      {
        question: "How do I improve my utilization rate?",
        answer:
          "Batch and minimize admin time, use proposal templates, automate invoicing, and get retainer clients (who generate billable hours without sales effort). Review your non-billable time breakdown to find the biggest drains.",
      },
      {
        question: "Is a very high utilization rate (90%+) a good sign?",
        answer:
          "Not necessarily. Sustained 90%+ utilization means almost no time for business development, learning, or strategic thinking. It's a signal you're understaffed (if you have subcontractors) or that it's time to raise rates to reduce demand.",
      },
    ],
    educationContent: {
      title: "What Is Utilization Rate and Why It Matters for Freelancers",
      body: `Utilization rate measures what percentage of your working time is spent on billable client work. It's one of the most important business metrics for any freelancer, yet most don't track it.

A 70% utilization rate means you're billing 70% of your total working hours and spending 30% on non-billable activities. If you work 160 hours/month and bill 112, your utilization is 70%.

The healthy range for most freelancers is 65-80%. Below 65%, you're spending too much time on admin or struggling to find enough billable work. Above 80%, you're highly efficient but leaving little room for business development — activities that build your pipeline for future months.

Low utilization often signals one of three issues: too much time on admin (fixable with tools and process), insufficient client demand (fixable with marketing), or poor time tracking (you're billing more than you think). Improving utilization from 60% to 75% on a 160-hour month means an extra 24 billable hours — at $75/hr, that's $1,800/month.`,
    },
  },
  {
    slug: "break-even-calculator",
    name: "Freelance Break-even Calculator",
    shortName: "Break-even Calculator",
    description:
      "Calculate the minimum billable hours or revenue needed each month to cover all your freelance business costs.",
    longDescription:
      "Know your floor. This calculator tells you the minimum you must earn each month to cover fixed costs and avoid a loss — essential for pricing decisions and evaluating slow months.",
    category: "business-health",
    keywords: [
      "freelance break even calculator",
      "minimum hours to break even freelancer",
      "break even revenue freelancer",
      "freelance minimum income calculator",
      "freelance cost analysis",
    ],
    fields: [
      { id: "monthlyFixedCosts", label: "Monthly Fixed Costs", type: "number", unit: "$", min: 0, defaultValue: 3000, helpText: "All recurring costs regardless of income: rent, software, insurance, phone, accountant, etc." },
      { id: "hourlyRate", label: "Hourly Rate", type: "number", unit: "$", min: 1, defaultValue: 75 },
      { id: "variableCostPct", label: "Variable Cost %", type: "number", unit: "%", min: 0, max: 30, defaultValue: 10, helpText: "Costs that scale with revenue: payment processing (2-3%), subcontractor fees, etc." },
    ],
    relatedSlugs: ["profit-margin-calculator", "billable-hours-calculator", "freelance-take-home-pay-calculator"],
    relatedComparisonSlugs: ["freelance-vs-full-time-salary"],
    faqs: [
      {
        question: "What should I include in monthly fixed costs?",
        answer:
          "Personal expenses you must pay regardless of income: rent/mortgage, utilities, groceries, debt payments. Business expenses: software subscriptions, insurance, phone, accountant. Don't include your desired profit or retirement savings — those come after break-even.",
      },
      {
        question: "Why do I need to know my break-even point?",
        answer:
          "Your break-even is the floor below which you're losing money. Knowing it helps you evaluate whether to take low-paying work in slow months, set your minimum project rate, and understand how many hours per month you absolutely must bill.",
      },
      {
        question: "What are variable costs for a freelancer?",
        answer:
          "Costs that scale with revenue or project volume: payment processing fees (Stripe/PayPal: 2.9%), direct project expenses you pay upfront, subcontractor fees when you outsource work, and any commission arrangements.",
      },
      {
        question: "How should I use the break-even number?",
        answer:
          "Set it as your 'don't panic' threshold. If you earn above break-even in a month, you're covering costs even if you're not yet profitable. It also tells you the minimum project rate — any work priced below your hourly break-even rate costs you money.",
      },
    ],
    educationContent: {
      title: "Freelance Break-even Analysis: Know Your Minimum Number",
      body: `Every freelancer has a minimum number — the revenue below which they're losing money. Not knowing this number is like running a business blindfolded. Break-even analysis gives you that number.

Your break-even revenue equals your fixed monthly costs divided by (1 minus your variable cost rate). If you have $3,000 in fixed costs and 10% variable costs, you need $3,333 in revenue to break even.

Converted to hours: at $75/hr, that's roughly 44 hours per month — about 11 hours per week. Anything above that generates profit. Below that, you're in the red.

This number has practical implications: it's your minimum monthly target, it tells you which projects are worth taking (any project priced below break-even cost per hour loses you money), and it defines your financial floor for evaluating slow months versus crisis months.

Review your break-even every quarter. As expenses change or rates increase, your break-even threshold shifts. The goal over time is to increase your rate faster than your expenses, widening the gap between break-even and your actual earnings.`,
    },
  },
  // ─── CLIENT & PROJECTS ─────────────────────────────────────────────────────
  {
    slug: "client-profitability-calculator",
    name: "Client Profitability Calculator",
    shortName: "Client Profitability Calculator",
    description:
      "Calculate the true profitability of a client relationship accounting for all hours spent — billable and non-billable.",
    longDescription:
      "Not all clients are equally valuable. This calculator reveals your effective hourly rate for each client after factoring in admin, revision, and communication time.",
    category: "client-projects",
    keywords: [
      "client profitability calculator",
      "freelance client analysis",
      "how to measure client profitability",
      "most profitable clients freelance",
      "effective hourly rate per client",
    ],
    fields: [
      { id: "monthlyRevenue", label: "Monthly Revenue from Client", type: "number", unit: "$", min: 0, defaultValue: 3000 },
      { id: "hoursSpent", label: "Billable Hours Spent", type: "number", unit: "hrs", min: 0, defaultValue: 30, helpText: "Hours billed or invoiced to this client" },
      { id: "hourlyRate", label: "Target Hourly Rate", type: "number", unit: "$", min: 1, defaultValue: 75, helpText: "Your standard rate — used to compare effective rate against" },
      { id: "nonBillableTime", label: "Non-Billable Hours on This Client", type: "number", unit: "hrs", min: 0, defaultValue: 5, helpText: "Emails, meetings, admin, revisions not billed. Be honest here." },
    ],
    relatedSlugs: ["project-quote-calculator", "profit-margin-calculator", "billable-hours-calculator"],
    relatedComparisonSlugs: ["bonsai-vs-freshbooks"],
    faqs: [
      {
        question: "How do I find out how much non-billable time I spend on a client?",
        answer:
          "Start tracking everything, including client emails and meetings, for one month. Most freelancers are surprised — a client who generates $3,000/month often absorbs 8-12 hours of unbilled time in communication and admin alone.",
      },
      {
        question: "What effective hourly rate signals a good client?",
        answer:
          "At or above your target rate: excellent. At 80-99%: acceptable — good relationship may justify it. At 60-79%: concerning — the relationship needs renegotiation. Below 60%: you're losing significant value. Consider a rate increase or offboarding.",
      },
      {
        question: "How do I raise rates with an existing client?",
        answer:
          "Give 30-60 days notice. Frame it as a natural progression: 'I'm adjusting my rates for new and existing clients effective [date]. I value our work together and wanted to let you know in advance.' Offer to discuss scope adjustments if needed.",
      },
      {
        question: "Are some clients worth keeping even if they're below my target rate?",
        answer:
          "Yes — if they provide strong referrals, great testimonials, flexible scope, or fast payment that compensates in other ways. But be honest about the true trade-off. Trading $20/hr in effective rate for referrals only makes sense if those referrals are actually materializing.",
      },
    ],
    educationContent: {
      title: "How to Measure the True Profitability of Each Client",
      body: `Revenue from a client is only part of the story. The other part is how much of your time — billed and unbilled — that client consumes. A client paying $3,000/month might look good until you realize you're spending 55 hours on them, making your effective rate just $55/hour.

Client profitability analysis requires tracking all time spent on a client relationship: billable work, revision rounds, email, meetings, admin, and relationship maintenance. The total hours divided into revenue reveals the real effective rate.

Compare this against your target rate. If the effective rate is consistently 20%+ below target, you have a profitability problem with that client. Common causes: excessive revision requests, slow approval processes, high communication overhead, or scope creep you're absorbing without charging.

The goal isn't to fire every low-rate client — some provide referrals, portfolio pieces, or learning opportunities worth the rate trade-off. The goal is to make the decision consciously, not by default.`,
    },
  },
  {
    slug: "late-payment-interest-calculator",
    name: "Late Payment Interest Calculator",
    shortName: "Late Payment Calculator",
    description:
      "Calculate the interest you can charge on overdue invoices under late payment law.",
    longDescription:
      "Late payments cost you money in lost interest and cash flow stress. This calculator shows the interest you're legally entitled to charge on overdue invoices.",
    category: "client-projects",
    keywords: [
      "late payment interest calculator",
      "invoice late payment interest",
      "how to calculate late payment interest",
      "freelance overdue invoice interest",
      "late payment law calculator",
    ],
    fields: [
      { id: "invoiceAmount", label: "Invoice Amount", type: "number", unit: "$", min: 0, defaultValue: 2000 },
      { id: "daysOverdue", label: "Days Overdue", type: "number", unit: "days", min: 1, defaultValue: 30 },
      { id: "annualInterestRate", label: "Annual Interest Rate", type: "number", unit: "%", min: 0.1, defaultValue: 8, helpText: "UK statutory rate: ~13% (8% + Bank of England base). US: often 18%/year in contracts." },
    ],
    relatedSlugs: ["invoice-total-calculator", "client-profitability-calculator", "project-quote-calculator"],
    relatedComparisonSlugs: ["bonsai-vs-freshbooks", "wise-vs-paypal-freelancers"],
    faqs: [
      {
        question: "Can I really charge interest on late invoices?",
        answer:
          "Yes, if stated in your contract or terms. In the UK, the Late Payment of Commercial Debts Act gives you the right to charge statutory interest (8% above BoE base rate) on overdue B2B invoices automatically. In the US, your contract must specify the rate — 1.5%/month (18% APY) is common.",
      },
      {
        question: "Will charging interest damage my client relationship?",
        answer:
          "Stating your late payment policy clearly upfront rarely damages relationships — it sets professional expectations. Actually charging interest on a habitually late-paying client sends a clear message. If a client is consistently 60+ days late, the relationship is already damaged — you're just not being paid for it.",
      },
      {
        question: "How do I implement a late payment policy?",
        answer:
          "Include it in your contract and on every invoice: 'Invoices unpaid after [X] days are subject to a late payment fee of [rate]% per month on the outstanding balance.' Send a polite reminder at 7, 14, and 30 days past due. Add the interest when issuing a follow-up invoice.",
      },
      {
        question: "What else can I claim beyond interest in the UK?",
        answer:
          "Under the UK Late Payment Act, you can also claim a fixed compensation amount: £40 for debts under £1,000, £70 for £1,000-£9,999, and £100 for £10,000+. This compensates for administrative costs of chasing payment.",
      },
    ],
    educationContent: {
      title: "Late Payment Interest: What You're Entitled to Charge",
      body: `Late payments are one of the most common frustrations in freelancing. Beyond the cash flow stress, every day a payment is delayed costs you money in real terms — money you could have invested, used to pay bills, or deposited in a savings account.

Late payment interest gives you a mechanism to make clients whole for this cost. In the UK, the Late Payment of Commercial Debts Act automatically grants B2B sellers the right to charge statutory interest (currently 8% above the Bank of England base rate) on overdue invoices. In the US, your contract must specify the rate.

The practical value of late payment interest isn't usually in the amount collected — it's in the behavior change it creates. Clients who know you'll charge interest tend to pay faster. The policy pays for itself in improved cash flow.

Prevention is still better than cure: require deposits on new clients, include clear payment terms on every invoice, and send automated payment reminders. Reserve late payment interest for clients who repeatedly pay late despite reminders.`,
    },
  },
  {
    slug: "invoice-total-calculator",
    name: "Invoice Total Calculator",
    shortName: "Invoice Calculator",
    description:
      "Calculate the total amount to put on your freelance invoice including VAT, discounts, and deposits already paid.",
    longDescription:
      "Build accurate invoice totals with VAT, percentage discounts, and deposit deductions — all in one calculation.",
    category: "client-projects",
    keywords: [
      "invoice calculator freelancer",
      "freelance invoice total calculator",
      "invoice with vat calculator",
      "invoice with discount calculator",
      "freelance billing calculator",
    ],
    fields: [
      { id: "subtotal", label: "Subtotal (Services)", type: "number", unit: "$", min: 0, defaultValue: 1000, helpText: "Total of all line items before VAT or discounts" },
      { id: "vatRate", label: "VAT / Tax Rate", type: "number", unit: "%", min: 0, defaultValue: 0, helpText: "Leave at 0 if you don't charge VAT. UK standard: 20%. US: typically 0% for services." },
      { id: "discount", label: "Discount", type: "number", unit: "%", min: 0, max: 100, defaultValue: 0, helpText: "Percentage discount off the subtotal" },
      { id: "depositPaid", label: "Deposit Already Paid", type: "number", unit: "$", min: 0, defaultValue: 0, helpText: "Upfront deposit or previous partial payment to deduct" },
    ],
    relatedSlugs: ["vat-calculator-freelancer", "late-payment-interest-calculator", "client-profitability-calculator"],
    relatedComparisonSlugs: ["freshbooks-vs-quickbooks-self-employed", "bonsai-vs-freshbooks", "wise-vs-paypal-freelancers"],
    faqs: [
      {
        question: "What should I include as a subtotal on a freelance invoice?",
        answer:
          "List each service or deliverable as a separate line item with a description and amount. For example: 'Website design — 20 hours × $75/hr = $1,500' or 'Monthly retainer — October 2024 = $2,000'.",
      },
      {
        question: "Should discount be applied before or after VAT?",
        answer:
          "Discount is typically applied to the subtotal first, then VAT is calculated on the discounted amount. This calculator follows that convention.",
      },
      {
        question: "How do I handle deposits on invoices?",
        answer:
          "Show the full project amount as the subtotal. List the deposit paid as a deduction. This gives the client a clear picture of the total project value and what they owe now. Example: Project total £3,000 − 50% deposit already paid (£1,500) = Due now: £1,500.",
      },
      {
        question: "What payment methods should I offer on invoices?",
        answer:
          "Bank transfer (cheapest, no processing fee), credit card via Stripe or PayPal (convenient, 2.9%+ fee), and for international clients: Wise business account details in the client's local currency (saves on conversion fees).",
      },
    ],
    educationContent: {
      title: "How to Calculate Freelance Invoice Totals",
      body: `A professional invoice is more than a payment request — it's a legal document that protects both you and your client. Getting the maths right, especially with VAT and deposits, prevents disputes and delays.

The calculation order matters: apply discounts first (to the subtotal), then calculate VAT on the discounted amount, then deduct any deposit already paid. Getting this order wrong — for example, calculating VAT on the pre-discount amount — will overcharge the client.

For freelancers not registered for VAT, the invoice total is simply subtotal minus deposit. For VAT-registered freelancers, both the net and gross amounts must be clearly stated, along with your VAT registration number.

Use invoicing software (FreshBooks, Bonsai, Wave, or even basic tools like Invoice Ninja) to automate this. Manual invoice calculation is fine for occasional use, but automation reduces errors and tracks payment status automatically — critical for cash flow management.`,
    },
  },
  // ─── FINANCIAL PLANNING ────────────────────────────────────────────────────
  {
    slug: "emergency-fund-calculator",
    name: "Freelance Emergency Fund Calculator",
    shortName: "Emergency Fund Calculator",
    description:
      "Calculate how large your emergency fund should be as a freelancer and how much more you need to save.",
    longDescription:
      "Freelancers need a larger emergency fund than employees. This calculator helps you set the right target for your situation and track progress toward it.",
    category: "financial-planning",
    keywords: [
      "emergency fund calculator freelancer",
      "how much emergency fund freelancer",
      "self employed emergency fund",
      "freelance financial cushion calculator",
      "6 months expenses calculator",
    ],
    fields: [
      { id: "monthlyExpenses", label: "Monthly Essential Expenses", type: "number", unit: "$", min: 0, defaultValue: 3000, helpText: "Rent/mortgage, food, utilities, insurance, minimum debt payments only — not discretionary spending" },
      { id: "monthsCoverage", label: "Months of Coverage Target", type: "number", unit: "months", min: 1, max: 24, defaultValue: 6, helpText: "6 months minimum for freelancers. 9-12 months if income is highly variable." },
      { id: "currentSavings", label: "Current Emergency Fund Balance", type: "number", unit: "$", min: 0, defaultValue: 5000, helpText: "Liquid savings in a dedicated emergency fund account" },
    ],
    relatedSlugs: ["freelance-take-home-pay-calculator", "savings-rate-calculator", "break-even-calculator"],
    relatedComparisonSlugs: ["freelance-vs-full-time-salary"],
    faqs: [
      {
        question: "How much emergency fund do freelancers need?",
        answer:
          "Minimum 6 months of essential expenses. Freelancers with highly variable income, fewer clients, or clients in cyclical industries should target 9-12 months. The extra buffer accounts for the time needed to find new clients and close new contracts during a dry spell.",
      },
      {
        question: "Where should I keep my emergency fund?",
        answer:
          "In a high-yield savings account (HYSA) — separate from your checking account so it's not temptingly accessible, but liquid enough to withdraw within 1-3 business days. Current rates (2024) are 4-5% APY, so your emergency fund earns meaningful interest while it waits.",
      },
      {
        question: "Should I count business savings and personal savings separately?",
        answer:
          "Yes. Maintain a separate emergency fund for personal living expenses (this calculator). Also maintain a business cash buffer (typically 1-3 months of business costs) for unexpected business expenses like equipment failures or tax bills.",
      },
      {
        question: "How fast should I build my emergency fund?",
        answer:
          "Prioritize 1 month's expenses as a quick win, then build to 3 months within 6-12 months. The full 6-month target may take 1-2 years depending on income level. Automate a fixed percentage transfer (10-15% of each payment received) to make steady progress.",
      },
    ],
    educationContent: {
      title: "Emergency Fund for Freelancers: Why You Need More Than Employees",
      body: `The standard advice for employees is a 3-6 month emergency fund. For freelancers, 6-12 months is more appropriate — and the difference matters.

Unlike an employee who can collect unemployment insurance, most freelancers have no income safety net beyond their own savings. When a major client leaves, work dries up, or a health emergency occurs, you're on your own. Without adequate savings, you'll take on lower-paying work out of desperation, make poor financial decisions under stress, or go into debt.

The calculation is straightforward: monthly essential expenses (rent, food, utilities, minimum debt payments, insurance) times your desired coverage period. Don't inflate this with discretionary spending — the emergency fund covers the basics.

Build it deliberately. Direct 10% of every client payment into a dedicated HYSA. Don't touch it for anything other than a genuine emergency — job loss, major health expense, or essential equipment failure. Keep it separate from your operating account so you're not tempted to use it for normal cash flow gaps.

A fully funded emergency fund is the most valuable investment a freelancer can make. It lets you turn down underpaying work, negotiate from a position of strength, and weather client loss without panic.`,
    },
  },
  {
    slug: "savings-rate-calculator",
    name: "Savings Rate Calculator (Irregular Income)",
    shortName: "Savings Rate Calculator",
    description:
      "Calculate your current savings rate on irregular freelance income and see how much to set aside each month.",
    longDescription:
      "Irregular income makes savings planning harder. This calculator shows your current savings rate and the gap to your target, helping you build financial discipline month by month.",
    category: "financial-planning",
    keywords: [
      "savings rate calculator irregular income",
      "freelance savings rate",
      "how much to save freelancer",
      "self employed savings calculator",
      "personal savings rate calculator",
    ],
    fields: [
      { id: "monthlyIncome", label: "Monthly Income (this month)", type: "number", unit: "$", min: 0, defaultValue: 6000, helpText: "Actual income received this month — use the specific month, not an average" },
      { id: "monthlyExpenses", label: "Monthly Expenses", type: "number", unit: "$", min: 0, defaultValue: 3500, helpText: "All expenses this month — personal and business combined" },
      { id: "targetSavingsRate", label: "Target Savings Rate", type: "number", unit: "%", min: 0, max: 80, defaultValue: 20, helpText: "20% is a common starting target. 30%+ accelerates wealth building." },
    ],
    relatedSlugs: ["emergency-fund-calculator", "retirement-contribution-calculator", "freelance-take-home-pay-calculator"],
    relatedComparisonSlugs: ["freelance-vs-full-time-salary"],
    faqs: [
      {
        question: "What is a good savings rate for a freelancer?",
        answer:
          "20% is a healthy baseline. 30%+ accelerates wealth building. Keep in mind that tax savings (quarterly payments), retirement contributions, and emergency fund contributions all count toward your savings rate.",
      },
      {
        question: "How do I save consistently on irregular income?",
        answer:
          "Use a percentage-based approach rather than a fixed dollar amount. When you earn $5,000 save 20% ($1,000). When you earn $10,000 save 20% ($2,000). This way savings scale automatically with income rather than feeling arbitrary in slow months.",
      },
      {
        question: "Should tax reserves count toward my savings rate?",
        answer:
          "It depends on your perspective. Tax reserves are money you'll need to pay — they're not truly 'savings' in the wealth-building sense. For this calculator, track savings separately from tax reserves. Ideally, have separate accounts: emergency fund, retirement, tax reserve, and spending.",
      },
      {
        question: "What if I can't save 20% in slow months?",
        answer:
          "Save what you can. Even 5-10% in a slow month is better than nothing. Make up the gap in high-income months by saving 30-40%. The annual average matters more than any single month.",
      },
    ],
    educationContent: {
      title: "Savings Strategy for Freelancers with Irregular Income",
      body: `Irregular income is the defining financial challenge of freelancing. Some months you're flush; others you're stressed. Building a consistent savings habit in this environment requires a different approach than the fixed-paycheck strategies most personal finance advice assumes.

The solution is percentage-based saving. Rather than saving a fixed dollar amount each month, commit to saving a fixed percentage of whatever you earn. 20% in a $4,000 month = $800. 20% in an $10,000 month = $2,000. The percentage is consistent; the dollar amount varies. This feels fair and sustainable because you're always saving relative to what came in.

Beyond the savings rate itself, the key is bucket-based banking: separate accounts for taxes, emergency fund, retirement, and spending. Every client payment gets divided across these buckets immediately — before you have a chance to spend it. This automation removes the temptation and makes savings effortless.

Track your savings rate monthly. When you've had several high-income months, your savings rate should increase accordingly. When income drops, the emergency fund buffer is what prevents you from going backwards on your longer-term financial goals.`,
    },
  },
  {
    slug: "retirement-contribution-calculator",
    name: "Self-Employed Retirement Calculator",
    shortName: "Retirement Calculator",
    description:
      "Calculate your maximum self-employed retirement contribution for SEP-IRA, Solo 401(k), or SIMPLE IRA.",
    longDescription:
      "Retirement accounts offer freelancers significant tax savings. This calculator shows your maximum annual contribution for each account type and the tax savings at stake.",
    category: "financial-planning",
    keywords: [
      "self employed retirement calculator",
      "sep ira contribution calculator",
      "solo 401k calculator freelancer",
      "freelancer retirement savings",
      "self employed retirement contribution limit",
    ],
    fields: [
      { id: "annualNetIncome", label: "Annual Net Self-Employment Income", type: "number", unit: "$", min: 0, defaultValue: 60000, helpText: "Net profit from self-employment (after business deductions, before SE tax deduction)" },
      {
        id: "accountType",
        label: "Account Type",
        type: "select",
        options: [
          { label: "SEP-IRA — Simple setup, up to 25% of net income", value: "sep-ira" },
          { label: "Solo 401(k) — Higher limits, employee + employer contributions", value: "solo-401k" },
          { label: "SIMPLE IRA — For businesses with up to 100 employees", value: "simple-ira" },
        ],
        defaultValue: "sep-ira",
      },
      { id: "age", label: "Your Age", type: "number", unit: "yrs", min: 18, max: 80, defaultValue: 35, helpText: "Age 50+ qualifies for catch-up contributions" },
    ],
    relatedSlugs: ["savings-rate-calculator", "self-employment-tax-calculator", "freelance-take-home-pay-calculator"],
    relatedComparisonSlugs: ["freelance-vs-full-time-salary"],
    faqs: [
      {
        question: "What's the difference between SEP-IRA and Solo 401(k)?",
        answer:
          "SEP-IRA is simpler: contribute up to 25% of net self-employment income (max $69,000 in 2024). Solo 401(k) allows both employee contributions ($23,000 in 2024) plus 25% employer contributions, for a potentially higher total. Solo 401(k) also allows Roth contributions and loans.",
      },
      {
        question: "How much tax do I save by maxing my retirement account?",
        answer:
          "Every dollar contributed to a traditional SEP-IRA or Solo 401(k) reduces your taxable income by one dollar. At a 22% combined rate, a $10,000 contribution saves approximately $2,200 in federal income tax, plus reduces your SE tax slightly.",
      },
      {
        question: "When is the deadline to contribute to a SEP-IRA?",
        answer:
          "The deadline for SEP-IRA contributions is your tax filing deadline including extensions — typically October 15 for individuals. This gives you significantly more time than a 401(k) and allows you to wait until you know your actual annual income before contributing.",
      },
      {
        question: "Can I have both a SEP-IRA and a Solo 401(k)?",
        answer:
          "You can have both account types, but your total contributions across all accounts are limited to the annual defined contribution limit ($69,000 in 2024). Most freelancers choose one — Solo 401(k) for higher income earners who want maximum contributions, SEP-IRA for simplicity.",
      },
    ],
    educationContent: {
      title: "Retirement Accounts for Self-Employed Freelancers",
      body: `Retirement planning is one of the most neglected aspects of freelance finances — and one of the most valuable, thanks to substantial tax advantages.

As a self-employed person, you have access to retirement accounts with much higher contribution limits than standard employee plans. A SEP-IRA allows you to contribute up to 25% of net self-employment income, up to $69,000 in 2024. A Solo 401(k) allows even more — combining employee contributions ($23,000) with employer contributions (25% of net income), up to the same annual cap.

Every dollar contributed to a traditional retirement account reduces your taxable income dollar-for-dollar. At the 22% federal bracket, a $20,000 SEP-IRA contribution saves you $4,400 in federal income tax. It also slightly reduces your SE tax since it lowers your adjusted gross income.

Start small if you must — even $200/month into a SEP-IRA grows significantly over decades thanks to compound growth and tax-deferred accumulation. The key is starting. Open a SEP-IRA (available at most major brokerages with no setup fees) and automate a monthly contribution from your tax account.`,
    },
  },
  {
    slug: "freelance-income-goal-calculator",
    name: "Freelance Income Goal Calculator",
    shortName: "Income Goal Calculator",
    description:
      "Calculate the gross revenue you need to earn as a freelancer to hit your desired take-home pay after taxes and expenses.",
    longDescription:
      "Work backward from your desired lifestyle income to the gross revenue target you need to hit — accounting for taxes, expenses, and savings.",
    category: "financial-planning",
    keywords: [
      "freelance income goal calculator",
      "how much do I need to earn freelancing",
      "freelance revenue target calculator",
      "freelance gross income calculator",
      "self employed income goal",
    ],
    fields: [
      { id: "targetTakeHome", label: "Target Take-Home Pay", type: "number", unit: "$", min: 0, defaultValue: 60000, helpText: "Annual personal income you want after taxes and savings" },
      { id: "taxRate", label: "Effective Tax Rate", type: "number", unit: "%", min: 0, max: 50, defaultValue: 30, helpText: "Combined federal + state + SE tax rate as a % of gross income. 28-35% is typical for US freelancers." },
      { id: "businessExpenses", label: "Annual Business Expenses", type: "number", unit: "$", min: 0, defaultValue: 10000, helpText: "Software, equipment, insurance, professional services, etc." },
      { id: "savingsGoal", label: "Annual Savings Goal", type: "number", unit: "$", min: 0, defaultValue: 10000, helpText: "Emergency fund, retirement contributions, or other savings you want to set aside" },
    ],
    relatedSlugs: ["freelance-hourly-rate-calculator", "billable-hours-calculator", "savings-rate-calculator"],
    relatedComparisonSlugs: ["freelance-vs-full-time-salary", "hourly-vs-project-pricing"],
    faqs: [
      {
        question: "How do I calculate how much I need to earn as a freelancer?",
        answer:
          "Add your desired take-home pay plus savings goal plus business expenses to get net needed, then gross it up by dividing by (1 - your effective tax rate). For example: $60k take-home + $10k savings + $10k expenses = $80k net. At 30% tax: $80k / 0.7 = ~$114k gross revenue needed.",
      },
      {
        question: "What's a typical effective tax rate for US freelancers?",
        answer:
          "28-35% of gross income is typical for US freelancers in the $60k-120k income range, including SE tax. Higher earners (above $150k) typically see effective rates of 35-40%. Significant business deductions can bring the rate lower.",
      },
      {
        question: "How does this translate to an hourly rate?",
        answer:
          "Once you know your gross revenue target, divide by your realistic annual billable hours to get your minimum hourly rate. If you need $114,000 and can bill 1,500 hours/year, your minimum rate is $76/hr.",
      },
      {
        question: "Should savings be included in this calculation?",
        answer:
          "Yes — savings are a financial obligation to your future self, not optional discretionary spending. By including your savings goal in the calculation, you ensure your income target actually funds your complete financial life, not just current spending.",
      },
    ],
    educationContent: {
      title: "How to Set Your Freelance Income Goal",
      body: `Most freelancers set their income goal by asking 'how much can I charge?' — working from supply to demand. The more powerful approach is to start with your desired outcome and work backward: what lifestyle do I want, and what gross revenue do I need to generate to fund it?

Start with your annual take-home goal — the after-tax, after-savings income you want to live on. Add your annual savings target (retirement contributions, emergency fund building, investment goals). Add your estimated annual business expenses. This sum is your net financial requirement.

Now gross it up for taxes. Divide the net requirement by (1 minus your effective tax rate). If you need $80,000 net and your effective rate is 30%, you need $80,000 / 0.70 = $114,286 in gross revenue.

Finally, connect this to your hourly rate: divide your gross revenue target by your realistic annual billable hours. If you can bill 1,500 hours per year and need $114,286, your minimum rate is $76/hr. Anything below this and you're not funding your complete financial picture.

This backward calculation is more motivating than arbitrary rate-setting because it directly connects every hour you bill to a real life goal.`,
    },
  },

  // ─── 1099 TAX CALCULATOR ────────────────────────────────────────────────────
  {
    slug: "1099-tax-calculator",
    name: "1099 Tax Calculator",
    shortName: "1099 Tax Calculator",
    description: "Calculate your federal and state taxes on 1099 income. See your quarterly payment amounts, total tax burden, and estimated take-home pay as a 1099 contractor.",
    longDescription: "Estimate exactly how much tax you owe on your 1099 contract income, including self-employment tax, federal income tax, and state tax. Get your quarterly estimated payment amounts.",
    category: "income-tax",
    keywords: [
      "1099 tax calculator",
      "1099 contractor tax calculator",
      "how much tax do I owe on 1099 income",
      "1099 self employment tax",
      "quarterly taxes 1099",
      "1099 take home pay calculator",
    ],
    fields: [
      {
        id: "gross1099",
        label: "Gross 1099 Income",
        type: "number",
        unit: "$",
        min: 0,
        defaultValue: 75000,
        helpText: "Total 1099 income before any deductions",
      },
      {
        id: "businessExpenses",
        label: "Business Expenses",
        type: "number",
        unit: "$",
        min: 0,
        defaultValue: 5000,
        helpText: "Deductible business costs: software, equipment, home office, etc.",
      },
      {
        id: "filingStatus",
        label: "Filing Status",
        type: "select",
        options: [
          { label: "Single", value: "single" },
          { label: "Married Filing Jointly", value: "married" },
        ],
        defaultValue: "single",
      },
      {
        id: "stateTaxRate",
        label: "State Income Tax Rate",
        type: "number",
        unit: "%",
        min: 0,
        max: 15,
        step: 0.1,
        defaultValue: 5,
        helpText: "0% for TX, FL, WA, NV, SD, WY, AK. ~5% average. CA is 9.3%+.",
      },
      {
        id: "otherIncome",
        label: "Other Income (W-2, investments)",
        type: "number",
        unit: "$",
        min: 0,
        defaultValue: 0,
        helpText: "Add if you also have a part-time job or investment income",
      },
    ],
    relatedSlugs: ["self-employment-tax-calculator", "quarterly-tax-calculator", "freelance-tax-deduction-calculator"],
    relatedComparisonSlugs: ["freshbooks-vs-quickbooks-self-employed"],
    faqs: [
      {
        question: "What is the 1099 self-employment tax rate?",
        answer: "As a 1099 contractor, you pay 15.3% self-employment tax on 92.35% of your net earnings (after business expenses). This covers Social Security (12.4%) and Medicare (2.9%). You can deduct half of SE tax from your adjusted gross income, which partially offsets the burden.",
      },
      {
        question: "How is 1099 tax different from W-2 tax?",
        answer: "With a W-2 job, your employer pays half of Social Security and Medicare (7.65%). As a 1099 contractor, you pay both halves yourself — that's the 15.3% SE tax. You do get to deduct business expenses and half of SE tax, which W-2 employees mostly cannot. Overall, 1099 income typically has a higher effective tax rate unless you have significant deductions.",
      },
      {
        question: "Do I have to pay quarterly taxes on 1099 income?",
        answer: "Yes. If you expect to owe $1,000 or more in federal taxes for the year, the IRS requires you to make quarterly estimated payments. The due dates are April 15, June 16, September 15, and January 15. Missing these results in an underpayment penalty (currently ~8% annualized on the shortfall).",
      },
      {
        question: "What expenses can I deduct from 1099 income?",
        answer: "Common 1099 deductions: home office (dedicated workspace), internet (business portion), phone (business portion), software subscriptions, equipment (Section 179 expensing), professional development, health insurance premiums, retirement contributions (SEP-IRA, Solo 401k), travel for business, and professional services fees.",
      },
      {
        question: "Should I set aside money from every 1099 payment?",
        answer: "Yes. A common rule of thumb: set aside 25-30% of every 1099 payment into a separate tax account. Pay quarterly estimates from this account. At the end of the year, the account usually has a small surplus after your actual tax bill — which becomes a buffer for next year.",
      },
    ],
    educationContent: {
      title: "How 1099 Tax Works",
      body: `When a client pays you more than $600 in a year, they're required to send you a 1099-NEC form by January 31. This form reports your income to the IRS — and you're expected to have already paid taxes on it throughout the year via quarterly estimates.

**The 1099 Tax Equation**

1. Start with gross 1099 income
2. Subtract business expenses → net self-employment income
3. Calculate SE tax: net income × 92.35% × 15.3%
4. Deduct half of SE tax from AGI
5. Apply federal income tax brackets to adjusted gross income (after standard deduction)
6. Add state income tax
7. Divide total by 4 for quarterly payments

**The Standard Deduction Reduces Your Income Tax**

For 2026: $15,000 (single) or $30,000 (married filing jointly). This significantly reduces your federal income tax even before itemized deductions. Many 1099 contractors at moderate income levels pay very little federal income tax because their SE tax deduction + standard deduction wipes out most of the bracket exposure.

**Why the "Set Aside 25-30%" Rule Works**

For a single filer earning $75,000 in 1099 income with $5,000 in expenses: SE tax ≈ $9,700, federal income tax ≈ $7,300, and average state tax ≈ $3,500. Total: ~$20,500 on $75,000 = 27% effective rate. Setting aside 30% gives a ~$2,000 buffer.`,
    },
  },

  // ─── SALARY TO FREELANCE RATE CALCULATOR ────────────────────────────────────
  {
    slug: "salary-to-freelance-rate-calculator",
    name: "Salary to Freelance Rate Calculator",
    shortName: "Salary → Freelance Rate",
    description: "Convert your employee salary to the freelance hourly rate you need to charge to match your current compensation. Accounts for SE tax, benefits, and unpaid vacation.",
    longDescription: "Going freelance from a salaried job? This calculator shows the minimum hourly rate you need to charge to replace your total employee compensation — including the taxes and benefits your employer currently subsidises.",
    category: "rate-pricing",
    keywords: [
      "salary to freelance rate calculator",
      "what hourly rate equals my salary",
      "freelance equivalent of salary",
      "salary to hourly freelance",
      "how much to charge freelance to match salary",
      "employee salary to contractor rate",
    ],
    fields: [
      {
        id: "annualSalary",
        label: "Current Annual Salary",
        type: "number",
        unit: "$",
        min: 0,
        defaultValue: 80000,
        helpText: "Your gross salary before taxes",
      },
      {
        id: "employerBenefitsValue",
        label: "Employer Benefits Value",
        type: "number",
        unit: "$",
        min: 0,
        defaultValue: 12000,
        helpText: "Health insurance + retirement match + other benefits paid by employer. Typical range: $8,000-$20,000/year.",
      },
      {
        id: "billableHoursPerWeek",
        label: "Billable Hours per Week",
        type: "number",
        unit: "hrs",
        min: 1,
        max: 60,
        defaultValue: 30,
        helpText: "Hours actually billed to clients. Most freelancers bill 25-35 hours despite working 40-50.",
      },
      {
        id: "vacationWeeks",
        label: "Vacation Weeks",
        type: "number",
        unit: "weeks",
        min: 0,
        max: 12,
        defaultValue: 4,
        helpText: "Weeks off per year (unpaid as a freelancer)",
      },
      {
        id: "overheadExpenses",
        label: "Annual Business Expenses",
        type: "number",
        unit: "$",
        min: 0,
        defaultValue: 4000,
        helpText: "Software, equipment, accounting, insurance, etc.",
      },
      {
        id: "profitBuffer",
        label: "Profit Buffer",
        type: "number",
        unit: "%",
        min: 0,
        max: 100,
        defaultValue: 20,
        helpText: "Markup above break-even for savings, slow months, and growth",
      },
    ],
    relatedSlugs: ["freelance-hourly-rate-calculator", "freelance-take-home-pay-calculator", "freelance-income-goal-calculator"],
    relatedComparisonSlugs: ["freelance-vs-full-time-salary"],
    faqs: [
      {
        question: "Why do I need to charge so much more than my hourly salary equivalent?",
        answer: "Your employer salary hides significant hidden compensation. They pay half your Social Security and Medicare taxes (7.65% of salary), subsidise health insurance (often $5,000-$15,000/year), offer paid vacation (worth 8-10% of salary), and may match retirement contributions. As a freelancer, you pay all of these yourself — so your rate must cover them to truly match your employee take-home.",
      },
      {
        question: "What's the standard multiplier from salary to freelance rate?",
        answer: "A common rule of thumb is to multiply your salary-equivalent hourly rate by 1.5 to 2× to arrive at a freelance rate. So if $80,000/2,080 hours = $38/hr salary equivalent, your freelance rate should be $57-$76/hr minimum. This calculator gives you a precise number based on your specific situation.",
      },
      {
        question: "How many billable hours per week is realistic?",
        answer: "Most freelancers bill 25-35 hours per week despite working 40-50 hours. The unbillable time goes to admin, sales, invoicing, professional development, and business management. New freelancers often underestimate this. Using 30 hours/week is a conservative and common baseline.",
      },
      {
        question: "Should I include my employer's retirement match?",
        answer: "Yes — include it in the employer benefits value. A 4% match on an $80,000 salary is $3,200/year that you must now fund yourself via SEP-IRA or Solo 401k contributions. Not including it means you're accepting a real pay cut to go freelance.",
      },
    ],
    educationContent: {
      title: "Why Your Salary ÷ 2080 Hours Is Not Your Freelance Rate",
      body: `The most common mistake new freelancers make: dividing their annual salary by 2,080 hours (52 weeks × 40 hours) and setting that as their hourly rate. This math is dangerously wrong.

**What your employer actually pays for you**

If you earn $80,000, your employer's total cost for you is typically $95,000-$110,000 when you include:
- Employer share of FICA taxes: ~$6,120
- Health insurance contribution: $5,000-$15,000/year
- Paid vacation (3 weeks = $4,600 at $80k)
- Retirement match (4% = $3,200)
- Other benefits (life insurance, disability, etc.)

**The billable hours problem**

You don't bill 40 hours per week as a freelancer. Plan for 25-30 billable hours. The rest goes to admin, business development, invoicing, client communication, professional development, and the reality of sick days and slow weeks.

**The calculation**

Take total compensation you need to replace → add SE tax extra → add business overhead → divide by realistic billable hours. The result is your break-even rate. Add 15-25% for profit and slow-month buffer.

For a $80,000 salary: total replacement target ≈ $108,000 / 1,560 billable hours = **$69/hr minimum**. The $38/hr you calculated from salary ÷ 2,080 would leave you earning less than you did as an employee.`,
    },
  },

  // ─── FREELANCE TAX DEDUCTION CALCULATOR ─────────────────────────────────────
  {
    slug: "freelance-tax-deduction-calculator",
    name: "Freelance Tax Deduction Calculator",
    shortName: "Tax Deduction Calculator",
    description: "Calculate your freelance tax deductions and see how much you can save. Enter your home office, internet, software, equipment, and other expenses to estimate your deductible amount.",
    longDescription: "Find out exactly how much of your freelance business expenses are tax-deductible and how much you'll save at your marginal rate. Covers home office, internet, phone, software, equipment, health insurance, retirement, and travel.",
    category: "income-tax",
    keywords: [
      "freelance tax deduction calculator",
      "what can freelancers deduct",
      "self employed tax deductions",
      "home office deduction calculator",
      "1099 deductions calculator",
      "freelancer tax write offs",
    ],
    fields: [
      {
        id: "grossIncome",
        label: "Gross Freelance Income",
        type: "number",
        unit: "$",
        min: 0,
        defaultValue: 80000,
        helpText: "Your total 1099 / freelance income before deductions",
      },
      {
        id: "homeOfficeSqFt",
        label: "Home Office Size",
        type: "number",
        unit: "sq ft",
        min: 0,
        defaultValue: 150,
        helpText: "Square footage of your dedicated workspace (must be used exclusively for business)",
      },
      {
        id: "totalHomeSqFt",
        label: "Total Home Size",
        type: "number",
        unit: "sq ft",
        min: 1,
        defaultValue: 1000,
        helpText: "Total square footage of your home",
      },
      {
        id: "monthlyRentOrMortgage",
        label: "Monthly Rent / Mortgage",
        type: "number",
        unit: "$",
        min: 0,
        defaultValue: 1500,
        helpText: "Your monthly housing cost (home office % is deductible)",
      },
      {
        id: "internetMonthly",
        label: "Monthly Internet Bill",
        type: "number",
        unit: "$",
        min: 0,
        defaultValue: 60,
        helpText: "Full bill — the home office % is deductible",
      },
      {
        id: "phoneMonthly",
        label: "Monthly Phone Bill",
        type: "number",
        unit: "$",
        min: 0,
        defaultValue: 80,
        helpText: "Your phone bill",
      },
      {
        id: "phoneBizPct",
        label: "Phone Business Use",
        type: "number",
        unit: "%",
        min: 0,
        max: 100,
        defaultValue: 60,
        helpText: "Percentage of phone use for business. 50-80% is typical.",
      },
      {
        id: "softwareAnnual",
        label: "Software & Subscriptions",
        type: "number",
        unit: "$",
        min: 0,
        defaultValue: 1200,
        helpText: "Adobe CC, Figma, Notion, Slack, cloud storage, etc. 100% deductible.",
      },
      {
        id: "equipmentAnnual",
        label: "Equipment & Hardware",
        type: "number",
        unit: "$",
        min: 0,
        defaultValue: 0,
        helpText: "Computer, monitor, desk, camera, microphone. 100% deductible via Section 179.",
      },
      {
        id: "professionalDevelopment",
        label: "Professional Development",
        type: "number",
        unit: "$",
        min: 0,
        defaultValue: 500,
        helpText: "Courses, books, conferences, certifications related to your work",
      },
      {
        id: "healthInsurancePremium",
        label: "Health Insurance Premiums",
        type: "number",
        unit: "$",
        min: 0,
        defaultValue: 0,
        helpText: "Self-employed health insurance is 100% deductible (above-the-line)",
      },
      {
        id: "retirementContributions",
        label: "Retirement Contributions",
        type: "number",
        unit: "$",
        min: 0,
        defaultValue: 0,
        helpText: "SEP-IRA (up to 25% of net income) or Solo 401k contributions",
      },
      {
        id: "travelAnnual",
        label: "Business Travel",
        type: "number",
        unit: "$",
        min: 0,
        defaultValue: 0,
        helpText: "Flights, hotels, mileage for client meetings or business trips",
      },
      {
        id: "otherExpenses",
        label: "Other Business Expenses",
        type: "number",
        unit: "$",
        min: 0,
        defaultValue: 0,
        helpText: "Accounting fees, legal fees, business insurance, marketing, etc.",
      },
      {
        id: "marginalTaxRate",
        label: "Your Marginal Tax Rate",
        type: "select",
        options: [
          { label: "22% (income $48k-$103k, single)", value: "22" },
          { label: "24% (income $103k-$197k, single)", value: "24" },
          { label: "32% (income $197k-$251k, single)", value: "32" },
          { label: "12% (income $11k-$48k, single)", value: "12" },
        ],
        defaultValue: "22",
        helpText: "Your highest federal tax bracket. Used to calculate the tax savings from deductions.",
      },
    ],
    relatedSlugs: ["self-employment-tax-calculator", "quarterly-tax-calculator", "1099-tax-calculator"],
    relatedComparisonSlugs: ["freshbooks-vs-quickbooks-self-employed"],
    faqs: [
      {
        question: "What is the home office deduction for freelancers?",
        answer: "The home office deduction lets you deduct the percentage of your home used exclusively and regularly for business. Method 1 (regular): Calculate your office square footage ÷ total home square footage. Apply that percentage to rent/mortgage, utilities, and internet. Method 2 (simplified): $5 per square foot up to 300 sq ft = max $1,500. The regular method usually produces a larger deduction.",
      },
      {
        question: "Can I deduct my full internet bill?",
        answer: "No — only the business-use portion. If you work from home full-time, you might claim 80-90% of your internet bill. The IRS expects a reasonable business-use percentage. If you also have family members using the internet for personal use, a lower percentage (50-70%) is more defensible.",
      },
      {
        question: "What is Section 179 and how does it help freelancers?",
        answer: "Section 179 allows you to immediately deduct the full cost of qualifying business equipment in the year you buy it, rather than depreciating it over years. A $2,000 MacBook bought for your freelance work is 100% deductible in the year of purchase. This makes large equipment purchases much more tax-efficient.",
      },
      {
        question: "Should I deduct health insurance premiums?",
        answer: "Absolutely — this is one of the most valuable deductions for freelancers. Self-employed health insurance premiums (medical, dental, vision) are 100% deductible as an above-the-line deduction, meaning they reduce your AGI even if you don't itemize. At a 22% marginal rate, a $6,000 annual premium saves $1,320 in federal taxes.",
      },
      {
        question: "How much can I contribute to a SEP-IRA?",
        answer: "Up to 25% of your net self-employment income, capped at $69,000 for 2024 (limit adjusts annually). For someone with $80,000 in net SE income, that's up to $20,000. SEP-IRA contributions reduce your taxable income dollar-for-dollar — at a 22% rate, a $10,000 contribution saves $2,200 in federal taxes plus reduces your state tax.",
      },
    ],
    educationContent: {
      title: "The Freelancer's Guide to Tax Deductions",
      body: `One of the biggest financial advantages of freelancing is the ability to deduct legitimate business expenses before calculating your taxable income. W-2 employees mostly cannot deduct work expenses; freelancers can deduct almost everything required to run their business.

**The Big Five Deductions Most Freelancers Miss**

1. **Home office** — Even a modest 150 sq ft office in a 1,000 sq ft apartment deducts 15% of rent/mortgage and utilities. At $1,500/month rent, that's $2,700/year.

2. **Self-employed health insurance** — If you pay for your own health insurance, the entire premium is deductible above-the-line. This is one of the largest deductions available.

3. **Retirement contributions** — A SEP-IRA lets you contribute up to 25% of net income. This both builds your retirement and lowers your current tax bill.

4. **Software subscriptions** — Adobe CC ($55/mo), Figma ($15/mo), cloud storage, project management tools — all 100% deductible.

5. **Professional development** — Courses, books, and conferences that maintain or improve skills required for your work are fully deductible.

**Keep Records Throughout the Year**

The IRS requires contemporaneous records. Use accounting software (FreshBooks, QuickBooks, Wave) to track expenses as they occur. Don't try to reconstruct a year's worth of expenses in April. A proper expense record makes your tax return faster and your deductions more defensible.`,
    },
  },
];

export function getCalculatorBySlug(slug: string): CalculatorMeta | undefined {
  return calculators.find((c) => c.slug === slug || c.parentSlug === slug);
}

export function getRelatedCalculators(slug: string): CalculatorMeta[] {
  const calc = calculators.find((c) => c.slug === slug);
  if (!calc) return [];
  return calc.relatedSlugs
    .map((s) => calculators.find((c) => c.slug === s))
    .filter((c): c is CalculatorMeta => c !== undefined);
}
