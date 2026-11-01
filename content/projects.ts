export interface ProjectImage {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
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
  video?: { href: string; label: string };
  demo?: { href: string; label: string };
}

export const flowline: Project = {
  slug: 'flowline',
  name: 'Flowline',
  subtitle: 'Personal Finance & AI Assistant',
  type: 'Independent project',
  timeline: 'May 2026 – Present',
  summary: 'Turning everyday financial commitments into a clearer picture of available funds, with an AI assistant that helps users explore their own financial data.',
  role: 'Product requirements, workflow design, AI-assisted development direction, and functional validation',
  technologies: ['Next.js', 'React', 'TypeScript', 'Prisma', 'PostgreSQL', 'OpenRouter'],
  images: [],
  sections: [
    {
      id: 'overview',
      title: 'Overview',
      paragraphs: ['Flowline is a personal finance application for understanding spending, planning cash flow, and tracking savings, assets, and liabilities. Its central question is practical: after accounting for commitments, how much money is available to spend?'],
    },
    {
      id: 'challenge',
      title: 'The challenge',
      paragraphs: ['An account balance alone does not explain what is safe to spend. Upcoming credit card bills, recurring payments, and savings commitments can make available funds difficult to understand. I wanted a workflow that brings those obligations together before allocating money to everyday spending.'],
    },
    {
      id: 'role',
      title: 'My role',
      paragraphs: ['I identified the financial management problems, defined product requirements and business rules, designed the planning workflows, and made product and technical decisions. I directed AI-assisted development using Codex and validated the resulting functionality through real-world usage and testing.', 'Codex produced much of the application code under my direction. My contribution combines product ownership, technical decision-making, and validation of the resulting implementation.'],
    },
    {
      id: 'solution',
      title: 'Solution design',
      paragraphs: ['The monthly planning workflow accounts for financial commitments before category-level spending allocations. Transaction tracking, credit card bills, recurring payments, savings goals, and asset views provide context around that plan.'],
      steps: [
        { title: 'Define commitments', description: 'Record income schedules, recurring obligations, credit card bills, and savings or investment commitments.' },
        { title: 'Calculate available funds', description: 'Account for those commitments to understand the remaining amount.' },
        { title: 'Allocate and review', description: 'Allocate funds across spending categories and review actual transactions against the plan.' },
      ],
    },
    {
      id: 'technology',
      title: 'Technology & implementation',
      paragraphs: ['Flowline uses Next.js, React, and TypeScript, with Prisma and PostgreSQL for application data. Flowmi connects to generative AI through OpenRouter.', 'When a user asks a financial question, the model selects from predefined tools. The application validates arguments, executes scoped queries or calculations, and returns results for a natural-language explanation and visualization cards. Application-controlled tool execution provides boundaries; it does not guarantee that every AI interpretation is correct.'],
      bullets: [
        'query_transactions — retrieve transaction information and spending summaries.',
        'query_budgets — retrieve budget allocations, usage, and remaining amounts.',
        'query_assets — retrieve account, asset, and liability information.',
        'calculate — execute bounded calculations for the requested analysis.',
      ],
    },
    {
      id: 'validation',
      title: 'Validation & outcomes',
      paragraphs: ['I use and test the application to check whether its financial rules, workflows, and AI-assisted responses fit practical needs. This work has produced a functioning application and an ongoing process of identifying issues and refining behavior.', 'The project brings requirements definition, financial workflow design, and AI-assisted implementation together in a product I can validate through everyday use. It remains an independent project under active development.'],
    },
  ],
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
