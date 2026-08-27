import { Locale } from '@prisma/client';
import { pickLocaleTitle } from '../archive-content/locale.util';

export type RequestLocale = 'bn' | 'en';

type NamedRow = { locale: Locale; name: string };
type TitledRow = { locale: Locale; title: string };

export function pickLocaleName(
  rows: NamedRow[],
  locale: RequestLocale,
): string {
  const direct = rows.find((t) => t.locale === locale);
  if (direct) return direct.name;
  const fb: Locale = locale === 'bn' ? 'en' : 'bn';
  return rows.find((t) => t.locale === fb)?.name ?? '';
}

export function pickLocaleTitleText(
  rows: TitledRow[],
  locale: RequestLocale,
): string {
  return pickLocaleTitle(rows, locale)?.title ?? '';
}
