'use client';

import clsx from 'clsx';
import { useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';

export default function LanguageToggle() {
  const pathname = usePathname();
  const locale = useLocale();

  return (
    <div
      className="flex items-center gap-1 rounded-md border border-archive-border bg-white px-1 py-0.5 text-sm"
      role="tablist"
      aria-label="Language"
    >
      {(['bn', 'en'] as const).map((code) => (
        <Link
          key={code}
          href={pathname}
          locale={code}
          role="tab"
          aria-selected={locale === code}
          className={clsx(
            'rounded px-2 py-0.5 font-medium transition-colors',
            locale === code
              ? 'text-archive-accent'
              : 'text-archive-muted hover:text-archive-fg',
          )}
        >
          {code.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
