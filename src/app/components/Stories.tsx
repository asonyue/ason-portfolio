'use client';

import { motion } from 'framer-motion';
import storiesData from '../../../content/stories.json';

export function Stories() {
  return (
    <section id="stories" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-center mb-16"
        >
          What I <span className="text-accent">Do</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {storiesData.map((story, index) => (
            <motion.div
              key={story.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-2xl p-8 border border-foreground/10 hover:border-accent/30 transition-all duration-300 hover:scale-[1.02]"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold mb-4 text-accent">
                {story.title}
              </h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                {story.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
