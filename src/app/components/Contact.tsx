'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold mb-6"
        >
          {t.contact.title.split(' ')[0]} <span className="gradient-text">{t.contact.title.split(' ')[1]}</span> {t.contact.title.split(' ')[2]}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-foreground/60 text-lg mb-12"
        >
          {t.contact.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap gap-6 justify-center mb-12"
        >
          <a
            href="mailto:ason06057@gmail.com"
            className="flex items-center gap-3 px-6 py-3 bg-card rounded-full hover:bg-accent/10 transition-colors duration-300 group"
          >
            <span className="text-accent group-hover:scale-110 transition-transform">✉</span>
            <span className="font-[family-name:var(--font-jetbrains)]">ason06057@gmail.com</span>
          </a>
          <a
            href="https://github.com/asonyue"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 bg-card rounded-full hover:bg-secondary/10 transition-colors duration-300 group"
          >
            <span className="text-secondary group-hover:scale-110 transition-transform">GH</span>
            <span className="font-[family-name:var(--font-jetbrains)]">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/ason-yue-486991200/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 bg-card rounded-full hover:bg-accent/10 transition-colors duration-300 group"
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
          href="mailto:ason06057@gmail.com"
          className="inline-block px-10 py-4 bg-accent text-background font-semibold text-lg rounded-full hover:bg-accent/90 transition-all duration-300 hover:scale-105 glow-accent"
        >
          {t.contact.sayHello}
        </motion.a>
      </div>
    </section>
  );
}
