# Ason Yue — Personal Portfolio

A personal portfolio supporting Technology Consulting and QA Engineering applications. Built with Next.js 16.1.6 App Router, React 19, TypeScript, Tailwind CSS 4, and Framer Motion.

The existing orange/cyan palette, Playfair Display headings, DM Sans body text, JetBrains Mono accents, portrait, and light/dark/system themes are retained. The site supports English and Taiwan Traditional Chinese.

## Development

```bash
npm ci
npm run dev
```

Open the Local URL printed by Next.js. Validation commands:

```bash
npm run lint
npx tsc --noEmit
npm run build
npm start
```

The production build downloads the existing Google Fonts, so it needs access to Google Fonts. No additional application dependencies are required by the portfolio optimization.

## Routes and content

| Route | Purpose |
| --- | --- |
| `/` | Introduction, background, experience, projects, capabilities, education, available resumes, and contact |
| `/projects/flowline` | Independent finance product: requirements, workflows, AI-assisted development, and validation |
| `/projects/zero-trust` | Team-developed internship platform: assessment workflows, testing, API validation, and handover |

Homepage copy is stored in `content/personal.json`, `stories.json` (the compact About section), `experience.json`, `skills.json`, and `education.json`. Project copy and optional media are typed records in `content/projects.ts`. Explicit project route pages reuse `ProjectCaseStudy`.

Navigation and Footer are shared in the root layout. Homepage section links use `/#section` so they also work from project pages. The old `#stories` anchor remains available.

## Languages

The navigation language button switches between English and Taiwan Traditional Chinese without changing the current URL. It saves a one-year, same-site `language` cookie and refreshes the current route, preserving its page and hash. New visitors start in English; `zh-TW` selects Traditional Chinese, and the older `zh` cookie is also supported. Other cookie values fall back to English. No browser-language detection is used.

The server reads the cookie to render localized content, navigation, accessibility labels, captions, titles, descriptions, and the document language (`en` or `zh-Hant-TW`). Pages now render dynamically to honor this preference. Taiwan system-font fallbacks support Chinese text without adding a large web-font download. The legacy `LanguageContext.tsx` and `translations.ts` remain unused by the active pages.

- `content/site-copy.ts`: shared interface labels, headings, and metadata.
- `content/zh-TW/home.json`: translated homepage content, following the English JSON structure.
- `content/projects.zh-TW.ts`: translated case studies and screenshot captions, reusing the English records' asset paths, image dimensions, technology names, and links.

When updating professional facts or project behavior, update both languages together. Resume buttons translate their labels; they do not imply that the underlying PDF has been translated. Configured assets still require review and availability checks.

## Resume downloads

Role-specific PDFs are not yet configured. The existing `public/resume.pdf` is retained for compatibility, but its contents have not been reviewed and it is not linked by the site. Do not run `generate-resume.py` to create a final resume; it is an older placeholder generator.

To enable a resume:

1. Review the final PDF for accurate dates, job titles, contributions, and public contact details.
2. Add it under `public/resumes/`, for example `technology-consulting.pdf` or `qa-engineering.pdf`.
3. Set that entry's `href` in `content/resumes.ts` to `/resumes/<filename>.pdf` and set `reviewed: true`.
4. Rebuild and check the download.

The shared server-side availability check requires a reviewed entry and an existing, nonempty local PDF file. Missing or unreviewed entries produce no buttons. The Resume section, hero action, navigation item, and footer downloads all use this same availability check. Redeploy after changing packaged PDFs or configuration.

## Project media and public demo

Screenshots are optional. Add only reviewed screenshots with synthetic or redacted data under `public/projects/`. Add their local path, descriptive alt text, optional title, English caption, and natural pixel dimensions to the project's `images` array. Mark up to three images with `featured: true` for a compact homepage preview; otherwise the first image is used. Portrait screenshots retain their full proportions in a responsive case-study gallery, with links to the original files for closer reading. Optional `mediaTitle` and `mediaDescription` fields introduce the walkthrough. Empty media collections produce no placeholders.

Flowline currently includes five provided demo screenshots in `public/projects/flowline/`: transactions, spending plans, savings plans, assets, and Flowmi. The transaction, spending-plan, and Flowmi screens are featured on its homepage card. The case study describes the existing funding and savings-jar rules alongside these screens; additional detail screenshots can be added when available. Its architecture description is based on the implementation and the supplied project brief, with Next.js providing both frontend and backend.

The supplied Zero Trust introduction video is linked externally. Its YouTube metadata identifies it as a Zero Trust questionnaire system introduction by ZTMM Systex. Review any replacement media for client information before publishing it.

Flowline's staging demo is intentionally not linked. Before adding the optional `demo` field to its project record, verify an isolated environment with synthetic data, scoped demo access, and no access to personal financial records or private credentials. The portfolio does not import or publish Flowline application source.

Do not add an efficiency percentage, adoption figure, or ownership claim without supporting evidence. Keep the Zero Trust platform's team contributions distinct from personal testing, documentation, and video work.

## Accessibility and images

The shared shell includes a skip link, keyboard focus styling, fixed-header anchor offsets, and a mobile navigation disclosure with expanded state, initial link focus, Escape dismissal, and focus return. Decorative movement respects reduced-motion settings. Light-theme accent shades and muted text are adjusted for readability.

The portrait and active homepage logos use Next.js Image with dimensions and responsive sizing. The original source assets are preserved; optimized delivery depends on the existing Next.js hosting runtime.

Before publishing, check the three routes at mobile, tablet, and desktop widths, both themes, reduced motion, keyboard navigation, direct project visits, return links, external links, and configured PDF downloads.

## Deployment

The portfolio's public URL is https://asonyue.com. Earlier documentation describes Vercel, but this repository does not contain hosting-specific configuration. Keep the existing hosting and Git deployment workflow; no hosting migration or deployment is part of this local implementation.

`REBUILD_SUMMARY.md` is historical documentation and does not describe the current content or resume status.
