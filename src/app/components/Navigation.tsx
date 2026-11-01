'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import type { ResumeLink } from '../../../content/resumes';
import { useTheme } from '../ThemeContext';
import { siteCopy, type Locale } from '../../../content/site-copy';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Navigation({ resumes, locale }: { resumes: ResumeLink[]; locale: Locale }) {
  const copy = siteCopy[locale];
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigationRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const { theme, themeMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    menuRef.current?.querySelector('a')?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const handlePointerDown = (event: PointerEvent) => {
      if (!navigationRef.current?.contains(event.target as Node)) setMobileMenuOpen(false);
    };
    const desktop = window.matchMedia('(min-width: 1024px)');
    const handleBreakpoint = () => { if (desktop.matches) setMobileMenuOpen(false); };
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('pointerdown', handlePointerDown);
    desktop.addEventListener('change', handleBreakpoint);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('pointerdown', handlePointerDown);
      desktop.removeEventListener('change', handleBreakpoint);
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: copy.about, href: '/#about' },
    { name: copy.experience, href: '/#experience' },
    { name: copy.projects, href: '/#projects' },
    { name: copy.skills, href: '/#skills' },
    ...(resumes.length > 0 ? [{ name: copy.resume, href: '/#resume' }] : []),
    { name: copy.contact, href: '/#contact' },
  ];
  const themeButtonIcon = themeMode === 'system' ? (theme === 'dark' ? '🖥️🌙' : '🖥️☀️') : themeMode === 'light' ? '☀️' : '🌙';
  const themeName = theme === 'dark' ? copy.dark : copy.light;
  const modeName = themeMode === 'system' ? `${copy.auto} (${themeName})` : themeName;
  const themeButtonTitle = `${copy.theme}: ${modeName}. ${copy.themeCycle}`;

  return (
    <nav
      ref={navigationRef}
      aria-label={copy.navigation}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setMobileMenuOpen(false);
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 py-4 ${scrolled || mobileMenuOpen ? 'bg-background/95 backdrop-blur-md border-b border-foreground/10' : 'bg-background/90'}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex justify-between items-center gap-3">
        <Link href="/#hero" onClick={() => setMobileMenuOpen(false)} aria-label={copy.home} className="font-[family-name:var(--font-display)] text-xl sm:text-2xl font-bold">
          Ason<span className="text-accent">.</span>
        </Link>
        <div className="flex items-center gap-2 sm:gap-3 lg:gap-5">
          <div className="hidden lg:flex gap-2 sm:gap-3 lg:gap-5">
            {navLinks.map((link) => <Link key={link.name} href={link.href} className="text-foreground/80 hover:text-accent transition-colors text-sm lg:text-base">{link.name}</Link>)}
          </div>
          <LanguageSwitcher locale={locale} />
          <button type="button" onClick={toggleTheme} suppressHydrationWarning aria-label={themeButtonTitle} title={themeButtonTitle} className="min-w-11 min-h-11 p-2 rounded-full bg-card border border-foreground/20 hover:bg-accent/10 transition-colors text-sm">
            <span aria-hidden="true" suppressHydrationWarning>{themeButtonIcon}</span>
          </button>
          <button ref={menuButtonRef} type="button" onClick={() => setMobileMenuOpen((open) => !open)} aria-expanded={mobileMenuOpen} aria-controls="mobile-navigation" aria-label={mobileMenuOpen ? copy.closeMenu : copy.openMenu} className="lg:hidden min-w-11 min-h-11 p-2 rounded-lg bg-card border border-foreground/20">
            <span aria-hidden="true">{mobileMenuOpen ? '✕' : '☰'}</span>
          </button>
        </div>
      </div>
      <div ref={menuRef} id="mobile-navigation" hidden={!mobileMenuOpen} className="lg:hidden absolute top-full left-0 right-0 bg-background border-y border-foreground/15 max-h-[calc(100dvh-5rem)] overflow-y-auto">
        <div className="flex flex-col py-3 px-6">
          {navLinks.map((link) => <Link key={link.name} href={link.href} onClick={() => { setMobileMenuOpen(false); menuButtonRef.current?.focus(); }} className="py-3 text-foreground/80 hover:text-accent">{link.name}</Link>)}
        </div>
      </div>
    </nav>
  );
}
