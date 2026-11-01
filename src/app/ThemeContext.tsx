'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { MotionConfig } from 'framer-motion';

type Theme = 'dark' | 'light';
type ThemeMode = Theme | 'system';
const THEME_STORAGE_KEY = 'theme';

interface ThemeContextType {
  theme: Theme;
  themeMode: ThemeMode;
  setThemeMode: (themeMode: ThemeMode) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function isTheme(value: string | null): value is Theme {
  return value === 'dark' || value === 'light';
}

function isThemeMode(value: string | null): value is ThemeMode {
  return value === 'dark' || value === 'light' || value === 'system';
}

function getStoredThemeMode(): ThemeMode {
  if (typeof window === 'undefined') {
    return 'system';
  }

  try {
    const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    return isThemeMode(savedTheme) ? savedTheme : 'system';
  } catch {
    return 'system';
  }
}

function getSystemTheme(): Theme {
  if (typeof window === 'undefined') {
    return 'dark';
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute('data-theme', theme);
  document.documentElement.style.colorScheme = theme;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeMode, setThemeModeState] = useState<ThemeMode>(() => getStoredThemeMode());
  const [systemTheme, setSystemTheme] = useState<Theme>(() => {
    if (typeof document !== 'undefined') {
      const documentTheme = document.documentElement.getAttribute('data-theme');
      if (isTheme(documentTheme)) {
        return documentTheme;
      }
    }

    return getSystemTheme();
  });

  const theme = themeMode === 'system' ? systemTheme : themeMode;

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleThemeChange = (event: MediaQueryListEvent) => {
      setSystemTheme(event.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleThemeChange);
    return () => mediaQuery.removeEventListener('change', handleThemeChange);
  }, []);

  const setThemeMode = (nextThemeMode: ThemeMode) => {
    setThemeModeState(nextThemeMode);
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, nextThemeMode);
    } catch {
      // Theme controls remain usable when browser storage is unavailable.
    }
  };

  const toggleTheme = () => {
    if (themeMode === 'system') {
      setThemeMode('light');
      return;
    }

    if (themeMode === 'light') {
      setThemeMode('dark');
      return;
    }

    setThemeMode('system');
  };

  const value: ThemeContextType = {
    theme,
    themeMode,
    setThemeMode,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
