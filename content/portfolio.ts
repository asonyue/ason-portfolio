import personal from './personal.json';
import stories from './stories.json';
import skills from './skills.json';
import experience from './experience.json';
import education from './education.json';
import zhTW from './zh-TW/home.json';
import type { Locale } from './site-copy';

const english = { personal, stories, skills, experience, education };
export type HomepageContent = typeof english;
const traditionalChinese: HomepageContent = zhTW;

export function getHomepageContent(locale: Locale): HomepageContent {
  return locale === 'zh-TW' ? traditionalChinese : english;
}
