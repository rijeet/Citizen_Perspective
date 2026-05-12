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
CORS_ORIGIN="http://localhost:3000,https://citizen-perspective.vercel.app"
```

**Migrations** (SQL under `apps/api/prisma/migrations/`):

| Folder | Contents |
|--------|----------|
| `20250511170000_init` | `ReviewStatus` / `Locale` enums, `Source`, `Article`, `ArticleTranslation` |
| `20250512120000_admin` | `Admin` (password hash; JWT admin UI) |
| `20250515180000_archive_extras` | `ExternalVideo`, `MediaItem`, `TimelineEvent` + translations (embeds, media URLs, timeline) |

Apply pending migrations (required on a **new** database before seed or `db:seed:admin`; safe to re-run):

```bash
npm run db:deploy
```

After you edit `schema.prisma` locally, create the next migration (dev only; Postgres must be running):

```bash
npm run db:migrate
```

**Demo seed** (wipes articles/sources, then re-inserts sample data):

```bash
npm run db:seed
```

**Admin only (no demo data reset):** if `ADMIN_EMAIL` and `ADMIN_PASSWORD` are set in `apps/api/.env` or the repo root `.env`, run:

```bash
npm run db:seed:admin
```

This upserts that admin (updates the password hash on every run). Full `db:seed` still clears and re-creates demo articles/sources and optionally upserts the same admin when those env vars are set.

Run API:

```bash
npm run dev:api
```

Swagger: [http://localhost:3001/api/docs](http://localhost:3001/api/docs)

Articles: `GET http://localhost:3001/api/v1/articles?locale=bn`

### Admin API (JWT)

Protected routes use header: `Authorization: Bearer <access_token>`.

| Method | Path | Auth | Description |
|--------|------|------|-------------|
| `POST` | `/api/v1/admin/auth/bootstrap` | No | One-time: creates first admin if **none** exist. Body: `{ "email", "password", "secret" }` — `secret` must match env **`ADMIN_BOOTSTRAP_SECRET`**. |
| `POST` | `/api/v1/admin/auth/login` | No | `{ "email", "password" }` → `{ access_token, token_type, expires_in, admin }`. |
| `GET` | `/api/v1/admin/articles` | JWT | List articles; optional query `?status=DRAFT\|PUBLISHED\|ALL`. |
| `GET` | `/api/v1/admin/articles/:slug` | JWT | Full article + all translations. |
| `POST` | `/api/v1/admin/articles` | JWT | Create article + translations. |
| `PATCH` | `/api/v1/admin/articles/:slug` | JWT | Update fields / upsert translations. |
| `DELETE` | `/api/v1/admin/articles/:slug` | JWT | Delete article. |
| `GET` | `/api/v1/admin/sources` | JWT | List sources (+ article counts). |
| `POST` | `/api/v1/admin/sources` | JWT | Create source. |
| `PATCH` | `/api/v1/admin/sources/:id` | JWT | Update source. |
| `DELETE` | `/api/v1/admin/sources/:id` | JWT | Delete source (blocked if articles reference it). |
| `GET` | `/api/v1/admin/videos` | JWT | List video embeds (YouTube / Facebook). |
| `POST` | `/api/v1/admin/videos` | JWT | Create video + bilingual titles. |
| `GET` | `/api/v1/admin/videos/:id` | JWT | One video + translations. |
| `PATCH` | `/api/v1/admin/videos/:id` | JWT | Update video / translations. |
| `DELETE` | `/api/v1/admin/videos/:id` | JWT | Delete video. |
| `GET` | `/api/v1/admin/media-items` | JWT | List media URL entries. |
| `POST` | `/api/v1/admin/media-items` | JWT | Create media URL + titles. |
| `GET` | `/api/v1/admin/media-items/:id` | JWT | One entry. |
| `PATCH` | `/api/v1/admin/media-items/:id` | JWT | Update. |
| `DELETE` | `/api/v1/admin/media-items/:id` | JWT | Delete. |
| `GET` | `/api/v1/admin/timeline-events` | JWT | List timeline events. |
| `POST` | `/api/v1/admin/timeline-events` | JWT | Create event + bilingual Markdown body. |
| `GET` | `/api/v1/admin/timeline-events/:id` | JWT | One event. |
| `PATCH` | `/api/v1/admin/timeline-events/:id` | JWT | Update. |
| `DELETE` | `/api/v1/admin/timeline-events/:id` | JWT | Delete. |

