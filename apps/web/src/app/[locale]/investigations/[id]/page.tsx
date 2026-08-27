import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { formatPublishDate } from '@/lib/format-date';
import { SourcePlatformIcon } from '@/components/governance';
import { getGovInvestigation } from '@/lib/api';

type Props = { params: Promise<{ locale: string; id: string }> };

export default async function InvestigationDetailPage({ params }: Props) {
  const { locale, id } = await params;
  const t = await getTranslations('governance');
  const investigation = await getGovInvestigation(id, locale);

  if (!investigation) notFound();

  return (
    <article className="mx-auto max-w-3xl space-y-8">
      <header className="space-y-3">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-archive-bg px-2 py-0.5 text-xs font-medium ring-1 ring-archive-border">
            {t(`stage.${investigation.currentStage}` as 'stage.INCIDENT_OCCURRED')}
          </span>
          <span className="rounded-full bg-amber-50 px-2 py-0.5 text-xs text-amber-900">
            {t(`status.${investigation.currentStatus}` as 'status.ON_TRACK')}
          </span>
        </div>
        <h1 className="text-3xl font-semibold tracking-tight text-archive-fg">
          {investigation.title}
        </h1>
        {investigation.incident ? (
          <p className="text-sm text-archive-muted">
            {t('linkedIncident')}{' '}
            <Link
              href={`/incidents/${investigation.incident.slug}`}
              className="text-archive-accent underline"
            >
              {investigation.incident.title}
            </Link>
          </p>
        ) : null}
      </header>

      <section className="space-y-4">
        <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-archive-muted">
          {t('updateTimeline')}
        </h2>
        {!investigation.updates.length ? (
          <p className="text-sm text-archive-muted">{t('noUpdates')}</p>
        ) : (
          <ol className="relative space-y-6 border-l border-archive-border pl-6">
            {investigation.updates.map((update) => {
              const isLatest = update.id === investigation.latestUpdateId;
              return (
                <li key={update.id} className="relative">
                  <span
                    className={`absolute -left-[1.6rem] top-1 size-3 rounded-full ring-4 ring-white ${
                      isLatest ? 'bg-archive-accent' : 'bg-archive-border'
                    }`}
                  />
                  <article
                    className={`rounded-xl border bg-white p-4 ${
                      isLatest ? 'border-archive-accent' : 'border-archive-border'
                    }`}
                  >
                    <div className="mb-2 flex flex-wrap gap-2">
                      <SourcePlatformIcon sourceType={update.sourceType} />
                      <span className="rounded-full bg-archive-bg px-2 py-0.5 text-xs">
                        {t(`stage.${update.stage}` as 'stage.INCIDENT_OCCURRED')}
                      </span>
                      <span className="rounded-full bg-amber-50 px-2 py-0.5 text-xs text-amber-900">
                        {t(`status.${update.status}` as 'status.ON_TRACK')}
                      </span>
                      {isLatest ? (
                        <span className="rounded-full bg-archive-accent px-2 py-0.5 text-xs font-semibold text-white">
                          {t('latestUpdate')}
                        </span>
                      ) : null}
                    </div>
                    <h3 className="font-semibold text-archive-fg">{update.headline}</h3>
                    <time
                      className="mt-1 block text-xs text-archive-muted"
                      dateTime={update.publishedAt ?? update.createdAt}
                    >
                      {formatPublishDate(
                        update.publishedAt ?? update.createdAt,
                        locale,
                      )}
                    </time>
                    <a
                      href={update.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block text-sm text-archive-accent underline"
                    >
                      Source
                    </a>
                  </article>
                </li>
              );
            })}
          </ol>
        )}
      </section>
    </article>
  );
}
