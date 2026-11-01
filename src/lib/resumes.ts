import 'server-only';

import { statSync } from 'node:fs';
import path from 'node:path';
import { siteCopy, type Locale } from '../../content/site-copy';
import { resumes, type ResumeLink } from '../../content/resumes';

export function getAvailableResumes(locale: Locale = 'en'): ResumeLink[] {
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

    const copy = siteCopy[locale];
    const label = locale === 'en' ? resume.label : resume.id === 'consulting' ? copy.consultingResume : copy.qaResume;
    const description = locale === 'en' ? resume.description : resume.id === 'consulting' ? copy.consultingDescription : copy.qaDescription;
    return [{ id: resume.id, label, description, href: resume.href }];
  });
}
