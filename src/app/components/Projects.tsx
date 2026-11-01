import Image from 'next/image';
import Link from 'next/link';
import { projects } from '../../../content/projects';

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="py-20 sm:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 id="projects-title" className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-center mb-6">
          Selected <span className="text-accent">Projects</span>
        </h2>
        <p className="max-w-2xl mx-auto text-center text-foreground/75 leading-relaxed mb-12">
          Two perspectives on solving practical problems: owning an independent product and contributing to a consulting team&apos;s digital solution.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <article key={project.slug} className="bg-card rounded-2xl border border-foreground/15 overflow-hidden flex flex-col">
              {project.images[0] && (
                <Image src={project.images[0].src} alt={project.images[0].alt} width={project.images[0].width} height={project.images[0].height} sizes="(min-width: 1280px) 560px, (min-width: 768px) 50vw, 100vw" className="w-full h-auto border-b border-foreground/10" />
              )}
              <div className="p-6 sm:p-8 flex flex-col flex-1">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-8">
                  <p className="text-sm text-secondary font-medium">{project.type}</p>
                  <span aria-hidden="true" className="font-[family-name:var(--font-jetbrains)] text-muted text-sm">0{index + 1}</span>
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-3xl font-bold mb-2">{project.name}</h3>
                <p className="text-accent font-medium mb-5">{project.subtitle}</p>
                <p className="text-foreground/80 leading-relaxed mb-6">{project.summary}</p>
                <dl className="text-sm mb-6 space-y-2">
                  <dt className="font-semibold">My role</dt>
                  <dd className="text-foreground/75 leading-relaxed">{project.role}</dd>
                  <dt className="sr-only">Timeline</dt>
                  <dd className="text-muted">{project.timeline}</dd>
                </dl>
                <p className="text-sm text-foreground/75 leading-relaxed mb-8">{project.technologies.join(' · ')}</p>
                <Link href={`/projects/${project.slug}`} className="mt-auto self-start font-semibold text-accent underline underline-offset-4 decoration-accent/40 hover:decoration-accent">
                  Read {project.name} case study <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
