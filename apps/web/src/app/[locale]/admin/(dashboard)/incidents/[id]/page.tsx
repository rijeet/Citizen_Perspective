'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { useCallback, useEffect, useState } from 'react';
import { adminFetch, readApiError } from '@/lib/admin-api';
import MetadataFetchNotice, {
  applyMetadataToForm,
  type MetadataFetchResponse,
} from '@/components/admin/MetadataFetchNotice';

type NewsItemRow = {
  id: string;
  sourceUrl: string;
  sourceType: string;
  headlineBn: string;
  headlineEn: string;
  descriptionBn: string | null;
  descriptionEn: string | null;
  thumbnailUrl: string | null;
  publishedAt: string | null;
  stage: string;
  status: string | null;
  createdAt: string;
};

type IncidentDetail = {
  id: string;
  slug: string;
  currentStage: string;
  currentStatus: string | null;
  translations: { locale: string; title: string }[];
  newsItems: NewsItemRow[];
};

type Props = { params: Promise<{ id: string }> };

export default function AdminIncidentDetailPage({ params }: Props) {
  const t = useTranslations('admin');
  const [incidentId, setIncidentId] = useState('');
  const [incident, setIncident] = useState<IncidentDetail | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [fetching, setFetching] = useState(false);
  const [adding, setAdding] = useState(false);
  const [stageSuggestions, setStageSuggestions] = useState<string[]>([]);

  const [fetchHints, setFetchHints] = useState<string[]>([]);
  const [fetchStatus, setFetchStatus] = useState<
    'ok' | 'partial' | 'failed' | null
  >(null);

  const [sourceUrl, setSourceUrl] = useState('');
  const [sourceType, setSourceType] = useState<'YOUTUBE' | 'ARTICLE' | 'FACEBOOK'>('ARTICLE');
  const [headlineBn, setHeadlineBn] = useState('');
  const [headlineEn, setHeadlineEn] = useState('');
  const [descriptionBn, setDescriptionBn] = useState('');
  const [descriptionEn, setDescriptionEn] = useState('');
  const [descriptionContentType, setDescriptionContentType] = useState<
    'MARKDOWN' | 'HTML'
  >('MARKDOWN');
  const [thumbnailUrl, setThumbnailUrl] = useState('');
  const [publishedAt, setPublishedAt] = useState('');
  const [stage, setStage] = useState('');
  const [status, setStatus] = useState('');

  const load = useCallback(async (id: string) => {
    setLoading(true);
    const res = await adminFetch(`admin/incidents/${id}`);
    setLoading(false);
    if (!res.ok) {
      setError(await readApiError(res));
      return;
    }
    setIncident((await res.json()) as IncidentDetail);
  }, []);

  useEffect(() => {
    void params.then((p) => {
      setIncidentId(p.id);
      void load(p.id);
    });
  }, [params, load]);

  useEffect(() => {
    void (async () => {
      const res = await adminFetch('admin/incidents/stages/suggest');
      if (res.ok) {
        const data = (await res.json()) as { stage: string }[];
        setStageSuggestions(data.map((x) => x.stage));
      }
    })();
  }, []);

  async function fetchMetadata() {
    if (!sourceUrl.trim()) return;
    setFetching(true);
    setError(null);
    const res = await adminFetch('admin/fetch-metadata', {
      method: 'POST',
      body: JSON.stringify({ url: sourceUrl.trim() }),
    });
    setFetching(false);
    if (!res.ok) {
      setFetchStatus('failed');
      setFetchHints(['fetch_error', 'manual_fallback']);
      setError(await readApiError(res));
      return;
    }
    const data = (await res.json()) as MetadataFetchResponse;
    setFetchStatus(data.fetchStatus);
    setFetchHints(data.hints);
    applyMetadataToForm(
      data,
      {
        setSourceType,
        setHeadlineBn,
        setHeadlineEn,
        setDescriptionBn,
        setDescriptionEn,
        setThumbnailUrl,
        setPublishedAt,
      },
      headlineEn,
      descriptionEn,
    );
  }

  async function addNewsItem(e: React.FormEvent) {
    e.preventDefault();
    if (!incidentId || !sourceUrl.trim() || !headlineBn.trim() || !headlineEn.trim() || !stage.trim())
      return;
    setAdding(true);
    setError(null);
    const res = await adminFetch(`admin/incidents/${incidentId}/news-items`, {
      method: 'POST',
      body: JSON.stringify({
        sourceUrl: sourceUrl.trim(),
        sourceType,
        headlineBn: headlineBn.trim(),
        headlineEn: headlineEn.trim(),
        descriptionBn: descriptionBn.trim() || undefined,
        descriptionEn: descriptionEn.trim() || undefined,
        descriptionContentType,
        thumbnailUrl: thumbnailUrl.trim() || undefined,
        publishedAt: publishedAt ? new Date(publishedAt).toISOString() : undefined,
        stage: stage.trim(),
        status: status.trim() || undefined,
      }),
    });
    setAdding(false);
    if (!res.ok) {
      setError(await readApiError(res));
      return;
    }
    setSourceUrl('');
    setHeadlineBn('');
    setHeadlineEn('');
    setDescriptionBn('');
    setDescriptionEn('');
    setDescriptionContentType('MARKDOWN');
    setThumbnailUrl('');
    setPublishedAt('');
    setStage('');
    setStatus('');
    void load(incidentId);
  }

  if (loading || !incident) {
    return <p className="text-sm text-archive-muted">{t('loading')}</p>;
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3">
        <Link href="/admin/incidents" className="text-sm text-archive-accent underline">
          ← {t('incidentsTitle')}
        </Link>
      </div>
      <header>
        <h1 className="text-xl font-semibold">
          {incident.translations.find((x) => x.locale === 'en')?.title}
        </h1>
        <p className="text-sm text-archive-muted">
          {t('currentStage')}: {incident.currentStage || '—'} · {incident.currentStatus || '—'}
        </p>
      </header>
      {error ? (
        <p className="rounded-md border border-archive-border bg-archive-bg px-3 py-2 text-sm">
          {error}
        </p>
      ) : null}
      <form
        onSubmit={addNewsItem}
        className="space-y-3 rounded-xl border border-archive-border bg-white p-4"
      >
        <p className="text-sm font-medium">{t('newsItemAdd')}</p>
        <MetadataFetchNotice
          hints={fetchHints}
          fetchStatus={fetchStatus ?? undefined}
        />
        <div className="flex gap-2">
          <input
            placeholder={t('newsItemUrl')}
            className="min-w-0 flex-1 rounded-md border border-archive-border px-2 py-1.5 text-sm"
            value={sourceUrl}
            onChange={(e) => setSourceUrl(e.target.value)}
            onBlur={() => void fetchMetadata()}
            required
          />
          <button
            type="button"
            disabled={fetching}
            onClick={() => void fetchMetadata()}
            className="rounded-md border border-archive-border px-3 py-1.5 text-sm"
          >
            {fetching ? t('loading') : t('fetchMetadata')}
          </button>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <select
            className="rounded-md border border-archive-border px-2 py-1.5 text-sm"
            value={sourceType}
            onChange={(e) =>
              setSourceType(e.target.value as 'YOUTUBE' | 'ARTICLE' | 'FACEBOOK')
            }
          >
            <option value="ARTICLE">Article</option>
            <option value="YOUTUBE">YouTube</option>
            <option value="FACEBOOK">Facebook</option>
          </select>
          <input
            list="stage-suggestions"
            placeholder={t('newsItemStage')}
            className="rounded-md border border-archive-border px-2 py-1.5 text-sm"
            value={stage}
            onChange={(e) => setStage(e.target.value)}
            required
          />
          <datalist id="stage-suggestions">
            {stageSuggestions.map((s) => (
              <option key={s} value={s} />
            ))}
          </datalist>
          <input
            placeholder={t('newsItemStatus')}
            className="rounded-md border border-archive-border px-2 py-1.5 text-sm"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
          <input
            placeholder={t('titleBn')}
            className="rounded-md border border-archive-border px-2 py-1.5 text-sm"
            value={headlineBn}
            onChange={(e) => setHeadlineBn(e.target.value)}
            required
          />
          <input
            placeholder={t('titleEn')}
            className="rounded-md border border-archive-border px-2 py-1.5 text-sm"
            value={headlineEn}
            onChange={(e) => setHeadlineEn(e.target.value)}
            required
          />
          <label className="text-sm sm:col-span-2">
            <span className="text-archive-muted">{t('contentType')}</span>
            <select
              className="mt-1 w-full rounded-md border border-archive-border px-2 py-1.5 text-sm"
              value={descriptionContentType}
              onChange={(e) =>
                setDescriptionContentType(e.target.value as 'MARKDOWN' | 'HTML')
              }
            >
              <option value="MARKDOWN">{t('contentMarkdown')}</option>
              <option value="HTML">{t('contentHtml')}</option>
            </select>
            {descriptionContentType === 'HTML' ? (
              <p className="mt-1 text-xs text-archive-muted">
                {t('htmlEditorHint')} {t('newsItemDescHtmlHint')}
              </p>
            ) : null}
          </label>
          <label className="text-sm sm:col-span-2">
            <span className="text-archive-muted">{t('newsItemDescBn')}</span>
            <textarea
              rows={8}
              placeholder={
                descriptionContentType === 'HTML'
                  ? t('newsItemDescHtmlPlaceholder')
                  : t('newsItemDescPlaceholder')
              }
              className="mt-1 w-full rounded-md border border-archive-border px-2 py-1.5 font-mono text-sm"
              value={descriptionBn}
              onChange={(e) => setDescriptionBn(e.target.value)}
            />
          </label>
          <label className="text-sm sm:col-span-2">
            <span className="text-archive-muted">{t('newsItemDescEn')}</span>
            <textarea
              rows={8}
              placeholder={
                descriptionContentType === 'HTML'
                  ? t('newsItemDescHtmlPlaceholder')
                  : t('newsItemDescPlaceholder')
              }
              className="mt-1 w-full rounded-md border border-archive-border px-2 py-1.5 font-mono text-sm"
              value={descriptionEn}
              onChange={(e) => setDescriptionEn(e.target.value)}
            />
          </label>
          <input
            placeholder={t('coverUrl')}
            className="rounded-md border border-archive-border px-2 py-1.5 text-sm sm:col-span-2"
            value={thumbnailUrl}
            onChange={(e) => setThumbnailUrl(e.target.value)}
          />
          <input
            type="datetime-local"
            className="rounded-md border border-archive-border px-2 py-1.5 text-sm"
            value={publishedAt}
            onChange={(e) => setPublishedAt(e.target.value)}
          />
        </div>
        <button
          type="submit"
          disabled={adding}
          className="rounded-md bg-archive-accent px-4 py-2 text-sm text-white disabled:opacity-50"
        >
          {adding ? t('loading') : t('newsItemAddSubmit')}
        </button>
      </form>
      <ul className="divide-y divide-archive-border rounded-xl border border-archive-border bg-white">
        {incident.newsItems.map((item) => (
          <li key={item.id} className="px-4 py-3">
            <p className="font-medium">{item.headlineEn}</p>
            <p className="text-xs text-archive-muted">
              {item.stage} · {item.sourceType} · {item.createdAt.slice(0, 10)}
              {item.descriptionEn || item.descriptionBn ? ' · has content ref' : ''}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
