'use client';

import { useTranslations } from 'next-intl';
import { useCallback, useEffect, useState } from 'react';
import { adminFetch, readApiError } from '@/lib/admin-api';

type Trans = { locale: string; title: string; description: string | null };

type SourceMini = { id: string; name: string; url: string | null };

type VideoRow = {
  id: string;
  platform: 'YOUTUBE' | 'FACEBOOK';
  watchUrl: string;
  publishedAt: string | null;
  reviewStatus: string;
  sourceId: string | null;
  source: SourceMini | null;
  tags: string[];
  translations: Trans[];
};

function titleFor(row: VideoRow, loc: string) {
  return (
    row.translations.find((x) => x.locale === loc)?.title ??
    row.translations[0]?.title ??
    row.id
  );
}

function parseTagsComma(s: string) {
  return s
    .split(',')
    .map((x) => x.trim())
    .filter((x) => x.length > 0);
}

export default function AdminVideosPage() {
  const t = useTranslations('admin');
  const [rows, setRows] = useState<VideoRow[]>([]);
  const [sources, setSources] = useState<SourceMini[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const [platform, setPlatform] = useState<'YOUTUBE' | 'FACEBOOK'>('YOUTUBE');
  const [watchUrl, setWatchUrl] = useState('');
  const [publishedAt, setPublishedAt] = useState('');
  const [reviewStatus, setReviewStatus] = useState<'DRAFT' | 'PUBLISHED'>(
    'PUBLISHED',
  );
  const [sourceId, setSourceId] = useState('');
  const [tagsInput, setTagsInput] = useState('');
  const [titleBn, setTitleBn] = useState('');
  const [titleEn, setTitleEn] = useState('');
  const [descBn, setDescBn] = useState('');
  const [descEn, setDescEn] = useState('');
  const [adding, setAdding] = useState(false);

  const [editId, setEditId] = useState<string | null>(null);
  const [savingId, setSavingId] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    const [vRes, sRes] = await Promise.all([
      adminFetch('admin/videos'),
      adminFetch('admin/sources'),
    ]);
    setLoading(false);
    if (!vRes.ok) {
      setError(`${t('loadError')} ${await readApiError(vRes)}`);
      setRows([]);
      return;
    }
    setRows((await vRes.json()) as VideoRow[]);
    if (sRes.ok) {
      setSources((await sRes.json()) as SourceMini[]);
    } else {
      setSources([]);
    }
  }, [t]);

  useEffect(() => {
    void load();
  }, [load]);

  function startEdit(row: VideoRow) {
    setEditId(row.id);
    setPlatform(row.platform);
    setWatchUrl(row.watchUrl);
    setPublishedAt(row.publishedAt ? row.publishedAt.slice(0, 16) : '');
    setReviewStatus(row.reviewStatus === 'DRAFT' ? 'DRAFT' : 'PUBLISHED');
    setSourceId(row.sourceId ?? '');
    setTagsInput(row.tags?.length ? row.tags.join(', ') : '');
    const bn = row.translations.find((x) => x.locale === 'bn');
    const en = row.translations.find((x) => x.locale === 'en');
    setTitleBn(bn?.title ?? '');
    setTitleEn(en?.title ?? '');
    setDescBn(bn?.description ?? '');
    setDescEn(en?.description ?? '');
  }

  function cancelEdit() {
    setEditId(null);
  }

  function transPayload() {
    return [
      {
        locale: 'bn' as const,
        title: titleBn.trim(),
        description: descBn.trim() || undefined,
      },
      {
        locale: 'en' as const,
        title: titleEn.trim(),
        description: descEn.trim() || undefined,
      },
    ];
  }

  function sourceSelect() {
    return (
      <label className="min-w-[160px] text-sm">
        <span className="text-archive-muted">{t('source')}</span>
        <select
          className="mt-1 block w-full rounded-md border border-archive-border px-2 py-1.5"
          value={sourceId}
          onChange={(e) => setSourceId(e.target.value)}
        >
          <option value="">{t('videoSourceNone')}</option>
          {sources.map((s) => (
            <option key={s.id} value={s.id}>
              {s.name}
            </option>
          ))}
        </select>
      </label>
    );
  }

  function tagsField(className?: string) {
    return (
      <label className={className ?? 'min-w-[200px] flex-1 text-sm'}>
        <span className="text-archive-muted">{t('videoTagsField')}</span>
        <input
          className="mt-1 w-full rounded-md border border-archive-border px-2 py-1.5"
          value={tagsInput}
          onChange={(e) => setTagsInput(e.target.value)}
          placeholder={t('videoTagsHint')}
        />
      </label>
    );
  }

  async function addVideo(e: React.FormEvent) {
    e.preventDefault();
    if (!watchUrl.trim() || !titleBn.trim() || !titleEn.trim()) return;
    setAdding(true);
    setError(null);
    const tags = parseTagsComma(tagsInput);
    const body: Record<string, unknown> = {
      platform,
      watchUrl: watchUrl.trim(),
      publishedAt: publishedAt
        ? new Date(publishedAt).toISOString()
        : undefined,
      reviewStatus,
      translations: transPayload(),
      tags,
    };
    const sid = sourceId.trim();
    if (sid) body.sourceId = sid;
    const res = await adminFetch('admin/videos', {
      method: 'POST',
      body: JSON.stringify(body),
    });
    setAdding(false);
    if (!res.ok) {
      setError(await readApiError(res));
      return;
    }
    setWatchUrl('');
    setPublishedAt('');
    setSourceId('');
    setTagsInput('');
    setTitleBn('');
    setTitleEn('');
    setDescBn('');
    setDescEn('');
    void load();
  }

  async function saveEdit() {
    if (!editId) return;
    setSavingId(editId);
    setError(null);
    const res = await adminFetch(`admin/videos/${editId}`, {
      method: 'PATCH',
      body: JSON.stringify({
        platform,
        watchUrl: watchUrl.trim(),
        publishedAt: publishedAt
          ? new Date(publishedAt).toISOString()
          : null,
        reviewStatus,
        sourceId: sourceId.trim(),
        tags: parseTagsComma(tagsInput),
        translations: transPayload(),
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

  async function remove(row: VideoRow) {
    if (!window.confirm(t('confirmDeleteVideo'))) return;
    setError(null);
    const res = await adminFetch(`admin/videos/${row.id}`, {
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
        {t('videosTitle')}
      </h1>
      <p className="mb-6 text-sm text-archive-muted">{t('videosHint')}</p>
      {error && (
        <p className="mb-4 rounded-md border border-archive-border bg-archive-bg px-3 py-2 text-sm text-archive-fg">
          {error}
        </p>
      )}

      <form
        onSubmit={addVideo}
        className="mb-10 space-y-4 rounded-xl border border-archive-border bg-white p-4"
      >
        <p className="text-sm font-medium text-archive-fg">{t('videosAdd')}</p>
        <div className="flex flex-wrap gap-3">
          <label className="text-sm">
            <span className="text-archive-muted">{t('videoPlatform')}</span>
            <select
              className="mt-1 block rounded-md border border-archive-border px-2 py-1.5"
              value={platform}
              onChange={(e) =>
                setPlatform(e.target.value as 'YOUTUBE' | 'FACEBOOK')
              }
            >
              <option value="YOUTUBE">YouTube</option>
              <option value="FACEBOOK">Facebook</option>
            </select>
          </label>
          <label className="min-w-[200px] flex-1 text-sm">
            <span className="text-archive-muted">{t('videoWatchUrl')}</span>
            <input
              required
              className="mt-1 w-full rounded-md border border-archive-border px-2 py-1.5"
              value={watchUrl}
              onChange={(e) => setWatchUrl(e.target.value)}
              placeholder="https://..."
            />
          </label>
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
          {sourceSelect()}
          {tagsField()}
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="text-sm">
            <span className="text-archive-muted">{t('videoTitleBn')}</span>
            <input
              required
              className="mt-1 w-full rounded-md border border-archive-border px-2 py-1.5"
              value={titleBn}
              onChange={(e) => setTitleBn(e.target.value)}
            />
          </label>
          <label className="text-sm">
            <span className="text-archive-muted">{t('videoTitleEn')}</span>
            <input
              required
              className="mt-1 w-full rounded-md border border-archive-border px-2 py-1.5"
              value={titleEn}
              onChange={(e) => setTitleEn(e.target.value)}
            />
          </label>
          <label className="text-sm">
            <span className="text-archive-muted">{t('videoDescBn')}</span>
            <textarea
              rows={2}
              className="mt-1 w-full rounded-md border border-archive-border px-2 py-1.5"
              value={descBn}
              onChange={(e) => setDescBn(e.target.value)}
            />
          </label>
          <label className="text-sm">
            <span className="text-archive-muted">{t('videoDescEn')}</span>
            <textarea
              rows={2}
              className="mt-1 w-full rounded-md border border-archive-border px-2 py-1.5"
              value={descEn}
              onChange={(e) => setDescEn(e.target.value)}
            />
          </label>
        </div>
        <button
          type="submit"
          disabled={adding}
          className="rounded-md bg-archive-accent px-4 py-2 text-sm font-medium text-white disabled:opacity-50"
        >
          {adding ? t('loading') : t('videosAddSubmit')}
        </button>
      </form>

      {loading ? (
        <p className="text-sm text-archive-muted">{t('loading')}</p>
      ) : rows.length === 0 ? (
        <p className="text-sm text-archive-muted">{t('videosEmpty')}</p>
      ) : (
        <ul className="divide-y divide-archive-border rounded-xl border border-archive-border bg-white">
          {rows.map((row) => (
            <li key={row.id} className="px-4 py-4">
              {editId === row.id ? (
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-3">
                    <select
                      className="rounded-md border border-archive-border px-2 py-1.5 text-sm"
                      value={platform}
                      onChange={(e) =>
                        setPlatform(e.target.value as 'YOUTUBE' | 'FACEBOOK')
                      }
                    >
                      <option value="YOUTUBE">YouTube</option>
                      <option value="FACEBOOK">Facebook</option>
                    </select>
                    <input
                      className="min-w-[200px] flex-1 rounded-md border border-archive-border px-2 py-1.5 text-sm"
                      value={watchUrl}
                      onChange={(e) => setWatchUrl(e.target.value)}
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
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {sourceSelect()}
                    {tagsField()}
                  </div>
                  <div className="grid gap-2 sm:grid-cols-2">
                    <input
                      className="rounded-md border border-archive-border px-2 py-1.5 text-sm"
                      value={titleBn}
                      onChange={(e) => setTitleBn(e.target.value)}
                      placeholder="bn title"
                    />
                    <input
                      className="rounded-md border border-archive-border px-2 py-1.5 text-sm"
                      value={titleEn}
                      onChange={(e) => setTitleEn(e.target.value)}
                      placeholder="en title"
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
                    <p className="font-medium text-archive-fg">
                      {titleFor(row, 'en')} / {titleFor(row, 'bn')}
                    </p>
                    <p className="text-xs text-archive-muted">
                      {row.platform} · {row.reviewStatus}
                    </p>
                    <p className="truncate text-xs text-archive-muted">
                      {row.watchUrl}
                    </p>
                    {row.source ? (
                      <p className="text-xs text-archive-muted">
                        {t('source')}: {row.source.name}
                      </p>
                    ) : null}
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
