'use client';

import { useTranslations } from 'next-intl';
import { Link, useRouter } from '@/i18n/navigation';
import { useCallback, useEffect, useState } from 'react';
import { adminFetch, readApiError } from '@/lib/admin-api';

type SourceOpt = { id: string; name: string };

type Trans = {
  locale: 'bn' | 'en';
  title: string;
  description: string;
  bodyMd: string;
  seoTitle: string;
  seoDescription: string;
};

function emptyTrans(locale: 'bn' | 'en'): Trans {
  return {
    locale,
    title: '',
    description: '',
    bodyMd: '',
    seoTitle: '',
    seoDescription: '',
  };
}

type Props = {
  mode: 'create' | 'edit';
  editSlug?: string;
  /** Prefill category on create (e.g. `News` from /admin/articles/new?category=News) */
  defaultCategory?: string;
};

export default function ArticleForm({
  mode,
  editSlug,
  defaultCategory,
}: Props) {
  const t = useTranslations('admin');
  const router = useRouter();
  const [sources, setSources] = useState<SourceOpt[]>([]);
  const [slug, setSlug] = useState('');
  const [sourceId, setSourceId] = useState('');
  const [category, setCategory] = useState(defaultCategory ?? '');
  const [tagsInput, setTagsInput] = useState('');
  const [coverUrl, setCoverUrl] = useState('');
  const [publishedAt, setPublishedAt] = useState('');
  const [reviewStatus, setReviewStatus] = useState<'DRAFT' | 'PUBLISHED'>(
    'PUBLISHED',
  );
  const [translations, setTranslations] = useState<Trans[]>([
    emptyTrans('bn'),
    emptyTrans('en'),
  ]);
  const [loading, setLoading] = useState(mode === 'edit');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const setTrans = useCallback(
    (locale: 'bn' | 'en', field: keyof Trans, value: string) => {
      setTranslations((prev) =>
        prev.map((row) =>
          row.locale === locale ? { ...row, [field]: value } : row,
        ),
      );
    },
    [],
  );

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const res = await adminFetch('admin/sources');
      if (!res.ok || cancelled) return;
      const data = (await res.json()) as {
        id: string;
        name: string;
      }[];
      if (!cancelled) setSources(data);
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (mode !== 'edit' || !editSlug) return;
    let cancelled = false;
    (async () => {
      setLoading(true);
      const res = await adminFetch(
        `admin/articles/${encodeURIComponent(editSlug)}`,
      );
      if (cancelled) return;
      if (!res.ok) {
        setError(await readApiError(res));
        setLoading(false);
        return;
      }
      const a = (await res.json()) as {
        slug: string;
        sourceId: string;
        category: string | null;
        tags: string[];
        coverUrl: string | null;
        publishedAt: string | null;
        reviewStatus: string;
        translations: {
          locale: string;
          title: string;
          description: string | null;
          bodyMd: string;
          seoTitle: string | null;
          seoDescription: string | null;
        }[];
      };
      setSlug(a.slug);
      setSourceId(a.sourceId);
      setCategory(a.category ?? '');
      setTagsInput(a.tags?.length ? a.tags.join(', ') : '');
      setCoverUrl(a.coverUrl ?? '');
      setPublishedAt(
        a.publishedAt ? a.publishedAt.slice(0, 16) : '',
      );
      setReviewStatus(
        a.reviewStatus === 'DRAFT' ? 'DRAFT' : 'PUBLISHED',
      );
      const bn =
        a.translations.find((x) => x.locale === 'bn') ??
        ({
          locale: 'bn',
          title: '',
          description: '',
          bodyMd: '',
          seoTitle: '',
          seoDescription: '',
        } as const);
      const en =
        a.translations.find((x) => x.locale === 'en') ??
        ({
          locale: 'en',
          title: '',
          description: '',
          bodyMd: '',
          seoTitle: '',
          seoDescription: '',
        } as const);
      setTranslations([
        {
          locale: 'bn',
          title: bn.title,
          description: bn.description ?? '',
          bodyMd: bn.bodyMd,
          seoTitle: bn.seoTitle ?? '',
          seoDescription: bn.seoDescription ?? '',
        },
        {
          locale: 'en',
          title: en.title,
          description: en.description ?? '',
          bodyMd: en.bodyMd,
          seoTitle: en.seoTitle ?? '',
          seoDescription: en.seoDescription ?? '',
        },
      ]);
      setLoading(false);
    })();
    return () => {
      cancelled = true;
    };
  }, [mode, editSlug]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError(null);
    const translationsPayload = translations.map((tr) => ({
      locale: tr.locale,
      title: tr.title,
      description: tr.description || undefined,
      bodyMd: tr.bodyMd,
      seoTitle: tr.seoTitle || undefined,
      seoDescription: tr.seoDescription || undefined,
    }));
    const tags = tagsInput
      .split(',')
      .map((x) => x.trim())
      .filter(Boolean);
    let res: Response;
    if (mode === 'create') {
      res = await adminFetch('admin/articles', {
        method: 'POST',
        body: JSON.stringify({
          slug,
          sourceId,
          category: category || undefined,
          coverUrl: coverUrl || undefined,
          publishedAt: publishedAt
            ? new Date(publishedAt).toISOString()
            : undefined,
          reviewStatus,
          translations: translationsPayload,
          tags,
        }),
      });
    } else {
      res = await adminFetch(
        `admin/articles/${encodeURIComponent(editSlug!)}`,
        {
          method: 'PATCH',
          body: JSON.stringify({
            sourceId,
            category: category ? category : null,
            coverUrl: coverUrl ? coverUrl : null,
            publishedAt: publishedAt
              ? new Date(publishedAt).toISOString()
              : null,
            reviewStatus,
            translations: translationsPayload,
            tags,
          }),
        },
      );
    }
    setSaving(false);
    if (!res.ok) {
      setError(await readApiError(res));
      return;
    }
    router.push('/admin/articles');
  }

  if (loading) {
    return <p className="text-sm text-archive-muted">{t('loading')}</p>;
  }

  const row = (loc: 'bn' | 'en', labels: { title: string; desc: string; body: string; st: string; sd: string }) => {
    const tr = translations.find((x) => x.locale === loc)!;
    return (
      <fieldset
        key={loc}
        className="space-y-3 rounded-lg border border-archive-border bg-archive-bg p-4"
      >
        <legend className="px-1 text-sm font-semibold uppercase tracking-wide text-archive-muted">
          {loc}
        </legend>
        <label className="block text-sm">
          <span className="text-archive-muted">{labels.title}</span>
          <input
            className="mt-1 w-full rounded-md border border-archive-border bg-white px-3 py-2"
            value={tr.title}
            onChange={(e) => setTrans(loc, 'title', e.target.value)}
            required
          />
        </label>
        <label className="block text-sm">
          <span className="text-archive-muted">{labels.desc}</span>
          <input
            className="mt-1 w-full rounded-md border border-archive-border bg-white px-3 py-2"
            value={tr.description}
            onChange={(e) => setTrans(loc, 'description', e.target.value)}
          />
        </label>
        <label className="block text-sm">
          <span className="text-archive-muted">{labels.body}</span>
          <textarea
            className="mt-1 min-h-[160px] w-full rounded-md border border-archive-border bg-white px-3 py-2 font-mono text-sm"
            value={tr.bodyMd}
            onChange={(e) => setTrans(loc, 'bodyMd', e.target.value)}
            required
          />
        </label>
        <label className="block text-sm">
          <span className="text-archive-muted">{labels.st}</span>
          <input
            className="mt-1 w-full rounded-md border border-archive-border bg-white px-3 py-2"
            value={tr.seoTitle}
            onChange={(e) => setTrans(loc, 'seoTitle', e.target.value)}
          />
        </label>
        <label className="block text-sm">
          <span className="text-archive-muted">{labels.sd}</span>
          <input
            className="mt-1 w-full rounded-md border border-archive-border bg-white px-3 py-2"
            value={tr.seoDescription}
            onChange={(e) => setTrans(loc, 'seoDescription', e.target.value)}
          />
        </label>
      </fieldset>
    );
  };

  return (
    <form onSubmit={onSubmit} className="max-w-3xl space-y-6">
      {error && (
        <p className="rounded-md border border-archive-border bg-white px-3 py-2 text-sm text-red-700">
          {error}
        </p>
      )}
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm sm:col-span-2">
          <span className="text-archive-muted">{t('slug')}</span>
          <input
            className="mt-1 w-full rounded-md border border-archive-border bg-white px-3 py-2"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            required
            disabled={mode === 'edit'}
          />
        </label>
        <label className="block text-sm sm:col-span-2">
          <span className="text-archive-muted">{t('source')}</span>
          <select
            className="mt-1 w-full rounded-md border border-archive-border bg-white px-3 py-2"
            value={sourceId}
            onChange={(e) => setSourceId(e.target.value)}
            required
          >
            <option value="">—</option>
            {sources.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm">
          <span className="text-archive-muted">{t('category')}</span>
          <input
            className="mt-1 w-full rounded-md border border-archive-border bg-white px-3 py-2"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </label>
        <label className="block text-sm">
          <span className="text-archive-muted">{t('status')}</span>
          <select
            className="mt-1 w-full rounded-md border border-archive-border bg-white px-3 py-2"
            value={reviewStatus}
            onChange={(e) =>
              setReviewStatus(e.target.value as 'DRAFT' | 'PUBLISHED')
            }
          >
            <option value="PUBLISHED">{t('published')}</option>
            <option value="DRAFT">{t('draft')}</option>
          </select>
        </label>
        <label className="block text-sm">
          <span className="text-archive-muted">{t('publishedAt')}</span>
          <input
            type="datetime-local"
            className="mt-1 w-full rounded-md border border-archive-border bg-white px-3 py-2"
            value={publishedAt}
            onChange={(e) => setPublishedAt(e.target.value)}
          />
        </label>
        <label className="block text-sm sm:col-span-2">
          <span className="text-archive-muted">{t('videoTagsField')}</span>
          <input
            className="mt-1 w-full rounded-md border border-archive-border bg-white px-3 py-2"
            value={tagsInput}
            onChange={(e) => setTagsInput(e.target.value)}
            placeholder={t('videoTagsHint')}
          />
        </label>
        <label className="block text-sm sm:col-span-2">
          <span className="text-archive-muted">{t('coverUrl')}</span>
          <input
            className="mt-1 w-full rounded-md border border-archive-border bg-white px-3 py-2"
            value={coverUrl}
            onChange={(e) => setCoverUrl(e.target.value)}
          />
        </label>
      </div>
      {row('bn', {
        title: t('titleBn'),
        desc: t('descBn'),
        body: t('bodyBn'),
        st: t('seoTitleBn'),
        sd: t('seoDescBn'),
      })}
      {row('en', {
        title: t('titleEn'),
        desc: t('descEn'),
        body: t('bodyEn'),
        st: t('seoTitleEn'),
        sd: t('seoDescEn'),
      })}
      <div className="flex flex-wrap gap-3">
        <button
          type="submit"
          disabled={saving}
          className="rounded-md bg-archive-accent px-4 py-2 text-sm font-medium text-white disabled:opacity-50"
        >
          {saving ? t('saving') : t('save')}
        </button>
        <Link
          href="/admin/articles"
          className="rounded-md border border-archive-border px-4 py-2 text-sm text-archive-muted hover:border-archive-accent"
        >
          {t('cancel')}
        </Link>
      </div>
    </form>
  );
}
