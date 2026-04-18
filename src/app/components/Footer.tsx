'use client';

import { useLanguage } from '../LanguageContext';

export function Footer() {
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
