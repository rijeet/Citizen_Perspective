'use client';

import { usePathname } from '@/i18n/navigation';

type Props = { children: React.ReactNode };

/** Hides public-only chrome (e.g. breaking ticker) under `/admin`. */
export default function PublicOnlyChrome({ children }: Props) {
  const pathname = usePathname();
  if (pathname?.includes('/admin')) {
    return null;
  }
  return <>{children}</>;
}
