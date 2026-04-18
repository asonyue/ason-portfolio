'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import { useTheme } from '../ThemeContext';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, language, languageMode, toggleLanguage } = useLanguage();
  const { theme, themeMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => setMobileMenuOpen(false);

  const navLinks = [
    { name: t.nav.about, href: '#about' },
    { name: t.nav.skills, href: '#skills' },
    { name: t.nav.experience, href: '#experience' },
    { name: t.nav.education, href: '#education' },
    { name: t.nav.awards, href: '#awards' },
    { name: t.nav.contact, href: '#contact' },
  ];

  const themeButtonIcon =
    themeMode === 'system' ? (theme === 'dark' ? '🖥️🌙' : '🖥️☀️') : themeMode === 'light' ? '☀️' : '🌙';

  const themeButtonTitle =
    themeMode === 'system'
      ? `Theme: Auto (${theme}). Click to cycle Auto -> Light -> Dark.`
      : `Theme: ${themeMode}. Click to cycle Auto -> Light -> Dark.`;

  const languageButtonLabel =
    languageMode === 'system' ? `Auto ${language === 'zh' ? '中' : 'EN'}` : languageMode === 'zh' ? '中文' : 'EN';

  const languageButtonTitle =
    languageMode === 'system'
      ? `Language: Auto (${language}). Click to cycle Auto -> 中文 -> EN.`
      : `Language: ${languageMode}. Click to cycle Auto -> 中文 -> EN.`;

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
              suppressHydrationWarning
              className="p-1.5 sm:p-2 rounded-full bg-card hover:bg-accent/20 border border-foreground/20 transition-colors duration-300 text-sm"
              title={themeButtonTitle}
            >
              {themeButtonIcon}
            </button>
            <button
              onClick={toggleLanguage}
              suppressHydrationWarning
              className="px-2 sm:px-3 py-1.5 rounded-full bg-card hover:bg-accent/20 border border-foreground/20 transition-colors duration-300 text-xs sm:text-sm font-[family-name:var(--font-jetbrains)]"
              title={languageButtonTitle}
            >
              {languageButtonLabel}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-card border border-foreground/20"
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </div>

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
