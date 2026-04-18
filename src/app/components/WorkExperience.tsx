'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

export function WorkExperience() {
  const { t } = useLanguage();

  const experiencesWithIcons = [
    { ...t.experience.jobs[0], icon: '/logos/data-annotation-logo.png' },
    { ...t.experience.jobs[1], icon: '/logos/hytech-logo.png' },
    { ...t.experience.jobs[2], icon: '/logos/systex-logo.png' },
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-center mb-16"
        >
          {t.experience.title.split(' ')[0]} <span className="text-secondary">{t.experience.title.split(' ')[1]}</span>
        </motion.h2>

        <div className="space-y-6">
          {experiencesWithIcons.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-background rounded-2xl p-6 border border-foreground/10 hover:border-accent/30 transition-colors duration-300"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                {exp.icon ? (
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-secondary/20 flex items-center justify-center overflow-hidden flex-shrink-0">
                    <img src={exp.icon} alt={exp.company} className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
                  </div>
                ) : (
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <span className="font-[family-name:var(--font-playfair)] text-lg font-bold text-accent">
                      {exp.company.charAt(0)}
                    </span>
                  </div>
                )}
                <div className="flex-1 w-full">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                    <div>
                      <h3 className="font-[family-name:var(--font-playfair)] text-lg sm:text-xl font-bold text-foreground">
                        {exp.role}
                      </h3>
                      <p className="text-foreground/70 text-sm">{exp.company}</p>
                    </div>
                    <span className="font-[family-name:var(--font-jetbrains)] text-xs sm:text-sm text-muted">
                      {exp.period}
                    </span>
                  </div>
                  {exp.descriptions && (
                    <ul className="mt-3 space-y-1">
                      {exp.descriptions.map((desc, idx) => (
                        <li key={idx} className="text-sm text-foreground/60 flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
