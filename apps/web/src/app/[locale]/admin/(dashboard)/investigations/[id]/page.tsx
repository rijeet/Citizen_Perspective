'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { useCallback, useEffect, useState } from 'react';
import { adminFetch, readApiError } from '@/lib/admin-api';
import MetadataFetchNotice, {
  applyMetadataToForm,
  type MetadataFetchResponse,
} from '@/components/admin/MetadataFetchNotice';

const STAGES = [
  'INCIDENT_OCCURRED',
  'INVESTIGATION_PROMISED',
  'COMMITTEE_FORMED',
  'INVESTIGATION_ONGOING',
  'REPORT_SUBMITTED',
  'ACTION_TAKEN',
  'CLOSED_NO_ACTION',
  'CLOSED_RESOLVED',
] as const;

const STATUSES = ['ON_TRACK', 'DELAYED', 'STALLED', 'RESOLVED'] as const;

type UpdateRow = {
  id: string;
  headlineEn: string;
  stage: string;
  status: string;
  createdAt: string;
};

type InvestigationDetail = {
  id: string;
  currentStage: string;
  currentStatus: string;
  translations: { locale: string; title: string }[];
  updates: UpdateRow[];
};

type Props = { params: Promise<{ id: string }> };

export default function AdminInvestigationDetailPage({ params }: Props) {
  const t = useTranslations('admin');
  const [investigationId, setInvestigationId] = useState('');
  const [investigation, setInvestigation] = useState<InvestigationDetail | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [fetching, setFetching] = useState(false);
  const [adding, setAdding] = useState(false);
  const [fetchHints, setFetchHints] = useState<string[]>([]);
  const [fetchStatus, setFetchStatus] = useState<
    'ok' | 'partial' | 'failed' | null
  >(null);

  const [sourceUrl, setSourceUrl] = useState('');
  const [sourceType, setSourceType] = useState<'YOUTUBE' | 'ARTICLE' | 'FACEBOOK'>('ARTICLE');
  const [headlineBn, setHeadlineBn] = useState('');
  const [headlineEn, setHeadlineEn] = useState('');
  const [thumbnailUrl, setThumbnailUrl] = useState('');
  const [publishedAt, setPublishedAt] = useState('');
  const [stage, setStage] = useState<(typeof STAGES)[number]>('INVESTIGATION_ONGOING');
  const [status, setStatus] = useState<(typeof STATUSES)[number]>('ON_TRACK');

  const load = useCallback(async (id: string) => {
    setLoading(true);
    const res = await adminFetch(`admin/gov-investigations/${id}`);
    setLoading(false);
    if (!res.ok) {
      setError(await readApiError(res));
      return;
    }
    setInvestigation((await res.json()) as InvestigationDetail);
  }, []);

  useEffect(() => {
    void params.then((p) => {
      setInvestigationId(p.id);
      void load(p.id);
    });
  }, [params, load]);

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
        setThumbnailUrl,
        setPublishedAt,
      },
      headlineEn,
    );
  }

  async function addUpdate(e: React.FormEvent) {
    e.preventDefault();
    if (!investigationId || !sourceUrl.trim() || !headlineBn.trim() || !headlineEn.trim()) return;
    setAdding(true);
    const res = await adminFetch(`admin/gov-investigations/${investigationId}/updates`, {
      method: 'POST',
      body: JSON.stringify({
        sourceUrl: sourceUrl.trim(),
        sourceType,
        headlineBn: headlineBn.trim(),
        headlineEn: headlineEn.trim(),
        thumbnailUrl: thumbnailUrl.trim() || undefined,
        publishedAt: publishedAt ? new Date(publishedAt).toISOString() : undefined,
        stage,
        status,
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
    void load(investigationId);
  }

  if (loading || !investigation) {
    return <p className="text-sm text-archive-muted">{t('loading')}</p>;
  }

  return (
    <div className="space-y-8">
      <Link href="/admin/investigations" className="text-sm text-archive-accent underline">
        ← {t('investigationsTitle')}
      </Link>
      <h1 className="text-xl font-semibold">
        {investigation.translations.find((x) => x.locale === 'en')?.title}
      </h1>
      {error ? (
        <p className="rounded-md border border-archive-border bg-archive-bg px-3 py-2 text-sm">
          {error}
        </p>
      ) : null}
      <form onSubmit={addUpdate} className="space-y-3 rounded-xl border border-archive-border bg-white p-4">
        <p className="text-sm font-medium">{t('investigationUpdateAdd')}</p>
        <MetadataFetchNotice
          hints={fetchHints}
          fetchStatus={fetchStatus ?? undefined}
        />
        <div className="flex gap-2">
          <input
            className="min-w-0 flex-1 rounded-md border border-archive-border px-2 py-1.5 text-sm"
            value={sourceUrl}
            onChange={(e) => setSourceUrl(e.target.value)}
            onBlur={() => void fetchMetadata()}
            placeholder={t('newsItemUrl')}
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
            value={stage}
            onChange={(e) => setStage(e.target.value as (typeof STAGES)[number])}
          >
            {STAGES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          <select
            className="rounded-md border border-archive-border px-2 py-1.5 text-sm"
            value={status}
            onChange={(e) => setStatus(e.target.value as (typeof STATUSES)[number])}
          >
            {STATUSES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
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
        </div>
        <button
          type="submit"
          disabled={adding}
          className="rounded-md bg-archive-accent px-4 py-2 text-sm text-white disabled:opacity-50"
        >
          {adding ? t('loading') : t('investigationUpdateAddSubmit')}
        </button>
      </form>
      <ul className="divide-y divide-archive-border rounded-xl border border-archive-border bg-white">
        {investigation.updates.map((u) => (
          <li key={u.id} className="px-4 py-3">
            <p className="font-medium">{u.headlineEn}</p>
            <p className="text-xs text-archive-muted">
              {u.stage} · {u.status}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
