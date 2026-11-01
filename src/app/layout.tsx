import type { Metadata, Viewport } from "next";
import { DM_Sans, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./ThemeContext";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { getAvailableResumes } from "../lib/resumes";
import { getLocale } from "../lib/locale";
import { siteCopy } from "../../content/site-copy";

const themeInitScript = `
(() => {
  const storageKey = 'theme';
  const isThemeMode = (value) => value === 'dark' || value === 'light' || value === 'system';
  let savedTheme = null;
  try { savedTheme = localStorage.getItem(storageKey); } catch {}
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  const themeMode = isThemeMode(savedTheme) ? savedTheme : 'system';
  const resolvedTheme = themeMode === 'system' ? systemTheme : themeMode;

  document.documentElement.setAttribute('data-theme', resolvedTheme);
  document.documentElement.style.colorScheme = resolvedTheme;
})();
`;

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

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const copy = siteCopy[locale];
  return {
    metadataBase: new URL("https://asonyue.com"),
    title: { default: copy.siteTitle, template: "%s | Ason Yue" },
    description: copy.siteDescription,
  };
}

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
  const locale = await getLocale();
  const copy = siteCopy[locale];
  const resumes = getAvailableResumes(locale);

  return (
    <html lang={locale === "zh-TW" ? "zh-Hant-TW" : "en"} data-language={locale} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body
        className={`${dmSans.variable} ${playfair.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ThemeProvider>
          <a href="#main-content" className="skip-link">{copy.skip}</a>
          <Navigation resumes={resumes} locale={locale} />
          <main id="main-content" tabIndex={-1} className="min-h-screen bg-background">{children}</main>
          <Footer resumes={resumes} locale={locale} />
        </ThemeProvider>
      </body>
    </html>
  );
}
