import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { getBreakingNews } from '@/lib/api';

type Props = { locale: string };

function TickerLink({
  href,
  title,
  className,
}: {
  href: string | null;
  title: string;
  className: string;
}) {
  if (!href) {
    return <span className={className}>{title}</span>;
  }
  if (/^https?:\/\//i.test(href)) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {title}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {title}
    </Link>
  );
}

export default async function BreakingNewsMarquee({ locale }: Props) {
  const t = await getTranslations('nav');
  const items = (await getBreakingNews(locale)) ?? [];
  if (!items.length) {
    return null;
  }

  const segment = items.map((item) => (
    <span key={item.id} className="inline-flex shrink-0 items-center gap-2">
      <span className="text-white/40" aria-hidden>
        ·
      </span>
      <TickerLink
        href={item.href}
        title={item.title}
        className="max-w-[min(70vw,28rem)] truncate text-sm font-medium text-white/95 underline-offset-2 hover:text-white hover:underline"
      />
    </span>
  ));

  return (
    <div
      className="border-b border-white/10 bg-archive-fg text-white"
      role="region"
      aria-label={t('breakingNewsMarquee')}
    >
      <div className="mx-auto flex h-10 max-w-6xl items-stretch px-0 sm:px-5">
        <div className="flex shrink-0 items-center border-r border-white/15 bg-red-700/90 px-3">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">
            {t('breaking')}
          </span>
        </div>
        <div className="min-w-0 flex-1 overflow-hidden">
          <div className="breaking-marquee__mask flex h-full items-center">
            <div className="breaking-marquee__track flex items-center gap-1 pr-8">
              {segment}
              {segment}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
