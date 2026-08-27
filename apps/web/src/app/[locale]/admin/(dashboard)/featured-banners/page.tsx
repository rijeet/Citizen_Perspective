'use client';

import { useTranslations } from 'next-intl';
import { useCallback, useEffect, useState } from 'react';
import { adminFetch, readApiError } from '@/lib/admin-api';

type BannerRow = {
  id: string;
  imageUrl: string;
  captionBn: string;
  captionEn: string;
  sectionType: string;
  createdAt: string;
};

export default function AdminFeaturedBannersPage() {
  const t = useTranslations('admin');
  const [rows, setRows] = useState<BannerRow[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState('');
  const [captionBn, setCaptionBn] = useState('');
  const [captionEn, setCaptionEn] = useState('');
  const [sectionType, setSectionType] = useState('Breaking');
  const [adding, setAdding] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    const res = await adminFetch('admin/featured-banners');
    setLoading(false);
    if (!res.ok) {
      setError(await readApiError(res));
      return;
    }
    setRows((await res.json()) as BannerRow[]);
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  async function addBanner(e: React.FormEvent) {
    e.preventDefault();
    if (!imageUrl.trim() || !captionBn.trim() || !captionEn.trim()) return;
    setAdding(true);
    const res = await adminFetch('admin/featured-banners', {
      method: 'POST',
      body: JSON.stringify({
        imageUrl: imageUrl.trim(),
        captionBn: captionBn.trim(),
        captionEn: captionEn.trim(),
        sectionType: sectionType.trim(),
      }),
    });
    setAdding(false);
    if (!res.ok) {
      setError(await readApiError(res));
      return;
    }
    setImageUrl('');
    setCaptionBn('');
    setCaptionEn('');
    void load();
  }

  async function remove(id: string) {
    if (!window.confirm(t('confirmDeleteBanner'))) return;
    const res = await adminFetch(`admin/featured-banners/${id}`, { method: 'DELETE' });
    if (!res.ok) {
      setError(await readApiError(res));
      return;
    }
    void load();
  }

  return (
    <div>
      <h1 className="mb-6 text-xl font-semibold">{t('bannersTitle')}</h1>
      {error ? (
        <p className="mb-4 rounded-md border border-archive-border bg-archive-bg px-3 py-2 text-sm">
          {error}
        </p>
      ) : null}
      <form
        onSubmit={addBanner}
        className="mb-8 space-y-3 rounded-xl border border-archive-border bg-white p-4"
      >
        <p className="text-sm font-medium">{t('bannerAdd')}</p>
        <div className="grid gap-3 sm:grid-cols-2">
          <input
            placeholder={t('coverUrl')}
            className="rounded-md border border-archive-border px-2 py-1.5 text-sm sm:col-span-2"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required
          />
          <input
            placeholder={t('titleBn')}
            className="rounded-md border border-archive-border px-2 py-1.5 text-sm"
            value={captionBn}
            onChange={(e) => setCaptionBn(e.target.value)}
            required
          />
          <input
            placeholder={t('titleEn')}
            className="rounded-md border border-archive-border px-2 py-1.5 text-sm"
            value={captionEn}
            onChange={(e) => setCaptionEn(e.target.value)}
            required
          />
          <input
            placeholder={t('bannerSectionType')}
            className="rounded-md border border-archive-border px-2 py-1.5 text-sm"
            value={sectionType}
            onChange={(e) => setSectionType(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          disabled={adding}
          className="rounded-md bg-archive-accent px-4 py-2 text-sm text-white disabled:opacity-50"
        >
          {adding ? t('loading') : t('bannerAddSubmit')}
        </button>
      </form>
      {loading ? (
        <p className="text-sm text-archive-muted">{t('loading')}</p>
      ) : (
        <ul className="divide-y divide-archive-border rounded-xl border border-archive-border bg-white">
          {rows.map((row) => (
            <li key={row.id} className="flex items-center justify-between px-4 py-3">
              <div>
                <p className="font-medium">{row.captionEn}</p>
                <p className="text-xs text-archive-muted">
                  {row.sectionType} · {row.createdAt.slice(0, 10)}
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
