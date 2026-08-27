import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { NewsItemTimeline } from '@/components/governance';
import { getIncident } from '@/lib/api';

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export default async function IncidentDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  const t = await getTranslations('governance');
  const incident = await getIncident(slug, locale);

  if (!incident) notFound();

  return (
    <article className="w-full space-y-8">
      <header className="space-y-3">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full border border-archive-border px-2 py-0.5 text-xs text-archive-muted">
            {incident.category.name}
          </span>
          {incident.subcategory ? (
            <span className="rounded-full bg-archive-bg px-2 py-0.5 text-xs text-archive-fg">
              {incident.subcategory.name}
            </span>
          ) : null}
          {incident.currentStage ? (
            <span className="rounded-full bg-archive-accent/10 px-2 py-0.5 text-xs font-medium text-archive-accent">
              {incident.currentStage}
            </span>
          ) : null}
          {incident.currentStatus ? (
            <span className="rounded-full bg-amber-50 px-2 py-0.5 text-xs text-amber-900">
              {incident.currentStatus}
            </span>
          ) : null}
        </div>
        <h1 className="text-3xl font-semibold tracking-tight text-archive-fg">
          {incident.title}
        </h1>
      </header>

      <section className="space-y-4">
        <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-archive-muted">
          {t('timeline')}
        </h2>
        {!incident.newsItems.length ? (
          <p className="text-sm text-archive-muted">{t('noNewsItems')}</p>
        ) : (
          <NewsItemTimeline
            items={incident.newsItems}
            incidentSlug={incident.slug}
            locale={locale}
            latestId={incident.latestNewsItemId}
            latestLabel={t('latestUpdate')}
          />
        )}
      </section>
    </article>
  );
}
