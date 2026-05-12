'use client';

import { useTranslations } from 'next-intl';
import { useCallback, useEffect, useState } from 'react';
import { adminFetch, readApiError } from '@/lib/admin-api';

type SourceRow = {
  id: string;
  name: string;
  url: string | null;
  _count: { articles: number };
};

export default function AdminSourcesPage() {
  const t = useTranslations('admin');
  const [rows, setRows] = useState<SourceRow[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [newName, setNewName] = useState('');
  const [newUrl, setNewUrl] = useState('');
  const [adding, setAdding] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);
  const [editName, setEditName] = useState('');
  const [editUrl, setEditUrl] = useState('');
  const [savingId, setSavingId] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    const res = await adminFetch('admin/sources');
    setLoading(false);
    if (!res.ok) {
      setError(`${t('loadError')} ${await readApiError(res)}`);
      setRows([]);
      return;
    }
    setRows((await res.json()) as SourceRow[]);
  }, [t]);

  useEffect(() => {
    void load();
  }, [load]);

  function startEdit(s: SourceRow) {
    setEditId(s.id);
    setEditName(s.name);
    setEditUrl(s.url ?? '');
  }

  function cancelEdit() {
    setEditId(null);
    setEditName('');
    setEditUrl('');
  }

  async function saveEdit() {
    if (!editId) return;
    setSavingId(editId);
    setError(null);
    const body: { name?: string; url?: string | null } = { name: editName };
    const trimmed = editUrl.trim();
    body.url = trimmed === '' ? null : trimmed;
    const res = await adminFetch(`admin/sources/${editId}`, {
      method: 'PATCH',
      body: JSON.stringify(body),
    });
    setSavingId(null);
    if (!res.ok) {
      setError(await readApiError(res));
      return;
    }
    cancelEdit();
    void load();
  }

  async function addSource(e: React.FormEvent) {
    e.preventDefault();
    if (!newName.trim()) return;
    setAdding(true);
    setError(null);
    const body: { name: string; url?: string } = { name: newName.trim() };
    const trimmed = newUrl.trim();
    if (trimmed) body.url = trimmed;
    const res = await adminFetch('admin/sources', {
      method: 'POST',
      body: JSON.stringify(body),
    });
    setAdding(false);
    if (!res.ok) {
      setError(await readApiError(res));
      return;
    }
    setNewName('');
    setNewUrl('');
    void load();
  }

  async function removeSource(s: SourceRow) {
    if (!window.confirm(t('confirmDeleteSource'))) return;
    setError(null);
    const res = await adminFetch(`admin/sources/${s.id}`, {
      method: 'DELETE',
    });
    if (!res.ok) {
      setError(await readApiError(res));
      return;
    }
    void load();
  }

  return (
    <div>
      <h1 className="mb-6 text-xl font-semibold text-archive-fg">
        {t('sourcesTitle')}
      </h1>
      {error && (
        <p className="mb-4 rounded-md border border-archive-border bg-archive-bg px-3 py-2 text-sm text-archive-fg">
          {error}
        </p>
      )}
      <form
        onSubmit={addSource}
        className="mb-8 flex flex-wrap items-end gap-3 rounded-xl border border-archive-border bg-white p-4"
      >
        <label className="text-sm">
          <span className="text-archive-muted">{t('sourceName')}</span>
          <input
            required
            className="mt-1 block w-48 rounded-md border border-archive-border px-2 py-1.5"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </label>
        <label className="text-sm">
          <span className="text-archive-muted">{t('sourceUrl')}</span>
          <input
            type="url"
            placeholder="https://"
            className="mt-1 block w-64 max-w-full rounded-md border border-archive-border px-2 py-1.5"
            value={newUrl}
            onChange={(e) => setNewUrl(e.target.value)}
          />
        </label>
        <button
          type="submit"
          disabled={adding}
          className="rounded-md bg-archive-accent px-4 py-2 text-sm font-medium text-white disabled:opacity-50"
        >
          {adding ? t('loading') : t('addSource')}
        </button>
      </form>
      {loading ? (
        <p className="text-sm text-archive-muted">{t('loading')}</p>
      ) : rows.length === 0 ? (
        <p className="text-sm text-archive-muted">{t('noSources')}</p>
      ) : (
        <ul className="divide-y divide-archive-border rounded-xl border border-archive-border bg-white">
          {rows.map((s) => (
            <li key={s.id} className="px-4 py-3">
              {editId === s.id ? (
                <div className="flex flex-wrap items-end gap-3">
                  <label className="text-sm">
                    <span className="text-archive-muted">{t('sourceName')}</span>
                    <input
                      className="mt-1 block w-48 rounded-md border border-archive-border px-2 py-1.5"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                    />
                  </label>
                  <label className="text-sm">
                    <span className="text-archive-muted">{t('sourceUrl')}</span>
                    <input
                      type="url"
                      className="mt-1 block w-64 max-w-full rounded-md border border-archive-border px-2 py-1.5"
                      value={editUrl}
                      onChange={(e) => setEditUrl(e.target.value)}
                    />
                  </label>
                  <button
                    type="button"
                    disabled={savingId === s.id}
                    onClick={() => void saveEdit()}
                    className="rounded-md bg-archive-accent px-3 py-1.5 text-sm text-white disabled:opacity-50"
                  >
                    {savingId === s.id ? t('loading') : t('editSource')}
                  </button>
                  <button
                    type="button"
                    onClick={cancelEdit}
                    className="text-sm text-archive-muted underline"
                  >
                    {t('cancel')}
                  </button>
                </div>
              ) : (
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="min-w-0">
                    <p className="font-medium text-archive-fg">{s.name}</p>
                    <p className="truncate text-xs text-archive-muted">
                      {s.url ?? '—'} ·{' '}
                      {t('sourceArticleCount', {
                        count: s._count.articles,
                      })}
                    </p>
                  </div>
                  <div className="flex shrink-0 gap-2">
                    <button
                      type="button"
                      onClick={() => startEdit(s)}
                      className="text-sm text-archive-accent underline"
                    >
                      {t('editArticle')}
                    </button>
                    <button
                      type="button"
                      onClick={() => void removeSource(s)}
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
