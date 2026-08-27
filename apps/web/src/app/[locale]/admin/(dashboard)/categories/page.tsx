'use client';

import { useTranslations } from 'next-intl';
import { useCallback, useEffect, useState } from 'react';
import { adminFetch, readApiError } from '@/lib/admin-api';

type CategoryRow = {
  id: string;
  slug: string;
  sortOrder: number;
  translations: { locale: string; name: string }[];
  subcategories: {
    id: string;
    slug: string;
    translations: { locale: string; name: string }[];
  }[];
  _count?: { incidents: number };
};

export default function AdminCategoriesPage() {
  const t = useTranslations('admin');
  const [rows, setRows] = useState<CategoryRow[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [slug, setSlug] = useState('');
  const [sortOrder, setSortOrder] = useState(0);
  const [nameBn, setNameBn] = useState('');
  const [nameEn, setNameEn] = useState('');
  const [adding, setAdding] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    const res = await adminFetch('admin/categories');
    setLoading(false);
    if (!res.ok) {
      setError(await readApiError(res));
      return;
    }
    setRows((await res.json()) as CategoryRow[]);
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  async function addCategory(e: React.FormEvent) {
    e.preventDefault();
    if (!slug.trim() || !nameBn.trim() || !nameEn.trim()) return;
    setAdding(true);
    setError(null);
    const res = await adminFetch('admin/categories', {
      method: 'POST',
      body: JSON.stringify({
        slug: slug.trim(),
        sortOrder,
        translations: [
          { locale: 'bn', name: nameBn.trim() },
          { locale: 'en', name: nameEn.trim() },
        ],
      }),
    });
    setAdding(false);
    if (!res.ok) {
      setError(await readApiError(res));
      return;
    }
    setSlug('');
    setNameBn('');
    setNameEn('');
    void load();
  }

  async function remove(id: string) {
    if (!window.confirm(t('confirmDeleteCategory'))) return;
    const res = await adminFetch(`admin/categories/${id}`, { method: 'DELETE' });
    if (!res.ok) {
      setError(await readApiError(res));
      return;
    }
    void load();
  }

  return (
    <div>
      <h1 className="mb-6 text-xl font-semibold">{t('categoriesTitle')}</h1>
      {error ? (
        <p className="mb-4 rounded-md border border-archive-border bg-archive-bg px-3 py-2 text-sm">
          {error}
        </p>
      ) : null}
      <form
        onSubmit={addCategory}
        className="mb-8 space-y-3 rounded-xl border border-archive-border bg-white p-4"
      >
        <p className="text-sm font-medium">{t('categoryAdd')}</p>
        <div className="grid gap-3 sm:grid-cols-2">
          <input
            placeholder={t('slug')}
            className="rounded-md border border-archive-border px-2 py-1.5 text-sm"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder={t('categorySort')}
            className="rounded-md border border-archive-border px-2 py-1.5 text-sm"
            value={sortOrder}
            onChange={(e) => setSortOrder(Number(e.target.value))}
          />
          <input
            placeholder={t('titleBn')}
            className="rounded-md border border-archive-border px-2 py-1.5 text-sm"
            value={nameBn}
            onChange={(e) => setNameBn(e.target.value)}
            required
          />
          <input
            placeholder={t('titleEn')}
            className="rounded-md border border-archive-border px-2 py-1.5 text-sm"
            value={nameEn}
            onChange={(e) => setNameEn(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          disabled={adding}
          className="rounded-md bg-archive-accent px-4 py-2 text-sm text-white disabled:opacity-50"
        >
          {adding ? t('loading') : t('categoryAddSubmit')}
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
                  {row.translations.find((x) => x.locale === 'en')?.name}
                </p>
                <p className="text-xs text-archive-muted">
                  {row.slug} · {row._count?.incidents ?? 0} incidents
                </p>
              </div>
              <button
                type="button"
                onClick={() => void remove(row.id)}
                className="text-sm text-archive-muted underline"
              >
                {t('deleteSource')}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
