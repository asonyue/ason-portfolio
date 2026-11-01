'use client';

import { motion } from 'framer-motion';
import type { HomepageContent } from '../../../content/portfolio';
import { siteCopy, type Locale } from '../../../content/site-copy';

export function Skills({ data: skillsData, locale }: { data: HomepageContent['skills']; locale: Locale }) {
  const copy = siteCopy[locale];
  return (
    <section id="skills" className="py-24 px-6 bg-section-alt">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold text-center mb-16"
        >
          {copy.skillsPrefix}<span className="text-secondary">{copy.skillsAccent}</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skillsData.categories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="bg-card rounded-2xl p-6 hover:scale-[1.02] transition-transform duration-300"
            >
              <h3 className="font-[family-name:var(--font-display)] text-accent text-xl font-bold mb-4">
                {category.name}
              </h3>
              <p className="text-foreground/80 text-sm leading-relaxed mb-6">{category.description}</p>
              <ul className="space-y-3">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="text-foreground/80 text-sm flex items-start gap-3 leading-relaxed"
                  >
                    <span aria-hidden="true" className="w-1.5 h-1.5 mt-2 flex-shrink-0 bg-secondary rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 pt-5 border-t border-foreground/15 text-sm text-foreground/75 leading-relaxed">{category.evidence}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
