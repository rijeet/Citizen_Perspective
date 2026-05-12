'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { useCallback, useEffect, useState } from 'react';
import { adminFetch, readApiError } from '@/lib/admin-api';

type ArticleRow = {
  slug: string;
  reviewStatus: string;
  publishedAt: string | null;
  source: { name: string };
  translations: { locale: string; title: string }[];
};

export default function AdminArticlesPage() {
  const t = useTranslations('admin');
  const locale = useLocale();
  const [status, setStatus] = useState<'ALL' | 'DRAFT' | 'PUBLISHED'>('ALL');
  const [rows, setRows] = useState<ArticleRow[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    const q = status === 'ALL' ? '' : `?status=${status}`;
    const res = await adminFetch(`admin/articles${q}`);
    setLoading(false);
    if (!res.ok) {
      setError(`${t('loadError')} ${await readApiError(res)}`);
      setRows([]);
      return;
    }
    setRows((await res.json()) as ArticleRow[]);
  }, [status, t]);

  useEffect(() => {
    void load();
  }, [load]);

  function titleFor(a: ArticleRow) {
    const tr =
      a.translations.find((x) => x.locale === locale) ?? a.translations[0];
    return tr?.title?.trim() || a.slug;
  }

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-xl font-semibold text-archive-fg">
          {t('articlesTitle')}
        </h1>
        <Link
          href="/admin/articles/new"
          className="rounded-md bg-archive-accent px-4 py-2 text-sm font-medium text-white"
        >
          {t('newArticle')}
        </Link>
      </div>
      <div className="mb-4 flex items-center gap-2 text-sm">
        <label className="text-archive-muted">{t('filterStatus')}</label>
        <select
          value={status}
          onChange={(e) =>
            setStatus(e.target.value as 'ALL' | 'DRAFT' | 'PUBLISHED')
          }
          className="rounded-md border border-archive-border px-2 py-1"
        >
          <option value="ALL">{t('all')}</option>
          <option value="DRAFT">{t('draft')}</option>
          <option value="PUBLISHED">{t('published')}</option>
        </select>
      </div>
      {error && (
        <p className="mb-4 rounded-md border border-archive-border bg-archive-bg px-3 py-2 text-sm text-archive-fg">
          {error}
        </p>
      )}
      {loading ? (
        <p className="text-sm text-archive-muted">{t('loading')}</p>
      ) : rows.length === 0 ? (
        <p className="text-sm text-archive-muted">{t('noArticles')}</p>
      ) : (
        <ul className="divide-y divide-archive-border rounded-xl border border-archive-border bg-white">
          {rows.map((a) => (
            <li
              key={a.slug}
              className="flex flex-wrap items-center justify-between gap-3 px-4 py-3"
            >
              <div className="min-w-0">
                <p className="truncate font-medium text-archive-fg">
                  {titleFor(a)}
                </p>
                <p className="text-xs text-archive-muted">
                  {a.slug} · {a.source.name} ·{' '}
                  {a.reviewStatus === 'PUBLISHED' ? t('published') : t('draft')}
                </p>
              </div>
              <Link
                href={`/admin/articles/${encodeURIComponent(a.slug)}/edit`}
                className="shrink-0 text-sm text-archive-accent underline"
              >
                {t('editArticle')}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
