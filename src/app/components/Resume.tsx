import type { ResumeLink } from '../../../content/resumes';

export function Resume({ resumes }: { resumes: ResumeLink[] }) {
  if (resumes.length === 0) return null;

  return (
    <section id="resume" aria-labelledby="resume-title" className="py-20 sm:py-24 px-6 bg-section-alt">
      <div className="max-w-4xl mx-auto">
        <h2 id="resume-title" className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-center mb-6">My <span className="text-accent">Resume</span></h2>
        <p className="text-foreground/75 text-center mb-10">Explore the experience most relevant to your opportunity.</p>
        <div className="grid sm:grid-cols-2 gap-6">
          {resumes.map((resume) => (
            <div key={resume.id} className="bg-card rounded-2xl border border-foreground/15 p-6 flex flex-col items-start">
              <h3 className="font-semibold text-lg mb-3">{resume.label}</h3>
              <p className="text-foreground/75 leading-relaxed text-sm mb-6">{resume.description}</p>
              <a href={resume.href} download className="mt-auto font-semibold text-accent underline underline-offset-4">Download {resume.label} <span className="text-sm">(PDF)</span></a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
