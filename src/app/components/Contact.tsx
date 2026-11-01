'use client';

import { motion } from 'framer-motion';
import type { HomepageContent } from '../../../content/portfolio';
import { siteCopy, type Locale } from '../../../content/site-copy';

export function Contact({ personalData, locale }: { personalData: HomepageContent['personal']; locale: Locale }) {
  const copy = siteCopy[locale];
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold mb-6"
        >
          {copy.contactPrefix}<span className="gradient-text">{copy.contactAccent}</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-foreground/80 text-lg mb-12"
        >
          {copy.contactIntro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap gap-6 justify-center mb-12"
        >
          <a
            href={`mailto:${personalData.email}`}
            className="flex items-center gap-3 px-4 sm:px-6 py-3 max-w-full bg-card rounded-full hover:bg-accent/10 transition-colors duration-300 group"
          >
            <span className="text-accent group-hover:scale-110 transition-transform">✉</span>
            <span className="font-[family-name:var(--font-jetbrains)] text-sm sm:text-base break-all">{personalData.email}</span>
          </a>
          <a
            href={personalData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 sm:px-6 py-3 max-w-full bg-card rounded-full hover:bg-secondary/10 transition-colors duration-300 group"
          >
            <span className="text-secondary group-hover:scale-110 transition-transform">GH</span>
            <span className="font-[family-name:var(--font-jetbrains)]">GitHub</span>
          </a>
          <a
            href={personalData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 sm:px-6 py-3 max-w-full bg-card rounded-full hover:bg-accent/10 transition-colors duration-300 group"
          >
            <span className="text-accent group-hover:scale-110 transition-transform">IN</span>
            <span className="font-[family-name:var(--font-jetbrains)]">LinkedIn</span>
          </a>
        </motion.div>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          href={`mailto:${personalData.email}`}
          className="inline-block px-10 py-4 bg-accent text-button-foreground font-semibold text-lg rounded-full hover:bg-accent/90 transition-all duration-300 hover:scale-105 glow-accent"
        >
          {copy.getInTouch}
        </motion.a>
      </div>
    </section>
  );
}
