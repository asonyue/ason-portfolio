'use client';

import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Stories } from './components/Stories';
import { Skills } from './components/Skills';
import { WorkExperience } from './components/WorkExperience';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Stories />
      <Skills />
      <WorkExperience />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
