import type { Metadata } from 'next';
import { flowline } from '../../../../content/projects';
import { ProjectCaseStudy } from '../../components/ProjectCaseStudy';

export const metadata: Metadata = {
  title: 'Flowline — Personal Finance & AI Assistant',
  description: 'Ason Yue’s Flowline case study: financial workflow design, product ownership, AI-assisted development, and functional validation.',
  alternates: { canonical: '/projects/flowline' },
};

export default function FlowlinePage() {
  return <ProjectCaseStudy project={flowline} />;
}
