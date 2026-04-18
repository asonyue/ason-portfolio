'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

export function Skills() {
  const { t } = useLanguage();

  const skills = [
    { category: t.skills.categories.core, items: [t.skills.items['功能/回歸測試'], t.skills.items['Web/Mobile 測試'], t.skills.items['API 測試'], t.skills.items['缺陷追蹤']] },
    { category: t.skills.categories.frameworks, items: [t.skills.items['Selenium (Web)'], t.skills.items['UI 自動化'], t.skills.items['混合測試 (Manual+Auto)']] },
    { category: t.skills.categories.languages, items: [t.skills.items['Java'], t.skills.items['Python'], t.skills.items['MySQL']] },
    { category: t.skills.categories.tools, items: [t.skills.items['Jira'], t.skills.items['Postman'], t.skills.items['Charles'], t.skills.items['OpenSearch']] },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-section-alt">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-center mb-16"
        >
          {t.skills.title.split(' ')[0]} <span className="text-secondary">{t.skills.title.split(' ')[1]}</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {skills.map((skill, catIndex) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="bg-card rounded-2xl p-6 hover:scale-[1.02] transition-transform duration-300"
            >
              <h3 className="font-[family-name:var(--font-jetbrains)] text-accent text-lg font-semibold mb-4">
                {skill.category}
              </h3>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li
                    key={item}
                    className="text-foreground/70 text-sm font-[family-name:var(--font-jetbrains)] flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
