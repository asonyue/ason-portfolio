import storiesData from '../../../content/stories.json';

export function Stories() {
  return (
    <section id="about" aria-labelledby="about-title" className="py-20 sm:py-24 px-6">
      <span id="stories" aria-hidden="true" />
      <div className="max-w-4xl mx-auto">
        <h2 id="about-title" className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold mb-8">About <span className="text-accent">Me</span></h2>
        {storiesData.map((story) => (
          <div key={story.title} className="border-l-2 border-accent/50 pl-6 sm:pl-8">
            <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold mb-4">{story.title}</h3>
            <p className="text-foreground/80 text-base sm:text-lg leading-relaxed max-w-prose">{story.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
