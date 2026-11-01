export interface ProjectImage {
  src: string;
  alt: string;
  title?: string;
  caption: string;
  width: number;
  height: number;
  featured?: boolean;
}

export interface CaseStudySection {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  steps?: { title: string; description: string }[];
}

export interface Project {
  slug: 'flowline' | 'zero-trust';
  name: string;
  subtitle: string;
  type: string;
  timeline: string;
  summary: string;
  role: string;
  technologies: string[];
  sections: CaseStudySection[];
  images: ProjectImage[];
  mediaTitle?: string;
  mediaDescription?: string;
  video?: { href: string; label: string };
  demo?: { href: string; label: string };
}

export const flowline: Project = {
  "slug": "flowline",
  "name": "Flowline",
  "subtitle": "Personal Finance & AI Assistant",
  "type": "Independent project",
  "timeline": "May 2026 – Present",
  "summary": "Connecting everyday money tracking with monthly plans, savings goals, and assets to help users understand what they can spend and explore their financial records with Flowmi AI.",
  "role": "Independent product planning, financial rules, AI-assisted implementation, and end-to-end validation",
  "technologies": [
    "Next.js",
    "React",
    "TypeScript",
    "Prisma",
    "PostgreSQL",
    "OpenRouter"
  ],
  "images": [
    {
      "src": "/projects/flowline/TransactionPage.png",
      "title": "Record everyday transactions",
      "alt": "Flowline demo transaction page showing monthly cash flow, income and expense totals, and categorized transactions in Traditional Chinese.",
      "caption": "The transaction view brings categorized income and expenses into a monthly history. Its cash-flow total describes recorded money movements; the separate spending plan determines the remaining spending allowance.",
      "width": 652,
      "height": 1394,
      "featured": true
    },
    {
      "src": "/projects/flowline/SpendingPlan.png",
      "title": "Plan what remains available to spend",
      "alt": "Flowline spending plan showing a remaining monthly allowance, spending to date, a funding-plan entry, and category allowances.",
      "caption": "The spending plan compares actual spending with the monthly allowance and category allocations. The funding workflow accounts for expected income, chosen savings drawdowns, fixed payments, savings, investments, and additional credit-card reserves.",
      "width": 648,
      "height": 1392,
      "featured": true
    },
    {
      "src": "/projects/flowline/SavingPlan.png",
      "title": "Connect monthly saving with longer-term goals",
      "alt": "Flowline savings plan showing confirmed monthly savings progress, a My jars entry, and a completed emergency-fund contribution.",
      "caption": "Monthly arrangements track confirmed savings and investment contributions. The My jars entry connects those arrangements to longer-term goals, such as an emergency fund or travel. Jars earmark existing account funds without adding to net worth.",
      "width": 648,
      "height": 1378
    },
    {
      "src": "/projects/flowline/AssetPage.png",
      "title": "Review assets, liabilities, and net worth",
      "alt": "Flowline asset overview showing net worth, change since the prior month, liquid accounts, investments, and liabilities.",
      "caption": "The asset overview separates liquid funds, investments, and liabilities to explain recorded net worth. Month navigation supports historical review, while the account breakdown provides context beyond transaction totals.",
      "width": 650,
      "height": 1384
    },
    {
      "src": "/projects/flowline/FlowmiaiPage.png",
      "title": "Ask Flowmi to explain the records",
      "alt": "Flowmi conversation analyzing a demo month’s income, expenses, top spending categories, and possible savings in Traditional Chinese.",
      "caption": "A natural-language question brings together monthly totals, ranked spending categories, and practical suggestions based on recorded data. Flowmi’s financial tools retrieve information and perform calculations; they do not change financial records.",
      "width": 650,
      "height": 1404,
      "featured": true
    }
  ],
  "mediaTitle": "Product walkthrough",
  "mediaDescription": "Five screens connect transaction tracking, monthly planning, savings, asset management, and Flowmi analysis. These screenshots use fictional demo data. The interface is shown in Traditional Chinese, with English explanations; Flowline also supports English.",
  "sections": [
    {
      "id": "overview",
      "title": "Overview",
      "paragraphs": [
        "Flowline is a personal finance web application that connects everyday money tracking with monthly planning, savings goals, and AI-assisted financial analysis. It helps users move from recording transactions to making practical decisions about what they can spend, save, and set aside."
      ]
    },
    {
      "id": "challenge",
      "title": "The challenge",
      "paragraphs": [
        "Income minus expenses does not explain every financial commitment. Credit-card obligations, recurring payments, planned savings, and investments all affect the money available for daily spending. I wanted to connect those pieces in one workflow so that tracking past activity also supports decisions about the month ahead."
      ]
    },
    {
      "id": "role",
      "title": "My role",
      "paragraphs": [
        "I independently planned and built Flowline with support from AI coding tools. I framed the financial management problem, defined requirements and business rules, designed workflows, and made product and technical decisions.",
        "I used Codex to support implementation and remained responsible for directing development, reviewing behavior, and validating the product through real-world usage and testing. The project combines product ownership, data interpretation, practical AI application, and end-to-end delivery."
      ]
    },
    {
      "id": "solution",
      "title": "How the product fits together",
      "paragraphs": [
        "The application connects recorded activity with a forward-looking funding plan. Users can review spending against allocations, track goals, understand their overall financial position, and ask follow-up questions through Flowmi."
      ],
      "steps": [
        {
          "title": "Track money movements",
          "description": "Record and categorize income and expenses, identify payment accounts, and review transaction history."
        },
        {
          "title": "Build the monthly plan",
          "description": "Allocate expected income and chosen savings drawdowns across fixed payments, savings, investments, credit-card reserves, and daily spending."
        },
        {
          "title": "Monitor spending and savings",
          "description": "Compare category allocations with actual spending, confirm savings contributions, and earmark account funds toward goals with jars."
        },
        {
          "title": "Review and explore",
          "description": "Review accounts, liabilities, net worth, trends, and historical months, then ask Flowmi to explain the recorded information."
        }
      ]
    },
    {
      "id": "financial-rules",
      "title": "Financial rules behind the interface",
      "paragraphs": [
        "The product depends on keeping several financial concepts separate. These distinctions guide the planning logic and the way results are explained to users."
      ],
      "bullets": [
        "Planned monthly funding combines expected income and chosen savings drawdowns. It is distinct from the current bank balance.",
        "The remaining spending allowance reflects planned commitments and actual daily spending. It is different from income minus expenses.",
        "Credit-card purchases count as expenses; repayments are transfers and must not become a second expense. Additional funding reserves account for obligations not already covered by the plan.",
        "Savings jars earmark money already held in an account. They track a purpose and goal without increasing net worth.",
        "Current-month credit-card reserves are calculated dynamically. Historical months use saved plan information to preserve their financial context."
      ]
    },
    {
      "id": "flowmi",
      "title": "How Flowmi works",
      "paragraphs": [
        "Flowmi connects to generative AI models through OpenRouter. A user asks a question in natural language, and the model selects from four application-defined tools to retrieve information or perform a calculation.",
        "The backend validates tool arguments, executes queries and calculations, and manages execution limits, errors, response structure, persistent conversations, and conversation context. Results support explanations and financial visualizations. The financial tools are read-only and do not modify records."
      ],
      "bullets": [
        "query_transactions — retrieve transactions, totals, trends, and spending breakdowns.",
        "query_budgets — retrieve allocations, usage, and remaining spending allowances.",
        "query_assets — retrieve account balances, assets, liabilities, and savings-jar information.",
        "calculate — perform bounded calculations using the supplied financial information."
      ]
    },
    {
      "id": "technology",
      "title": "Technology & implementation",
      "paragraphs": [
        "Next.js provides both the frontend and backend, with React and TypeScript connecting the interface to application business logic. PostgreSQL and Prisma provide data storage and access. The application supports Traditional Chinese and English."
      ],
      "bullets": [
        "Interface and visualization: Tailwind CSS and Recharts support planning views, income and spending trends, category breakdowns, asset allocation, and investment value versus contributed cost.",
        "Backend: Next.js API routes run on Node.js, with TypeScript business logic and Zod validation.",
        "AI integration: OpenRouter connects Flowmi to generative AI models and application-controlled financial tools.",
        "Delivery: Docker packages the application for deployment on Railway."
      ]
    },
    {
      "id": "validation",
      "title": "Validation & outcomes",
      "paragraphs": [
        "I validate the application through everyday usage and testing, focusing on whether recorded transactions, funding plans, savings arrangements, and financial explanations behave consistently. This provides an ongoing way to identify issues and refine the product.",
        "Flowline brings problem framing, financial data interpretation, workflow design, and AI-assisted implementation together in a working independent application. The screenshots below demonstrate existing functionality using fictional financial data."
      ]
    }
  ]
};

