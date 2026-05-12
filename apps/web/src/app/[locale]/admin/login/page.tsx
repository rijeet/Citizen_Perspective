'use client';

import { useTranslations } from 'next-intl';
import { Link, useRouter } from '@/i18n/navigation';
import { useState } from 'react';
import { adminFetch, readApiError, setAdminSession } from '@/lib/admin-api';

export default function AdminLoginPage() {
  const t = useTranslations('admin');
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setPending(true);
    setError(null);
    const res = await adminFetch('admin/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    setPending(false);
    if (!res.ok) {
      setError(`${t('loginError')} ${await readApiError(res)}`);
      return;
    }
    const data = (await res.json()) as {
      access_token: string;
      admin: { id: string; email: string };
    };
    setAdminSession(data.access_token, data.admin);
    router.replace('/admin/articles');
  }

  return (
    <div className="mx-auto max-w-md rounded-xl border border-archive-border bg-white p-8">
      <h1 className="text-xl font-semibold text-archive-fg">{t('loginTitle')}</h1>
      <form onSubmit={onSubmit} className="mt-6 space-y-4">
        {error && (
          <p className="rounded-md border border-archive-border bg-archive-bg px-3 py-2 text-sm text-archive-fg">
            {error}
          </p>
        )}
        <label className="block text-sm">
          <span className="text-archive-muted">{t('loginEmail')}</span>
          <input
            type="email"
            autoComplete="email"
            required
            className="mt-1 w-full rounded-md border border-archive-border px-3 py-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className="block text-sm">
          <span className="text-archive-muted">{t('loginPassword')}</span>
          <input
            type="password"
            autoComplete="current-password"
            required
            className="mt-1 w-full rounded-md border border-archive-border px-3 py-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button
          type="submit"
          disabled={pending}
          className="w-full rounded-md bg-archive-accent py-2 text-sm font-medium text-white disabled:opacity-50"
        >
          {t('loginSubmit')}
        </button>
      </form>
      <p className="mt-6 text-center text-sm text-archive-muted">
        <Link href="/admin/bootstrap" className="text-archive-accent underline">
          {t('bootstrapTitle')}
        </Link>
      </p>
    </div>
  );
}
