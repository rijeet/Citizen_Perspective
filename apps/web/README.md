# Web · জনদৃষ্টি / Citizen Perspective (Next.js)

Monorepo workspace: run installs from the repo root, then start this app.

```bash
cd ../..
npm ci
npm run dev -w web
```

Open [http://localhost:3000](http://localhost:3000) — locale `proxy` (Next.js 16; `next-intl`) redirects to `/bn` or `/en`.

## Environment variables

Create **`apps/web/.env.local`** (local) or set in **Vercel → Environment Variables** (deployed).

| Name | Required | Example |
|------|----------|---------|
| `NEXT_PUBLIC_API_URL` | Recommended | `http://localhost:3001/api/v1` |
| `NEXT_PUBLIC_SITE_URL` | Optional | `https://your-domain.vercel.app` |

Only `NEXT_PUBLIC_*` keys are exposed to the browser. Do not put secrets here.

See the root [README.md](../../README.md) for full stack and API setup.