export const zeroTrust: Project = {
  slug: 'zero-trust',
  name: 'Zero Trust',
  subtitle: 'Maturity Assessment System',
  type: 'Systex internship · Team project',
  timeline: '2025',
  summary: 'A team-developed platform that brings cybersecurity questionnaires, evidence, reviews, and reporting into a shared assessment workflow.',
  role: 'Team development participation, system testing, API validation, documentation, handover, and product video',
  technologies: ['Python', 'Django', 'MySQL', 'Postman'],
  images: [],
  video: { href: 'https://youtu.be/445bFDcH-kY', label: 'Watch project introduction' },
  sections: [
    {
      id: 'overview',
      title: 'Overview',
      paragraphs: ['During my cybersecurity consulting internship at Systex Corporation, I participated in a team project to digitize Zero Trust maturity assessments. The platform was designed to improve collaboration between consultants and clients across the assessment lifecycle.'],
    },
    {
      id: 'challenge',
      title: 'The challenge',
      paragraphs: ['Manual assessment processes can scatter questionnaire responses, supporting evidence, and review feedback across separate files and conversations. Repetitive follow-up, scoring, and report preparation make it harder to maintain a clear view of assessment progress.'],
    },
    {
      id: 'role',
      title: 'My role',
      paragraphs: ['I participated in team-based system development, supported system testing and API validation, and assisted with technical documentation and handover. I also created a product introduction video.', 'The platform was developed by a team during the internship. The features below describe the team solution rather than functionality I independently designed or implemented.'],
    },
    {
      id: 'solution',
      title: 'Solution design',
      paragraphs: ['The platform centralizes questionnaires and supporting evidence, with distinct client and consultant roles. Reviews and scoring connect assessment inputs to visualizations and downloadable reports.'],
      steps: [
        { title: 'Collect', description: 'Clients complete questionnaires and upload supporting evidence in a shared platform.' },
        { title: 'Review', description: 'Consultants review submissions and score assessment responses.' },
        { title: 'Communicate', description: 'Radar charts, bar charts, maturity gap analysis, and downloadable reports summarize the assessment.' },
      ],
    },
    {
      id: 'technology',
      title: 'Technology & implementation',
      paragraphs: ['The team used Python and Django for the web application, MySQL for data storage, and Postman for API validation. My testing and documentation work supported the transition from assessment requirements to a usable system and its handover.'],
    },
    {
      id: 'validation',
      title: 'Validation & outcomes',
      paragraphs: ['My contribution included system testing, API validation, and technical handover materials. The project demonstrates how a consulting workflow can be translated into a digital system, with validation supporting the implementation.', 'The resulting team platform brought questionnaires, evidence, scoring, and reporting into a shared workflow. The product introduction video below communicates the system and its intended assessment process.'],
    },
  ],
};

export const projects: Project[] = [flowline, zeroTrust];
