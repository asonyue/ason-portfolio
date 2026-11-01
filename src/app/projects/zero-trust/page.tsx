import type { Metadata } from 'next';
import { getProject } from '../../../../content/projects.zh-TW';
import { ProjectCaseStudy } from '../../components/ProjectCaseStudy';
import { getLocale } from '../../../lib/locale';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const project = getProject('zero-trust', locale);
  return {
    title: `${project.name} — ${project.subtitle}`,
    description: project.summary,
    alternates: { canonical: '/projects/zero-trust' },
  };
}

export default async function ZeroTrustPage() {
  const locale = await getLocale();
  return <ProjectCaseStudy project={getProject('zero-trust', locale)} locale={locale} />;
}
