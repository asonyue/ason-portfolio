export interface ResumeLink {
  id: 'consulting' | 'qa';
  label: string;
  description: string;
  href: string;
}

interface ResumeDefinition extends Omit<ResumeLink, 'href'> {
  // Set a local PDF path only after the final document has been reviewed.
  href: string | null;
  reviewed: boolean;
}

export const resumes: ResumeDefinition[] = [
  {
    id: 'consulting',
    label: 'Technology Consulting Resume',
    description: 'Business analysis, process improvement, AI integration, and stakeholder collaboration.',
    href: null,
    reviewed: false,
  },
  {
    id: 'qa',
    label: 'QA Engineering Resume',
    description: 'FinTech quality engineering, API and integration testing, automation, and test coverage.',
    href: null,
    reviewed: false,
  },
];
