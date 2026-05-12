'use client';

import { useTranslations } from 'next-intl';
import { useCallback, useEffect, useState } from 'react';
import { adminFetch, readApiError } from '@/lib/admin-api';

type Trans = { locale: string; title: string; bodyMd: string };

type TimelineRow = {
  id: string;
  eventAt: string;
  reviewStatus: string;
  translations: Trans[];
};

export default function AdminTimelinePage() {
  const t = useTranslations('admin');
  const [rows, setRows] = useState<TimelineRow[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const [eventAt, setEventAt] = useState('');
  const [reviewStatus, setReviewStatus] = useState<'DRAFT' | 'PUBLISHED'>(
    'PUBLISHED',
  );
  const [titleBn, setTitleBn] = useState('');
  const [titleEn, setTitleEn] = useState('');
  const [bodyBn, setBodyBn] = useState('');
  const [bodyEn, setBodyEn] = useState('');
  const [adding, setAdding] = useState(false);

  const [editId, setEditId] = useState<string | null>(null);
  const [savingId, setSavingId] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    const res = await adminFetch('admin/timeline-events');
    setLoading(false);
    if (!res.ok) {
      setError(`${t('loadError')} ${await readApiError(res)}`);
      setRows([]);
      return;
    }
    setRows((await res.json()) as TimelineRow[]);
  }, [t]);

  useEffect(() => {
    void load();
  }, [load]);

  function startEdit(row: TimelineRow) {
    setEditId(row.id);
    setEventAt(row.eventAt.slice(0, 16));
    setReviewStatus(
      row.reviewStatus === 'DRAFT' ? 'DRAFT' : 'PUBLISHED',
    );
    const bn = row.translations.find((x) => x.locale === 'bn');
    const en = row.translations.find((x) => x.locale === 'en');
    setTitleBn(bn?.title ?? '');
    setTitleEn(en?.title ?? '');
    setBodyBn(bn?.bodyMd ?? '');
    setBodyEn(en?.bodyMd ?? '');
  }

  function cancelEdit() {
    setEditId(null);
  }

  function transPayload() {
    return [
      {
        locale: 'bn' as const,
        title: titleBn.trim(),
        bodyMd: bodyBn.trim(),
      },
      {
        locale: 'en' as const,
        title: titleEn.trim(),
        bodyMd: bodyEn.trim(),
      },
    ];
  }

  async function addEvent(e: React.FormEvent) {
    e.preventDefault();
    if (
      !eventAt ||
      !titleBn.trim() ||
      !titleEn.trim() ||
      !bodyBn.trim() ||
      !bodyEn.trim()
    )
      return;
    setAdding(true);
    setError(null);
    const res = await adminFetch('admin/timeline-events', {
      method: 'POST',
      body: JSON.stringify({
        eventAt: new Date(eventAt).toISOString(),
        reviewStatus,
        translations: transPayload(),
      }),
    });
    setAdding(false);
    if (!res.ok) {
      setError(await readApiError(res));
      return;
    }
    setEventAt('');
    setTitleBn('');
    setTitleEn('');
    setBodyBn('');
    setBodyEn('');
    void load();
  }

  async function saveEdit() {
    if (!editId) return;
    if (!bodyBn.trim() || !bodyEn.trim()) return;
    setSavingId(editId);
    setError(null);
    const res = await adminFetch(`admin/timeline-events/${editId}`, {
      method: 'PATCH',
      body: JSON.stringify({
        eventAt: new Date(eventAt).toISOString(),
        reviewStatus,
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

  async function remove(row: TimelineRow) {
    if (!window.confirm(t('confirmDeleteTimeline'))) return;
    setError(null);
    const res = await adminFetch(`admin/timeline-events/${row.id}`, {
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
        {t('timelineAdminTitle')}
      </h1>
      <p className="mb-6 text-sm text-archive-muted">{t('timelineAdminHint')}</p>
      {error && (
        <p className="mb-4 rounded-md border border-archive-border bg-archive-bg px-3 py-2 text-sm text-archive-fg">
          {error}
        </p>
      )}

      <form
        onSubmit={addEvent}
        className="mb-10 space-y-4 rounded-xl border border-archive-border bg-white p-4"
      >
        <p className="text-sm font-medium text-archive-fg">{t('timelineAdd')}</p>
        <div className="flex flex-wrap gap-3">
          <label className="text-sm">
            <span className="text-archive-muted">{t('timelineEventAt')}</span>
            <input
              required
              type="datetime-local"
              className="mt-1 block rounded-md border border-archive-border px-2 py-1.5"
              value={eventAt}
              onChange={(e) => setEventAt(e.target.value)}
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
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="text-sm">
            <span className="text-archive-muted">{t('timelineTitleBn')}</span>
            <input
              required
              className="mt-1 w-full rounded-md border border-archive-border px-2 py-1.5"
              value={titleBn}
              onChange={(e) => setTitleBn(e.target.value)}
            />
          </label>
          <label className="text-sm">
            <span className="text-archive-muted">{t('timelineTitleEn')}</span>
            <input
              required
              className="mt-1 w-full rounded-md border border-archive-border px-2 py-1.5"
              value={titleEn}
              onChange={(e) => setTitleEn(e.target.value)}
            />
          </label>
          <label className="text-sm sm:col-span-2">
            <span className="text-archive-muted">{t('timelineBodyBn')}</span>
            <textarea
              rows={4}
              className="mt-1 w-full rounded-md border border-archive-border px-2 py-1.5 font-mono text-sm"
              value={bodyBn}
              onChange={(e) => setBodyBn(e.target.value)}
            />
          </label>
          <label className="text-sm sm:col-span-2">
            <span className="text-archive-muted">{t('timelineBodyEn')}</span>
            <textarea
              rows={4}
              className="mt-1 w-full rounded-md border border-archive-border px-2 py-1.5 font-mono text-sm"
              value={bodyEn}
              onChange={(e) => setBodyEn(e.target.value)}
            />
          </label>
        </div>
        <button
          type="submit"
          disabled={adding}
          className="rounded-md bg-archive-accent px-4 py-2 text-sm font-medium text-white disabled:opacity-50"
        >
          {adding ? t('loading') : t('timelineAddSubmit')}
        </button>
      </form>

      {loading ? (
        <p className="text-sm text-archive-muted">{t('loading')}</p>
      ) : rows.length === 0 ? (
        <p className="text-sm text-archive-muted">{t('timelineEmpty')}</p>
      ) : (
        <ul className="divide-y divide-archive-border rounded-xl border border-archive-border bg-white">
          {rows.map((row) => (
            <li key={row.id} className="px-4 py-4">
              {editId === row.id ? (
                <div className="space-y-3">
                  <input
                    type="datetime-local"
                    className="rounded-md border border-archive-border px-2 py-1.5 text-sm"
                    value={eventAt}
                    onChange={(e) => setEventAt(e.target.value)}
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
                  <textarea
                    rows={3}
                    className="w-full rounded-md border border-archive-border px-2 py-1.5 font-mono text-sm"
                    value={bodyBn}
                    onChange={(e) => setBodyBn(e.target.value)}
                  />
                  <textarea
                    rows={3}
                    className="w-full rounded-md border border-archive-border px-2 py-1.5 font-mono text-sm"
                    value={bodyEn}
                    onChange={(e) => setBodyEn(e.target.value)}
                  />
                  <div className="flex gap-2">
                    <button
                      type="button"
                      disabled={savingId === row.id}
                      onClick={() => void saveEdit()}
                      className="rounded-md bg-archive-accent px-3 py-1.5 text-sm text-white disabled:opacity-50"
                    >
                      {savingId === row.id ? t('loading') : t('editSource')}
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
                    <p className="font-mono text-sm text-archive-muted">
                      {row.eventAt.slice(0, 10)}
                    </p>
                    <p className="font-medium text-archive-fg">
                      {row.translations.find((x) => x.locale === 'en')?.title}
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
