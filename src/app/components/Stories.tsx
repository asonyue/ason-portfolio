import type { HomepageContent } from '../../../content/portfolio';
import { siteCopy, type Locale } from '../../../content/site-copy';

export function Stories({ data: storiesData, locale }: { data: HomepageContent['stories']; locale: Locale }) {
  const copy = siteCopy[locale];
  return (
    <section id="about" aria-labelledby="about-title" className="py-20 sm:py-24 px-6">
      <span id="stories" aria-hidden="true" />
      <div className="max-w-4xl mx-auto">
        <h2 id="about-title" className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold mb-8">{copy.aboutPrefix}<span className="text-accent">{copy.aboutAccent}</span></h2>
        {storiesData.map((story) => (
          <div key={story.title} className="border-l-2 border-accent/50 pl-6 sm:pl-8">
            <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold mb-4">{story.title}</h3>
            <p className="text-foreground/80 text-base sm:text-lg leading-relaxed max-w-prose">{story.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
