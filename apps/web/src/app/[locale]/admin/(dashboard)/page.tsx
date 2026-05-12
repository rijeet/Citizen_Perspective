'use client';

import { useRouter } from '@/i18n/navigation';
import { useEffect } from 'react';

export default function AdminDashboardIndex() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/admin/articles');
  }, [router]);
  return null;
}
