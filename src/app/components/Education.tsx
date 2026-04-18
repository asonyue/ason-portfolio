'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

export function Education() {
  const { t } = useLanguage();

  const educationWithIcons = [
    { ...t.education.schools[0], icon: '/logos/tamkang-logo.png' },
    { ...t.education.schools[1], icon: '/logos/temple-logo.png' },
  ];

  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-center mb-16"
        >
          {t.education.title.split(' ')[0]} <span className="text-accent">{t.education.title.split(' ')[1]}</span>
        </motion.h2>

        <div className="space-y-6">
          {educationWithIcons.map((edu, index) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 border border-foreground/10 hover:border-accent/30 transition-colors duration-300"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                {edu.icon ? (
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-card-bg-light flex items-center justify-center overflow-hidden flex-shrink-0">
                    <img src={edu.icon} alt={edu.school} className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
                  </div>
                ) : (
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <span className="font-[family-name:var(--font-playfair)] text-lg font-bold text-accent">
                      {edu.school.charAt(0)}
                    </span>
                  </div>
                )}
                <div className="flex-1 w-full">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                    <div>
                      <h3 className="font-[family-name:var(--font-playfair)] text-lg sm:text-xl font-bold text-foreground">
                        {edu.school}
                      </h3>
                      <p className="text-foreground/70 text-sm">{edu.degree}</p>
                      {edu.gpa && (
                        <p className="text-sm text-foreground/60 mt-1 font-[family-name:var(--font-jetbrains)]">
                          {edu.gpa}
                        </p>
                      )}
                    </div>
                    <span className="font-[family-name:var(--font-jetbrains)] text-xs sm:text-sm text-muted">
                      {edu.period}
                    </span>
                  </div>
                  {edu.activities && (
                    <ul className="mt-2 space-y-1">
                      {edu.activities.map((activity, idx) => (
                        <li key={idx} className="text-sm text-foreground/60 flex items-start gap-2">
                          <span className="text-accent mt-1">▸</span>
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {edu.project && (
                    <p className="text-sm text-foreground/60 mt-2 flex items-start gap-2">
                      <span className="text-accent mt-1">▸</span>
                      <span>{edu.project}</span>
                    </p>
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
