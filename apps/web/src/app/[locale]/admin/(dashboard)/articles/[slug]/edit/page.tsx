'use client';

import ArticleForm from '@/components/admin/ArticleForm';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { useRouter } from '@/i18n/navigation';
import { useState } from 'react';
import { adminFetch, readApiError } from '@/lib/admin-api';

export default function AdminEditArticlePage() {
  const t = useTranslations('admin');
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const [deleting, setDeleting] = useState(false);
  const [delError, setDelError] = useState<string | null>(null);

  async function onDelete() {
    if (!window.confirm(t('confirmDelete'))) return;
    setDeleting(true);
    setDelError(null);
    const res = await adminFetch(
      `admin/articles/${encodeURIComponent(slug)}`,
      { method: 'DELETE' },
    );
    setDeleting(false);
    if (!res.ok) {
      setDelError(await readApiError(res));
      return;
    }
    router.replace('/admin/articles');
  }

  return (
    <div className="space-y-6">
      <ArticleForm mode="edit" editSlug={slug} />
      <div className="rounded-xl border border-archive-border bg-white p-4">
        {delError && (
          <p className="mb-3 text-sm text-archive-fg">{delError}</p>
        )}
        <button
          type="button"
          disabled={deleting}
          onClick={() => void onDelete()}
          className="rounded-md border border-archive-border px-3 py-2 text-sm text-archive-muted hover:border-archive-fg hover:text-archive-fg disabled:opacity-50"
        >
          {deleting ? t('loading') : t('deleteArticle')}
        </button>
      </div>
    </div>
  );
}
