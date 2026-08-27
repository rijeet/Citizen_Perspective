'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { useCallback, useEffect, useState } from 'react';
import { adminFetch, readApiError } from '@/lib/admin-api';

type IncidentRow = {
  id: string;
  slug: string;
  currentStage: string;
  currentStatus: string | null;
  updatedAt: string;
  translations: { locale: string; title: string }[];
  category: { slug: string; translations: { locale: string; name: string }[] };
  _count?: { newsItems: number };
};

type CategoryOpt = {
  id: string;
  slug: string;
  translations: { locale: string; name: string }[];
  subcategories: { id: string; slug: string }[];
};

export default function AdminIncidentsPage() {
  const t = useTranslations('admin');
  const [rows, setRows] = useState<IncidentRow[]>([]);
  const [categories, setCategories] = useState<CategoryOpt[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [slug, setSlug] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [subcategoryId, setSubcategoryId] = useState('');
  const [titleBn, setTitleBn] = useState('');
  const [titleEn, setTitleEn] = useState('');
  const [adding, setAdding] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    const [incRes, catRes] = await Promise.all([
      adminFetch('admin/incidents?status=ALL'),
      adminFetch('admin/categories'),
    ]);
    setLoading(false);
    if (!incRes.ok) {
      setError(await readApiError(incRes));
      return;
    }
    setRows((await incRes.json()) as IncidentRow[]);
    if (catRes.ok) setCategories((await catRes.json()) as CategoryOpt[]);
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  const selectedCategory = categories.find((c) => c.id === categoryId);

  async function addIncident(e: React.FormEvent) {
    e.preventDefault();
    if (!slug.trim() || !categoryId || !titleBn.trim() || !titleEn.trim()) return;
    setAdding(true);
    setError(null);
    const res = await adminFetch('admin/incidents', {
      method: 'POST',
      body: JSON.stringify({
        slug: slug.trim(),
        categoryId,
        subcategoryId: subcategoryId || undefined,
        reviewStatus: 'PUBLISHED',
        translations: [
          { locale: 'bn', title: titleBn.trim() },
          { locale: 'en', title: titleEn.trim() },
        ],
      }),
    });
    setAdding(false);
    if (!res.ok) {
      setError(await readApiError(res));
      return;
    }
    setSlug('');
    setTitleBn('');
    setTitleEn('');
    void load();
  }

  return (
    <div>
      <h1 className="mb-6 text-xl font-semibold">{t('incidentsTitle')}</h1>
      {error ? (
        <p className="mb-4 rounded-md border border-archive-border bg-archive-bg px-3 py-2 text-sm">
          {error}
        </p>
      ) : null}
      <form
        onSubmit={addIncident}
        className="mb-8 space-y-3 rounded-xl border border-archive-border bg-white p-4"
      >
        <p className="text-sm font-medium">{t('incidentAdd')}</p>
        <div className="grid gap-3 sm:grid-cols-2">
          <input
            placeholder={t('slug')}
            className="rounded-md border border-archive-border px-2 py-1.5 text-sm"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            required
          />
          <select
            className="rounded-md border border-archive-border px-2 py-1.5 text-sm"
            value={categoryId}
            onChange={(e) => {
              setCategoryId(e.target.value);
              setSubcategoryId('');
            }}
            required
          >
            <option value="">{t('category')}</option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.translations.find((x) => x.locale === 'en')?.name ?? c.slug}
              </option>
            ))}
          </select>
          <select
            className="rounded-md border border-archive-border px-2 py-1.5 text-sm"
            value={subcategoryId}
            onChange={(e) => setSubcategoryId(e.target.value)}
          >
            <option value="">{t('subcategoryOptional')}</option>
            {selectedCategory?.subcategories.map((s) => (
              <option key={s.id} value={s.id}>
                {s.slug}
              </option>
            ))}
          </select>
          <input
            placeholder={t('titleBn')}
            className="rounded-md border border-archive-border px-2 py-1.5 text-sm"
            value={titleBn}
            onChange={(e) => setTitleBn(e.target.value)}
            required
          />
          <input
            placeholder={t('titleEn')}
            className="rounded-md border border-archive-border px-2 py-1.5 text-sm sm:col-span-2"
            value={titleEn}
            onChange={(e) => setTitleEn(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          disabled={adding}
          className="rounded-md bg-archive-accent px-4 py-2 text-sm text-white disabled:opacity-50"
        >
          {adding ? t('loading') : t('incidentAddSubmit')}
        </button>
      </form>
      {loading ? (
        <p className="text-sm text-archive-muted">{t('loading')}</p>
      ) : (
        <ul className="divide-y divide-archive-border rounded-xl border border-archive-border bg-white">
          {rows.map((row) => (
            <li key={row.id} className="flex items-center justify-between px-4 py-3">
              <div>
                <p className="font-medium">
                  {row.translations.find((x) => x.locale === 'en')?.title}
                </p>
                <p className="text-xs text-archive-muted">
                  {row.currentStage || '—'} · {row._count?.newsItems ?? 0} news items
                </p>
              </div>
              <Link
                href={`/admin/incidents/${row.id}`}
                className="text-sm text-archive-accent underline"
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
