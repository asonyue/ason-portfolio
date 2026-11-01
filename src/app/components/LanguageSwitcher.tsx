'use client';

import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
import { siteCopy, type Locale } from '../../../content/site-copy';

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState(false);
  const copy = siteCopy[locale];

  function switchLanguage() {
    const nextLocale = locale === 'en' ? 'zh-TW' : 'en';
    try {
      document.cookie = `language=${nextLocale}; path=/; max-age=31536000; samesite=lax`;
      if (!document.cookie.split(';').some((cookie) => cookie.trim() === `language=${nextLocale}`)) {
        setError(true);
        return;
      }
      setError(false);
      startTransition(() => router.refresh());
    } catch {
      setError(true);
    }
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={switchLanguage}
        disabled={pending}
        aria-label={pending ? copy.languageChanging : copy.languageLabel}
        className="min-h-11 px-3 rounded-full border border-foreground/20 bg-card text-sm font-medium whitespace-nowrap hover:bg-accent/10 disabled:opacity-60"
      >
        <span lang={locale === 'en' ? 'zh-Hant-TW' : 'en'}>{copy.languageButton}</span>
      </button>
      <span role="status" className="sr-only">{pending ? copy.languageChanging : ''}</span>
      {error && <p role="alert" className="absolute top-full right-0 mt-2 w-64 p-3 bg-card border border-foreground/20 rounded-lg text-sm">{copy.languageError}</p>}
    </div>
  );
}
