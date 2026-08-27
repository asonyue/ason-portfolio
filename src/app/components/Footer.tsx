'use client';

export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-foreground/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-foreground/40 text-sm">
          © {new Date().getFullYear()} Ason Yue. All rights reserved.
        </p>
        <div className="flex gap-4 items-center">
          <a
            href="/resume.pdf"
            download
            className="text-foreground/60 hover:text-accent transition-colors text-sm font-semibold"
          >
            Download Resume
          </a>
          <a
            href="#"
            className="text-foreground/40 hover:text-accent transition-colors text-sm"
          >
            Back to Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
