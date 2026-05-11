# জনদৃষ্টি · Citizen Perspective (BD Measles Media Archive)

Bilingual (**bn** default, **en**) civic archive: **Next.js 16** (App Router) + **NestJS 11** + **PostgreSQL** (via Prisma **5.x**).

## Prerequisites

- Node 20+ and npm
- Docker **optional**, for Postgres and API containers

## Local development

### 1. Database

Start Postgres:

```bash
docker compose up -d postgres
```

### 2. API (`apps/api`)

Create `apps/api/.env`:

```bash
DATABASE_URL="postgresql://archive:archive@localhost:5432/jan_drishthi?schema=public"
PORT=3001
CORS_ORIGIN="http://localhost:3000,https://your-app.vercel.app"
```

Migrate and seed:

```bash
npm run db:deploy -w api
npm run db:seed -w api
```

Run API:

```bash
npm run dev:api
```

Swagger: [http://localhost:3001/api/docs](http://localhost:3001/api/docs)

Articles: `GET http://localhost:3001/api/v1/articles?locale=bn`

### 3. Web (`apps/web`)

Create `apps/web/.env.local` (see [.env.example](.env.example) at repo root):

```bash
NEXT_PUBLIC_API_URL=http://localhost:3001/api/v1
```

Run Next:

```bash
npm run dev:web
```

Open [http://localhost:3000](http://localhost:3000) — middleware sends you to **`/bn`**.

---

## Deploy to Vercel (serverless frontend)

The **Next.js** app runs as Vercel **Serverless / Edge** functions by default. The **NestJS** API is a long-lived Node server and is **not** deployed by this repo’s Vercel config; host the API elsewhere (Railway, Render, Fly.io, Cloud Run, etc.) and point the web app at it.

### 1. Vercel project

1. Import this Git repository into [Vercel](https://vercel.com).
2. **Root Directory:** `apps/web` (required so Vercel finds `next.config.ts` and [`vercel.json`](apps/web/vercel.json)).
3. **Framework preset:** Next.js (auto-detected).
4. **Install command** / **Build command** are set in [`apps/web/vercel.json`](apps/web/vercel.json): install runs from the **monorepo root** (`cd ../.. && npm ci`), then `npm run build` in `apps/web`.

### 2. Environment variables (Vercel → Project → Settings → Environment Variables)

| Name | Example | Notes |
|------|---------|--------|
| `NEXT_PUBLIC_API_URL` | `https://api.yourdomain.com/api/v1` | Public base URL of your deployed Nest API (must include `/api/v1` if that is your global prefix). |
| `NEXT_PUBLIC_SITE_URL` | `https://yourdomain.com` | Optional; used for canonical URLs / metadata when set. |

Redeploy after changing env vars.

### 3. API (Nest) for production

Set **`CORS_ORIGIN`** on the API to your Vercel site origin (e.g. `https://your-project.vercel.app` or your custom domain). Run migrations against production Postgres (e.g. Neon):

```bash
# From your machine or CI, with production DATABASE_URL
npm run db:deploy
```

### Optional: running Nest “on Vercel”

Wrapping Nest in a single Vercel **Node serverless function** is possible (e.g. `serverless-http` + a small `api/index.ts` entry), but you hit **bundle size**, **cold start**, and **execution time** limits—most teams keep **API off Vercel** until there is a strong reason to colocate.

---

## Phase 2 (deferred operations)

Introduce **when**: rising traffic, team size, richer ingestion pipelines, or production hardening merit the operational cost.

| Capability | Purpose |
|-----------|---------|
| **Redis** | Cache hot reads (`articles:list:${locale}:${page}`), Swagger-adjacent rate-limit buckets optional |
| **RabbitMQ** | Async ingestion (media parsing, source sync), replays |
| **Kubernetes + API gateway** | Multi-replica rollout, centralized TLS, weighted routing |
| **CDN for media/thumbnails** | Latency off origin, egress savings |
| **ISR / tagging revalidation on Next.js** | High-traffic listing pages after stable infra |

Redis is most beneficial **after** list endpoints measurable as hot spots; RabbitMQ pays off **once** ingestion is asynchronous and bursty rather than purely manual uploads.
