import 'server-only';

import { statSync } from 'node:fs';
import path from 'node:path';
import { resumes, type ResumeLink } from '../../content/resumes';

export function getAvailableResumes(): ResumeLink[] {
  const publicDirectory = path.resolve(process.cwd(), 'public');

  return resumes.flatMap((resume) => {
    if (!resume.reviewed || !resume.href?.startsWith('/') || !resume.href.endsWith('.pdf')) {
      return [];
    }

    const filePath = path.resolve(publicDirectory, `.${resume.href}`);
    if (!filePath.startsWith(`${publicDirectory}${path.sep}`)) return [];

    try {
      const file = statSync(filePath);
      if (!file.isFile() || file.size === 0) return [];
    } catch {
      return [];
    }

    return [{ id: resume.id, label: resume.label, description: resume.description, href: resume.href }];
  });
}
