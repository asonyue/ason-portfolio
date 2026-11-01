import type { Metadata, Viewport } from "next";
import { DM_Sans, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./ThemeContext";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { getAvailableResumes } from "../lib/resumes";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://asonyue.com"),
  title: {
    default: "Ason Yue | Technology Consulting & Quality Engineering",
    template: "%s | Ason Yue",
  },
  description: "Bridging business challenges and technology through cybersecurity consulting, FinTech quality engineering, and AI-assisted product development.",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0f" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const resumes = getAvailableResumes();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body
        className={`${dmSans.variable} ${playfair.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ThemeProvider>
          <a href="#main-content" className="skip-link">Skip to main content</a>
          <Navigation resumes={resumes} />
          <main id="main-content" tabIndex={-1} className="min-h-screen bg-background">{children}</main>
          <Footer resumes={resumes} />
        </ThemeProvider>
      </body>
    </html>
  );
}
