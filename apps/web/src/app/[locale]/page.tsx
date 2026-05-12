import { getTranslations } from 'next-intl/server';
import { format } from 'date-fns';
import { Link } from '@/i18n/navigation';
import ArticleCard from '@/components/ArticleCard';
import { getArticles, getTimelineEvents } from '@/lib/api';

type Props = { params: Promise<{ locale: string }> };

export default async function Home({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations('home');
  const tNav = await getTranslations('nav');
  const list = await getArticles(locale);
  const articles = list?.data ?? [];
  const timelineEvents = (await getTimelineEvents(locale)) ?? [];
  const timelinePreview = timelineEvents.slice(0, 8);
  const featured = articles[0];
  const secondary = articles[1];

  return (
    <div className="flex flex-col gap-16">
      <section className="mx-auto flex max-w-3xl flex-col gap-8 text-center">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.2em] text-archive-muted">
            {t('heroSubtitle')}
          </p>
          <p className="text-lg leading-relaxed text-archive-muted">{t('heroIntro')}</p>
        </div>
        <div className="w-full space-y-3 text-left">
          <label className="sr-only" htmlFor="hero-search">
            {t('heroSearchLabel')}
          </label>
          <input
            id="hero-search"
            disabled
            type="search"
            placeholder={tNav('searchPlaceholder')}
            className="w-full rounded-lg border border-archive-border bg-white px-5 py-4 text-archive-fg shadow-none outline-none transition-colors placeholder:text-archive-muted disabled:opacity-60"
          />
          <div className="flex flex-wrap justify-center gap-2 md:justify-start">
            <Link
              href="/articles?category=News"
              className="rounded-full border border-archive-border px-3 py-1 text-sm text-archive-muted transition-colors hover:border-archive-accent hover:text-archive-accent"
            >
              {t('filterNews')}
            </Link>
            <Link
              href="/media"
              className="rounded-full border border-archive-border px-3 py-1 text-sm text-archive-muted transition-colors hover:border-archive-accent hover:text-archive-accent"
            >
              {t('filterVideos')}
            </Link>
            <Link
              href="/timeline"
              className="rounded-full border border-archive-border px-3 py-1 text-sm text-archive-muted transition-colors hover:border-archive-accent hover:text-archive-accent"
            >
              {t('filterTimeline')}
            </Link>
          </div>
        </div>
      </section>

      {!articles.length ? (
        <p className="rounded-lg border border-dashed border-archive-border bg-white px-4 py-6 text-center text-sm text-archive-muted">
          {t('noArticles')}
        </p>
      ) : (
        <section aria-labelledby="featured-heading" className="space-y-6">
          <h2 id="featured-heading" className="text-sm font-semibold uppercase tracking-[0.12em] text-archive-muted">
            {t('featured')}
          </h2>
          <div className="grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-7">
              {featured && (
                <ArticleCard article={featured} locale={locale} readLabel={t('read')} />
              )}
            </div>
            <div className="flex flex-col gap-6 lg:col-span-5">
              {secondary && (
                <ArticleCard article={secondary} locale={locale} readLabel={t('read')} />
              )}
            </div>
          </div>
        </section>
      )}

      {articles.length > 2 ? (
        <section aria-labelledby="grid-heading" className="space-y-6">
          <h2
            id="grid-heading"
            className="text-sm font-semibold uppercase tracking-[0.12em] text-archive-muted"
          >
            {t('latestGrid')}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.slice(2).map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                locale={locale}
                readLabel={t('read')}
              />
            ))}
          </div>
        </section>
      ) : null}

      <section aria-labelledby="timeline-heading" className="space-y-4 rounded-xl border border-archive-border bg-white p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 id="timeline-heading" className="text-base font-semibold text-archive-fg">
            {t('timelinePreview')}
          </h2>
          <Link
            href="/timeline"
            className="text-sm font-medium text-archive-accent hover:underline"
          >
            {t('timelineSeeAll')}
          </Link>
        </div>
        <div className="scrollbar-thin overflow-x-auto pb-2">
          <div className="flex min-w-max items-start gap-8 px-2">
            {timelinePreview.length === 0 ? (
              <p className="text-sm text-archive-muted">{t('timelinePreviewEmpty')}</p>
            ) : (
              timelinePreview.map((ev) => (
                <div key={ev.id} className="flex w-44 flex-col items-start gap-2">
                  <div className="flex items-center gap-2">
                    <span className="size-3 shrink-0 rounded-full border-2 border-archive-accent bg-archive-bg" />
                    <span className="font-mono text-sm text-archive-muted">
                      {format(new Date(ev.eventAt), 'yyyy-MM-dd')}
                    </span>
                  </div>
                  <p className="text-xs leading-relaxed text-archive-muted line-clamp-3">
                    {ev.title}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
