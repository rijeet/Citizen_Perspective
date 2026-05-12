import { Locale } from '@prisma/client';

export type RequestLocale = 'bn' | 'en';

type Row = { locale: Locale; title: string };

export function pickLocaleTitle<T extends Row>(
  rows: T[],
  locale: RequestLocale,
): T | null {
  const direct = rows.find((t) => t.locale === locale);
  if (direct) return direct;
  const fb: Locale = locale === 'bn' ? 'en' : 'bn';
  return rows.find((t) => t.locale === fb) ?? null;
}
