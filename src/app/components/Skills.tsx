'use client';

import { motion } from 'framer-motion';
import skillsData from '../../../content/skills.json';

export function Skills() {
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
          Professional <span className="text-secondary">Skills</span>
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
              <h3 className="font-[family-name:var(--font-jetbrains)] text-accent text-lg font-semibold mb-4">
                {category.name}
              </h3>
              <ul className="space-y-2">
                {category.items.map((item) => (
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
