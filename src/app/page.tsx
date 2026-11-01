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

export const metadata: Metadata = { alternates: { canonical: '/' } };

export default function Home() {
  const resumes = getAvailableResumes();

  return (
    <>
      <Hero hasResumes={resumes.length > 0} />
      <Stories />
      <WorkExperience />
      <Projects />
      <Skills />
      <Education />
      <Resume resumes={resumes} />
      <Contact />
    </>
  );
}
