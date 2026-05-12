'use client';

import { useRouter } from '@/i18n/navigation';
import { useEffect, useState } from 'react';
import { getAdminToken } from '@/lib/admin-api';

export default function AdminGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const token = getAdminToken();
    if (!token) {
      router.replace('/admin/login');
      return;
    }
    setReady(true);
  }, [router]);

  if (!ready) {
    return (
      <div className="rounded-lg border border-archive-border bg-white px-6 py-12 text-center text-sm text-archive-muted">
        …
      </div>
    );
  }

  return <>{children}</>;
}
