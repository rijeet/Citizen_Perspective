'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import LanguageToggle from './LanguageToggle';

export default function SiteHeader() {
  const t = useTranslations('nav');
  const root = useTranslations();

  const brand = root('brandName');

  return (
    <header className="border-b border-archive-border bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between gap-4 px-5">
        <div className="flex min-w-0 items-center gap-6">
          <Link
            href="/"
            className="truncate text-base font-semibold tracking-tight text-archive-fg"
          >
            {brand}
          </Link>
          <nav className="hidden items-center gap-5 text-sm text-archive-muted md:flex">
            <Link href="/" className="hover:text-archive-fg">
              {t('archive')}
            </Link>
            <Link href="/articles" className="hover:text-archive-fg">
              {t('articles')}
            </Link>
            <Link
              href="/articles?category=News"
              className="hover:text-archive-fg"
            >
              {t('news')}
            </Link>
            <Link href="/media" className="hover:text-archive-fg">
              {t('videos')}
            </Link>
            <Link href="/media" className="hover:text-archive-fg">
              {t('media')}
            </Link>
            <Link href="/timeline" className="hover:text-archive-fg">
              {t('timeline')}
            </Link>
            <Link href="/about" className="hover:text-archive-fg">
              {t('about')}
            </Link>
            <Link href="/admin" className="hover:text-archive-fg">
              {t('admin')}
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <label className="hidden max-w-[200px] items-center rounded-md border border-archive-border bg-archive-bg px-2 py-1 md:flex">
            <span className="sr-only">{t('searchPlaceholder')}</span>
            <input
              type="search"
              placeholder={t('searchPlaceholder')}
              className="w-full bg-transparent text-sm outline-none placeholder:text-archive-muted"
              disabled
            />
          </label>
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
}
