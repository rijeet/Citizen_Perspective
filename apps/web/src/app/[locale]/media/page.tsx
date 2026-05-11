import { getTranslations } from 'next-intl/server';

export default async function MediaPage() {
  const t = await getTranslations('placeholders');

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight">{t('mediaTitle')}</h1>
      <p className="text-lg leading-relaxed text-archive-muted">{t('mediaBody')}</p>
    </div>
  );
}
