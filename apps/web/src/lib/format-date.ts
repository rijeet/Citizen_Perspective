export function formatPublishDate(dateIso: string | null | undefined, locale: string) {
  if (!dateIso) return '—';

  try {
    return new Intl.DateTimeFormat(locale === 'bn' ? 'bn-BD' : 'en-GB', {
      dateStyle: 'medium',
      timeZone: 'Asia/Dhaka',
    }).format(new Date(dateIso));
  } catch {
    return dateIso;
  }
}
