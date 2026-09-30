import { formatPublishDate } from '@/lib/format-date';
import type { LashKoiIncidentCard, LashKoiTrackerBundle } from '@/lib/lashkoi-api';
import { lashkoiMapCategoryUrl } from '@/lib/lashkoi-api';
import FeaturedBannerStrip from './FeaturedBannerStrip';

type Props = {
  bundle: LashKoiTrackerBundle;
  locale: string;
  activeCategory?: string;
  labels: {
    sectionLabel: string;
    sectionTitle: string;
    intro: string;
    categories: string;
    incidentFeed: string;
    noIncidents: string;
    openMap: string;
    poweredBy: string;
  };
};

function LashKoiIncidentCard({
  incident,
  locale,
  mapHomeUrl,
}: {
  incident: LashKoiIncidentCard;
  locale: string;
  mapHomeUrl: string;
}) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-[12px] border border-archive-border bg-white transition-colors hover:border-archive-muted">
      <a
        href={incident.detailUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block shrink-0"
      >
        <div className="relative flex aspect-video items-center justify-center bg-archive-bg text-xs text-archive-muted">
          {incident.thumbnailUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={incident.thumbnailUrl}
              alt=""
              className="size-full object-cover"
            />
          ) : (
            <span>{incident.category.name}</span>
          )}
        </div>
      </a>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <a
          href={lashkoiMapCategoryUrl(mapHomeUrl, incident.category.slug)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-fit rounded-full border border-archive-border px-2 py-0.5 text-xs text-archive-muted hover:border-archive-accent hover:text-archive-accent"
        >
          {incident.category.name}
        </a>
        <a
          href={incident.detailUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3 className="line-clamp-2 text-lg font-semibold text-archive-fg group-hover:text-archive-accent">
            {incident.headline}
          </h3>
        </a>
        <time
          className="mt-auto text-xs text-archive-muted"
          dateTime={incident.updatedAt}
        >
          {formatPublishDate(incident.updatedAt, locale)}
        </time>
      </div>
    </article>
  );
}

export default function LashKoiTrackerSection({
  bundle,
  locale,
  activeCategory,
  labels,
}: Props) {
  const { categories, incidents, banners, mapHomeUrl } = bundle;

  return (
    <section
      aria-labelledby="lashkoi-tracker-heading"
      className="space-y-8 rounded-2xl border border-emerald-800/20 bg-gradient-to-b from-emerald-950/[0.04] to-white p-6 sm:p-8"
    >
      <header className="space-y-3 border-b border-emerald-900/10 pb-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-800">
          {labels.sectionLabel}
        </p>
        <h2
          id="lashkoi-tracker-heading"
          className="text-2xl font-semibold tracking-tight text-archive-fg sm:text-3xl"
        >
          {labels.sectionTitle}
        </h2>
        <p className="mx-auto max-w-2xl text-base leading-relaxed text-archive-muted">
          {labels.intro}
        </p>
        <p className="text-xs text-archive-muted">{labels.poweredBy}</p>
        <a
          href={mapHomeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex rounded-full border border-emerald-800/30 bg-white px-4 py-2 text-sm font-medium text-emerald-900 hover:bg-emerald-50"
        >
          {labels.openMap}
        </a>
      </header>

      <FeaturedBannerStrip banners={banners} />

      {categories.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-archive-muted">
            {labels.categories}
          </h3>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((cat) => {
              const active = activeCategory === cat.slug;
              const href = active
                ? mapHomeUrl
                : lashkoiMapCategoryUrl(mapHomeUrl, cat.slug);
              return (
                <a
                  key={cat.id}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`rounded-xl border p-4 transition-colors ${
                    active
                      ? 'border-emerald-700 bg-emerald-50/50'
                      : 'border-archive-border bg-white hover:border-archive-muted'
                  }`}
                >
                  <p className="text-sm font-semibold text-archive-fg">{cat.name}</p>
                  <p className="mt-1 text-2xl font-bold tabular-nums text-emerald-800">
                    {cat.incidentCount}
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      )}

      <div className="space-y-4">
        <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-archive-muted">
          {labels.incidentFeed}
        </h3>
        {!incidents.length ? (
          <p className="rounded-lg border border-dashed border-archive-border bg-white/80 px-4 py-6 text-center text-sm text-archive-muted">
            {labels.noIncidents}
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {incidents.map((incident) => (
              <LashKoiIncidentCard
                key={incident.id}
                incident={incident}
                locale={locale}
                mapHomeUrl={mapHomeUrl}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
