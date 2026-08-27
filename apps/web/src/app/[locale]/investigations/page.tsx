import { getTranslations } from 'next-intl/server';
import { GovInvestigationCard } from '@/components/governance';
import { getGovInvestigations } from '@/lib/api';

type Props = { params: Promise<{ locale: string }> };

export default async function InvestigationsPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations('governance');
  const investigations = (await getGovInvestigations(locale)) ?? [];

  const stalled = investigations.filter(
    (row) => row.currentStatus === 'STALLED' && row.daysSinceLastUpdate >= 30,
  );

  return (
    <div className="space-y-10">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold text-archive-fg">
          {t('investigationsTitle')}
        </h1>
        <p className="text-sm text-archive-muted">{t('investigationsIntro')}</p>
      </header>

      {stalled.length > 0 ? (
        <section className="rounded-xl border border-red-200 bg-red-50 p-4">
          <h2 className="text-sm font-semibold text-red-900">
            {t('stalledCallout')}
          </h2>
          <ul className="mt-2 space-y-1 text-sm text-red-800">
            {stalled.map((row) => (
              <li key={row.id}>
                {row.title} — {t('daysSinceUpdate', { days: row.daysSinceLastUpdate })}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {!investigations.length ? (
        <p className="rounded-lg border border-dashed border-archive-border bg-white px-4 py-6 text-center text-sm text-archive-muted">
          {t('noInvestigations')}
        </p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {investigations.map((row) => (
            <GovInvestigationCard
              key={row.id}
              investigation={row}
              locale={locale}
              stageLabel={(stage) => t(`stage.${stage}` as 'stage.INCIDENT_OCCURRED')}
              statusLabel={(status) => t(`status.${status}` as 'status.ON_TRACK')}
              daysLabel={(days) => t('daysSinceUpdate', { days })}
            />
          ))}
        </div>
      )}
    </div>
  );
}
