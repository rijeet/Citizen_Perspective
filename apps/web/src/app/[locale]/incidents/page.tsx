import { getTranslations } from 'next-intl/server';
import { CategoryCountGrid, IncidentCard } from '@/components/governance';
import { getCategories, getIncidents } from '@/lib/api';

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ category?: string; q?: string }>;
};

export default async function IncidentsPage({ params, searchParams }: Props) {
  const { locale } = await params;
  const { category, q } = await searchParams;
  const t = await getTranslations('governance');

  const [categories, incidents] = await Promise.all([
    getCategories(locale),
    getIncidents(locale, { category, q }),
  ]);

  return (
    <div className="space-y-10">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold text-archive-fg">{t('incidentsTitle')}</h1>
        <p className="text-sm text-archive-muted">{t('incidentsIntro')}</p>
      </header>

      <CategoryCountGrid
        categories={categories ?? []}
        activeCategory={category}
      />

      {!incidents?.length ? (
        <p className="rounded-lg border border-dashed border-archive-border bg-white px-4 py-6 text-center text-sm text-archive-muted">
          {t('noIncidents')}
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {incidents.map((incident) => (
            <IncidentCard key={incident.id} incident={incident} locale={locale} />
          ))}
        </div>
      )}
    </div>
  );
}
