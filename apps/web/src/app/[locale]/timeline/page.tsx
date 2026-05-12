import { getTranslations } from 'next-intl/server';
import { getTimelineEvents } from '@/lib/api';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { format } from 'date-fns';

type Props = { params: Promise<{ locale: string }> };

export default async function TimelinePage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations('placeholders');
  const events = (await getTimelineEvents(locale)) ?? [];

  return (
    <div className="mx-auto max-w-3xl space-y-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">
          {t('timelineTitle')}
        </h1>
        <p className="text-archive-muted">{t('timelineIntro')}</p>
      </header>

      {events.length === 0 ? (
        <p className="text-sm text-archive-muted">{t('timelineEmpty')}</p>
      ) : (
        <ol className="relative space-y-8 border-l border-archive-border pl-8">
          {events.map((ev) => (
            <li key={ev.id} className="relative">
              <span className="absolute -left-[1.15rem] top-1.5 size-3 rounded-full border-2 border-archive-accent bg-white" />
              <time
                dateTime={ev.eventAt}
                className="font-mono text-sm text-archive-muted"
              >
                {format(new Date(ev.eventAt), 'yyyy-MM-dd')}
              </time>
              <h2 className="mt-1 text-lg font-semibold text-archive-fg">
                {ev.title}
              </h2>
              <div className="prose prose-sm mt-2 max-w-none text-archive-muted prose-headings:text-archive-fg prose-a:text-archive-accent">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {ev.bodyMd}
                </ReactMarkdown>
              </div>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
