'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

export function Awards() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);

  const awardImages = [
    '/awards/tamkang-academic-award.png',
    '/awards/tamkang-international-cert.png',
    '/awards/tamkang-entrepreneurship-cert.png',
    '/awards/temple-recommendation.png',
    '/awards/systex-intern-cert.png',
    '/awards/google-cloud-cert.png',
    '/awards/google-marketing-cert.png',
  ];

  const awards = t.awards.items.map((item, index) => ({
    ...item,
    image: awardImages[index],
  }));

  const scrollContainer = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = 320;
      containerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="awards" className="py-24 px-6 bg-section-alt">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-center mb-16"
        >
          {t.awards.title.split(' ')[0]} <span className="text-secondary">{t.awards.title.split(' ')[1]}</span>
        </motion.h2>

        <div className="relative">
          <button
            onClick={() => scrollContainer('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-card rounded-full flex items-center justify-center shadow-lg hover:bg-accent hover:text-background transition-colors duration-300"
          >
            ‹
          </button>

          <div
            ref={containerRef}
            className="flex gap-6 overflow-x-auto pb-4 px-8 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {awards.map((award, index) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex-shrink-0 w-72 bg-card rounded-2xl p-6 border border-foreground/10 hover:border-accent/30 transition-colors duration-300"
              >
                {award.image ? (
                  <div className="w-full h-32 mb-4 rounded-xl overflow-hidden bg-card-bg-light flex items-center justify-center">
                    <img src={award.image} alt={award.title} className="w-full h-full object-contain" />
                  </div>
                ) : (
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                    <span className="font-[family-name:var(--font-playfair)] text-xl font-bold text-accent">
                      {index + 1}
                    </span>
                  </div>
                )}
                <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-foreground mb-3">
                  {award.title}
                </h3>
                <ul className="space-y-1">
                  {award.descriptions.map((desc, idx) => (
                    <li key={idx} className="text-sm text-foreground/60 flex items-start gap-2">
                      <span className="text-accent mt-1">▸</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <button
            onClick={() => scrollContainer('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-card rounded-full flex items-center justify-center shadow-lg hover:bg-accent hover:text-background transition-colors duration-300"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
