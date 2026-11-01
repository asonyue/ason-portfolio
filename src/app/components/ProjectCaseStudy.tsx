import Link from 'next/link';
import type { Project } from '../../../content/projects';
import { getProjects } from '../../../content/projects.zh-TW';
import { siteCopy, type Locale } from '../../../content/site-copy';
import { ProjectGallery } from './ProjectGallery';

export function ProjectCaseStudy({ project, locale }: { project: Project; locale: Locale }) {
  const copy = siteCopy[locale];
  const projects = getProjects(locale);
  const hasMedia = project.images.length > 0 || project.video || project.demo;
  const otherProject = projects.find((item) => item.slug !== project.slug);

  return (
    <article className="pt-32 sm:pt-40 pb-20 px-6">
      <header className="max-w-6xl mx-auto border-b border-foreground/15 pb-12">
        <Link href="/#projects" className="text-sm text-foreground/75 hover:text-accent">{copy.allProjects}</Link>
        <p className="mt-10 mb-4 text-secondary font-[family-name:var(--font-jetbrains)] text-sm">{project.type}</p>
        <h1 className="font-[family-name:var(--font-display)] font-bold text-5xl sm:text-6xl md:text-7xl mb-4"><span className="gradient-text">{project.name}</span></h1>
        <p className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl mb-6">{project.subtitle}</p>
        <p className="max-w-3xl text-lg leading-relaxed text-foreground/80">{project.summary}</p>
        {project.images.length > 0 && (
          <a href="#media" className="inline-block mt-6 text-accent font-semibold underline underline-offset-4">
            {copy.exploreScreens} <span aria-hidden="true">↓</span>
          </a>
        )}
        <dl className="grid sm:grid-cols-[1fr_2fr] gap-6 mt-10 text-sm max-w-4xl">
          <div><dt className="text-muted mb-2">{copy.timeline}</dt><dd>{project.timeline}</dd></div>
          <div><dt className="text-muted mb-2">{copy.contribution}</dt><dd className="leading-relaxed">{project.role}</dd></div>
        </dl>
      </header>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-[200px_minmax(0,1fr)] gap-10 lg:gap-16 pt-12">
        <aside>
          <nav aria-label={copy.caseSections} className="lg:sticky lg:top-28">
            <p className="font-semibold mb-4">{copy.inCaseStudy}</p>
            <ul className="flex flex-wrap lg:flex-col gap-x-5 gap-y-3 text-sm">
              {project.sections.map((section) => <li key={section.id}><a href={`#${section.id}`} className="text-foreground/75 hover:text-accent">{section.title}</a></li>)}
              {hasMedia && <li><a href="#media" className="text-foreground/75 hover:text-accent">{project.mediaTitle ?? copy.media}</a></li>}
            </ul>
          </nav>
        </aside>
        <div className="min-w-0 space-y-14">
          {project.sections.map((section) => (
            <section key={section.id} id={section.id} aria-labelledby={`${section.id}-title`}>
              <h2 id={`${section.id}-title`} className="font-[family-name:var(--font-display)] text-3xl font-bold mb-6">{section.title}</h2>
              <div className="space-y-4 max-w-prose text-foreground/80 text-base sm:text-lg leading-relaxed">
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              {section.steps && (
                <ol className="mt-8 border-l-2 border-accent/40 pl-6 space-y-6">
                  {section.steps.map((step, index) => (
                    <li key={step.title}>
                      <h3 className="font-semibold mb-2"><span className="text-accent mr-2">0{index + 1}</span>{step.title}</h3>
                      <p className="text-foreground/75 leading-relaxed max-w-prose">{step.description}</p>
                    </li>
                  ))}
                </ol>
              )}
              {section.bullets && <ul className="mt-6 list-disc pl-5 space-y-3 text-foreground/80 leading-relaxed marker:text-accent">{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
              {section.id === 'technology' && <p className="mt-6 text-sm font-[family-name:var(--font-jetbrains)] text-secondary leading-relaxed">{project.technologies.join(' · ')}</p>}
            </section>
          ))}
          {hasMedia && (
            <section id="media" aria-labelledby="media-title">
              <h2 id="media-title" className="font-[family-name:var(--font-display)] text-3xl font-bold mb-6">{project.mediaTitle ?? copy.media}</h2>
              {project.mediaDescription && (
                <p className="max-w-prose text-foreground/80 leading-relaxed mb-8">{project.mediaDescription}</p>
              )}
              <div className="space-y-8">
                <ProjectGallery images={project.images} locale={locale} />
                <div className="flex flex-wrap gap-4">
                  {[project.video, project.demo].filter((link) => link !== undefined).map((link) => (
                    <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 rounded-full border border-accent text-accent font-semibold hover:bg-accent/10">
                      {link.label} <span aria-hidden="true">↗</span><span className="sr-only">{copy.newTab}</span>
                    </a>
                  ))}
                </div>
              </div>
            </section>
          )}
          <div className="border-t border-foreground/15 pt-8 flex flex-wrap justify-between gap-6">
            <Link href="/#contact" className="font-semibold text-accent hover:underline underline-offset-4">{copy.discussExperience}</Link>
            {otherProject && <Link href={`/projects/${otherProject.slug}`} className="text-foreground/75 hover:text-accent">{copy.exploreProject.replace('{name}', otherProject.name)}</Link>}
          </div>
        </div>
      </div>
    </article>
  );
}
