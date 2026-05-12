'use client';

import { useTranslations } from 'next-intl';
import { Link, useRouter } from '@/i18n/navigation';
import { clearAdminSession, getAdminProfile } from '@/lib/admin-api';

export default function AdminShell({ children }: { children: React.ReactNode }) {
  const t = useTranslations('admin');
  const router = useRouter();
  const profile = getAdminProfile();

  function logout() {
    clearAdminSession();
    router.replace('/admin/login');
  }

  return (
    <div className="flex min-h-[calc(100vh-8rem)] flex-col gap-6 md:flex-row">
      <aside className="shrink-0 rounded-xl border border-archive-border bg-white p-4 md:w-52">
        <p className="mb-3 truncate text-xs font-medium text-archive-muted">
          {profile?.email}
        </p>
        <nav className="flex flex-col gap-2 text-sm">
          <Link
            href="/admin/articles/new?category=News"
            className="rounded-md px-2 py-1.5 text-archive-fg hover:bg-archive-bg"
          >
            {t('navNews')}
          </Link>
          <Link
            href="/admin/breaking-news"
            className="rounded-md px-2 py-1.5 text-archive-fg hover:bg-archive-bg"
          >
            {t('navBreakingNews')}
          </Link>
          <Link
            href="/admin/videos"
            className="rounded-md px-2 py-1.5 text-archive-fg hover:bg-archive-bg"
          >
            {t('navVideos')}
          </Link>
          <Link
            href="/admin/media-items"
            className="rounded-md px-2 py-1.5 text-archive-fg hover:bg-archive-bg"
          >
            {t('navMediaUrls')}
          </Link>
          <Link
            href="/admin/timeline"
            className="rounded-md px-2 py-1.5 text-archive-fg hover:bg-archive-bg"
          >
            {t('navTimeline')}
          </Link>
          <Link
            href="/admin/articles"
            className="rounded-md px-2 py-1.5 text-archive-fg hover:bg-archive-bg"
          >
            {t('navArticles')}
          </Link>
          <Link
            href="/admin/sources"
            className="rounded-md px-2 py-1.5 text-archive-fg hover:bg-archive-bg"
          >
            {t('navSources')}
          </Link>
          <button
            type="button"
            onClick={logout}
            className="mt-2 rounded-md border border-archive-border px-2 py-1.5 text-left text-archive-muted hover:border-archive-accent hover:text-archive-accent"
          >
            {t('logout')}
          </button>
        </nav>
      </aside>
      <main className="min-w-0 flex-1">{children}</main>
    </div>
  );
}
