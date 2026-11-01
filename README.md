# Ason Yue — Personal Portfolio

A personal portfolio supporting Technology Consulting and QA Engineering applications. Built with Next.js 16.1.6 App Router, React 19, TypeScript, Tailwind CSS 4, and Framer Motion.

The existing orange/cyan palette, Playfair Display headings, DM Sans body text, JetBrains Mono accents, portrait, and light/dark/system themes are retained. The site is English-only.

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

Navigation and Footer are shared in the root layout. Homepage section links use `/#section` so they also work from project pages. The old `#stories` anchor remains available. Language detection is detached from the active layout; older unused translation components remain in the repository.

## Resume downloads

Role-specific PDFs are not yet configured. The existing `public/resume.pdf` is retained for compatibility, but its contents have not been reviewed and it is not linked by the site. Do not run `generate-resume.py` to create a final resume; it is an older placeholder generator.

To enable a resume:

1. Review the final PDF for accurate dates, job titles, contributions, and public contact details.
2. Add it under `public/resumes/`, for example `technology-consulting.pdf` or `qa-engineering.pdf`.
3. Set that entry's `href` in `content/resumes.ts` to `/resumes/<filename>.pdf` and set `reviewed: true`.
4. Rebuild and check the download.

The shared server-side availability check requires a reviewed entry and an existing, nonempty local PDF file. Missing or unreviewed entries produce no buttons. The Resume section, hero action, navigation item, and footer downloads all use this same availability check. Static pages must be rebuilt when the PDFs or configuration change.

## Project media and public demo

Screenshots are optional and currently absent. Add only reviewed screenshots with synthetic or redacted data under `public/projects/`. Add their local path, descriptive alt text, caption, and natural pixel dimensions to the project's `images` array. The first screenshot appears on its homepage card; the case study renders a responsive gallery. Empty media collections produce no placeholders.

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
