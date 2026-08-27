'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { useCallback, useEffect, useState } from 'react';
import { adminFetch, readApiError } from '@/lib/admin-api';

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

type InvestigationRow = {
  id: string;
  currentStage: string;
  currentStatus: string;
  translations: { locale: string; title: string }[];
  _count?: { updates: number };
};

export default function AdminInvestigationsPage() {
  const t = useTranslations('admin');
  const [rows, setRows] = useState<InvestigationRow[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [titleBn, setTitleBn] = useState('');
  const [titleEn, setTitleEn] = useState('');
  const [adding, setAdding] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    const res = await adminFetch('admin/gov-investigations');
    setLoading(false);
    if (!res.ok) {
      setError(await readApiError(res));
      return;
    }
    setRows((await res.json()) as InvestigationRow[]);
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  async function addInvestigation(e: React.FormEvent) {
    e.preventDefault();
    if (!titleBn.trim() || !titleEn.trim()) return;
    setAdding(true);
    const res = await adminFetch('admin/gov-investigations', {
      method: 'POST',
      body: JSON.stringify({
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
    setTitleBn('');
    setTitleEn('');
    void load();
  }

  return (
    <div>
      <h1 className="mb-6 text-xl font-semibold">{t('investigationsTitle')}</h1>
      {error ? (
        <p className="mb-4 rounded-md border border-archive-border bg-archive-bg px-3 py-2 text-sm">
          {error}
        </p>
      ) : null}
      <form
        onSubmit={addInvestigation}
        className="mb-8 space-y-3 rounded-xl border border-archive-border bg-white p-4"
      >
        <p className="text-sm font-medium">{t('investigationAdd')}</p>
        <div className="grid gap-3 sm:grid-cols-2">
          <input
            placeholder={t('titleBn')}
            className="rounded-md border border-archive-border px-2 py-1.5 text-sm"
            value={titleBn}
            onChange={(e) => setTitleBn(e.target.value)}
            required
          />
          <input
            placeholder={t('titleEn')}
            className="rounded-md border border-archive-border px-2 py-1.5 text-sm"
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
          {adding ? t('loading') : t('investigationAddSubmit')}
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
                  {row.currentStage} · {row._count?.updates ?? 0} updates
                </p>
              </div>
              <Link
                href={`/admin/investigations/${row.id}`}
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

export { STAGES, STATUSES };
