import type { Metadata } from 'next';
import { Hero } from './components/Hero';
import { Stories } from './components/Stories';
import { Skills } from './components/Skills';
import { WorkExperience } from './components/WorkExperience';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Projects } from './components/Projects';
import { Resume } from './components/Resume';
import { getAvailableResumes } from '../lib/resumes';
import { getLocale } from '../lib/locale';
import { getHomepageContent } from '../../content/portfolio';
import { getProjects } from '../../content/projects.zh-TW';

export const metadata: Metadata = { alternates: { canonical: '/' } };

export default async function Home() {
  const locale = await getLocale();
  const content = getHomepageContent(locale);
  const resumes = getAvailableResumes(locale);

  return (
    <>
      <Hero hasResumes={resumes.length > 0} personalData={content.personal} locale={locale} />
      <Stories data={content.stories} locale={locale} />
      <WorkExperience data={content.experience} locale={locale} />
      <Projects projects={getProjects(locale)} locale={locale} />
      <Skills data={content.skills} locale={locale} />
      <Education data={content.education} locale={locale} />
      <Resume resumes={resumes} locale={locale} />
      <Contact personalData={content.personal} locale={locale} />
    </>
  );
}
