import 'server-only';

import { cookies } from 'next/headers';
import { cache } from 'react';
import type { Locale } from '../../content/site-copy';

export const getLocale = cache(async (): Promise<Locale> => {
  const language = (await cookies()).get('language')?.value;
  return language === 'zh-TW' || language === 'zh' ? 'zh-TW' : 'en';
});
