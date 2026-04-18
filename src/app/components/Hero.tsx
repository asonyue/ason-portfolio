'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import { TypewriterText } from './TypewriterText';

export function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const y3 = useTransform(scrollY, [0, 500], [0, 100]);
  const y4 = useTransform(scrollY, [0, 500], [0, -80]);
  const { t } = useLanguage();

  return (
    <section id="hero" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          style={{ y: y1 }}
          className="absolute top-20 left-10 w-32 h-32 border border-accent/20 rounded-full float-animation"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute top-40 right-20 w-24 h-24 border border-secondary/20 rounded-lg float-animation-reverse"
        />
        <motion.div
          style={{ y: y3 }}
          className="absolute bottom-40 left-1/4 w-16 h-16 bg-accent/10 rounded-full float-animation"
        />
        <motion.div
          style={{ y: y4 }}
          className="absolute bottom-20 right-1/3 w-20 h-20 border border-secondary/30 rounded-lg float-animation-reverse"
        />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12 z-10 px-6 w-full max-w-6xl mx-auto">
        <div className="text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-[family-name:var(--font-jetbrains)] text-accent text-sm mb-4"
          >
            {t.hero.greeting}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            {t.hero.title} <span className="gradient-text">{t.hero.subtitle}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="font-[family-name:var(--font-jetbrains)] text-xl md:text-2xl text-muted mb-4"
          >
            {t.hero.role}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="font-[family-name:var(--font-jetbrains)] text-sm text-foreground/50 italic mb-8 max-w-lg mx-auto md:mx-0"
          >
            <TypewriterText text={t.hero.quote} />
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex gap-4 justify-center md:justify-start"
          >
            <a
              href="#experience"
              className="px-8 py-3 bg-accent text-background font-semibold rounded-full hover:bg-accent/90 transition-all duration-300 hover:scale-105 glow-accent"
            >
              {t.hero.viewProjects}
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-foreground/30 text-foreground font-semibold rounded-full hover:border-accent hover:text-accent transition-all duration-300"
            >
              {t.hero.contactMe}
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0"
        >
          <img
            src="/images/ason-photo.png"
            alt="Ason Yue"
            className="w-full h-full object-cover rounded-2xl"
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center pt-2"
        >
          <motion.div className="w-1 h-2 bg-accent rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
