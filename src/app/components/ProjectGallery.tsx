import Image from 'next/image';
import { siteCopy, type Locale } from '../../../content/site-copy';
import type { ProjectImage } from '../../../content/projects';

export function ProjectGallery({ images, locale }: { images: ProjectImage[]; locale: Locale }) {
  const copy = siteCopy[locale];
  if (images.length === 0) return null;

  return (
    <div className="grid sm:grid-cols-2 gap-x-8 gap-y-12 items-start">
      {images.map((item, index) => (
        <figure key={item.src} className="min-w-0">
          {item.title && (
            <h3 className="font-[family-name:var(--font-display)] text-xl font-bold mb-4">
              <span aria-hidden="true" className="font-[family-name:var(--font-jetbrains)] text-sm text-accent mr-3">
                {String(index + 1).padStart(2, '0')}
              </span>
              {item.title}
            </h3>
          )}
          <a
            href={item.src}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${copy.viewFullImage}: ${item.title ?? item.alt} ${copy.newTab}`}
            className="block max-w-sm mx-auto rounded-2xl border border-foreground/15 overflow-hidden bg-card hover:border-accent/60 transition-colors"
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={item.width}
              height={item.height}
              sizes="(min-width: 640px) 384px, calc(100vw - 48px)"
              className="w-full h-auto"
            />
          </a>
          <figcaption className="mt-4 text-sm text-foreground/80 leading-relaxed">
            {item.caption}
            <a
              href={item.src}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block w-fit text-accent underline underline-offset-4"
            >
              {copy.viewFullImage}
              <span className="sr-only">: {item.title ?? item.alt} {copy.newTab}</span>
              <span aria-hidden="true"> ↗</span>
            </a>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
