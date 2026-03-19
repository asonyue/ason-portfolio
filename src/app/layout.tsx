import type { Metadata, Viewport } from "next";
import { cookies, headers } from "next/headers";
import { DM_Sans, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider, LanguageMode } from "./LanguageContext";
import { ThemeProvider } from "./ThemeContext";

const themeInitScript = `
(() => {
  const storageKey = 'theme';
  const isThemeMode = (value) => value === 'dark' || value === 'light' || value === 'system';
  const savedTheme = localStorage.getItem(storageKey);
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  const themeMode = isThemeMode(savedTheme) ? savedTheme : 'system';
  const resolvedTheme = themeMode === 'system' ? systemTheme : themeMode;

  document.documentElement.setAttribute('data-theme', resolvedTheme);
  document.documentElement.style.colorScheme = resolvedTheme;
})();
`;

const languageInitScript = `
(() => {
  const storageKey = 'language';
  const isLanguage = (value) => value === 'zh' || value === 'en';
  const savedLanguage = localStorage.getItem(storageKey);
  const browserLanguage = navigator.language.toLowerCase().startsWith('zh') ? 'zh' : 'en';
  const resolvedLanguage = isLanguage(savedLanguage) ? savedLanguage : browserLanguage;

  document.documentElement.lang = resolvedLanguage === 'zh' ? 'zh-Hant' : 'en';
  document.documentElement.setAttribute('data-language', resolvedLanguage);
})();
`;

function isLanguage(value: string | null): value is "zh" | "en" {
  return value === "zh" || value === "en";
}

function isLanguageMode(value: string | null): value is LanguageMode {
  return value === "zh" || value === "en" || value === "system";
}

function getPreferredLanguage(headerValue: string | null): "zh" | "en" {
  return headerValue?.toLowerCase().startsWith("zh") ? "zh" : "en";
}

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Ason Yue | QA Engineer",
  description: "Portfolio of Ason Yue - Quality Assurance Engineer",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0f" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const headerStore = await headers();
  const cookieLanguageMode = cookieStore.get("language")?.value ?? null;
  const initialLanguageMode: LanguageMode = isLanguageMode(cookieLanguageMode) ? cookieLanguageMode : "system";
  const preferredLanguage = getPreferredLanguage(headerStore.get("accept-language"));
  const initialLanguage = isLanguage(initialLanguageMode) ? initialLanguageMode : preferredLanguage;

  return (
    <html lang={initialLanguage === "zh" ? "zh-Hant" : "en"} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script dangerouslySetInnerHTML={{ __html: languageInitScript }} />
      </head>
      <body
        className={`${dmSans.variable} ${playfair.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ThemeProvider>
          <LanguageProvider initialLanguage={initialLanguage} initialLanguageMode={initialLanguageMode}>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
