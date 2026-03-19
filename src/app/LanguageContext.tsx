'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, Language, TranslationKeys } from './translations';

const LANGUAGE_STORAGE_KEY = 'language';
const LANGUAGE_COOKIE_KEY = 'language';
export type LanguageMode = Language | 'system';

interface LanguageContextType {
  language: Language;
  languageMode: LanguageMode;
  setLanguage: (lang: Language) => void;
  setLanguageMode: (languageMode: LanguageMode) => void;
  toggleLanguage: () => void;
  t: TranslationKeys;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function getBrowserLanguage(): Language {
  if (typeof navigator === 'undefined') {
    return 'zh';
  }

  return navigator.language.toLowerCase().startsWith('zh') ? 'zh' : 'en';
}

export function LanguageProvider({
  children,
  initialLanguage,
  initialLanguageMode,
}: {
  children: ReactNode;
  initialLanguage: Language;
  initialLanguageMode: LanguageMode;
}) {
  const [languageMode, setLanguageModeState] = useState<LanguageMode>(initialLanguageMode);
  const [browserLanguage, setBrowserLanguage] = useState<Language>(initialLanguage);

  const language = languageMode === 'system' ? browserLanguage : languageMode;

  useEffect(() => {
    document.documentElement.lang = language === 'zh' ? 'zh-Hant' : 'en';
    document.documentElement.setAttribute('data-language', language);
  }, [language]);

  useEffect(() => {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, languageMode);
    document.cookie = `${LANGUAGE_COOKIE_KEY}=${languageMode}; path=/; max-age=31536000; samesite=lax`;
  }, [languageMode]);

  useEffect(() => {
    const handleLanguageChange = () => {
      setBrowserLanguage(getBrowserLanguage());
    };

    window.addEventListener('languagechange', handleLanguageChange);
    return () => window.removeEventListener('languagechange', handleLanguageChange);
  }, []);

  const setLanguageMode = (nextLanguageMode: LanguageMode) => {
    setLanguageModeState(nextLanguageMode);
  };

  const setLanguage = (nextLanguage: Language) => {
    setLanguageMode(nextLanguage);
  };

  const toggleLanguage = () => {
    if (languageMode === 'system') {
      setLanguageMode('zh');
      return;
    }

    if (languageMode === 'zh') {
      setLanguageMode('en');
      return;
    }

    setLanguageMode('system');
  };

  const value: LanguageContextType = {
    language,
    languageMode,
    setLanguage,
    setLanguageMode,
    toggleLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
