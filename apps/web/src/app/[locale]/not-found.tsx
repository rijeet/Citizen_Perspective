'use client';

import { useTranslations } from 'next-intl';

export default function NotFound404() {
  const t = useTranslations('article');
  return (
    <div className="mx-auto max-w-lg rounded-xl border border-archive-border bg-white px-8 py-12 text-center">
      <p className="text-sm uppercase tracking-[0.2em] text-archive-muted">
        404
      </p>
      <p className="mt-4 text-lg text-archive-fg">{t('notFound')}</p>
    </div>
  );
}
