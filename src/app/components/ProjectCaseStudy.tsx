import Image from 'next/image';
import Link from 'next/link';
import { projects, type Project } from '../../../content/projects';

export function ProjectCaseStudy({ project }: { project: Project }) {
  const hasMedia = project.images.length > 0 || project.video || project.demo;
  const otherProject = projects.find((item) => item.slug !== project.slug);

  return (
    <article className="pt-32 sm:pt-40 pb-20 px-6">
      <header className="max-w-6xl mx-auto border-b border-foreground/15 pb-12">
        <Link href="/#projects" className="text-sm text-foreground/75 hover:text-accent">← All projects</Link>
        <p className="mt-10 mb-4 text-secondary font-[family-name:var(--font-jetbrains)] text-sm">{project.type}</p>
        <h1 className="font-[family-name:var(--font-playfair)] font-bold text-5xl sm:text-6xl md:text-7xl mb-4"><span className="gradient-text">{project.name}</span></h1>
        <p className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl mb-6">{project.subtitle}</p>
        <p className="max-w-3xl text-lg leading-relaxed text-foreground/80">{project.summary}</p>
        <dl className="grid sm:grid-cols-[1fr_2fr] gap-6 mt-10 text-sm max-w-4xl">
          <div><dt className="text-muted mb-2">Timeline</dt><dd>{project.timeline}</dd></div>
          <div><dt className="text-muted mb-2">My contribution</dt><dd className="leading-relaxed">{project.role}</dd></div>
        </dl>
      </header>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-[200px_minmax(0,1fr)] gap-10 lg:gap-16 pt-12">
        <aside>
          <nav aria-label="Case study sections" className="lg:sticky lg:top-28">
            <p className="font-semibold mb-4">In this case study</p>
            <ul className="flex flex-wrap lg:flex-col gap-x-5 gap-y-3 text-sm">
              {project.sections.map((section) => <li key={section.id}><a href={`#${section.id}`} className="text-foreground/75 hover:text-accent">{section.title}</a></li>)}
              {hasMedia && <li><a href="#media" className="text-foreground/75 hover:text-accent">Demo & media</a></li>}
            </ul>
          </nav>
        </aside>
        <div className="min-w-0 space-y-14">
          {project.sections.map((section) => (
            <section key={section.id} id={section.id} aria-labelledby={`${section.id}-title`}>
              <h2 id={`${section.id}-title`} className="font-[family-name:var(--font-playfair)] text-3xl font-bold mb-6">{section.title}</h2>
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
              <h2 id="media-title" className="font-[family-name:var(--font-playfair)] text-3xl font-bold mb-6">Demo & media</h2>
              <div className="space-y-8">
                {project.images.map((item) => (
                  <figure key={item.src}>
                    <Image src={item.src} alt={item.alt} width={item.width} height={item.height} sizes="(min-width: 1280px) 888px, (min-width: 1024px) 75vw, 100vw" className="w-full h-auto rounded-2xl border border-foreground/15" />
                    <figcaption className="text-sm text-foreground/75 leading-relaxed mt-3">{item.caption}</figcaption>
                  </figure>
                ))}
                <div className="flex flex-wrap gap-4">
                  {[project.video, project.demo].filter((link) => link !== undefined).map((link) => (
                    <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 rounded-full border border-accent text-accent font-semibold hover:bg-accent/10">
                      {link.label} <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  ))}
                </div>
              </div>
            </section>
          )}
          <div className="border-t border-foreground/15 pt-8 flex flex-wrap justify-between gap-6">
            <Link href="/#contact" className="font-semibold text-accent hover:underline underline-offset-4">Discuss my experience →</Link>
            {otherProject && <Link href={`/projects/${otherProject.slug}`} className="text-foreground/75 hover:text-accent">Explore {otherProject.name} →</Link>}
          </div>
        </div>
      </div>
    </article>
  );
}
