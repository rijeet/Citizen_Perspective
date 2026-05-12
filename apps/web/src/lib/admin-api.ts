const TOKEN_KEY = 'cp_admin_jwt';
const PROFILE_KEY = 'cp_admin_profile';

export function getApiBase(): string {
  return (process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001/api/v1').replace(
    /\/$/,
    '',
  );
}

export function getAdminToken(): string | null {
  if (typeof window === 'undefined') return null;
  return sessionStorage.getItem(TOKEN_KEY);
}

export function setAdminSession(
  token: string,
  admin: { id: string; email: string },
) {
  sessionStorage.setItem(TOKEN_KEY, token);
  sessionStorage.setItem(PROFILE_KEY, JSON.stringify(admin));
}

export function clearAdminSession() {
  sessionStorage.removeItem(TOKEN_KEY);
  sessionStorage.removeItem(PROFILE_KEY);
}

export function getAdminProfile(): { id: string; email: string } | null {
  if (typeof window === 'undefined') return null;
  const raw = sessionStorage.getItem(PROFILE_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as { id: string; email: string };
  } catch {
    return null;
  }
}

export async function adminFetch(
  path: string,
  init?: RequestInit,
): Promise<Response> {
  const base = getApiBase();
  const url = `${base}/${path.replace(/^\//, '')}`;
  const headers = new Headers(init?.headers);
  if (!headers.has('Content-Type') && init?.body) {
    headers.set('Content-Type', 'application/json');
  }
  const token = getAdminToken();
  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }
  return fetch(url, { ...init, headers });
}

export async function readApiError(res: Response): Promise<string> {
  try {
    const j = (await res.json()) as { message?: string | string[] };
    if (Array.isArray(j.message)) return j.message.join(', ');
    if (typeof j.message === 'string') return j.message;
  } catch {
    /* ignore */
  }
  return res.statusText || 'Request failed';
}
