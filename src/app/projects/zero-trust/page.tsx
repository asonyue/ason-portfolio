import type { Metadata } from 'next';
import { zeroTrust } from '../../../../content/projects';
import { ProjectCaseStudy } from '../../components/ProjectCaseStudy';

export const metadata: Metadata = {
  title: 'Zero Trust — Maturity Assessment System',
  description: 'Ason Yue’s contribution to a team-developed Systex internship project: cybersecurity assessment workflows, system testing, API validation, and handover.',
  alternates: { canonical: '/projects/zero-trust' },
};

export default function ZeroTrustPage() {
  return <ProjectCaseStudy project={zeroTrust} />;
}
