import { Link } from '@/i18n/navigation';
import { formatPublishDate } from '@/lib/format-date';
import type { GovInvestigationView } from '@/lib/api';

const statusColors: Record<string, string> = {
  ON_TRACK: 'bg-emerald-50 text-emerald-900 ring-emerald-200',
  DELAYED: 'bg-amber-50 text-amber-900 ring-amber-200',
  STALLED: 'bg-red-50 text-red-900 ring-red-200',
  RESOLVED: 'bg-slate-100 text-slate-800 ring-slate-200',
};

type Props = {
  investigation: GovInvestigationView;
  locale: string;
  stageLabel: (stage: string) => string;
  statusLabel: (status: string) => string;
  daysLabel: (days: number) => string;
};

export default function GovInvestigationCard({
  investigation,
  locale,
  stageLabel,
  statusLabel,
  daysLabel,
}: Props) {
  const statusClass =
    statusColors[investigation.currentStatus] ??
    'bg-archive-bg text-archive-fg ring-archive-border';

  return (
    <article className="rounded-xl border border-archive-border bg-white p-4 transition-colors hover:border-archive-muted">
      <div className="mb-2 flex flex-wrap gap-2">
        <span className="rounded-full bg-archive-bg px-2 py-0.5 text-xs font-medium ring-1 ring-archive-border">
          {stageLabel(investigation.currentStage)}
        </span>
        <span
          className={`rounded-full px-2 py-0.5 text-xs font-medium ring-1 ${statusClass}`}
        >
          {statusLabel(investigation.currentStatus)}
        </span>
        {investigation.daysSinceLastUpdate >= 30 &&
        investigation.currentStatus === 'STALLED' ? (
          <span className="rounded-full bg-red-600 px-2 py-0.5 text-xs font-semibold text-white">
            {daysLabel(investigation.daysSinceLastUpdate)}
          </span>
        ) : null}
      </div>
      <Link href={`/investigations/${investigation.id}`}>
        <h3 className="text-lg font-semibold text-archive-fg hover:text-archive-accent">
          {investigation.title}
        </h3>
      </Link>
      {investigation.incident ? (
        <p className="mt-1 text-sm text-archive-muted">
          <Link
            href={`/incidents/${investigation.incident.slug}`}
            className="underline hover:text-archive-accent"
          >
            {investigation.incident.title}
          </Link>
        </p>
      ) : null}
      <time
        className="mt-3 block text-xs text-archive-muted"
        dateTime={investigation.updatedAt}
      >
        {formatPublishDate(investigation.updatedAt, locale)}
      </time>
    </article>
  );
}
