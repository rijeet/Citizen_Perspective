'use client';

import { useTranslations } from 'next-intl';
import { useCallback, useEffect, useState } from 'react';
import { adminFetch, readApiError } from '@/lib/admin-api';

type Trans = { locale: string; title: string; caption: string | null };

type MediaRow = {
  id: string;
  mediaUrl: string;
  publishedAt: string | null;
  reviewStatus: string;
  tags: string[];
  translations: Trans[];
};

export default function AdminMediaItemsPage() {
  const t = useTranslations('admin');
  const [rows, setRows] = useState<MediaRow[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const [mediaUrl, setMediaUrl] = useState('');
  const [publishedAt, setPublishedAt] = useState('');
  const [reviewStatus, setReviewStatus] = useState<'DRAFT' | 'PUBLISHED'>(
    'PUBLISHED',
  );
  const [titleBn, setTitleBn] = useState('');
  const [titleEn, setTitleEn] = useState('');
  const [capBn, setCapBn] = useState('');
  const [capEn, setCapEn] = useState('');
  const [tagsInput, setTagsInput] = useState('');
  const [adding, setAdding] = useState(false);

  const [editId, setEditId] = useState<string | null>(null);
  const [savingId, setSavingId] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    const res = await adminFetch('admin/media-items');
    setLoading(false);
    if (!res.ok) {
      setError(`${t('loadError')} ${await readApiError(res)}`);
      setRows([]);
      return;
    }
    setRows((await res.json()) as MediaRow[]);
  }, [t]);

  useEffect(() => {
    void load();
  }, [load]);

  function startEdit(row: MediaRow) {
    setEditId(row.id);
    setMediaUrl(row.mediaUrl);
    setPublishedAt(
      row.publishedAt ? row.publishedAt.slice(0, 16) : '',
    );
    setReviewStatus(
      row.reviewStatus === 'DRAFT' ? 'DRAFT' : 'PUBLISHED',
    );
    const bn = row.translations.find((x) => x.locale === 'bn');
    const en = row.translations.find((x) => x.locale === 'en');
    setTitleBn(bn?.title ?? '');
    setTitleEn(en?.title ?? '');
    setCapBn(bn?.caption ?? '');
    setCapEn(en?.caption ?? '');
    setTagsInput(row.tags?.length ? row.tags.join(', ') : '');
  }

  function cancelEdit() {
    setEditId(null);
  }

  function transPayload() {
    return [
      {
        locale: 'bn' as const,
        title: titleBn.trim(),
        caption: capBn.trim() || undefined,
      },
      {
        locale: 'en' as const,
        title: titleEn.trim(),
        caption: capEn.trim() || undefined,
      },
    ];
  }

  function parseTags() {
    return tagsInput
      .split(',')
      .map((x) => x.trim())
      .filter(Boolean);
  }

  async function addItem(e: React.FormEvent) {
    e.preventDefault();
    if (!mediaUrl.trim() || !titleBn.trim() || !titleEn.trim()) return;
    setAdding(true);
    setError(null);
    const res = await adminFetch('admin/media-items', {
      method: 'POST',
      body: JSON.stringify({
        mediaUrl: mediaUrl.trim(),
        publishedAt: publishedAt
          ? new Date(publishedAt).toISOString()
          : undefined,
        reviewStatus,
        translations: transPayload(),
        tags: parseTags(),
      }),
    });
    setAdding(false);
    if (!res.ok) {
      setError(await readApiError(res));
      return;
    }
    setMediaUrl('');
    setPublishedAt('');
    setTagsInput('');
    setTitleBn('');
    setTitleEn('');
    setCapBn('');
    setCapEn('');
    void load();
  }

  async function saveEdit() {
    if (!editId) return;
    setSavingId(editId);
    setError(null);
    const res = await adminFetch(`admin/media-items/${editId}`, {
      method: 'PATCH',
      body: JSON.stringify({
        mediaUrl: mediaUrl.trim(),
        publishedAt: publishedAt
          ? new Date(publishedAt).toISOString()
          : null,
        reviewStatus,
        translations: transPayload(),
        tags: parseTags(),
      }),
    });
    setSavingId(null);
    if (!res.ok) {
      setError(await readApiError(res));
      return;
    }
    cancelEdit();
    void load();
  }

  async function remove(row: MediaRow) {
    if (!window.confirm(t('confirmDeleteMediaItem'))) return;
    setError(null);
    const res = await adminFetch(`admin/media-items/${row.id}`, {
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
      <h1 className="mb-6 text-xl font-semibold text-archive-fg">
        {t('mediaItemsTitle')}
      </h1>
      <p className="mb-6 text-sm text-archive-muted">{t('mediaItemsHint')}</p>
      {error && (
        <p className="mb-4 rounded-md border border-archive-border bg-archive-bg px-3 py-2 text-sm text-archive-fg">
          {error}
        </p>
      )}

      <form
        onSubmit={addItem}
        className="mb-10 space-y-4 rounded-xl border border-archive-border bg-white p-4"
      >
        <p className="text-sm font-medium text-archive-fg">
          {t('mediaItemsAdd')}
        </p>
        <label className="block text-sm">
          <span className="text-archive-muted">{t('mediaUrlField')}</span>
          <input
            required
            type="text"
            className="mt-1 w-full rounded-md border border-archive-border px-2 py-1.5"
            value={mediaUrl}
            onChange={(e) => setMediaUrl(e.target.value)}
            placeholder="https://"
          />
        </label>
        <div className="flex flex-wrap gap-3">
          <label className="text-sm">
            <span className="text-archive-muted">{t('publishedAt')}</span>
            <input
              type="datetime-local"
              className="mt-1 block rounded-md border border-archive-border px-2 py-1.5"
              value={publishedAt}
              onChange={(e) => setPublishedAt(e.target.value)}
            />
          </label>
          <label className="text-sm">
            <span className="text-archive-muted">{t('status')}</span>
            <select
              className="mt-1 block rounded-md border border-archive-border px-2 py-1.5"
              value={reviewStatus}
              onChange={(e) =>
                setReviewStatus(e.target.value as 'DRAFT' | 'PUBLISHED')
              }
            >
              <option value="PUBLISHED">{t('published')}</option>
              <option value="DRAFT">{t('draft')}</option>
            </select>
          </label>
        </div>
        <label className="block text-sm">
          <span className="text-archive-muted">{t('videoTagsField')}</span>
          <input
            className="mt-1 w-full rounded-md border border-archive-border px-2 py-1.5"
            value={tagsInput}
            onChange={(e) => setTagsInput(e.target.value)}
            placeholder={t('videoTagsHint')}
          />
        </label>
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="text-sm">
            <span className="text-archive-muted">{t('mediaTitleBn')}</span>
            <input
              required
              className="mt-1 w-full rounded-md border border-archive-border px-2 py-1.5"
              value={titleBn}
              onChange={(e) => setTitleBn(e.target.value)}
            />
          </label>
          <label className="text-sm">
            <span className="text-archive-muted">{t('mediaTitleEn')}</span>
            <input
              required
              className="mt-1 w-full rounded-md border border-archive-border px-2 py-1.5"
              value={titleEn}
              onChange={(e) => setTitleEn(e.target.value)}
            />
          </label>
          <label className="text-sm">
            <span className="text-archive-muted">{t('mediaCaptionBn')}</span>
            <textarea
              rows={2}
              className="mt-1 w-full rounded-md border border-archive-border px-2 py-1.5"
              value={capBn}
              onChange={(e) => setCapBn(e.target.value)}
            />
          </label>
          <label className="text-sm">
            <span className="text-archive-muted">{t('mediaCaptionEn')}</span>
            <textarea
              rows={2}
              className="mt-1 w-full rounded-md border border-archive-border px-2 py-1.5"
              value={capEn}
              onChange={(e) => setCapEn(e.target.value)}
            />
          </label>
        </div>
        <button
          type="submit"
          disabled={adding}
          className="rounded-md bg-archive-accent px-4 py-2 text-sm font-medium text-white disabled:opacity-50"
        >
          {adding ? t('loading') : t('mediaItemsAddSubmit')}
        </button>
      </form>

      {loading ? (
        <p className="text-sm text-archive-muted">{t('loading')}</p>
      ) : rows.length === 0 ? (
        <p className="text-sm text-archive-muted">{t('mediaItemsEmpty')}</p>
      ) : (
        <ul className="divide-y divide-archive-border rounded-xl border border-archive-border bg-white">
          {rows.map((row) => (
            <li key={row.id} className="px-4 py-4">
              {editId === row.id ? (
                <div className="space-y-3">
                  <input
                    type="url"
                    className="w-full rounded-md border border-archive-border px-2 py-1.5 text-sm"
                    value={mediaUrl}
                    onChange={(e) => setMediaUrl(e.target.value)}
                  />
                  <input
                    type="datetime-local"
                    className="rounded-md border border-archive-border px-2 py-1.5 text-sm"
                    value={publishedAt}
                    onChange={(e) => setPublishedAt(e.target.value)}
                  />
                  <select
                    className="rounded-md border border-archive-border px-2 py-1.5 text-sm"
                    value={reviewStatus}
                    onChange={(e) =>
                      setReviewStatus(
                        e.target.value as 'DRAFT' | 'PUBLISHED',
                      )
                    }
                  >
                    <option value="PUBLISHED">{t('published')}</option>
                    <option value="DRAFT">{t('draft')}</option>
                  </select>
                  <input
                    type="text"
                    className="w-full rounded-md border border-archive-border px-2 py-1.5 text-sm sm:col-span-2"
                    value={tagsInput}
                    onChange={(e) => setTagsInput(e.target.value)}
                    placeholder={t('videoTagsHint')}
                  />
                  <div className="grid gap-2 sm:grid-cols-2">
                    <input
                      className="rounded-md border border-archive-border px-2 py-1.5 text-sm"
                      value={titleBn}
                      onChange={(e) => setTitleBn(e.target.value)}
                    />
                    <input
                      className="rounded-md border border-archive-border px-2 py-1.5 text-sm"
                      value={titleEn}
                      onChange={(e) => setTitleEn(e.target.value)}
                    />
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
                    <p className="font-medium text-archive-fg">{row.mediaUrl}</p>
                    <p className="text-sm text-archive-muted">
                      {row.translations.find((x) => x.locale === 'en')?.title}
                    </p>
                    {row.tags?.length ? (
                      <p className="text-xs text-archive-muted">
                        {t('videoTagsLabel')}: {row.tags.join(', ')}
                      </p>
                    ) : null}
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