Public read APIs (no auth): `GET /api/v1/videos?locale=bn`, `GET /api/v1/media-items?locale=bn`, `GET /api/v1/timeline-events?locale=bn`.

**API env (admin):**

- **`JWT_SECRET`** — long random string in production (signs JWTs).
- **`JWT_EXPIRES_SEC`** — optional; access token lifetime in seconds (default **604800** = 7 days).
- **`ADMIN_BOOTSTRAP_SECRET`** — long random string; required only to use **bootstrap** once.
- **`ADMIN_EMAIL`** / **`ADMIN_PASSWORD`** — optional; if both are set, `npm run db:seed` or `npm run db:seed:admin` upserts that admin (password hash refreshed on each run; useful for CI / first deploy). Run `npm run db:deploy` first if you see Prisma errors about a missing `Admin` table.

### 3. Web (`apps/web`)

Create `apps/web/.env.local` (see [.env.example](.env.example) at repo root):

```bash
NEXT_PUBLIC_API_URL=http://localhost:3001/api/v1
```

Run Next:

```bash
npm run dev:web
```

Open [http://localhost:3000](http://localhost:3000) — `src/proxy.ts` (Next.js 16 proxy + `next-intl`) sends you to **`/bn`**.

---

## Deploy to Vercel (two projects: web + API)

Use **two** Vercel projects from the same repo with different **Root Directory** settings.

| Deploy | URL (production) | Vercel **Root Directory** |
|--------|------------------|---------------------------|
| **Frontend** (Next.js) | [citizen-perspective.vercel.app](https://citizen-perspective.vercel.app/) | `apps/web` |
| **Backend** (NestJS) | [citizen-perspective-backend.vercel.app](https://citizen-perspective-backend.vercel.app/) | `apps/api` (or your API entry layout) |

Install/build for each project should run from the monorepo root where needed (see [`apps/web/vercel.json`](apps/web/vercel.json) for the web app).

### Frontend project (`citizen-perspective`)

**Settings → Environment Variables** (Production / Preview as needed):

| Name | Value |
|------|--------|
| `NEXT_PUBLIC_API_URL` | `https://citizen-perspective-backend.vercel.app/api/v1` |
| `NEXT_PUBLIC_SITE_URL` | `https://citizen-perspective.vercel.app` |

No trailing slash on URLs. Redeploy the frontend after saving.

The browser loads articles from `NEXT_PUBLIC_API_URL` (see [`apps/web/src/lib/api.ts`](apps/web/src/lib/api.ts)).

### Backend project (`citizen-perspective-backend`)

**Settings → Environment Variables** (at minimum):

| Name | Value / notes |
|------|----------------|
| `DATABASE_URL` | Your Neon (or other Postgres) connection string |
| `CORS_ORIGIN` | `https://citizen-perspective.vercel.app` — add `http://localhost:3000` comma-separated for local dev |
| `JWT_SECRET` | Strong random string (required for admin login in production) |
| `ADMIN_BOOTSTRAP_SECRET` | Strong random string (only for first `POST /admin/auth/bootstrap`) |
| `JWT_EXPIRES_SEC` | Optional (default `604800`) |
| `PORT` | Usually set automatically on Vercel; omit or use `3000` per platform docs |

Health check (no `/api/v1` prefix): [https://citizen-perspective-backend.vercel.app/health](https://citizen-perspective-backend.vercel.app/health)

Redeploy the API after changing env vars.

### Database (production)

From your machine or CI with production `DATABASE_URL`:

```bash
npm run db:deploy
npm run db:seed
```

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
