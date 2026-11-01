import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '../../../content/projects';
import { siteCopy, type Locale } from '../../../content/site-copy';

export function Projects({ projects, locale }: { projects: Project[]; locale: Locale }) {
  const copy = siteCopy[locale];
  return (
    <section id="projects" aria-labelledby="projects-title" className="py-20 sm:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 id="projects-title" className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold text-center mb-6">
          {copy.projectsPrefix}<span className="text-accent">{copy.projectsAccent}</span>
        </h2>
        <p className="max-w-2xl mx-auto text-center text-foreground/75 leading-relaxed mb-12">
          {copy.projectsIntro}
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const featuredImages = project.images.filter((image) => image.featured);
            const previews = featuredImages.length > 0 ? featuredImages.slice(0, 3) : project.images.slice(0, 1);

            return (
              <article key={project.slug} className="bg-card rounded-2xl border border-foreground/15 overflow-hidden flex flex-col">
                {previews.length > 0 && (
                  <Link
                    href={`/projects/${project.slug}#media`}
                    aria-label={copy.exploreScreenshots.replace('{name}', project.name)}
                    className="flex items-center justify-center gap-3 sm:gap-4 p-6 bg-section-alt border-b border-foreground/15"
                  >
                    {previews.map((image, imageIndex) => (
                      <Image
                        key={image.src}
                        src={image.src}
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
                        sizes="144px"
                        className={`h-64 lg:h-72 w-auto min-w-0 max-w-[30%] object-contain rounded-lg ${imageIndex > 0 ? 'hidden sm:block' : 'max-sm:max-w-full'}`}
                      />
                    ))}
                  </Link>
                )}
                <div className="p-6 sm:p-8 flex flex-col flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-8">
                    <p className="text-sm text-secondary font-medium">{project.type}</p>
                    <span aria-hidden="true" className="font-[family-name:var(--font-jetbrains)] text-muted text-sm">0{index + 1}</span>
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] text-3xl font-bold mb-2">{project.name}</h3>
                  <p className="text-accent font-medium mb-5">{project.subtitle}</p>
                  <p className="text-foreground/80 leading-relaxed mb-6">{project.summary}</p>
                  <dl className="text-sm mb-6 space-y-2">
                    <dt className="font-semibold">{copy.myRole}</dt>
                    <dd className="text-foreground/75 leading-relaxed">{project.role}</dd>
                    <dt className="sr-only">{copy.timeline}</dt>
                    <dd className="text-muted">{project.timeline}</dd>
                  </dl>
                  <p className="text-sm text-foreground/75 leading-relaxed mb-8">{project.technologies.join(' · ')}</p>
                  <Link href={`/projects/${project.slug}`} className="mt-auto self-start font-semibold text-accent underline underline-offset-4 decoration-accent/40 hover:decoration-accent">
                    {copy.readCaseStudy.replace('{name}', project.name)} <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
