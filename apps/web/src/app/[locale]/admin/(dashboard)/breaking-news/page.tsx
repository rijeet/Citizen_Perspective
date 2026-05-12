'use client';

import { useTranslations } from 'next-intl';
import { useCallback, useEffect, useState } from 'react';
import { adminFetch, readApiError } from '@/lib/admin-api';

type Row = {
  id: string;
  sortOrder: number;
  active: boolean;
  titleBn: string;
  titleEn: string;
  href: string | null;
};

export default function AdminBreakingNewsPage() {
  const t = useTranslations('admin');
  const [rows, setRows] = useState<Row[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const [titleBn, setTitleBn] = useState('');
  const [titleEn, setTitleEn] = useState('');
  const [href, setHref] = useState('');
  const [sortOrder, setSortOrder] = useState('0');
  const [active, setActive] = useState(true);
  const [adding, setAdding] = useState(false);

  const [editId, setEditId] = useState<string | null>(null);
  const [savingId, setSavingId] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    const res = await adminFetch('admin/breaking-news');
    setLoading(false);
    if (!res.ok) {
      setError(`${t('loadError')} ${await readApiError(res)}`);
      setRows([]);
      return;
    }
    setRows((await res.json()) as Row[]);
  }, [t]);

  useEffect(() => {
    void load();
  }, [load]);

  function startEdit(row: Row) {
    setEditId(row.id);
    setTitleBn(row.titleBn);
    setTitleEn(row.titleEn);
    setHref(row.href ?? '');
    setSortOrder(String(row.sortOrder));
    setActive(row.active);
  }

  function cancelEdit() {
    setEditId(null);
  }

  function resetAddForm() {
    setTitleBn('');
    setTitleEn('');
    setHref('');
    setSortOrder('0');
    setActive(true);
  }

  async function addLine(e: React.FormEvent) {
    e.preventDefault();
    if (!titleBn.trim() || !titleEn.trim()) return;
    setAdding(true);
    setError(null);
    const res = await adminFetch('admin/breaking-news', {
      method: 'POST',
      body: JSON.stringify({
        titleBn: titleBn.trim(),
        titleEn: titleEn.trim(),
        href: href.trim() || undefined,
        sortOrder: Number.parseInt(sortOrder, 10) || 0,
        active,
      }),
    });
    setAdding(false);
    if (!res.ok) {
      setError(await readApiError(res));
      return;
    }
    resetAddForm();
    void load();
  }

  async function saveEdit() {
    if (!editId) return;
    setSavingId(editId);
    setError(null);
    const res = await adminFetch(`admin/breaking-news/${editId}`, {
      method: 'PATCH',
      body: JSON.stringify({
        titleBn: titleBn.trim(),
        titleEn: titleEn.trim(),
        href: href.trim() === '' ? null : href.trim(),
        sortOrder: Number.parseInt(sortOrder, 10) || 0,
        active,
      }),
    });
    setSavingId(null);
    if (!res.ok) {
      setError(await readApiError(res));
      return;
    }
    cancelEdit();
    resetAddForm();
    void load();
  }

  async function remove(row: Row) {
    if (!window.confirm(t('confirmDeleteBreakingNews'))) return;
    setError(null);
    const res = await adminFetch(`admin/breaking-news/${row.id}`, {
      method: 'DELETE',
    });
    if (!res.ok) {
      setError(await readApiError(res));
      return;
    }
    if (editId === row.id) cancelEdit();
    void load();
  }

  return (
    <div>
      <h1 className="mb-2 text-xl font-semibold text-archive-fg">
        {t('breakingNewsTitle')}
      </h1>
      <p className="mb-6 text-sm text-archive-muted">{t('breakingNewsHint')}</p>
      {error && (
        <p className="mb-4 rounded-md border border-archive-border bg-archive-bg px-3 py-2 text-sm text-archive-fg">
          {error}
        </p>
      )}

      <form
        onSubmit={addLine}
        className="mb-10 space-y-4 rounded-xl border border-archive-border bg-white p-4"
      >
        <p className="text-sm font-medium text-archive-fg">
          {t('breakingNewsAdd')}
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="text-sm sm:col-span-2">
            <span className="text-archive-muted">{t('breakingTitleBn')}</span>
            <input
              required
              className="mt-1 w-full rounded-md border border-archive-border px-2 py-1.5"
              value={titleBn}
              onChange={(e) => setTitleBn(e.target.value)}
            />
          </label>
          <label className="text-sm sm:col-span-2">
            <span className="text-archive-muted">{t('breakingTitleEn')}</span>
            <input
              required
              className="mt-1 w-full rounded-md border border-archive-border px-2 py-1.5"
              value={titleEn}
              onChange={(e) => setTitleEn(e.target.value)}
            />
          </label>
          <label className="text-sm sm:col-span-2">
            <span className="text-archive-muted">{t('breakingHref')}</span>
            <input
              className="mt-1 w-full rounded-md border border-archive-border px-2 py-1.5"
              value={href}
              onChange={(e) => setHref(e.target.value)}
              placeholder="/articles/your-slug or https://…"
            />
          </label>
          <label className="text-sm">
            <span className="text-archive-muted">{t('breakingSort')}</span>
            <input
              type="number"
              min={0}
              className="mt-1 w-full rounded-md border border-archive-border px-2 py-1.5"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            />
          </label>
          <label className="flex items-end gap-2 text-sm">
            <input
              type="checkbox"
              checked={active}
              onChange={(e) => setActive(e.target.checked)}
              className="rounded border-archive-border"
            />
            <span className="text-archive-muted">{t('breakingActive')}</span>
          </label>
        </div>
        <button
          type="submit"
          disabled={adding}
          className="rounded-md bg-archive-accent px-4 py-2 text-sm font-medium text-white disabled:opacity-50"
        >
          {adding ? t('loading') : t('breakingNewsAddSubmit')}
        </button>
      </form>

      {loading ? (
        <p className="text-sm text-archive-muted">{t('loading')}</p>
      ) : rows.length === 0 ? (
        <p className="text-sm text-archive-muted">{t('breakingNewsEmpty')}</p>
      ) : (
        <ul className="divide-y divide-archive-border rounded-xl border border-archive-border bg-white">
          {rows.map((row) => (
            <li key={row.id} className="px-4 py-4">
              {editId === row.id ? (
                <div className="space-y-3">
                  <div className="grid gap-2 sm:grid-cols-2">
                    <input
                      className="rounded-md border border-archive-border px-2 py-1.5 text-sm sm:col-span-2"
                      value={titleBn}
                      onChange={(e) => setTitleBn(e.target.value)}
                    />
                    <input
                      className="rounded-md border border-archive-border px-2 py-1.5 text-sm sm:col-span-2"
                      value={titleEn}
                      onChange={(e) => setTitleEn(e.target.value)}
                    />
                    <input
                      className="rounded-md border border-archive-border px-2 py-1.5 text-sm sm:col-span-2"
                      value={href}
                      onChange={(e) => setHref(e.target.value)}
                      placeholder="href"
                    />
                    <input
                      type="number"
                      min={0}
                      className="rounded-md border border-archive-border px-2 py-1.5 text-sm"
                      value={sortOrder}
                      onChange={(e) => setSortOrder(e.target.value)}
                    />
                    <label className="flex items-center gap-2 text-sm">
                      <input
                        type="checkbox"
                        checked={active}
                        onChange={(e) => setActive(e.target.checked)}
                      />
                      {t('breakingActive')}
                    </label>
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      disabled={savingId === row.id}
                      onClick={() => void saveEdit()}
                      className="rounded-md bg-archive-accent px-3 py-1.5 text-sm text-white disabled:opacity-50"
                    >
                      {savingId === row.id ? t('loading') : t('save')}
                    </button>
                    <button
                      type="button"
                      onClick={cancelEdit}
                      className="text-sm text-archive-muted underline"
                    >
                      {t('cancel')}
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="font-medium text-archive-fg">{row.titleEn}</p>
                    <p className="text-sm text-archive-muted">{row.titleBn}</p>
                    <p className="mt-1 text-xs text-archive-muted">
                      {row.href ?? '—'} · order {row.sortOrder} ·{' '}
                      {row.active ? t('published') : t('draft')}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => startEdit(row)}
                      className="text-sm text-archive-accent underline"
                    >
                      {t('editArticle')}
                    </button>
                    <button
                      type="button"
                      onClick={() => void remove(row)}
                      className="text-sm text-archive-muted underline"
                    >
                      {t('deleteSource')}
                    </button>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
