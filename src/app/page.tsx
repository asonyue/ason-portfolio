'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from './LanguageContext';
import { useTheme } from './ThemeContext';

// Typewriter Effect Component
function TypewriterText({ text }: { text: string }) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 80);

    return () => clearInterval(interval);
  }, [text]);

  return <span>{displayedText}</span>;
}

// Navigation Component
function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking a link
  const handleNavClick = () => setMobileMenuOpen(false);

  const navLinks = [
    { name: t.nav.about, href: '#about' },
    { name: t.nav.skills, href: '#skills' },
    { name: t.nav.experience, href: '#experience' },
    { name: t.nav.education, href: '#education' },
    { name: t.nav.awards, href: '#awards' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-md py-4' : 'bg-transparent py-4 sm:py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        <a
          href="#"
          className="font-[family-name:var(--font-playfair)] text-xl sm:text-2xl font-bold text-foreground"
        >
          Ason<span className="text-accent">.</span>
        </a>
        <div className="flex items-center gap-2">
          {/* Desktop nav links */}
          <div className="hidden md:flex gap-3 lg:gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-foreground/80 hover:text-foreground transition-colors duration-300 group text-sm lg:text-base"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
          <div className="flex gap-1 sm:gap-2 items-center">
            <button
              onClick={toggleTheme}
              className="p-1.5 sm:p-2 rounded-full bg-card hover:bg-accent/20 border border-foreground/20 transition-colors duration-300 text-sm"
              title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
            <button
              onClick={() => setLanguage(language === 'zh' ? 'en' : 'zh')}
              className="px-2 sm:px-3 py-1.5 rounded-full bg-card hover:bg-accent/20 border border-foreground/20 transition-colors duration-300 text-xs sm:text-sm font-[family-name:var(--font-jetbrains)]"
            >
              {language === 'zh' ? 'EN' : '中'}
            </button>
            {/* Hamburger menu - mobile only */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-card border border-foreground/20"
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-t border-foreground/10"
        >
          <div className="flex flex-col py-4 px-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleNavClick}
                className="py-3 text-foreground/80 hover:text-foreground transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}

// Hero Section
function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const { t } = useLanguage();

  return (
    <section id="hero" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Floating Background Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          style={{ y }}
          className="absolute top-20 left-10 w-32 h-32 border border-accent/20 rounded-full float-animation"
        />
        <motion.div
          style={{ y: useTransform(scrollY, [0, 500], [0, -150]) }}
          className="absolute top-40 right-20 w-24 h-24 border border-secondary/20 rounded-lg float-animation-reverse"
        />
        <motion.div
          style={{ y: useTransform(scrollY, [0, 500], [0, 100]) }}
          className="absolute bottom-40 left-1/4 w-16 h-16 bg-accent/10 rounded-full float-animation"
        />
        <motion.div
          style={{ y: useTransform(scrollY, [0, 500], [0, -80]) }}
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

        {/* Photo */}
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

      {/* Scroll Indicator */}
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

// About Section
function About() {
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
          <span className="font-[family-name:var(--font-playfair)] text-6xl text-accent/20 leading-none block">"</span>
          <p className="text-sm md:text-base text-foreground/80 italic leading-relaxed px-4 -mt-6 text-left whitespace-pre-line">
            {t.about.content}
          </p>
          <span className="font-[family-name:var(--font-playfair)] text-6xl text-accent/20 leading-none block mt-2">"</span>
        </motion.div>
      </div>
    </section>
  );
}

// Skills Section
function Skills() {
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

// Awards Section
function Awards() {
  const { t } = useLanguage();

  const awardImages = [
    '/awards/tamkang-academic-award.png',
    '/awards/tamkang-international-cert.png',
    '/awards/tamkang-entrepreneurship-cert.png',
    '/awards/temple-recommendation.png',
    '/awards/systex-intern-cert.png',
    '/awards/google-cloud-cert.png',
    '/awards/google-marketing-cert.png',
    '/awards/gdsc-cert.png',
  ];

  const awards = t.awards.items.map((item, index) => ({
    ...item,
    image: awardImages[index],
  }));

  const scrollContainer = (direction: 'left' | 'right') => {
    const container = document.getElementById('awards-container');
    if (container) {
      const scrollAmount = 320;
      container.scrollBy({
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
          {/* Left Arrow */}
          <button
            onClick={() => scrollContainer('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-card rounded-full flex items-center justify-center shadow-lg hover:bg-accent hover:text-background transition-colors duration-300"
          >
            ‹
          </button>

          {/* Scroll Container */}
          <div
            id="awards-container"
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

          {/* Right Arrow */}
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

// Work Experience Section
function WorkExperience() {
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

// Education Section
function Education() {
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

// Contact Section
function Contact() {
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

// Footer
function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-8 px-6 border-t border-foreground/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-foreground/40 text-sm">
          © {new Date().getFullYear()} Ason Yue. All rights reserved.
        </p>
        <a
          href="#"
          className="text-foreground/40 hover:text-accent transition-colors text-sm"
        >
          {t.footer.backToTop} ↑
        </a>
      </div>
    </footer>
  );
}

// Main Page Component
export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <WorkExperience />
      <Education />
      <Awards />
      <Contact />
      <Footer />
    </main>
  );
}
