'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-center mb-16"
        >
          {t.about.title.split(' ')[0]} <span className="text-accent">{t.about.title.split(' ')[1]}</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="font-[family-name:var(--font-playfair)] text-6xl text-accent/20 leading-none block">&quot;</span>
          <p className="text-sm md:text-base text-foreground/80 italic leading-relaxed px-4 -mt-6 text-left whitespace-pre-line">
            {t.about.content}
          </p>
          <span className="font-[family-name:var(--font-playfair)] text-6xl text-accent/20 leading-none block mt-2">&quot;</span>
        </motion.div>
      </div>
    </section>
  );
}
