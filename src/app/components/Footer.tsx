import Link from 'next/link';
import type { ResumeLink } from '../../../content/resumes';

export function Footer({ resumes }: { resumes: ResumeLink[] }) {
  return (
    <footer className="py-8 px-6 border-t border-foreground/15">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-foreground/75 text-sm">© {new Date().getFullYear()} Ason Yue. All rights reserved.</p>
        <div className="flex flex-wrap justify-center gap-5 items-center text-sm">
          {resumes.map((resume) => <a key={resume.id} href={resume.href} download className="text-foreground/75 hover:text-accent">{resume.label} (PDF)</a>)}
          <Link href="/#hero" className="text-foreground/75 hover:text-accent">Back to home ↑</Link>
        </div>
      </div>
    </footer>
  );
}
