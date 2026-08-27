import { getTranslations } from 'next-intl/server';
import { format } from 'date-fns';
import { Link } from '@/i18n/navigation';
import ArticleCard from '@/components/ArticleCard';
import {
  CategoryCountGrid,
  FeaturedBannerStrip,
  IncidentCard,
} from '@/components/governance';
import {
  getArticles,
  getCategories,
  getFeaturedBanners,
  getIncidents,
  getTimelineEvents,
} from '@/lib/api';

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ category?: string }>;
};

export default async function Home({ params, searchParams }: Props) {
  const { locale } = await params;
  const { category } = await searchParams;
  const t = await getTranslations('home');
  const tGov = await getTranslations('governance');

  const [banners, categories, incidents, list, timelineEvents] =
    await Promise.all([
      getFeaturedBanners(locale),
      getCategories(locale),
      getIncidents(locale, { category }),
      getArticles(locale),
      getTimelineEvents(locale),
    ]);

  const articles = list?.data ?? [];
  const timelinePreview = (timelineEvents ?? []).slice(0, 8);

  return (
    <div className="flex flex-col gap-12">
      <section
        aria-labelledby="tracker-section-heading"
        className="space-y-8 rounded-2xl border border-archive-accent/20 bg-gradient-to-b from-archive-accent/[0.06] to-white p-6 sm:p-8"
      >
        <header className="space-y-3 border-b border-archive-accent/15 pb-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-archive-accent">
            {tGov('trackerSectionLabel')}
          </p>
          <h2
            id="tracker-section-heading"
            className="text-2xl font-semibold tracking-tight text-archive-fg sm:text-3xl"
          >
            {tGov('trackerSectionTitle')}
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-archive-muted">
            {tGov('trackerIntro')}
          </p>
        </header>

        <FeaturedBannerStrip banners={banners ?? []} />

        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-archive-muted">
              {tGov('categories')}
            </h3>
            <Link
              href="/incidents"
              className="text-sm font-medium text-archive-accent hover:underline"
            >
              {tGov('seeAllIncidents')}
            </Link>
          </div>
          <CategoryCountGrid
            categories={categories ?? []}
            activeCategory={category}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-archive-muted">
            {tGov('incidentFeed')}
          </h3>
          {!incidents?.length ? (
            <p className="rounded-lg border border-dashed border-archive-border bg-white/80 px-4 py-6 text-center text-sm text-archive-muted">
              {tGov('noIncidents')}
            </p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {incidents.slice(0, 6).map((incident) => (
                <IncidentCard
                  key={incident.id}
                  incident={incident}
                  locale={locale}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <section
        aria-labelledby="archive-section-heading"
        className="space-y-8 rounded-2xl border border-archive-border bg-archive-bg/40 p-6 sm:p-8"
      >
        <header className="space-y-3 border-b border-archive-border pb-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-archive-muted">
            {t('archiveSectionLabel')}
          </p>
          <h2
            id="archive-section-heading"
            className="text-2xl font-semibold tracking-tight text-archive-fg sm:text-3xl"
          >
            {t('archiveSectionTitle')}
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-archive-muted">
            {t('heroIntro')}
          </p>
          <div className="flex flex-wrap justify-center gap-2 pt-1">
            <Link
              href="/articles?category=News"
              className="rounded-full border border-archive-border bg-white px-3 py-1 text-sm text-archive-muted transition-colors hover:border-archive-accent hover:text-archive-accent"
            >
              {t('filterNews')}
            </Link>
            <Link
              href="/media"
              className="rounded-full border border-archive-border bg-white px-3 py-1 text-sm text-archive-muted transition-colors hover:border-archive-accent hover:text-archive-accent"
            >
              {t('filterVideos')}
            </Link>
            <Link
              href="/timeline"
              className="rounded-full border border-archive-border bg-white px-3 py-1 text-sm text-archive-muted transition-colors hover:border-archive-accent hover:text-archive-accent"
            >
              {t('filterTimeline')}
            </Link>
          </div>
        </header>

        {!articles.length ? (
          <p className="rounded-lg border border-dashed border-archive-border bg-white px-4 py-6 text-center text-sm text-archive-muted">
            {t('noArticles')}
          </p>
        ) : (
          <div aria-labelledby="grid-heading" className="space-y-6">
            <h3
              id="grid-heading"
              className="text-sm font-semibold uppercase tracking-[0.12em] text-archive-muted"
            >
              {t('latestGrid')}
            </h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {articles.slice(0, 6).map((article) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                  locale={locale}
                  readLabel={t('read')}
                />
              ))}
            </div>
          </div>
        )}

        <div
          aria-labelledby="timeline-heading"
          className="space-y-4 rounded-xl border border-archive-border bg-white p-6"
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h3
              id="timeline-heading"
              className="text-base font-semibold text-archive-fg"
            >
              {t('timelinePreview')}
            </h3>
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
                <p className="text-sm text-archive-muted">
                  {t('timelinePreviewEmpty')}
                </p>
              ) : (
                timelinePreview.map((ev) => (
                  <div
                    key={ev.id}
                    className="flex w-44 flex-col items-start gap-2"
                  >
                    <div className="flex items-center gap-2">
                      <span className="size-3 shrink-0 rounded-full border-2 border-archive-accent bg-archive-bg" />
                      <span className="font-mono text-sm text-archive-muted">
                        {format(new Date(ev.eventAt), 'yyyy-MM-dd')}
                      </span>
                    </div>
                    <p className="line-clamp-3 text-xs leading-relaxed text-archive-muted">
                      {ev.title}
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
