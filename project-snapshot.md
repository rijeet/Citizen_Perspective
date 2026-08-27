# Project Snapshot: BDCP

Generated: 2026-08-16T19:14:12.157Z

Root: `E:\Project Next\BDCP`

## Folder Structure

```
BDCP/
├── .cursor/
│   └── plans/
│       └── governance_tracker_plan_7acac341.plan.md
├── apps/
│   ├── api/
│   │   ├── prisma/
│   │   │   ├── migrations/
│   │   │   │   ├── 20250511170000_init/
│   │   │   │   │   └── migration.sql
│   │   │   │   ├── 20250512120000_admin/
│   │   │   │   │   └── migration.sql
│   │   │   │   ├── 20250515180000_archive_extras/
│   │   │   │   │   └── migration.sql
│   │   │   │   ├── 20260512140000_video_source_tags/
│   │   │   │   │   └── migration.sql
│   │   │   │   ├── 20260512150000_article_media_tags/
│   │   │   │   │   └── migration.sql
│   │   │   │   ├── 20260512170000_breaking_news_items/
│   │   │   │   │   └── migration.sql
│   │   │   │   └── migration_lock.toml
│   │   │   ├── .gitignore
│   │   │   ├── load-env-for-seed.ts
│   │   │   ├── schema.prisma
│   │   │   ├── seed-admin.ts
│   │   │   ├── seed-breaking-news.ts
│   │   │   ├── seed.ts
│   │   │   └── tsconfig.seed.json
│   │   ├── src/
│   │   │   ├── admin/
│   │   │   │   ├── dto/
│   │   │   │   │   ├── admin-article-list-query.dto.ts
│   │   │   │   │   ├── bootstrap.dto.ts
│   │   │   │   │   ├── create-article.dto.ts
│   │   │   │   │   ├── create-breaking-news-item.dto.ts
│   │   │   │   │   ├── create-external-video.dto.ts
│   │   │   │   │   ├── create-media-item.dto.ts
│   │   │   │   │   ├── create-source.dto.ts
│   │   │   │   │   ├── create-timeline-event.dto.ts
│   │   │   │   │   ├── login.dto.ts
│   │   │   │   │   ├── media-item-translation-input.dto.ts
│   │   │   │   │   ├── timeline-translation-input.dto.ts
│   │   │   │   │   ├── translation-input.dto.ts
│   │   │   │   │   ├── update-article.dto.ts
│   │   │   │   │   ├── update-breaking-news-item.dto.ts
│   │   │   │   │   ├── update-external-video.dto.ts
│   │   │   │   │   ├── update-media-item.dto.ts
│   │   │   │   │   ├── update-source.dto.ts
│   │   │   │   │   ├── update-timeline-event.dto.ts
│   │   │   │   │   └── video-translation-input.dto.ts
│   │   │   │   ├── admin-articles.controller.ts
│   │   │   │   ├── admin-articles.service.ts
│   │   │   │   ├── admin-auth.controller.ts
│   │   │   │   ├── admin-auth.service.ts
│   │   │   │   ├── admin-media-items.controller.ts
│   │   │   │   ├── admin-sources.controller.ts
│   │   │   │   ├── admin-sources.service.ts
│   │   │   │   ├── admin-timeline-events.controller.ts
│   │   │   │   ├── admin-videos.controller.ts
│   │   │   │   └── admin.module.ts
│   │   │   ├── archive-content/
│   │   │   │   ├── archive-content.module.ts
│   │   │   │   ├── locale-query.dto.ts
│   │   │   │   ├── locale.util.ts
│   │   │   │   ├── media-items.controller.ts
│   │   │   │   ├── media-items.service.ts
│   │   │   │   ├── timeline-events.controller.ts
│   │   │   │   ├── timeline-events.service.ts
│   │   │   │   ├── videos.controller.ts
│   │   │   │   └── videos.service.ts
│   │   │   ├── articles/
│   │   │   │   ├── dto/
│   │   │   │   │   ├── article-detail-query.dto.ts
│   │   │   │   │   └── article-list-query.dto.ts
│   │   │   │   ├── articles.controller.ts
│   │   │   │   ├── articles.module.ts
│   │   │   │   └── articles.service.ts
│   │   │   ├── auth/
│   │   │   │   ├── admin-jwt.guard.ts
│   │   │   │   ├── auth.module.ts
│   │   │   │   ├── current-admin.decorator.ts
│   │   │   │   ├── jwt-payload.type.ts
│   │   │   │   └── jwt.strategy.ts
│   │   │   ├── breaking-news/
│   │   │   │   ├── admin-breaking-news.controller.ts
│   │   │   │   ├── breaking-news.controller.ts
│   │   │   │   ├── breaking-news.module.ts
│   │   │   │   └── breaking-news.service.ts
│   │   │   ├── health/
│   │   │   │   ├── health.controller.ts
│   │   │   │   └── health.module.ts
│   │   │   ├── prisma/
│   │   │   │   ├── prisma.module.ts
│   │   │   │   └── prisma.service.ts
│   │   │   ├── app.module.ts
│   │   │   ├── load-env.ts
│   │   │   └── main.ts
│   │   ├── test/
│   │   │   ├── app.e2e-spec.ts
│   │   │   └── jest-e2e.json
│   │   ├── .prettierrc
│   │   ├── Dockerfile
│   │   ├── eslint.config.mjs
│   │   ├── nest-cli.json
│   │   ├── package.json
│   │   ├── README.md
│   │   ├── tsconfig.build.json
│   │   └── tsconfig.json
│   └── web/
│       ├── messages/
│       │   ├── bn.json
│       │   └── en.json
│       ├── public/
│       │   ├── file.svg
│       │   ├── globe.svg
│       │   ├── next.svg
│       │   ├── vercel.svg
│       │   └── window.svg
│       ├── src/
│       │   ├── app/
│       │   │   ├── [locale]/
│       │   │   │   ├── about/
│       │   │   │   │   └── page.tsx
│       │   │   │   ├── admin/
│       │   │   │   │   ├── (dashboard)/
│       │   │   │   │   │   ├── articles/
│       │   │   │   │   │   │   ├── [slug]/
│       │   │   │   │   │   │   │   └── edit/
│       │   │   │   │   │   │   │       └── page.tsx
│       │   │   │   │   │   │   ├── new/
│       │   │   │   │   │   │   │   └── page.tsx
│       │   │   │   │   │   │   └── page.tsx
│       │   │   │   │   │   ├── breaking-news/
│       │   │   │   │   │   │   └── page.tsx
│       │   │   │   │   │   ├── media-items/
│       │   │   │   │   │   │   └── page.tsx
│       │   │   │   │   │   ├── sources/
│       │   │   │   │   │   │   └── page.tsx
│       │   │   │   │   │   ├── timeline/
│       │   │   │   │   │   │   └── page.tsx
│       │   │   │   │   │   ├── videos/
│       │   │   │   │   │   │   └── page.tsx
│       │   │   │   │   │   ├── layout.tsx
│       │   │   │   │   │   └── page.tsx
│       │   │   │   │   ├── bootstrap/
│       │   │   │   │   │   └── page.tsx
│       │   │   │   │   ├── login/
│       │   │   │   │   │   └── page.tsx
│       │   │   │   │   └── layout.tsx
│       │   │   │   ├── articles/
│       │   │   │   │   ├── [slug]/
│       │   │   │   │   │   └── page.tsx
│       │   │   │   │   └── page.tsx
│       │   │   │   ├── media/
│       │   │   │   │   └── page.tsx
│       │   │   │   ├── tags/
│       │   │   │   │   └── [tag]/
│       │   │   │   │       └── page.tsx
│       │   │   │   ├── timeline/
│       │   │   │   │   └── page.tsx
│       │   │   │   ├── layout.tsx
│       │   │   │   ├── not-found.tsx
│       │   │   │   └── page.tsx
│       │   │   ├── favicon.ico
│       │   │   ├── globals.css
│       │   │   └── layout.tsx
│       │   ├── components/
│       │   │   ├── admin/
│       │   │   │   ├── AdminGuard.tsx
│       │   │   │   ├── AdminShell.tsx
│       │   │   │   └── ArticleForm.tsx
│       │   │   ├── ArticleCard.tsx
│       │   │   ├── BreakingNewsMarquee.tsx
│       │   │   ├── LanguageToggle.tsx
│       │   │   ├── MarkdownBody.tsx
│       │   │   ├── PublicOnlyChrome.tsx
│       │   │   ├── SiteHeader.tsx
│       │   │   └── VideoFigure.tsx
│       │   ├── i18n/
│       │   │   ├── navigation.ts
│       │   │   ├── request.ts
│       │   │   └── routing.ts
│       │   ├── lib/
│       │   │   ├── admin-api.ts
│       │   │   ├── api.ts
│       │   │   ├── embeds.ts
│       │   │   ├── format-date.ts
│       │   │   └── slug-heading.ts
│       │   └── proxy.ts
│       ├── .gitignore
│       ├── eslint.config.mjs
│       ├── next-env.d.ts
│       ├── next.config.ts
│       ├── package.json
│       ├── postcss.config.mjs
│       ├── README.md
│       ├── tsconfig.json
│       ├── tsconfig.tsbuildinfo
│       └── vercel.json
├── packages/
│   └── shared/
│       ├── src/
│       │   └── index.ts
│       └── package.json
├── .dockerignore
├── .env.example
├── .gitignore
├── docker-compose.yml
├── generate-project-snapshot.js
├── package.json
└── README.md
```

## File Contents

### `.dockerignore`

```
**/node_modules
**/.next
**/dist
**/.git
```

### `.env.example`

```
# Never commit real secrets — copy snippets into local env files.



# ── apps/api/.env (recommended: keep API env next to Nest/Prisma) ───────────

DATABASE_URL="postgresql://archive:archive@localhost:5432/jan_drishthi?schema=public"

PORT=3001

# No trailing slash. Comma-separate for local Next + production web on Vercel.
CORS_ORIGIN=http://localhost:3000,https://citizen-perspective.vercel.app

# Admin JWT (set JWT_SECRET in production; never commit real values)
JWT_SECRET=change-me-to-a-long-random-string-in-production
JWT_EXPIRES_SEC=604800
ADMIN_BOOTSTRAP_SECRET=change-me-bootstrap-secret-one-time-only

# Optional: upsert this admin when you run `npm run db:seed` (full seed) or
# `npm run db:seed:admin` (admin only — does not wipe articles/sources).
# ADMIN_EMAIL=admin@example.com
# ADMIN_PASSWORD=your-secure-password-here



# ── Repo root `.env` (optional) ─────────────────────────────────────────────

# Same keys as `apps/api/.env` if you prefer one file at the monorepo root.
# Prisma CLI (`migrate`, `deploy`, `seed`) loads it via `dotenv-cli` as `../../.env`
# when run from `apps/api` (see `apps/api/package.json` prisma:* scripts).



# ── apps/web/.env.local (Next.js) ───────────────────────────────────────────

NEXT_PUBLIC_API_URL=http://localhost:3001/api/v1

# Production (Vercel web → Vercel API), set in Vercel web project env:
# NEXT_PUBLIC_API_URL=https://citizen-perspective-backend.vercel.app/api/v1
# NEXT_PUBLIC_SITE_URL=https://citizen-perspective.vercel.app


```

### `.gitignore`

```
# Dependencies
node_modules/

# Secrets & local env (never commit)
.env
.env.*
!.env.example

# Builds & caches
.next/
out/
dist/
build/
.turbo/
*.tsbuildinfo

# Test / coverage
coverage/

# OS & logs
.DS_Store
*.log
npm-debug.log*

# IDE
.idea/
.vscode/*
!.vscode/extensions.json

# Vercel
.vercel

# Cursor / local
mcps/
```

### `docker-compose.yml`

```yaml
services:
  postgres:
    image: postgres:16-alpine
    environment:
      POSTGRES_USER: archive
      POSTGRES_PASSWORD: archive
      POSTGRES_DB: jan_drishthi
    ports:
      - "5432:5432"
    volumes:
      - pgdata:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U archive -d jan_drishthi"]
      interval: 5s
      timeout: 5s
      retries: 5

  api:
    build:
      context: .
      dockerfile: apps/api/Dockerfile
    environment:
      DATABASE_URL: postgresql://archive:archive@postgres:5432/jan_drishthi?schema=public
      PORT: 3001
      CORS_ORIGIN: http://localhost:3000
    ports:
      - "3001:3001"
    depends_on:
      postgres:
        condition: service_healthy

  # Uncomment to run Next in Compose (optional — local `pnpm dev:web` is often faster during dev).
  # web:
  #   build:
  #     context: ./apps/web
  #     dockerfile: Dockerfile
  #   environment:
  #     NEXT_PUBLIC_API_URL: http://localhost:3001/api/v1
  #   ports:
  #     - "3000:3000"
  #   depends_on:
  #     - api

volumes:
  pgdata:
```

### `generate-project-snapshot.js`

```javascript
#!/usr/bin/env node
/**
 * generate-project-snapshot.js
 *
 * Walks a project folder, builds a directory tree, and dumps every file's
 * content underneath it into a single Markdown file — useful for sharing
 * your whole project structure + code in one file (e.g. to paste into a
 * chat, or keep as a dated snapshot).
 *
 * USAGE:
 *   node generate-project-snapshot.js [rootPath] [outputFile]
 *
 * EXAMPLES:
 *   node generate-project-snapshot.js
 *   node generate-project-snapshot.js . snapshot.md
 *   node generate-project-snapshot.js "E:\Project Next\Personal Digital Document Vault\document-vault" project-snapshot.md
 *
 * Defaults:
 *   rootPath   = current directory (".")
 *   outputFile = "project-snapshot.md"
 */

const fs = require('fs');
const path = require('path');

// ── Config ────────────────────────────────────────────────────────────────

const rootPath = path.resolve(process.argv[2] || '.');
const outputFile = path.resolve(process.argv[3] || 'project-snapshot.md');

// Folders to skip entirely (never descend into these)
const IGNORE_DIRS = new Set([
  'node_modules',
  '.git',
  'dist',
  'build',
  '.next',
  '.turbo',
  'coverage',
  '.vscode',
  '.idea',
  'venv',
  '.venv',
  'Code to Chunk',
  'BulkData',
  '__pycache__',
]);

// Files to skip entirely — not shown in the tree, not dumped
const IGNORE_FILES = new Set([
  '.env',
  '.env.local',
  '.env.development',
  '.env.production',
  '.env.test',
  'package-lock.json',
  'yarn.lock',
  'pnpm-lock.yaml',
]);

// Binary / non-text extensions — skip content dump, just note the file
const BINARY_EXTENSIONS = new Set([
  '.png', '.jpg', '.jpeg', '.gif', '.webp', '.ico', '.bmp',
  '.pdf', '.zip', '.rar', '.7z', '.exe', '.dll', '.so',
  '.woff', '.woff2', '.ttf', '.eot',
  '.mp3', '.mp4', '.mov', '.avi',
]);

// Map file extensions to Markdown code-fence language tags
const LANG_MAP = {
  '.ts': 'typescript',
  '.tsx': 'tsx',
  '.js': 'javascript',
  '.jsx': 'jsx',
  '.json': 'json',
  '.md': 'markdown',
  '.yml': 'yaml',
  '.yaml': 'yaml',
  '.html': 'html',
  '.css': 'css',
  '.scss': 'scss',
  '.sql': 'sql',
  '.sh': 'bash',
  '.ps1': 'powershell',
  '.env': 'env',
};

// ── Helpers ───────────────────────────────────────────────────────────────

function getLang(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return LANG_MAP[ext] || '';
}

function isBinary(filePath) {
  return BINARY_EXTENSIONS.has(path.extname(filePath).toLowerCase());
}

/** Recursively collect { dirs, files } respecting ignore rules, sorted. */
function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const dirs = [];
  const files = [];

  for (const entry of entries.sort((a, b) => a.name.localeCompare(b.name))) {
    if (entry.name.startsWith('.') && entry.name !== '.env') {
      // still allow dotfiles like .gitignore to show, just skip noisy ones
      if (IGNORE_DIRS.has(entry.name)) continue;
    }
    if (entry.isDirectory()) {
      if (IGNORE_DIRS.has(entry.name)) continue;
      dirs.push(entry.name);
    } else {
      if (IGNORE_FILES.has(entry.name)) continue;
      files.push(entry.name);
    }
  }
  return { dirs, files };
}

/** Build the visual tree text (like the `tree` command). */
function buildTree(dir, prefix = '') {
  let output = '';
  const { dirs, files } = walk(dir);
  const items = [
    ...dirs.map((d) => ({ name: d, isDir: true })),
    ...files.map((f) => ({ name: f, isDir: false })),
  ];

  items.forEach((item, index) => {
    const isLast = index === items.length - 1;
    const connector = isLast ? '└── ' : '├── ';
    output += `${prefix}${connector}${item.name}${item.isDir ? '/' : ''}\n`;

    if (item.isDir) {
      const nextPrefix = prefix + (isLast ? '    ' : '│   ');
      output += buildTree(path.join(dir, item.name), nextPrefix);
    }
  });

  return output;
}

/** Recursively collect all file paths (relative to rootPath), in tree order. */
function collectFiles(dir, relBase = '') {
  const { dirs, files } = walk(dir);
  let result = [];

  for (const f of files) {
    result.push(path.join(relBase, f));
  }
  for (const d of dirs) {
    result = result.concat(collectFiles(path.join(dir, d), path.join(relBase, d)));
  }
  return result;
}

// ── Main ──────────────────────────────────────────────────────────────────

function main() {
  if (!fs.existsSync(rootPath)) {
    console.error(`Path does not exist: ${rootPath}`);
    process.exit(1);
  }

  const projectName = path.basename(rootPath);
  const timestamp = new Date().toISOString();

  let md = `# Project Snapshot: ${projectName}\n\n`;
  md += `Generated: ${timestamp}\n\n`;
  md += `Root: \`${rootPath}\`\n\n`;

  // ── Tree section ──
  md += `## Folder Structure\n\n`;
  md += '```\n';
  md += `${projectName}/\n`;
  md += buildTree(rootPath);
  md += '```\n\n';

  // ── File contents section ──
  md += `## File Contents\n\n`;

  const allFiles = collectFiles(rootPath);

  for (const relFile of allFiles) {
    const fullPath = path.join(rootPath, relFile);
    const displayPath = relFile.split(path.sep).join('/');

    md += `### \`${displayPath}\`\n\n`;

    if (isBinary(relFile)) {
      md += `_Binary file — content not included._\n\n`;
      continue;
    }
    let content;
    try {
      content = fs.readFileSync(fullPath, 'utf8');
    } catch (err) {
      md += `_Could not read file: ${err.message}_\n\n`;
      continue;
    }

    const lang = getLang(relFile);
    md += '```' + lang + '\n';
    md += content;
    if (!content.endsWith('\n')) md += '\n';
    md += '```\n\n';
  }

  fs.writeFileSync(outputFile, md, 'utf8');
  console.log(`✅ Snapshot written to: ${outputFile}`);
  console.log(`   Files included: ${allFiles.length}`);
}

main();
```

### `package.json`

```json
{
  "name": "jan-drishthi-archive",
  "private": true,
  "workspaces": [
    "apps/*",
    "packages/*"
  ],
  "scripts": {
    "dev:web": "npm run dev -w web",
    "dev:api": "npm run start:dev -w api",
    "build": "npm run build --workspaces --if-present",
    "db:migrate": "npm run prisma:migrate -w api",
    "prisma:deploy": "npm run prisma:deploy -w api",
    "db:seed": "npm run prisma:seed -w api",
    "db:seed:admin": "npm run prisma:seed:admin -w api",
    "db:deploy": "npm run prisma:deploy -w api"
  }
}
```

### `README.md`

```markdown
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
```

### `.cursor/plans/governance_tracker_plan_7acac341.plan.md`

```markdown
---
name: Governance Tracker Plan
overview: Extend the existing BDCP monorepo (NestJS + Next.js + bn/en i18n) with new Incident, News Item, Government Investigation, and Featured Banner domains while keeping the measles archive. Extend Article with HTML editorial support. Build in six phases matching your spec.
todos:
  - id: phase1-schema
    content: "Phase 1: Prisma models (Category, Subcategory, Incident) + migration + seed + categories/incidents admin API & UI"
    status: pending
  - id: phase2-news-items
    content: "Phase 2: NewsItem model, add-to-incident flow, stage auto-update, incident detail timeline page"
    status: pending
  - id: phase3-metadata
    content: "Phase 3: POST /admin/fetch-metadata (oEmbed + OG) wired to Add News Item form + stage suggest"
    status: pending
  - id: phase4-homepage
    content: "Phase 4: Homepage category grid, incident feed/cards, category filter, sort by updatedAt"
    status: pending
  - id: phase5-investigations
    content: "Phase 5: GovernmentInvestigation enums/models, admin CRUD, public investigations page with stalled callout"
    status: pending
  - id: phase6-banner-editorial
    content: "Phase 6: FeaturedBanner CRUD + homepage strip; Article contentType/bodyHtml + HtmlBody renderer"
    status: pending
isProject: false
---

# Governance Accountability Tracker — Implementation Plan

## Current state vs target

BDCP today is a **bilingual measles media archive** ([`apps/api/prisma/schema.prisma`](apps/api/prisma/schema.prisma), [`apps/web/src/app/[locale]/`](apps/web/src/app/[locale]/)). It has solid foundations you reuse as-is:

| Capability | Status | Reuse |
|------------|--------|-------|
| Admin JWT auth (login, bootstrap, guard) | Done | [`apps/api/src/admin/`](apps/api/src/admin/), [`AdminGuard.tsx`](apps/web/src/components/admin/AdminGuard.tsx) |
| bn/en routing (`/[locale]/`, default `bn`) | Done | [`apps/web/src/i18n/`](apps/web/src/i18n/), [`messages/bn.json`](apps/web/messages/bn.json) |
| Translation pattern (entity + `*Translation` rows) | Done | Article, TimelineEvent, etc. |
| `EmbedPlatform` enum (`YOUTUBE`, `FACEBOOK`) | Done | Extend for News Item `sourceType` |
| `ReviewStatus` draft/publish | Done | Optional on new public entities |
| Breaking news ticker | Done | [`BreakingNewsItem`](apps/api/prisma/schema.prisma) — **keep** (different from Featured Banner) |
| Article CMS (markdown) | Done | Extend for editorial HTML (your choice) |
| Public cards, homepage grid | Partial | [`ArticleCard`](apps/web/src/components/ArticleCard.tsx) — pattern for new `IncidentCard` |

**Nothing in the repo yet** maps to Incident threads, linked News Items, category taxonomy CRUD, Government Investigation enums, Featured Banner cards, or URL metadata fetch.

```mermaid
flowchart TB
  subgraph existing [Existing BDCP]
    Article
    BreakingNewsItem
    TimelineEvent
    ExternalVideo
    MediaItem
  end
  subgraph new_domain [New Governance Domain]
    Category --> Subcategory
    Category --> Incident
    Subcategory --> Incident
    Incident --> NewsItem
    Incident -. optional .-> GovInvestigation
    GovInvestigation --> GovInvestigationUpdate
    FeaturedBanner
  end
  subgraph extended [Extended]
    Article -->|"contentType MARKDOWN or HTML"| EditorialHTML
  end
```

---

## Gap analysis (spec section → status)

| Spec requirement | Gap | Notes |
|------------------|-----|-------|
| **2.1 Incident** (title, category, subcategory, linked news, derived stage/status) | **Full gap** | No model, API, or UI |
| **2.2 News Item** (URL, source type, headline, thumbnail, date, stage, status) | **Full gap** | Not the same as `Article` or `ExternalVideo` |
| **2.3 Stage auto-update** | **Full gap** | Service-layer rule on News Item create |
| **2.4 Government Investigation** (fixed enums, optional incident link) | **Full gap** | |
| **2.5 Featured Banner** (image, text, section type, prepend order) | **Full gap** | `BreakingNewsItem` is text ticker only; homepage “featured” is `articles[0]` hack in [`page.tsx`](apps/web/src/app/[locale]/page.tsx) |
| **3 Metadata auto-fetch** (`POST /admin/fetch-metadata`) | **Full gap** | No oEmbed/OG endpoint |
| **4.1 Homepage** (banner, category counts, incident feed, filter) | **Full gap** | Current homepage is article/timeline focused |
| **4.2 Incident detail + timeline** | **Full gap** | Closest: [`articles/[slug]`](apps/web/src/app/[locale]/articles/[slug]/page.tsx) |
| **4.3 Government Investigation page** | **Full gap** | |
| **5 Admin CRUD** (categories, incidents, investigations, banners) | **Partial** | Auth + admin shell exist; new nav sections needed |
| **6.5 Editorial HTML posts** | **Partial** | `ArticleTranslation.bodyMd` + `MarkdownBody`; needs `contentType` + `bodyHtml` + `HtmlBody` renderer |
| **bn/en everywhere** | **Pattern exists** | Apply dual headlines (your choice) + bilingual incident/category titles |

**Intentionally unchanged (coexist):** `/articles`, `/media`, `/timeline`, `/tags`, breaking ticker, videos, media URLs, sources admin.

---

## Data model (new Prisma models)

Add to [`schema.prisma`](apps/api/prisma/schema.prisma). Follow existing `Locale` + translation-table conventions.

### Taxonomy

```prisma
model Category {
  id            String
  slug          String @unique
  sortOrder     Int @default(0)
  translations  CategoryTranslation[]   // name per locale
  subcategories Subcategory[]
  incidents     Incident[]
}

model Subcategory {
  id           String
  categoryId   String
  slug         String
  translations SubcategoryTranslation[]
  incidents    Incident[]
  @@unique([categoryId, slug])
}
```

### Incidents + News Items

```prisma
enum NewsSourceType { YOUTUBE ARTICLE FACEBOOK }

model Incident {
  id              String
  slug            String @unique
  categoryId      String
  subcategoryId   String?
  currentStage    String          // derived from latest NewsItem
  currentStatus   String?         // derived
  reviewStatus    ReviewStatus
  createdAt       updatedAt
  translations    IncidentTranslation[]  // titleBn/titleEn via locale rows
  newsItems       NewsItem[]
  investigations  GovernmentInvestigation[]
}

model NewsItem {
  id            String
  incidentId    String
  sourceUrl     String
  sourceType    NewsSourceType
  headlineBn    String          // dual headline (your choice)
  headlineEn    String
  thumbnailUrl  String?
  publishedAt   DateTime?
  stage         String          // free text
  status        String?
  createdAt     // sequence = createdAt ASC
}
```

**Derived fields rule:** In `NewsItemsService.create()`, after insert, set `incident.currentStage = newsItem.stage`, `incident.currentStatus = newsItem.status`, bump `incident.updatedAt`.

**Public sort:** incidents `ORDER BY updatedAt DESC` (bubbles on new follow-up).

### Government Investigation

```prisma
enum GovInvestigationStage {
  INCIDENT_OCCURRED
  INVESTIGATION_PROMISED
  COMMITTEE_FORMED
  INVESTIGATION_ONGOING
  REPORT_SUBMITTED
  ACTION_TAKEN
  CLOSED_NO_ACTION
  CLOSED_RESOLVED
}

enum GovInvestigationStatus {
  ON_TRACK
  DELAYED
  STALLED
  RESOLVED
}

model GovernmentInvestigation {
  id              String
  incidentId      String?              // optional link
  currentStage    GovInvestigationStage
  currentStatus   GovInvestigationStatus
  translations    GovInvestigationTranslation[]
  updates         GovernmentInvestigationUpdate[]
}

model GovernmentInvestigationUpdate {
  id              String
  investigationId String
  sourceUrl       String
  sourceType      NewsSourceType
  headlineBn      headlineEn
  thumbnailUrl    publishedAt
  stage           GovInvestigationStage
  status          GovInvestigationStatus
  createdAt
}
```

**Computed (API, not stored):** `daysSinceLastUpdate` on list endpoints for stalled callouts.

**Label i18n:** Enum labels in [`messages/bn.json`](apps/web/messages/bn.json) / `en.json` (not DB), same pattern as `ReviewStatus` UI labels.

### Featured Banner

```prisma
model FeaturedBanner {
  id          String
  imageUrl    String
  captionBn   String
  captionEn   String
  sectionType String          // e.g. "Breaking", "Editor's Pick"
  createdAt   // sort DESC = prepend behavior
}
```

### Article extension (editorial HTML)

On `Article`:

```prisma
enum ArticleContentType { MARKDOWN HTML }
// Article.contentType ArticleContentType @default(MARKDOWN)
```

On `ArticleTranslation`:

```prisma
// bodyMd String? @db.Text   — required when contentType=MARKDOWN
// bodyHtml String? @db.Text — required when contentType=HTML
```

Admin form: toggle content type; public [`articles/[slug]/page.tsx`](apps/web/src/app/[locale]/articles/[slug]/page.tsx) renders `MarkdownBody` or new `HtmlBody` (`dangerouslySetInnerHTML`) based on type. SEO: use existing `seoDescription` for meta.

Shared types: extend [`packages/shared/src/index.ts`](packages/shared/src/index.ts) with enums used by both API DTOs and web.

---

## API surface (NestJS modules)

Mirror existing module layout ([`articles.module.ts`](apps/api/src/articles/articles.module.ts), [`admin-articles.controller.ts`](apps/api/src/admin/admin-articles.controller.ts)).

| Module | Public routes | Admin routes |
|--------|---------------|--------------|
| `categories` | `GET /categories` (with counts) | CRUD `/admin/categories`, `/admin/subcategories` |
| `incidents` | `GET /incidents`, `GET /incidents/:slug` | CRUD + `POST /incidents/:id/news-items` |
| `gov-investigations` | `GET /gov-investigations`, `GET /gov-investigations/:id` | CRUD + updates |
| `featured-banners` | `GET /featured-banners` | CRUD |
| `metadata` | — | `POST /admin/fetch-metadata { url }` |

**`fetch-metadata` implementation** ([`apps/api/src/admin/`](apps/api/src/admin/)):
1. Detect `sourceType` from URL host
2. YouTube → `https://www.youtube.com/oembed?url=...&format=json`
3. Article → server-side fetch + cheerio/regex for `og:title`, `og:image`, `article:published_time`
4. Facebook → `facebook.com/plugins/post/oembed.json/?url=...` (best-effort)
5. Return `{ sourceType, headline, imageUrl, publishedDate }` — admin form maps `headline` into both bn/en fields for admin to edit/translate

Guard with `AdminJwtGuard`. Timeout + user-agent; never block save on fetch failure.

**Stage autocomplete (spec open question):** `GET /admin/stages/suggest?q=` aggregating distinct `NewsItem.stage` values — Phase 3 polish.

---

## Web (Next.js) — public pages

Add routes under [`apps/web/src/app/[locale]/`](apps/web/src/app/[locale]/):

| Route | Purpose |
|-------|---------|
| `/` (extend) | Add governance section: Featured Banner strip + category count grid + incident feed; keep existing article/timeline blocks below or in tabs |
| `/incidents` | Full incident list with `?category=slug` filter |
| `/incidents/[slug]` | Timeline of News Items; “Latest Update” badge on most recent |
| `/investigations` | Gov investigation cards with colored stage/status badges + stalled callout |
| `/investigations/[id]` | Update timeline (enum labels) |

**New components** (reuse styling from `ArticleCard` / archive theme):
- `FeaturedBannerStrip` — horizontal scroll, `createdAt DESC`
- `CategoryCountGrid` — card per category with incident count from API
- `IncidentCard` — latest news thumbnail, dual headline by locale, stage/status badges, source icon
- `NewsItemTimeline` — vertical timeline with platform icons (newspaper / YouTube / Facebook)
- `GovInvestigationCard` — enum badges with locale labels
- `SourcePlatformIcon` — shared icon helper
- `HtmlBody` — raw HTML renderer for editorial articles

**Nav:** Add `incidents`, `investigations` to [`SiteHeader`](apps/web/src/components/SiteHeader.tsx) and [`messages/*.json`](apps/web/messages/). Keep existing archive links.

**Homepage featured articles:** Replace `articles[0]` hack with `FeaturedBanner` API; keep “latest articles” grid for archive/editorial content.

---

## Admin panel additions

Extend [`AdminShell.tsx`](apps/web/src/components/admin/AdminShell.tsx) nav:

- Categories / Subcategories
- Incidents (+ inline “Add News Item” on detail)
- Government Investigations
- Featured Banners
- Articles (existing — add content type toggle)

**Add News Item flow:**
1. Paste URL → blur → `POST /admin/fetch-metadata`
2. Pre-fill thumbnail, date, headline (copy to bn; admin fills en)
3. Admin edits stage (free text + suggest), status, both headlines
4. Save → triggers incident stage/status update

**Article form:** [`ArticleForm.tsx`](apps/web/src/components/admin/ArticleForm.tsx) — add `contentType` radio; show `bodyMd` textarea OR `bodyHtml` textarea per locale.

---

## Build phases (mapped to your spec + coexist)

### Phase 1 — Foundation
- Prisma migration: `Category`, `Subcategory`, `Incident`, `IncidentTranslation`
- Nest: categories admin CRUD + public list with counts
- Nest/Web: incidents admin create/list (manual fields only, no news items yet)
- Public: basic `/incidents` list (no filter yet)
- Seed: sample governance categories (Homicide, Corruption, etc.) bn/en
- **No changes** to existing archive seed data beyond additive rows

### Phase 2 — Linking and timeline
- Prisma: `NewsItem`
- Admin: add news item to incident (manual entry)
- Service: stage auto-update rule (2.3)
- Public: `/incidents/[slug]` timeline view
- `Incident.updatedAt` sort on list

### Phase 3 — Auto-fetch metadata
- `POST /admin/fetch-metadata` endpoint
- Wire into Add News Item form
- `GET /admin/stages/suggest` (optional autocomplete)
- Platform icons on cards

### Phase 4 — Dashboard polish
- Homepage: category grid + click-to-filter (`?category=`)
- `IncidentCard` with latest thumbnail
- Enable or stub hero search for incidents (API `q` on headline/stage)
- Reuse card styling across homepage, incident page, banners

### Phase 5 — Government Investigation tracker
- Prisma enums + models + admin CRUD
- Public `/investigations` with badge colors + `daysSinceLastUpdate` stalled callout
- Optional link to incident on admin form

### Phase 6 — Featured Banner + Editorial HTML
- `FeaturedBanner` CRUD + homepage strip
- Article `contentType` + `bodyHtml` migration + admin toggle + `HtmlBody` public render
- Update meta/brand copy in `messages/*.json` to reflect dual mission (archive + accountability) without removing archive routes

---

## Bilingual strategy (bn/en)

| Entity | Approach |
|--------|----------|
| Category / Subcategory / Incident title | `*Translation` rows (`locale` + `title`) — same as Article |
| News Item headline | **Dual fields** `headlineBn` + `headlineEn` on row (your choice); public picks by `locale` |
| Gov investigation title | Translation table |
| Featured Banner caption | `captionBn` + `captionEn` (like `BreakingNewsItem`) |
| Enum labels (gov stage/status) | UI strings in `messages/bn.json` / `en.json` |
| Editorial Article | Per-locale `bodyMd` or `bodyHtml` in `ArticleTranslation` |
| Auto-fetch | Returns one headline → pre-fill bn; admin translates en |

---

## Minor decisions (defaults unless you object)

- **Incident slug:** Auto from bn title + manual override in admin (same as article slugs)
- **Breaking ticker vs Featured Banner:** Keep both — ticker for text headlines, banner for image cards
- **ReviewStatus on incidents:** Default `PUBLISHED`; admin can draft before public
- **HTML sanitization:** Skip for v1 single-admin; document risk in admin UI
- **OG scrape failures:** Form always submittable with manual fields
- **Existing `TimelineEvent`:** Unchanged; not merged into Incident (coexist)

---

## Files touched (high level)

**API:** [`schema.prisma`](apps/api/prisma/schema.prisma), new modules under `apps/api/src/{categories,incidents,gov-investigations,featured-banners,metadata}/`, register in [`app.module.ts`](apps/api/src/app.module.ts), [`seed.ts`](apps/api/prisma/seed.ts)

**Web:** new `app/[locale]/incidents/`, `investigations/`, components under `components/governance/`, admin pages under `admin/(dashboard)/`, [`admin-api.ts`](apps/web/src/lib/admin-api.ts), [`api.ts`](apps/web/src/lib/api.ts), [`messages/bn.json`](apps/web/messages/bn.json) + `en.json`

**Shared:** [`packages/shared`](packages/shared/src/index.ts) enums

---

## Risk / dependency notes

- Regional newspaper OG scraping may fail server-side (anti-bot) — manual fallback is required from day one
- Facebook oEmbed is brittle without Graph API — treat as best-effort
- YouTube oEmbed gives no publish date — admin must enter date (or future YouTube Data API key)
- Coexist means homepage may get long — consider a clear visual split: “Accountability Tracker” section above “Media Archive” section
```

### `apps/api/.prettierrc`

```
{
  "singleQuote": true,
  "trailingComma": "all"
}
```

### `apps/api/Dockerfile`

```
FROM node:22-alpine AS builder

WORKDIR /workspace

COPY package.json package-lock.json ./
COPY packages/shared ./packages/shared
COPY apps/api ./apps/api

RUN npm ci
RUN npm run build -w api

FROM node:22-alpine

WORKDIR /workspace

ENV NODE_ENV=production

COPY package.json package-lock.json ./
COPY packages/shared ./packages/shared
COPY apps/api ./apps/api

RUN npm ci --omit=dev

COPY --from=builder /workspace/apps/api/dist ./apps/api/dist
COPY --from=builder /workspace/node_modules/.prisma ./node_modules/.prisma

EXPOSE 3001

CMD ["sh", "-c", "cd apps/api && npx prisma migrate deploy && NODE_PATH=/workspace/node_modules node dist/src/main.js"]
```

### `apps/api/eslint.config.mjs`

```
// @ts-check
import eslint from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['eslint.config.mjs'],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  eslintPluginPrettierRecommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      sourceType: 'commonjs',
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-floating-promises': 'warn',
      '@typescript-eslint/no-unsafe-argument': 'warn',
      "prettier/prettier": ["error", { endOfLine: "auto" }],
    },
  },
);
```

### `apps/api/nest-cli.json`

```json
{
  "$schema": "https://json.schemastore.org/nest-cli",
  "collection": "@nestjs/schematics",
  "sourceRoot": "src",
  "compilerOptions": {
    "deleteOutDir": true
  }
}
```

### `apps/api/package.json`

```json
{
  "name": "api",
  "version": "0.0.1",
  "description": "",
  "author": "",
  "private": true,
  "license": "UNLICENSED",
  "scripts": {
    "build": "prisma generate && nest build",
    "format": "prettier --write \"src/**/*.ts\" \"test/**/*.ts\"",
    "start": "nest start",
    "start:dev": "nest start --watch",
    "start:debug": "nest start --debug --watch",
    "start:prod": "node dist/src/main",
    "prisma:generate": "prisma generate",
    "prisma:migrate": "dotenv -e ../../.env -e .env -- prisma migrate dev",
    "prisma:deploy": "dotenv -e ../../.env -e .env -- prisma migrate deploy",
    "prisma:seed": "dotenv -e ../../.env -e .env -- prisma db seed",
    "prisma:seed:breaking": "dotenv -e ../../.env -e .env -- ts-node --project prisma/tsconfig.seed.json prisma/seed-breaking-news.ts",
    "prisma:seed:admin": "dotenv -e ../../.env -e .env -- ts-node --project prisma/tsconfig.seed.json prisma/seed-admin.ts",
    "lint": "eslint \"{src,apps,libs,test}/**/*.ts\" --fix",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:cov": "jest --coverage",
    "test:debug": "node --inspect-brk -r tsconfig-paths/register -r ts-node/register node_modules/.bin/jest --runInBand",
    "test:e2e": "jest --config ./test/jest-e2e.json"
  },
  "dependencies": {
    "@jan-drishthi/shared": "^0.0.1",
    "@nestjs/common": "^11.0.1",
    "@nestjs/config": "^4.0.4",
    "@nestjs/core": "^11.0.1",
    "@nestjs/jwt": "^11.0.2",
    "@nestjs/passport": "^11.0.5",
    "@nestjs/platform-express": "^11.0.1",
    "@nestjs/swagger": "^11.4.2",
    "@nestjs/throttler": "^6.5.0",
    "@prisma/client": "5.22.0",
    "bcrypt": "^6.0.0",
    "class-transformer": "^0.5.1",
    "class-validator": "^0.15.1",
    "dotenv": "^17.4.1",
    "passport": "^0.7.0",
    "passport-jwt": "^4.0.1",
    "prisma": "5.22.0",
    "reflect-metadata": "^0.2.2",
    "rxjs": "^7.8.1"
  },
  "devDependencies": {
    "@eslint/eslintrc": "^3.2.0",
    "@eslint/js": "^9.18.0",
    "@nestjs/cli": "^11.0.0",
    "@nestjs/schematics": "^11.0.0",
    "@nestjs/testing": "^11.0.1",
    "@types/bcrypt": "^6.0.0",
    "@types/express": "^5.0.0",
    "@types/jest": "^30.0.0",
    "@types/node": "^22.10.7",
    "@types/passport-jwt": "^4.0.1",
    "@types/supertest": "^6.0.2",
    "dotenv-cli": "^11.0.0",
    "eslint": "^9.18.0",
    "eslint-config-prettier": "^10.0.1",
    "eslint-plugin-prettier": "^5.2.2",
    "globals": "^16.0.0",
    "jest": "^30.0.0",
    "prettier": "^3.4.2",
    "source-map-support": "^0.5.21",
    "supertest": "^7.0.0",
    "ts-jest": "^29.2.5",
    "ts-loader": "^9.5.2",
    "ts-node": "^10.9.2",
    "tsconfig-paths": "^4.2.0",
    "typescript": "^5.7.3",
    "typescript-eslint": "^8.20.0"
  },
  "prisma": {
    "seed": "ts-node --project prisma/tsconfig.seed.json prisma/seed.ts"
  },
  "jest": {
    "moduleFileExtensions": [
      "js",
      "json",
      "ts"
    ],
    "rootDir": "src",
    "testRegex": ".*\\.spec\\.ts$",
    "transform": {
      "^.+\\.(t|j)s$": "ts-jest"
    },
    "collectCoverageFrom": [
      "**/*.(t|j)s"
    ],
    "coverageDirectory": "../coverage",
    "testEnvironment": "node"
  }
}
```

### `apps/api/README.md`

```markdown
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ pnpm install
```

## Compile and run the project

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Run tests

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ pnpm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
```

### `apps/api/tsconfig.build.json`

```json
{
  "extends": "./tsconfig.json",
  "exclude": ["node_modules", "test", "dist", "**/*spec.ts"]
}
```

### `apps/api/tsconfig.json`

```json
{
  "compilerOptions": {
    "module": "nodenext",
    "moduleResolution": "nodenext",
    "resolvePackageJsonExports": true,
    "esModuleInterop": true,
    "isolatedModules": true,
    "declaration": true,
    "removeComments": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "allowSyntheticDefaultImports": true,
    "target": "ES2023",
    "sourceMap": true,
    "outDir": "./dist",
    "baseUrl": "./",
    "incremental": true,
    "skipLibCheck": true,
    "strictNullChecks": true,
    "forceConsistentCasingInFileNames": true,
    "noImplicitAny": true,
    "strictBindCallApply": true,
    "noFallthroughCasesInSwitch": true
  }
}
```

### `apps/api/prisma/.gitignore`

```
# Local SQLite when DATABASE_URL uses file: (dev only)
*.db
*.db-journal

# If someone copies env next to schema — root .env is canonical
.env
.env.local
.env.*.local
```

### `apps/api/prisma/load-env-for-seed.ts`

```typescript
import { configDotenv } from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';

/**
 * Load `.env` for Prisma seed scripts. Prefer `configDotenv` so a global
 * `DOTENV_KEY` does not skip plain `.env`. Stops once `DATABASE_URL` is set.
 */
export function loadEnvForSeed(): void {
  const envCandidates = [
    path.join(process.cwd(), '.env'),
    path.join(process.cwd(), '..', '..', '.env'),
    path.join(__dirname, '..', '.env'),
    path.join(__dirname, '..', '..', '.env'),
  ];
  for (const envPath of envCandidates) {
    if (fs.existsSync(envPath)) {
      configDotenv({ path: envPath, quiet: true });
      if (process.env.DATABASE_URL) break;
    }
  }
}
```

### `apps/api/prisma/schema.prisma`

```
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

enum ReviewStatus {
  DRAFT
  PUBLISHED
}

enum Locale {
  bn
  en
}

enum EmbedPlatform {
  YOUTUBE
  FACEBOOK
}

model Admin {
  id           String   @id @default(cuid())
  email        String   @unique
  passwordHash String
  createdAt    DateTime @default(now())
  updatedAt    DateTime @updatedAt
}

model BreakingNewsItem {
  id        String   @id @default(cuid())
  sortOrder Int      @default(0)
  active    Boolean  @default(true)
  titleBn   String
  titleEn   String
  href      String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@index([active, sortOrder])
}

model Source {
  id        String          @id @default(cuid())
  name      String
  url       String?
  createdAt DateTime        @default(now())
  articles  Article[]
  videos    ExternalVideo[]
}

model Article {
  id           String               @id @default(cuid())
  slug         String               @unique
  publishedAt  DateTime?
  coverUrl     String?
  category     String?
  tags         String[]             @default([])
  sourceId     String
  source       Source               @relation(fields: [sourceId], references: [id], onDelete: Restrict)
  reviewStatus ReviewStatus         @default(PUBLISHED)
  createdAt    DateTime             @default(now())
  updatedAt    DateTime             @updatedAt
  translations ArticleTranslation[]

  @@index([publishedAt(sort: Desc)])
  @@index([reviewStatus])
}

model ArticleTranslation {
  id             String   @id @default(cuid())
  articleId      String
  article        Article  @relation(fields: [articleId], references: [id], onDelete: Cascade)
  locale         Locale
  title          String
  description    String?
  bodyMd         String   @db.Text
  seoTitle       String?
  seoDescription String?  @db.Text

  @@unique([articleId, locale])
  @@index([locale])
}

model ExternalVideo {
  id           String                     @id @default(cuid())
  platform     EmbedPlatform
  watchUrl     String
  publishedAt  DateTime?
  reviewStatus ReviewStatus               @default(PUBLISHED)
  sourceId     String?
  source       Source?                    @relation(fields: [sourceId], references: [id], onDelete: SetNull)
  tags         String[]                   @default([])
  createdAt    DateTime                   @default(now())
  updatedAt    DateTime                   @updatedAt
  translations ExternalVideoTranslation[]

  @@index([publishedAt(sort: Desc)])
  @@index([reviewStatus])
  @@index([sourceId])
}

model ExternalVideoTranslation {
  id          String        @id @default(cuid())
  videoId     String
  video       ExternalVideo @relation(fields: [videoId], references: [id], onDelete: Cascade)
  locale      Locale
  title       String
  description String?       @db.Text

  @@unique([videoId, locale])
  @@index([locale])
}

model MediaItem {
  id           String                 @id @default(cuid())
  mediaUrl     String
  publishedAt  DateTime?
  reviewStatus ReviewStatus           @default(PUBLISHED)
  tags         String[]               @default([])
  createdAt    DateTime               @default(now())
  updatedAt    DateTime               @updatedAt
  translations MediaItemTranslation[]

  @@index([publishedAt(sort: Desc)])
  @@index([reviewStatus])
}

model MediaItemTranslation {
  id          String    @id @default(cuid())
  mediaItemId String
  mediaItem   MediaItem @relation(fields: [mediaItemId], references: [id], onDelete: Cascade)
  locale      Locale
  title       String
  caption     String?   @db.Text

  @@unique([mediaItemId, locale])
  @@index([locale])
}

model TimelineEvent {
  id           String                    @id @default(cuid())
  eventAt      DateTime
  reviewStatus ReviewStatus              @default(PUBLISHED)
  createdAt    DateTime                  @default(now())
  updatedAt    DateTime                  @updatedAt
  translations TimelineEventTranslation[]

  @@index([eventAt])
  @@index([reviewStatus])
}

model TimelineEventTranslation {
  id       String         @id @default(cuid())
  eventId  String
  event    TimelineEvent  @relation(fields: [eventId], references: [id], onDelete: Cascade)
  locale   Locale
  title    String
  bodyMd   String         @db.Text

  @@unique([eventId, locale])
  @@index([locale])
}
```

### `apps/api/prisma/seed-admin.ts`

```typescript
import * as bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';
import { loadEnvForSeed } from './load-env-for-seed';

loadEnvForSeed();

const prisma = new PrismaClient();

async function main() {
  const adminEmail = process.env.ADMIN_EMAIL?.trim();
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminEmail || !adminPassword) {
    console.error(
      'Set ADMIN_EMAIL and ADMIN_PASSWORD (e.g. in apps/api/.env or repo root .env), then run: npm run db:seed:admin',
    );
    process.exit(1);
  }

  const passwordHash = await bcrypt.hash(adminPassword, 10);
  await prisma.admin.upsert({
    where: { email: adminEmail },
    update: { passwordHash },
    create: { email: adminEmail, passwordHash },
  });
  console.log(`Admin upserted: ${adminEmail}`);
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    void prisma.$disconnect();
    process.exit(1);
  });
```

### `apps/api/prisma/seed-breaking-news.ts`

```typescript
import { PrismaClient } from '@prisma/client';
import { loadEnvForSeed } from './load-env-for-seed';

loadEnvForSeed();

const prisma = new PrismaClient();

async function main() {
  const n = await prisma.breakingNewsItem.count();
  if (n > 0) {
    console.log(`Breaking news: ${n} row(s) already exist — skip.`);
    return;
  }
  await prisma.breakingNewsItem.createMany({
    data: [
      {
        sortOrder: 0,
        active: true,
        titleBn: 'টিকাদান অভিযান: যাচাইকৃত রিপোর্ট ও উৎস',
        titleEn: 'Vaccination campaign: verified reporting and sources',
        href: '/articles/measles-vaccination-campaign-2024',
      },
      {
        sortOrder: 1,
        active: true,
        titleBn: 'স্বাস্থ্য অধিদপ্তর — প্রাথমিক তথ্য',
        titleEn: 'DGHS — primary information',
        href: 'https://dghs.gov.bd',
      },
    ],
  });
  console.log('Breaking news: inserted 2 sample ticker lines.');
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    void prisma.$disconnect();
    process.exit(1);
  });
```

### `apps/api/prisma/seed.ts`

```typescript
import * as bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
import { loadEnvForSeed } from "./load-env-for-seed";

/** Prisma enum `Locale` — use literals so seed typings work even if hoisted `@prisma/client` omits `$Enums`/`Locale` re-exports. */
const locale = { bn: "bn", en: "en" } as const;

loadEnvForSeed();

const prisma = new PrismaClient();

async function main() {
  await prisma.externalVideo.deleteMany();
  await prisma.mediaItem.deleteMany();
  await prisma.timelineEvent.deleteMany();
  await prisma.breakingNewsItem.deleteMany();
  await prisma.articleTranslation.deleteMany();
  await prisma.article.deleteMany();
  await prisma.source.deleteMany();

  const source = await prisma.source.create({
    data: {
      name: "বাংলাদেশ স্বাস্থ্য অধিদপ্তর",
      url: "https://dghs.gov.bd",
    },
  });

  await prisma.article.create({
    data: {
      slug: "measles-vaccination-campaign-2024",
      publishedAt: new Date("2024-03-15"),
      category: "News",
      tags: ["measles", "হাম", "vaccination"],
      sourceId: source.id,
      reviewStatus: "PUBLISHED",
      translations: {
        create: [
          {
            locale: locale.bn,
            title:
              "টিকাদান অভিযান: পরিমাপযোগ্য তথ্য ও মিডিয়া আচরণ",
            description:
              "শিশু স্বাস্থ্য সম্পর্কিত প্রতিবেদনের জন্য নিরপেক্ষ উৎস ও তারিখের গুরুত্ব।",
            bodyMd: `## প্রসঙ্গ

এই আর্কাইভে আমরা **যাচাইকৃত উৎস** থেকে সংগৃহীত তথ্য রাখি। উদ্দেশ্য — আবেগ নয়, **পরিমাপযোগ্য তথ্য**।

- উৎসের নাম প্রকাশ করা বাধ্যতামূলক
- তারিভ ও সংস্করণ ট্রাক করা হয়
`,
            seoTitle: "জনদৃষ্টি — টিকাসংক্রান্ত সংবাদ সংগ্রহ",
            seoDescription:
              "বাংলাদেশে হাম ও শিশু স্বাস্থ্য বিষয়ক যাচাইকৃত মিডিয়া আর্কাইভ।",
          },
          {
            locale: locale.en,
            title:
              "Measles vaccination coverage: credible reporting checkpoints",
            description:
              "Neutral framing for caregivers and journalists citing primary sources.",
            bodyMd: `## Context

This archive stores **verified** excerpts and citations. Tone is deliberate: informative, respectful, never sensational.

- Source attribution is mandatory  
- Publication dates anchor every record  
`,
            seoTitle: "Citizen Perspective — Measles media archive note",
            seoDescription:
              "Structured Bangladesh measles-related coverage archive entry.",
          },
        ],
      },
    },
  });

  await prisma.article.create({
    data: {
      slug: "clinical-guidance-follow-up-resources",
      publishedAt: new Date("2024-06-02"),
      category: "Report",
      tags: ["measles", "clinical"],
      sourceId: source.id,
      reviewStatus: "PUBLISHED",
      translations: {
        create: [
          {
            locale: locale.bn,
            title:
              "ক্লিনিক্যাল ও জনস্বাস্থ্য নির্দেশনা: উপলব্ধ রিসোর্স কীভাবে পড়বেন",
            description:
              "সাস্থ্য সংস্থার নথি ও সংবাদ কভারেজ একসূত্রে খুঁজে পড়ার উপক্রমণিকা।",
            bodyMd: `### পাঠ সম্পাদনীয় কাঠামো

1. সংস্থার প্রাথমিক নথি  
2. স্বাধীন মিডিয়া ফলো-আপ  
3. সময়সীমাতে সংঘটিত ঘটনা  

> উদ্ধৃতি ব্যবহার করলে মূল প্রকাশনার লিংক সংরক্ষণ করুন।

`,
          },
          {
            locale: locale.en,
            title:
              "How to read bundled clinical and public-health guidance excerpts",
            description:
              "An editorial scaffold for aligning agency bulletins with follow-up journalism.",
            bodyMd: `### Reading order

1. Primary bulletin or guideline  
2. Independent follow-ups with dates  
3. Timeline proximity for related incidents  

> Blockquotes mirror source tone; headings stay neutral.`,
          },
        ],
      },
    },
  });

  await prisma.article.create({
    data: {
      slug: "measles-awareness-interview-health-workers",
      publishedAt: new Date("2024-09-21"),
      category: "Interview",
      tags: ["measles", "interview"],
      sourceId: source.id,
      reviewStatus: "PUBLISHED",
      translations: {
        create: [
          {
            locale: locale.bn,
            title:
              "সাস্থ্যকর্মীদের সাথে সাক্ষাৎকার: ব্যবহারিক বার্তাগুলোর সারণী",
            description:
              "সাক্ষাৎকার থেকে ব্যবহারিক বার্তা বেছে নিন—ড্রামাটাইজ করা নয়।",
            bodyMd: `## সংক্ষেপে

- উপসর্গ সংক্রান্ত তথ্য **সুনির্দিষ্ট উৎস** এর সাথে যুক্ত করুন।  
- **পুনরাবৃত্তি এড়িয়ে চলুন**: একই ফ্রেজ ব্যবহার নয় জনসাধারণের বিভ্রান্তির জন্য।  

`,
          },
          {
            locale: locale.en,
            title:
              "Interview with health workers: practical message checklist",
            description:
              "Pull practical messages from interviews—avoid dramatization.",
            bodyMd: `## In short

- Tie symptom-related facts to a **named source**.  
- **Avoid repetition**: do not reuse the same phrase in ways that confuse the public.  

`,
          },
        ],
      },
    },
  });

  await prisma.breakingNewsItem.createMany({
    data: [
      {
        sortOrder: 0,
        active: true,
        titleBn: "টিকাদান অভিযান: যাচাইকৃত রিপোর্ট ও উৎস",
        titleEn: "Vaccination campaign: verified reporting and sources",
        href: "/articles/measles-vaccination-campaign-2024",
      },
      {
        sortOrder: 1,
        active: true,
        titleBn: "স্বাস্থ্য অধিদপ্তর — প্রাথমিক তথ্য",
        titleEn: "DGHS — primary information",
        href: "https://dghs.gov.bd",
      },
    ],
  });

  await prisma.externalVideo.create({
    data: {
      platform: "YOUTUBE",
      watchUrl: "https://www.youtube.com/watch?v=jNQXAC9IVRw",
      publishedAt: new Date("2024-05-01"),
      reviewStatus: "PUBLISHED",
      sourceId: source.id,
      tags: ["measles", "sample", "হাম"],
      translations: {
        create: [
          {
            locale: locale.bn,
            title: "নমুনা ইউটিউব ভিডিও",
            description: "অ্যাডমিন থেকে যোগ করা ইমবেডের উদাহরণ।",
          },
          {
            locale: locale.en,
            title: "Sample YouTube embed",
            description: "Example entry managed from admin.",
          },
        ],
      },
    },
  });

  await prisma.externalVideo.create({
    data: {
      platform: "FACEBOOK",
      watchUrl:
        "https://www.facebook.com/facebook/videos/10153231379926729/",
      publishedAt: new Date("2024-05-10"),
      reviewStatus: "PUBLISHED",
      tags: ["facebook", "sample"],
      translations: {
        create: [
          {
            locale: locale.bn,
            title: "নমুনা ফেসবুক ভিডিও",
            description: "ফেসবুক ওয়াচ URL।",
          },
          {
            locale: locale.en,
            title: "Sample Facebook video",
            description: "Facebook watch URL.",
          },
        ],
      },
    },
  });

  await prisma.mediaItem.create({
    data: {
      mediaUrl: "https://dghs.gov.bd",
      publishedAt: new Date("2024-04-01"),
      reviewStatus: "PUBLISHED",
      tags: ["measles"],
      translations: {
        create: [
          {
            locale: locale.bn,
            title: "স্বাস্থ্য অধিদপ্তর ওয়েবসাইট",
            caption: "প্রাথমিক উৎস লিংক (মিডিয়া তালিকা)।",
          },
          {
            locale: locale.en,
            title: "DGHS website",
            caption: "Primary source link (media list).",
          },
        ],
      },
    },
  });

  await prisma.timelineEvent.create({
    data: {
      eventAt: new Date("2024-03-15"),
      reviewStatus: "PUBLISHED",
      translations: {
        create: [
          {
            locale: locale.bn,
            title: "টিকাদান অভিযান – ২০২৪",
            bodyMd: "সংক্ষিপ্ত টাইমলাইন নোট (নমুনা)।",
          },
          {
            locale: locale.en,
            title: "Vaccination campaign — Mar 2024",
            bodyMd: "Short timeline note (sample).",
          },
        ],
      },
    },
  });

  const adminEmail = process.env.ADMIN_EMAIL?.trim();
  const adminPassword = process.env.ADMIN_PASSWORD;
  if (adminEmail && adminPassword) {
    const passwordHash = await bcrypt.hash(adminPassword, 10);
    await prisma.admin.upsert({
      where: { email: adminEmail },
      update: { passwordHash },
      create: { email: adminEmail, passwordHash },
    });
    console.log(`Admin upserted: ${adminEmail}`);
  } else if (adminEmail && !adminPassword) {
    console.warn(
      "ADMIN_EMAIL is set but ADMIN_PASSWORD is missing; skipping admin upsert. Use `npm run db:seed:admin` after setting both.",
    );
  } else if (!adminEmail && adminPassword) {
    console.warn(
      "ADMIN_PASSWORD is set but ADMIN_EMAIL is missing; skipping admin upsert.",
    );
  } else {
    console.log(
      "Skipping admin: set ADMIN_EMAIL and ADMIN_PASSWORD to upsert an admin (or run `npm run db:seed:admin`).",
    );
  }

  console.log("Seed finished.");
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    void prisma.$disconnect();
    process.exit(1);
  });
```

### `apps/api/prisma/tsconfig.seed.json`

```json
{
  "extends": "../tsconfig.json",
  "compilerOptions": {
    "module": "CommonJS",
    "moduleResolution": "node",
    "noEmit": true
  },
  "include": ["./**/*.ts"]
}
```

### `apps/api/prisma/migrations/migration_lock.toml`

```
provider = "postgresql"
```

### `apps/api/prisma/migrations/20250511170000_init/migration.sql`

```sql
-- CreateEnum
CREATE TYPE "ReviewStatus" AS ENUM ('DRAFT', 'PUBLISHED');

-- CreateEnum
CREATE TYPE "Locale" AS ENUM ('bn', 'en');

-- CreateTable
CREATE TABLE "Source" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Source_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Article" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "publishedAt" TIMESTAMP(3),
    "coverUrl" TEXT,
    "category" TEXT,
    "sourceId" TEXT NOT NULL,
    "reviewStatus" "ReviewStatus" NOT NULL DEFAULT 'PUBLISHED',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Article_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ArticleTranslation" (
    "id" TEXT NOT NULL,
    "articleId" TEXT NOT NULL,
    "locale" "Locale" NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "bodyMd" TEXT NOT NULL,
    "seoTitle" TEXT,
    "seoDescription" TEXT,

    CONSTRAINT "ArticleTranslation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Article_slug_key" ON "Article"("slug");

-- CreateIndex
CREATE INDEX "Article_publishedAt_idx" ON "Article"("publishedAt" DESC);

-- CreateIndex
CREATE INDEX "Article_reviewStatus_idx" ON "Article"("reviewStatus");

-- CreateIndex
CREATE INDEX "ArticleTranslation_locale_idx" ON "ArticleTranslation"("locale");

-- CreateIndex
CREATE UNIQUE INDEX "ArticleTranslation_articleId_locale_key" ON "ArticleTranslation"("articleId", "locale");

-- AddForeignKey
ALTER TABLE "Article" ADD CONSTRAINT "Article_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "Source"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArticleTranslation" ADD CONSTRAINT "ArticleTranslation_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "Article"("id") ON DELETE CASCADE ON UPDATE CASCADE;
```

### `apps/api/prisma/migrations/20250512120000_admin/migration.sql`

```sql
-- CreateTable
CREATE TABLE "Admin" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Admin_email_key" ON "Admin"("email");
```

### `apps/api/prisma/migrations/20250515180000_archive_extras/migration.sql`

```sql
-- CreateEnum
CREATE TYPE "EmbedPlatform" AS ENUM ('YOUTUBE', 'FACEBOOK');

-- CreateTable
CREATE TABLE "ExternalVideo" (
    "id" TEXT NOT NULL,
    "platform" "EmbedPlatform" NOT NULL,
    "watchUrl" TEXT NOT NULL,
    "publishedAt" TIMESTAMP(3),
    "reviewStatus" "ReviewStatus" NOT NULL DEFAULT 'PUBLISHED',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ExternalVideo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExternalVideoTranslation" (
    "id" TEXT NOT NULL,
    "videoId" TEXT NOT NULL,
    "locale" "Locale" NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "ExternalVideoTranslation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MediaItem" (
    "id" TEXT NOT NULL,
    "mediaUrl" TEXT NOT NULL,
    "publishedAt" TIMESTAMP(3),
    "reviewStatus" "ReviewStatus" NOT NULL DEFAULT 'PUBLISHED',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MediaItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MediaItemTranslation" (
    "id" TEXT NOT NULL,
    "mediaItemId" TEXT NOT NULL,
    "locale" "Locale" NOT NULL,
    "title" TEXT NOT NULL,
    "caption" TEXT,

    CONSTRAINT "MediaItemTranslation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TimelineEvent" (
    "id" TEXT NOT NULL,
    "eventAt" TIMESTAMP(3) NOT NULL,
    "reviewStatus" "ReviewStatus" NOT NULL DEFAULT 'PUBLISHED',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TimelineEvent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TimelineEventTranslation" (
    "id" TEXT NOT NULL,
    "eventId" TEXT NOT NULL,
    "locale" "Locale" NOT NULL,
    "title" TEXT NOT NULL,
    "bodyMd" TEXT NOT NULL,

    CONSTRAINT "TimelineEventTranslation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ExternalVideo_publishedAt_idx" ON "ExternalVideo"("publishedAt" DESC);

-- CreateIndex
CREATE INDEX "ExternalVideo_reviewStatus_idx" ON "ExternalVideo"("reviewStatus");

-- CreateIndex
CREATE UNIQUE INDEX "ExternalVideoTranslation_videoId_locale_key" ON "ExternalVideoTranslation"("videoId", "locale");

-- CreateIndex
CREATE INDEX "ExternalVideoTranslation_locale_idx" ON "ExternalVideoTranslation"("locale");

-- CreateIndex
CREATE INDEX "MediaItem_publishedAt_idx" ON "MediaItem"("publishedAt" DESC);

-- CreateIndex
CREATE INDEX "MediaItem_reviewStatus_idx" ON "MediaItem"("reviewStatus");

-- CreateIndex
CREATE UNIQUE INDEX "MediaItemTranslation_mediaItemId_locale_key" ON "MediaItemTranslation"("mediaItemId", "locale");

-- CreateIndex
CREATE INDEX "MediaItemTranslation_locale_idx" ON "MediaItemTranslation"("locale");

-- CreateIndex
CREATE INDEX "TimelineEvent_eventAt_idx" ON "TimelineEvent"("eventAt");

-- CreateIndex
CREATE INDEX "TimelineEvent_reviewStatus_idx" ON "TimelineEvent"("reviewStatus");

-- CreateIndex
CREATE UNIQUE INDEX "TimelineEventTranslation_eventId_locale_key" ON "TimelineEventTranslation"("eventId", "locale");

-- CreateIndex
CREATE INDEX "TimelineEventTranslation_locale_idx" ON "TimelineEventTranslation"("locale");

-- AddForeignKey
ALTER TABLE "ExternalVideoTranslation" ADD CONSTRAINT "ExternalVideoTranslation_videoId_fkey" FOREIGN KEY ("videoId") REFERENCES "ExternalVideo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MediaItemTranslation" ADD CONSTRAINT "MediaItemTranslation_mediaItemId_fkey" FOREIGN KEY ("mediaItemId") REFERENCES "MediaItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TimelineEventTranslation" ADD CONSTRAINT "TimelineEventTranslation_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "TimelineEvent"("id") ON DELETE CASCADE ON UPDATE CASCADE;
```

### `apps/api/prisma/migrations/20260512140000_video_source_tags/migration.sql`

```sql
-- AlterTable
ALTER TABLE "ExternalVideo" ADD COLUMN "sourceId" TEXT,
ADD COLUMN "tags" TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[];

-- CreateIndex
CREATE INDEX "ExternalVideo_sourceId_idx" ON "ExternalVideo"("sourceId");

-- AddForeignKey
ALTER TABLE "ExternalVideo" ADD CONSTRAINT "ExternalVideo_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "Source"("id") ON DELETE SET NULL ON UPDATE CASCADE;
```

### `apps/api/prisma/migrations/20260512150000_article_media_tags/migration.sql`

```sql
-- AlterTable
ALTER TABLE "Article" ADD COLUMN "tags" TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[];

-- AlterTable
ALTER TABLE "MediaItem" ADD COLUMN "tags" TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[];
```

### `apps/api/prisma/migrations/20260512170000_breaking_news_items/migration.sql`

```sql
-- CreateTable
CREATE TABLE "BreakingNewsItem" (
    "id" TEXT NOT NULL,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "titleBn" TEXT NOT NULL,
    "titleEn" TEXT NOT NULL,
    "href" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BreakingNewsItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "BreakingNewsItem_active_sortOrder_idx" ON "BreakingNewsItem"("active", "sortOrder");
```

### `apps/api/src/app.module.ts`

```typescript
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import * as path from 'path';
import { AdminModule } from './admin/admin.module';
import { ArchiveContentModule } from './archive-content/archive-content.module';
import { ArticlesModule } from './articles/articles.module';
import { BreakingNewsModule } from './breaking-news/breaking-news.module';
import { HealthModule } from './health/health.module';
import { PrismaModule } from './prisma/prisma.module';

/** Compiled as `apps/api/dist/src/*.js` → package root `apps/api` */
const apiPackageDir = path.join(__dirname, '..', '..');

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      // Prisma resolves `DATABASE_URL`; load regardless of cwd (root vs apps/api).
      envFilePath: [
        path.join(apiPackageDir, '.env'),
        path.resolve(process.cwd(), 'apps/api/.env'),
        path.resolve(process.cwd(), '.env'),
        path.join(apiPackageDir, '..', '..', '.env'),
      ],
      expandVariables: true,
    }),
    ThrottlerModule.forRoot([{ ttl: 60_000, limit: 120 }]),
    PrismaModule,
    HealthModule,
    ArticlesModule,
    ArchiveContentModule,
    BreakingNewsModule,
    AdminModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
```

### `apps/api/src/load-env.ts`

```typescript
import { configDotenv } from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';

/**
 * Hydrate `process.env` before Prisma/Nest bootstrap.
 * Build output lives under `dist/src/` so two levels up = `apps/api`.
 */
const apiPkgDir = path.resolve(__dirname, '..', '..');
const repoRootDir = path.resolve(apiPkgDir, '..', '..');

// `configDotenv` avoids dotenv v17 `config()` vault path when `DOTENV_KEY` is set globally.
const paths = [
  path.join(apiPkgDir, '.env'),
  path.join(repoRootDir, '.env'),
  path.resolve(process.cwd(), 'apps', 'api', '.env'),
  path.resolve(process.cwd(), '.env'),
];
for (const envPath of paths) {
  if (fs.existsSync(envPath)) {
    configDotenv({ path: envPath, quiet: true });
  }
}
```

### `apps/api/src/main.ts`

```typescript
import './load-env';

import { RequestMethod, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1', {
    exclude: [{ path: 'health', method: RequestMethod.GET }],
  });

  const corsOrigin = process.env.CORS_ORIGIN ?? 'http://localhost:3000';
  app.enableCors({
    origin: corsOrigin.includes(',')
      ? corsOrigin.split(',').map((s) => s.trim())
      : corsOrigin,
    credentials: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidUnknownValues: false,
    }),
  );

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Citizen Perspective API')
    .setDescription('BD Measles Media Archive — bilingual read API')
    .setVersion('1.0')
    .addBearerAuth(
      { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
      'admin-jwt',
    )
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api/docs', app, document);

  const port = parseInt(process.env.PORT ?? '3001', 10);
  await app.listen(port);
}
bootstrap();
```

### `apps/api/src/admin/admin-articles.controller.ts`

```typescript
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { AdminJwtGuard } from '../auth/admin-jwt.guard';
import { AdminArticlesService } from './admin-articles.service';
import { AdminArticleListQueryDto } from './dto/admin-article-list-query.dto';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

@ApiTags('admin-articles')
@ApiBearerAuth('admin-jwt')
@UseGuards(AdminJwtGuard)
@Controller('admin/articles')
export class AdminArticlesController {
  constructor(private readonly articles: AdminArticlesService) {}

  @Get()
  @ApiOperation({ summary: 'List all articles (including drafts)' })
  list(@Query() query: AdminArticleListQueryDto) {
    return this.articles.list(query);
  }

  @Get(':slug')
  @ApiOperation({ summary: 'Get article by slug with all translations' })
  getOne(@Param('slug') slug: string) {
    return this.articles.getBySlug(slug);
  }

  @Post()
  @ApiOperation({ summary: 'Create article with translations' })
  create(@Body() dto: CreateArticleDto) {
    return this.articles.create(dto);
  }

  @Patch(':slug')
  @ApiOperation({ summary: 'Update article (partial); upsert translations when provided' })
  update(@Param('slug') slug: string, @Body() dto: UpdateArticleDto) {
    return this.articles.update(slug, dto);
  }

  @Delete(':slug')
  @ApiOperation({ summary: 'Delete article and translations' })
  remove(@Param('slug') slug: string) {
    return this.articles.remove(slug);
  }
}
```

### `apps/api/src/admin/admin-articles.service.ts`

```typescript
import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Locale, ReviewStatus } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import type { AdminArticleListQueryDto } from './dto/admin-article-list-query.dto';
import type { CreateArticleDto } from './dto/create-article.dto';
import type { UpdateArticleDto } from './dto/update-article.dto';

@Injectable()
export class AdminArticlesService {
  constructor(private readonly prisma: PrismaService) {}

  async list(query: AdminArticleListQueryDto) {
    const where =
      query.status && query.status !== 'ALL'
        ? { reviewStatus: query.status as ReviewStatus }
        : {};

    return this.prisma.article.findMany({
      where,
      orderBy: [{ publishedAt: 'desc' }, { slug: 'asc' }],
      include: {
        source: true,
        translations: true,
      },
    });
  }

  async getBySlug(slug: string) {
    const article = await this.prisma.article.findUnique({
      where: { slug },
      include: { source: true, translations: true },
    });
    if (!article) {
      throw new NotFoundException('Article not found');
    }
    return article;
  }

  async create(dto: CreateArticleDto) {
    const locales = new Set(dto.translations.map((t) => t.locale));
    if (locales.size !== dto.translations.length) {
      throw new BadRequestException('Duplicate locale in translations');
    }

    const existing = await this.prisma.article.findUnique({
      where: { slug: dto.slug },
    });
    if (existing) {
      throw new ConflictException('Slug already in use');
    }

    const source = await this.prisma.source.findUnique({
      where: { id: dto.sourceId },
    });
    if (!source) {
      throw new NotFoundException('Source not found');
    }

    return this.prisma.article.create({
      data: {
        slug: dto.slug,
        sourceId: dto.sourceId,
        publishedAt: dto.publishedAt ? new Date(dto.publishedAt) : null,
        coverUrl: dto.coverUrl ?? null,
        category: dto.category ?? null,
        tags: (dto.tags ?? [])
          .map((x) => x.trim())
          .filter((x) => x.length > 0),
        reviewStatus: (dto.reviewStatus ?? 'PUBLISHED') as ReviewStatus,
        translations: {
          create: dto.translations.map((t) => ({
            locale: t.locale as Locale,
            title: t.title,
            description: t.description ?? null,
            bodyMd: t.bodyMd,
            seoTitle: t.seoTitle ?? null,
            seoDescription: t.seoDescription ?? null,
          })),
        },
      },
      include: { source: true, translations: true },
    });
  }

  async update(slug: string, dto: UpdateArticleDto) {
    const article = await this.prisma.article.findUnique({ where: { slug } });
    if (!article) {
      throw new NotFoundException('Article not found');
    }

    if (dto.slug && dto.slug !== slug) {
      const taken = await this.prisma.article.findUnique({
        where: { slug: dto.slug },
      });
      if (taken) {
        throw new ConflictException('Slug already in use');
      }
    }

    if (dto.translations) {
      const locales = new Set(dto.translations.map((t) => t.locale));
      if (locales.size !== dto.translations.length) {
        throw new BadRequestException('Duplicate locale in translations');
      }
    }

    if (dto.sourceId) {
      const source = await this.prisma.source.findUnique({
        where: { id: dto.sourceId },
      });
      if (!source) {
        throw new NotFoundException('Source not found');
      }
    }

    return this.prisma.$transaction(async (tx) => {
      const updated = await tx.article.update({
        where: { id: article.id },
        data: {
          ...(dto.slug !== undefined && { slug: dto.slug }),
          ...(dto.sourceId !== undefined && { sourceId: dto.sourceId }),
          ...(dto.publishedAt !== undefined && {
            publishedAt:
              dto.publishedAt === null ? null : new Date(dto.publishedAt),
          }),
          ...(dto.coverUrl !== undefined && { coverUrl: dto.coverUrl }),
          ...(dto.category !== undefined && { category: dto.category }),
          ...(dto.tags !== undefined && {
            tags: dto.tags.map((x) => x.trim()).filter((x) => x.length > 0),
          }),
          ...(dto.reviewStatus !== undefined && {
            reviewStatus: dto.reviewStatus as ReviewStatus,
          }),
        },
      });

      if (dto.translations?.length) {
        for (const t of dto.translations) {
          await tx.articleTranslation.upsert({
            where: {
              articleId_locale: {
                articleId: article.id,
                locale: t.locale as Locale,
              },
            },
            create: {
              articleId: article.id,
              locale: t.locale as Locale,
              title: t.title,
              description: t.description ?? null,
              bodyMd: t.bodyMd,
              seoTitle: t.seoTitle ?? null,
              seoDescription: t.seoDescription ?? null,
            },
            update: {
              title: t.title,
              description: t.description ?? null,
              bodyMd: t.bodyMd,
              seoTitle: t.seoTitle ?? null,
              seoDescription: t.seoDescription ?? null,
            },
          });
        }
      }

      return tx.article.findUniqueOrThrow({
        where: { id: updated.id },
        include: { source: true, translations: true },
      });
    });
  }

  async remove(slug: string) {
    const article = await this.prisma.article.findUnique({ where: { slug } });
    if (!article) {
      throw new NotFoundException('Article not found');
    }
    await this.prisma.article.delete({ where: { id: article.id } });
    return { deleted: true, slug };
  }
}
```

### `apps/api/src/admin/admin-auth.controller.ts`

```typescript
import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AdminAuthService } from './admin-auth.service';
import { AdminBootstrapDto } from './dto/bootstrap.dto';
import { AdminLoginDto } from './dto/login.dto';

@ApiTags('admin-auth')
@Controller('admin/auth')
export class AdminAuthController {
  constructor(private readonly auth: AdminAuthService) {}

  @Post('login')
  @ApiOperation({ summary: 'Admin JWT login' })
  login(@Body() dto: AdminLoginDto) {
    return this.auth.login(dto.email, dto.password);
  }

  @Post('bootstrap')
  @ApiOperation({
    summary:
      'One-time create first admin (requires ADMIN_BOOTSTRAP_SECRET on server; fails if any admin exists)',
  })
  bootstrap(@Body() dto: AdminBootstrapDto) {
    return this.auth.bootstrap(dto.email, dto.password, dto.secret);
  }
}
```

### `apps/api/src/admin/admin-auth.service.ts`

```typescript
import {
  ConflictException,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import type { AdminJwtPayload } from '../auth/jwt-payload.type';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AdminAuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
    private readonly config: ConfigService,
  ) {}

  async validateCredentials(
    email: string,
    password: string,
  ): Promise<{ id: string; email: string }> {
    const admin = await this.prisma.admin.findUnique({ where: { email } });
    if (!admin) {
      throw new UnauthorizedException('Invalid email or password');
    }
    const ok = await bcrypt.compare(password, admin.passwordHash);
    if (!ok) {
      throw new UnauthorizedException('Invalid email or password');
    }
    return { id: admin.id, email: admin.email };
  }

  async login(email: string, password: string) {
    const admin = await this.validateCredentials(email, password);
    const payload: AdminJwtPayload = { sub: admin.id, email: admin.email };
    const access_token = await this.jwt.signAsync(payload);
    const expiresSec = parseInt(
      this.config.get<string>('JWT_EXPIRES_SEC') ?? '604800',
      10,
    );
    return {
      access_token,
      token_type: 'Bearer' as const,
      expires_in: expiresSec,
      admin: { id: admin.id, email: admin.email },
    };
  }

  async bootstrap(email: string, password: string, secret: string) {
    const expected = this.config.get<string>('ADMIN_BOOTSTRAP_SECRET');
    if (!expected || secret !== expected) {
      throw new ForbiddenException('Invalid bootstrap secret');
    }
    const count = await this.prisma.admin.count();
    if (count > 0) {
      throw new ConflictException(
        'Bootstrap disabled: an admin already exists',
      );
    }
    const passwordHash = await bcrypt.hash(password, 10);
    const admin = await this.prisma.admin.create({
      data: { email, passwordHash },
    });
    const payload: AdminJwtPayload = { sub: admin.id, email: admin.email };
    const access_token = await this.jwt.signAsync(payload);
    const expiresSec = parseInt(
      this.config.get<string>('JWT_EXPIRES_SEC') ?? '604800',
      10,
    );
    return {
      access_token,
      token_type: 'Bearer' as const,
      expires_in: expiresSec,
      admin: { id: admin.id, email: admin.email },
    };
  }
}
```

### `apps/api/src/admin/admin-media-items.controller.ts`

```typescript
import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AdminJwtGuard } from '../auth/admin-jwt.guard';
import { MediaItemsService } from '../archive-content/media-items.service';
import { CreateMediaItemDto } from './dto/create-media-item.dto';
import { UpdateMediaItemDto } from './dto/update-media-item.dto';

@ApiTags('admin-media-items')
@ApiBearerAuth('admin-jwt')
@UseGuards(AdminJwtGuard)
@Controller('admin/media-items')
export class AdminMediaItemsController {
  constructor(private readonly media: MediaItemsService) {}

  @Get()
  @ApiOperation({ summary: 'List all media URL entries' })
  list() {
    return this.media.listAdmin();
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    const row = await this.media.getById(id);
    if (!row) {
      throw new NotFoundException('Media item not found');
    }
    return row;
  }

  @Post()
  @ApiOperation({ summary: 'Add media URL with bilingual title/caption' })
  create(@Body() dto: CreateMediaItemDto) {
    return this.media.create(dto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateMediaItemDto) {
    return this.media.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.media.remove(id);
  }
}
```

### `apps/api/src/admin/admin-sources.controller.ts`

```typescript
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AdminJwtGuard } from '../auth/admin-jwt.guard';
import { AdminSourcesService } from './admin-sources.service';
import { CreateSourceDto } from './dto/create-source.dto';
import { UpdateSourceDto } from './dto/update-source.dto';

@ApiTags('admin-sources')
@ApiBearerAuth('admin-jwt')
@UseGuards(AdminJwtGuard)
@Controller('admin/sources')
export class AdminSourcesController {
  constructor(private readonly sources: AdminSourcesService) {}

  @Get()
  @ApiOperation({ summary: 'List sources' })
  list() {
    return this.sources.list();
  }

  @Post()
  @ApiOperation({ summary: 'Create source' })
  create(@Body() dto: CreateSourceDto) {
    return this.sources.create(dto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update source' })
  update(@Param('id') id: string, @Body() dto: UpdateSourceDto) {
    return this.sources.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete source (only if no articles)' })
  remove(@Param('id') id: string) {
    return this.sources.remove(id);
  }
}
```

### `apps/api/src/admin/admin-sources.service.ts`

```typescript
import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import type { CreateSourceDto } from './dto/create-source.dto';
import type { UpdateSourceDto } from './dto/update-source.dto';

@Injectable()
export class AdminSourcesService {
  constructor(private readonly prisma: PrismaService) {}

  list() {
    return this.prisma.source.findMany({
      orderBy: { name: 'asc' },
      include: { _count: { select: { articles: true } } },
    });
  }

  async create(dto: CreateSourceDto) {
    return this.prisma.source.create({
      data: {
        name: dto.name,
        url: dto.url ?? null,
      },
    });
  }

  async update(id: string, dto: UpdateSourceDto) {
    const s = await this.prisma.source.findUnique({ where: { id } });
    if (!s) {
      throw new NotFoundException('Source not found');
    }
    return this.prisma.source.update({
      where: { id },
      data: {
        ...(dto.name !== undefined && { name: dto.name }),
        ...(dto.url !== undefined && { url: dto.url }),
      },
    });
  }

  async remove(id: string) {
    const s = await this.prisma.source.findUnique({
      where: { id },
      include: { _count: { select: { articles: true } } },
    });
    if (!s) {
      throw new NotFoundException('Source not found');
    }
    if (s._count.articles > 0) {
      throw new ConflictException(
        'Cannot delete source while articles reference it',
      );
    }
    await this.prisma.source.delete({ where: { id } });
    return { deleted: true, id };
  }
}
```

### `apps/api/src/admin/admin-timeline-events.controller.ts`

```typescript
import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AdminJwtGuard } from '../auth/admin-jwt.guard';
import { TimelineEventsService } from '../archive-content/timeline-events.service';
import { CreateTimelineEventDto } from './dto/create-timeline-event.dto';
import { UpdateTimelineEventDto } from './dto/update-timeline-event.dto';

@ApiTags('admin-timeline-events')
@ApiBearerAuth('admin-jwt')
@UseGuards(AdminJwtGuard)
@Controller('admin/timeline-events')
export class AdminTimelineEventsController {
  constructor(private readonly timeline: TimelineEventsService) {}

  @Get()
  @ApiOperation({ summary: 'List all timeline events' })
  list() {
    return this.timeline.listAdmin();
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    const row = await this.timeline.getById(id);
    if (!row) {
      throw new NotFoundException('Timeline event not found');
    }
    return row;
  }

  @Post()
  @ApiOperation({ summary: 'Add timeline event' })
  create(@Body() dto: CreateTimelineEventDto) {
    return this.timeline.create(dto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateTimelineEventDto) {
    return this.timeline.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.timeline.remove(id);
  }
}
```

### `apps/api/src/admin/admin-videos.controller.ts`

```typescript
import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AdminJwtGuard } from '../auth/admin-jwt.guard';
import { VideosService } from '../archive-content/videos.service';
import { CreateExternalVideoDto } from './dto/create-external-video.dto';
import { UpdateExternalVideoDto } from './dto/update-external-video.dto';

@ApiTags('admin-videos')
@ApiBearerAuth('admin-jwt')
@UseGuards(AdminJwtGuard)
@Controller('admin/videos')
export class AdminVideosController {
  constructor(private readonly videos: VideosService) {}

  @Get()
  @ApiOperation({ summary: 'List all video embeds' })
  list() {
    return this.videos.listAdmin();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get one video with translations' })
  async getOne(@Param('id') id: string) {
    const row = await this.videos.getById(id);
    if (!row) {
      throw new NotFoundException('Video not found');
    }
    return row;
  }

  @Post()
  @ApiOperation({ summary: 'Add YouTube or Facebook video URL' })
  create(@Body() dto: CreateExternalVideoDto) {
    return this.videos.create(dto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update video' })
  update(@Param('id') id: string, @Body() dto: UpdateExternalVideoDto) {
    return this.videos.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete video' })
  remove(@Param('id') id: string) {
    return this.videos.remove(id);
  }
}
```

### `apps/api/src/admin/admin.module.ts`

```typescript
import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { ArchiveContentModule } from '../archive-content/archive-content.module';
import { AdminArticlesController } from './admin-articles.controller';
import { AdminArticlesService } from './admin-articles.service';
import { AdminMediaItemsController } from './admin-media-items.controller';
import { AdminSourcesController } from './admin-sources.controller';
import { AdminSourcesService } from './admin-sources.service';
import { AdminTimelineEventsController } from './admin-timeline-events.controller';
import { AdminVideosController } from './admin-videos.controller';

@Module({
  imports: [AuthModule, ArchiveContentModule],
  controllers: [
    AdminArticlesController,
    AdminSourcesController,
    AdminVideosController,
    AdminMediaItemsController,
    AdminTimelineEventsController,
  ],
  providers: [AdminArticlesService, AdminSourcesService],
})
export class AdminModule {}
```

### `apps/api/src/admin/dto/admin-article-list-query.dto.ts`

```typescript
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsIn, IsOptional } from 'class-validator';

export class AdminArticleListQueryDto {
  @ApiPropertyOptional({ enum: ['DRAFT', 'PUBLISHED', 'ALL'] })
  @IsOptional()
  @IsIn(['DRAFT', 'PUBLISHED', 'ALL'])
  status?: 'DRAFT' | 'PUBLISHED' | 'ALL';
}
```

### `apps/api/src/admin/dto/bootstrap.dto.ts`

```typescript
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class AdminBootstrapDto {
  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty({ minLength: 8 })
  @IsString()
  @MinLength(8)
  password: string;

  @ApiProperty({
    description: 'Must match server env ADMIN_BOOTSTRAP_SECRET (one-time when no admins exist)',
  })
  @IsString()
  @MinLength(8)
  secret: string;
}
```

### `apps/api/src/admin/dto/create-article.dto.ts`

```typescript
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsDateString,
  IsIn,
  IsOptional,
  IsString,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { TranslationInputDto } from './translation-input.dto';

export class CreateArticleDto {
  @ApiProperty({ example: 'my-article-slug' })
  @IsString()
  @MinLength(1)
  slug: string;

  @ApiProperty({ description: 'Existing Source id' })
  @IsString()
  sourceId: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  publishedAt?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  coverUrl?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  category?: string;

  @ApiPropertyOptional({ type: [String] })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  tags?: string[];

  @ApiPropertyOptional({ enum: ['DRAFT', 'PUBLISHED'] })
  @IsOptional()
  @IsIn(['DRAFT', 'PUBLISHED'])
  reviewStatus?: 'DRAFT' | 'PUBLISHED';

  @ApiProperty({ type: [TranslationInputDto] })
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => TranslationInputDto)
  translations: TranslationInputDto[];
}
```

### `apps/api/src/admin/dto/create-breaking-news-item.dto.ts`

```typescript
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsInt,
  IsOptional,
  IsString,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

export class CreateBreakingNewsItemDto {
  @ApiProperty({ example: 'টিকাদান অভিযান সম্পর্কিত আপডেট' })
  @IsString()
  @MinLength(1)
  @MaxLength(500)
  titleBn: string;

  @ApiProperty({ example: 'Update on vaccination campaign' })
  @IsString()
  @MinLength(1)
  @MaxLength(500)
  titleEn: string;

  @ApiPropertyOptional({
    description: 'Internal path (e.g. /articles/slug) or https URL',
    example: '/articles/measles-vaccination-campaign-2024',
  })
  @IsOptional()
  @IsString()
  @MaxLength(2000)
  href?: string;

  @ApiPropertyOptional({ default: true })
  @IsOptional()
  @IsBoolean()
  active?: boolean;

  @ApiPropertyOptional({ default: 0 })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(0)
  sortOrder?: number;
}
```

### `apps/api/src/admin/dto/create-external-video.dto.ts`

```typescript
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsDateString,
  IsIn,
  IsOptional,
  IsString,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { VideoTranslationInputDto } from './video-translation-input.dto';

export class CreateExternalVideoDto {
  @ApiProperty({ enum: ['YOUTUBE', 'FACEBOOK'] })
  @IsIn(['YOUTUBE', 'FACEBOOK'])
  platform: 'YOUTUBE' | 'FACEBOOK';

  @ApiProperty({ description: 'YouTube or Facebook watch / share URL' })
  @IsString()
  @MinLength(8)
  watchUrl: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  publishedAt?: string;

  @ApiPropertyOptional({ enum: ['DRAFT', 'PUBLISHED'] })
  @IsOptional()
  @IsIn(['DRAFT', 'PUBLISHED'])
  reviewStatus?: 'DRAFT' | 'PUBLISHED';

  @ApiProperty({ type: [VideoTranslationInputDto] })
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => VideoTranslationInputDto)
  translations: VideoTranslationInputDto[];

  @ApiPropertyOptional({ description: 'Optional Source id for attribution' })
  @IsOptional()
  @IsString()
  sourceId?: string;

  @ApiPropertyOptional({ type: [String] })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  tags?: string[];
}
```

### `apps/api/src/admin/dto/create-media-item.dto.ts`

```typescript
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsDateString,
  IsIn,
  IsOptional,
  IsString,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { MediaItemTranslationInputDto } from './media-item-translation-input.dto';

export class CreateMediaItemDto {
  @ApiProperty({ description: 'Direct link (http/https)' })
  @IsString()
  @MinLength(8)
  mediaUrl: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  publishedAt?: string;

  @ApiPropertyOptional({ enum: ['DRAFT', 'PUBLISHED'] })
  @IsOptional()
  @IsIn(['DRAFT', 'PUBLISHED'])
  reviewStatus?: 'DRAFT' | 'PUBLISHED';

  @ApiProperty({ type: [MediaItemTranslationInputDto] })
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => MediaItemTranslationInputDto)
  translations: MediaItemTranslationInputDto[];

  @ApiPropertyOptional({ type: [String] })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  tags?: string[];
}
```

### `apps/api/src/admin/dto/create-source.dto.ts`

```typescript
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsUrl, MinLength } from 'class-validator';

export class CreateSourceDto {
  @ApiProperty()
  @IsString()
  @MinLength(1)
  name: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUrl({ require_protocol: true })
  url?: string;
}
```

### `apps/api/src/admin/dto/create-timeline-event.dto.ts`

```typescript
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsDateString,
  IsIn,
  IsOptional,
  ValidateNested,
} from 'class-validator';
import { TimelineTranslationInputDto } from './timeline-translation-input.dto';

export class CreateTimelineEventDto {
  @ApiProperty({ description: 'When this event appears on the timeline (ISO date)' })
  @IsDateString()
  eventAt: string;

  @ApiPropertyOptional({ enum: ['DRAFT', 'PUBLISHED'] })
  @IsOptional()
  @IsIn(['DRAFT', 'PUBLISHED'])
  reviewStatus?: 'DRAFT' | 'PUBLISHED';

  @ApiProperty({ type: [TimelineTranslationInputDto] })
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => TimelineTranslationInputDto)
  translations: TimelineTranslationInputDto[];
}
```

### `apps/api/src/admin/dto/login.dto.ts`

```typescript
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class AdminLoginDto {
  @ApiProperty({ example: 'admin@example.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ minLength: 8 })
  @IsString()
  @MinLength(8)
  password: string;
}
```

### `apps/api/src/admin/dto/media-item-translation-input.dto.ts`

```typescript
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsIn, IsOptional, IsString, MinLength } from 'class-validator';

export class MediaItemTranslationInputDto {
  @ApiProperty({ enum: ['bn', 'en'] })
  @IsIn(['bn', 'en'])
  locale: 'bn' | 'en';

  @ApiProperty()
  @IsString()
  @MinLength(1)
  title: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  caption?: string;
}
```

### `apps/api/src/admin/dto/timeline-translation-input.dto.ts`

```typescript
import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsString, MinLength } from 'class-validator';

export class TimelineTranslationInputDto {
  @ApiProperty({ enum: ['bn', 'en'] })
  @IsIn(['bn', 'en'])
  locale: 'bn' | 'en';

  @ApiProperty()
  @IsString()
  @MinLength(1)
  title: string;

  @ApiProperty()
  @IsString()
  @MinLength(1)
  bodyMd: string;
}
```

### `apps/api/src/admin/dto/translation-input.dto.ts`

```typescript
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsIn, IsOptional, IsString, MinLength } from 'class-validator';

export class TranslationInputDto {
  @ApiProperty({ enum: ['bn', 'en'] })
  @IsIn(['bn', 'en'])
  locale: 'bn' | 'en';

  @ApiProperty()
  @IsString()
  @MinLength(1)
  title: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty()
  @IsString()
  @MinLength(1)
  bodyMd: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  seoTitle?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  seoDescription?: string;
}
```

### `apps/api/src/admin/dto/update-article.dto.ts`

```typescript
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsDateString,
  IsIn,
  IsOptional,
  IsString,
  MinLength,
  ValidateIf,
  ValidateNested,
} from 'class-validator';
import { TranslationInputDto } from './translation-input.dto';

export class UpdateArticleDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @MinLength(1)
  slug?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  sourceId?: string;

  @ApiPropertyOptional({ description: 'ISO date string, or null to clear' })
  @IsOptional()
  @ValidateIf((_, v) => v !== null && v !== undefined)
  @IsDateString()
  publishedAt?: string | null;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  coverUrl?: string | null;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  category?: string | null;

  @ApiPropertyOptional({ type: [String] })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  tags?: string[];

  @ApiPropertyOptional({ enum: ['DRAFT', 'PUBLISHED'] })
  @IsOptional()
  @IsIn(['DRAFT', 'PUBLISHED'])
  reviewStatus?: 'DRAFT' | 'PUBLISHED';

  @ApiPropertyOptional({ type: [TranslationInputDto] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TranslationInputDto)
  translations?: TranslationInputDto[];
}
```

### `apps/api/src/admin/dto/update-breaking-news-item.dto.ts`

```typescript
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsInt,
  IsOptional,
  IsString,
  MaxLength,
  Min,
  MinLength,
  ValidateIf,
} from 'class-validator';

export class UpdateBreakingNewsItemDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @MinLength(1)
  @MaxLength(500)
  titleBn?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @MinLength(1)
  @MaxLength(500)
  titleEn?: string;

  @ApiPropertyOptional({
    description: 'Internal /articles/… or https URL; null clears',
    nullable: true,
  })
  @IsOptional()
  @ValidateIf((_, v) => v !== null && v !== undefined)
  @IsString()
  @MaxLength(2000)
  href?: string | null;

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  active?: boolean;

  @ApiPropertyOptional()
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(0)
  sortOrder?: number;
}
```

### `apps/api/src/admin/dto/update-external-video.dto.ts`

```typescript
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsDateString,
  IsIn,
  IsOptional,
  IsString,
  MinLength,
  ValidateIf,
  ValidateNested,
} from 'class-validator';
import { VideoTranslationInputDto } from './video-translation-input.dto';

export class UpdateExternalVideoDto {
  @ApiPropertyOptional({ enum: ['YOUTUBE', 'FACEBOOK'] })
  @IsOptional()
  @IsIn(['YOUTUBE', 'FACEBOOK'])
  platform?: 'YOUTUBE' | 'FACEBOOK';

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @MinLength(8)
  watchUrl?: string;

  @ApiPropertyOptional({ description: 'ISO or null to clear' })
  @IsOptional()
  @ValidateIf((_, v) => v !== null && v !== undefined)
  @IsDateString()
  publishedAt?: string | null;

  @ApiPropertyOptional({ enum: ['DRAFT', 'PUBLISHED'] })
  @IsOptional()
  @IsIn(['DRAFT', 'PUBLISHED'])
  reviewStatus?: 'DRAFT' | 'PUBLISHED';

  @ApiPropertyOptional({ type: [VideoTranslationInputDto] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => VideoTranslationInputDto)
  translations?: VideoTranslationInputDto[];

  @ApiPropertyOptional({
    description: 'Source id; omit to leave unchanged, empty string clears',
  })
  @IsOptional()
  @IsString()
  sourceId?: string;

  @ApiPropertyOptional({ type: [String] })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  tags?: string[];
}
```

### `apps/api/src/admin/dto/update-media-item.dto.ts`

```typescript
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsDateString,
  IsIn,
  IsOptional,
  IsString,
  MinLength,
  ValidateIf,
  ValidateNested,
} from 'class-validator';
import { MediaItemTranslationInputDto } from './media-item-translation-input.dto';

export class UpdateMediaItemDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @MinLength(8)
  mediaUrl?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @ValidateIf((_, v) => v !== null && v !== undefined)
  @IsDateString()
  publishedAt?: string | null;

  @ApiPropertyOptional({ enum: ['DRAFT', 'PUBLISHED'] })
  @IsOptional()
  @IsIn(['DRAFT', 'PUBLISHED'])
  reviewStatus?: 'DRAFT' | 'PUBLISHED';

  @ApiPropertyOptional({ type: [MediaItemTranslationInputDto] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MediaItemTranslationInputDto)
  translations?: MediaItemTranslationInputDto[];

  @ApiPropertyOptional({ type: [String] })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  tags?: string[];
}
```

### `apps/api/src/admin/dto/update-source.dto.ts`

```typescript
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsUrl, MinLength, ValidateIf } from 'class-validator';

export class UpdateSourceDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @MinLength(1)
  name?: string;

  @ApiPropertyOptional({ description: 'Set null to clear URL' })
  @IsOptional()
  @ValidateIf((_, v) => v !== null && v !== undefined)
  @IsUrl({ require_protocol: true })
  url?: string | null;
}
```

### `apps/api/src/admin/dto/update-timeline-event.dto.ts`

```typescript
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsDateString,
  IsIn,
  IsOptional,
  ValidateNested,
} from 'class-validator';
import { TimelineTranslationInputDto } from './timeline-translation-input.dto';

export class UpdateTimelineEventDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  eventAt?: string;

  @ApiPropertyOptional({ enum: ['DRAFT', 'PUBLISHED'] })
  @IsOptional()
  @IsIn(['DRAFT', 'PUBLISHED'])
  reviewStatus?: 'DRAFT' | 'PUBLISHED';

  @ApiPropertyOptional({ type: [TimelineTranslationInputDto] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TimelineTranslationInputDto)
  translations?: TimelineTranslationInputDto[];
}
```

### `apps/api/src/admin/dto/video-translation-input.dto.ts`

```typescript
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsIn, IsOptional, IsString, MinLength } from 'class-validator';

export class VideoTranslationInputDto {
  @ApiProperty({ enum: ['bn', 'en'] })
  @IsIn(['bn', 'en'])
  locale: 'bn' | 'en';

  @ApiProperty()
  @IsString()
  @MinLength(1)
  title: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string;
}
```

### `apps/api/src/archive-content/archive-content.module.ts`

```typescript
import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { VideosService } from './videos.service';
import { VideosController } from './videos.controller';
import { MediaItemsService } from './media-items.service';
import { MediaItemsController } from './media-items.controller';
import { TimelineEventsService } from './timeline-events.service';
import { TimelineEventsController } from './timeline-events.controller';

@Module({
  imports: [PrismaModule],
  providers: [VideosService, MediaItemsService, TimelineEventsService],
  controllers: [
    VideosController,
    MediaItemsController,
    TimelineEventsController,
  ],
  exports: [VideosService, MediaItemsService, TimelineEventsService],
})
export class ArchiveContentModule {}
```

### `apps/api/src/archive-content/locale-query.dto.ts`

```typescript
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsIn, IsOptional, IsString, MaxLength } from 'class-validator';

const LOCALES = ['bn', 'en'] as const;

export class LocaleOnlyQueryDto {
  @ApiPropertyOptional({ enum: LOCALES })
  @Transform(({ value }) => (value === 'en' ? 'en' : 'bn'))
  @IsIn([...LOCALES])
  locale: (typeof LOCALES)[number] = 'bn';

  @ApiPropertyOptional({
    description: 'Exact tag match (content tags array contains this value)',
  })
  @IsOptional()
  @IsString()
  @MaxLength(80)
  tag?: string;
}
```

### `apps/api/src/archive-content/locale.util.ts`

```typescript
import { Locale } from '@prisma/client';

export type RequestLocale = 'bn' | 'en';

type Row = { locale: Locale; title: string };

export function pickLocaleTitle<T extends Row>(
  rows: T[],
  locale: RequestLocale,
): T | null {
  const direct = rows.find((t) => t.locale === locale);
  if (direct) return direct;
  const fb: Locale = locale === 'bn' ? 'en' : 'bn';
  return rows.find((t) => t.locale === fb) ?? null;
}
```

### `apps/api/src/archive-content/media-items.controller.ts`

```typescript
import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { MediaItemsService } from './media-items.service';
import { LocaleOnlyQueryDto } from './locale-query.dto';

@ApiTags('media-items')
@Controller('media-items')
export class MediaItemsController {
  constructor(private readonly media: MediaItemsService) {}

  @Get()
  @ApiOperation({ summary: 'List published media URLs (images, files, etc.)' })
  list(@Query() query: LocaleOnlyQueryDto) {
    return this.media.listPublished(query.locale, query.tag);
  }
}
```

### `apps/api/src/archive-content/media-items.service.ts`

```typescript
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Locale, ReviewStatus } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { pickLocaleTitle, type RequestLocale } from './locale.util';
import type { CreateMediaItemDto } from '../admin/dto/create-media-item.dto';
import type { UpdateMediaItemDto } from '../admin/dto/update-media-item.dto';

export type MediaItemView = {
  id: string;
  mediaUrl: string;
  publishedAt: string | null;
  title: string;
  caption: string | null;
  locale: RequestLocale;
  tags: string[];
};

@Injectable()
export class MediaItemsService {
  constructor(private readonly prisma: PrismaService) {}

  private toView(
    row: {
      id: string;
      mediaUrl: string;
      publishedAt: Date | null;
      tags: string[];
      translations: { locale: Locale; title: string; caption: string | null }[];
    },
    locale: RequestLocale,
  ): MediaItemView {
    const t = pickLocaleTitle(row.translations, locale);
    const pick = t ?? row.translations[0];
    return {
      id: row.id,
      mediaUrl: row.mediaUrl,
      publishedAt: row.publishedAt?.toISOString() ?? null,
      title: pick?.title ?? '',
      caption: pick?.caption ?? null,
      locale,
      tags: row.tags ?? [],
    };
  }

  listPublished(
    locale: RequestLocale,
    tag?: string,
  ): Promise<MediaItemView[]> {
    const tagTrim = tag?.trim();
    const where: {
      reviewStatus: 'PUBLISHED';
      tags?: { has: string };
    } = { reviewStatus: 'PUBLISHED' };
    if (tagTrim) {
      where.tags = { has: tagTrim };
    }
    return this.prisma.mediaItem
      .findMany({
        where,
        orderBy: [{ publishedAt: 'desc' }, { id: 'asc' }],
        include: { translations: true },
      })
      .then((rows) => rows.map((r) => this.toView(r, locale)));
  }

  listAdmin() {
    return this.prisma.mediaItem.findMany({
      orderBy: [{ publishedAt: 'desc' }, { id: 'asc' }],
      include: { translations: true },
    });
  }

  getById(id: string) {
    return this.prisma.mediaItem.findUnique({
      where: { id },
      include: { translations: true },
    });
  }

  async create(dto: CreateMediaItemDto) {
    const locales = new Set(dto.translations.map((t) => t.locale));
    if (locales.size !== dto.translations.length) {
      throw new BadRequestException('Duplicate locale in translations');
    }
    const tags = (dto.tags ?? [])
      .map((x) => x.trim())
      .filter((x) => x.length > 0);
    return this.prisma.mediaItem.create({
      data: {
        mediaUrl: dto.mediaUrl,
        publishedAt: dto.publishedAt ? new Date(dto.publishedAt) : null,
        reviewStatus: (dto.reviewStatus ?? 'PUBLISHED') as ReviewStatus,
        tags,
        translations: {
          create: dto.translations.map((t) => ({
            locale: t.locale as Locale,
            title: t.title,
            caption: t.caption ?? null,
          })),
        },
      },
      include: { translations: true },
    });
  }

  async update(id: string, dto: UpdateMediaItemDto) {
    const row = await this.prisma.mediaItem.findUnique({ where: { id } });
    if (!row) {
      throw new NotFoundException('Media item not found');
    }
    if (dto.translations) {
      const locales = new Set(dto.translations.map((t) => t.locale));
      if (locales.size !== dto.translations.length) {
        throw new BadRequestException('Duplicate locale in translations');
      }
    }
    return this.prisma.$transaction(async (tx) => {
      await tx.mediaItem.update({
        where: { id },
        data: {
          ...(dto.mediaUrl !== undefined && { mediaUrl: dto.mediaUrl }),
          ...(dto.publishedAt !== undefined && {
            publishedAt:
              dto.publishedAt === null ? null : new Date(dto.publishedAt),
          }),
          ...(dto.reviewStatus !== undefined && {
            reviewStatus: dto.reviewStatus as ReviewStatus,
          }),
          ...(dto.tags !== undefined && {
            tags: dto.tags.map((x) => x.trim()).filter((x) => x.length > 0),
          }),
        },
      });
      if (dto.translations?.length) {
        for (const t of dto.translations) {
          await tx.mediaItemTranslation.upsert({
            where: {
              mediaItemId_locale: {
                mediaItemId: id,
                locale: t.locale as Locale,
              },
            },
            create: {
              mediaItemId: id,
              locale: t.locale as Locale,
              title: t.title,
              caption: t.caption ?? null,
            },
            update: {
              title: t.title,
              caption: t.caption ?? null,
            },
          });
        }
      }
      return tx.mediaItem.findUniqueOrThrow({
        where: { id },
        include: { translations: true },
      });
    });
  }

  async remove(id: string) {
    const row = await this.prisma.mediaItem.findUnique({ where: { id } });
    if (!row) {
      throw new NotFoundException('Media item not found');
    }
    await this.prisma.mediaItem.delete({ where: { id } });
    return { deleted: true, id };
  }
}
```

### `apps/api/src/archive-content/timeline-events.controller.ts`

```typescript
import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { TimelineEventsService } from './timeline-events.service';
import { LocaleOnlyQueryDto } from './locale-query.dto';

@ApiTags('timeline-events')
@Controller('timeline-events')
export class TimelineEventsController {
  constructor(private readonly timeline: TimelineEventsService) {}

  @Get()
  @ApiOperation({ summary: 'List published timeline events (chronological)' })
  list(@Query() query: LocaleOnlyQueryDto) {
    return this.timeline.listPublished(query.locale);
  }
}
```

### `apps/api/src/archive-content/timeline-events.service.ts`

```typescript
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Locale, ReviewStatus } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { pickLocaleTitle, type RequestLocale } from './locale.util';
import type { CreateTimelineEventDto } from '../admin/dto/create-timeline-event.dto';
import type { UpdateTimelineEventDto } from '../admin/dto/update-timeline-event.dto';

export type TimelineEventView = {
  id: string;
  eventAt: string;
  title: string;
  bodyMd: string;
  locale: RequestLocale;
};

@Injectable()
export class TimelineEventsService {
  constructor(private readonly prisma: PrismaService) {}

  private toView(
    row: {
      id: string;
      eventAt: Date;
      translations: { locale: Locale; title: string; bodyMd: string }[];
    },
    locale: RequestLocale,
  ): TimelineEventView {
    const t = pickLocaleTitle(row.translations, locale);
    const pick = t ?? row.translations[0];
    return {
      id: row.id,
      eventAt: row.eventAt.toISOString(),
      title: pick?.title ?? '',
      bodyMd: pick?.bodyMd ?? '',
      locale,
    };
  }

  listPublished(locale: RequestLocale): Promise<TimelineEventView[]> {
    return this.prisma.timelineEvent
      .findMany({
        where: { reviewStatus: 'PUBLISHED' },
        orderBy: [{ eventAt: 'asc' }, { id: 'asc' }],
        include: { translations: true },
      })
      .then((rows) => rows.map((r) => this.toView(r, locale)));
  }

  listAdmin() {
    return this.prisma.timelineEvent.findMany({
      orderBy: [{ eventAt: 'asc' }, { id: 'asc' }],
      include: { translations: true },
    });
  }

  getById(id: string) {
    return this.prisma.timelineEvent.findUnique({
      where: { id },
      include: { translations: true },
    });
  }

  async create(dto: CreateTimelineEventDto) {
    const locales = new Set(dto.translations.map((t) => t.locale));
    if (locales.size !== dto.translations.length) {
      throw new BadRequestException('Duplicate locale in translations');
    }
    return this.prisma.timelineEvent.create({
      data: {
        eventAt: new Date(dto.eventAt),
        reviewStatus: (dto.reviewStatus ?? 'PUBLISHED') as ReviewStatus,
        translations: {
          create: dto.translations.map((t) => ({
            locale: t.locale as Locale,
            title: t.title,
            bodyMd: t.bodyMd,
          })),
        },
      },
      include: { translations: true },
    });
  }

  async update(id: string, dto: UpdateTimelineEventDto) {
    const row = await this.prisma.timelineEvent.findUnique({ where: { id } });
    if (!row) {
      throw new NotFoundException('Timeline event not found');
    }
    if (dto.translations) {
      const locales = new Set(dto.translations.map((t) => t.locale));
      if (locales.size !== dto.translations.length) {
        throw new BadRequestException('Duplicate locale in translations');
      }
    }
    return this.prisma.$transaction(async (tx) => {
      await tx.timelineEvent.update({
        where: { id },
        data: {
          ...(dto.eventAt !== undefined && {
            eventAt: new Date(dto.eventAt),
          }),
          ...(dto.reviewStatus !== undefined && {
            reviewStatus: dto.reviewStatus as ReviewStatus,
          }),
        },
      });
      if (dto.translations?.length) {
        for (const t of dto.translations) {
          await tx.timelineEventTranslation.upsert({
            where: {
              eventId_locale: { eventId: id, locale: t.locale as Locale },
            },
            create: {
              eventId: id,
              locale: t.locale as Locale,
              title: t.title,
              bodyMd: t.bodyMd,
            },
            update: {
              title: t.title,
              bodyMd: t.bodyMd,
            },
          });
        }
      }
      return tx.timelineEvent.findUniqueOrThrow({
        where: { id },
        include: { translations: true },
      });
    });
  }

  async remove(id: string) {
    const row = await this.prisma.timelineEvent.findUnique({ where: { id } });
    if (!row) {
      throw new NotFoundException('Timeline event not found');
    }
    await this.prisma.timelineEvent.delete({ where: { id } });
    return { deleted: true, id };
  }
}
```

### `apps/api/src/archive-content/videos.controller.ts`

```typescript
import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { VideosService } from './videos.service';
import { LocaleOnlyQueryDto } from './locale-query.dto';

@ApiTags('videos')
@Controller('videos')
export class VideosController {
  constructor(private readonly videos: VideosService) {}

  @Get()
  @ApiOperation({ summary: 'List published YouTube / Facebook embeds' })
  list(@Query() query: LocaleOnlyQueryDto) {
    return this.videos.listPublished(query.locale, query.tag);
  }
}
```

### `apps/api/src/archive-content/videos.service.ts`

```typescript
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { EmbedPlatform, Locale, ReviewStatus } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { pickLocaleTitle, type RequestLocale } from './locale.util';
import type { CreateExternalVideoDto } from '../admin/dto/create-external-video.dto';
import type { UpdateExternalVideoDto } from '../admin/dto/update-external-video.dto';

export type ExternalVideoView = {
  id: string;
  platform: EmbedPlatform;
  watchUrl: string;
  publishedAt: string | null;
  title: string;
  description: string | null;
  locale: RequestLocale;
  source: { name: string; url: string | null } | null;
  tags: string[];
};

@Injectable()
export class VideosService {
  constructor(private readonly prisma: PrismaService) {}

  private toView(
    row: {
      id: string;
      platform: EmbedPlatform;
      watchUrl: string;
      publishedAt: Date | null;
      tags: string[];
      source: { name: string; url: string | null } | null;
      translations: { locale: Locale; title: string; description: string | null }[];
    },
    locale: RequestLocale,
  ): ExternalVideoView {
    const t = pickLocaleTitle(row.translations, locale);
    const pick = t ?? row.translations[0];
    return {
      id: row.id,
      platform: row.platform,
      watchUrl: row.watchUrl,
      publishedAt: row.publishedAt?.toISOString() ?? null,
      title: pick?.title ?? '',
      description: pick?.description ?? null,
      locale,
      source: row.source
        ? { name: row.source.name, url: row.source.url }
        : null,
      tags: row.tags ?? [],
    };
  }

  listPublished(
    locale: RequestLocale,
    tag?: string,
  ): Promise<ExternalVideoView[]> {
    const tagTrim = tag?.trim();
    const where: {
      reviewStatus: 'PUBLISHED';
      tags?: { has: string };
    } = { reviewStatus: 'PUBLISHED' };
    if (tagTrim) {
      where.tags = { has: tagTrim };
    }
    return this.prisma.externalVideo
      .findMany({
        where,
        orderBy: [{ publishedAt: 'desc' }, { id: 'asc' }],
        include: {
          translations: true,
          source: { select: { name: true, url: true } },
        },
      })
      .then((rows) => rows.map((r) => this.toView(r, locale)));
  }

  listAdmin() {
    return this.prisma.externalVideo.findMany({
      orderBy: [{ publishedAt: 'desc' }, { id: 'asc' }],
      include: { translations: true, source: true },
    });
  }

  getById(id: string) {
    return this.prisma.externalVideo.findUnique({
      where: { id },
      include: { translations: true, source: true },
    });
  }

  async create(dto: CreateExternalVideoDto) {
    const locales = new Set(dto.translations.map((t) => t.locale));
    if (locales.size !== dto.translations.length) {
      throw new BadRequestException('Duplicate locale in translations');
    }
    const tags = (dto.tags ?? [])
      .map((x) => x.trim())
      .filter((x) => x.length > 0);
    const sid = dto.sourceId?.trim();
    return this.prisma.externalVideo.create({
      data: {
        platform: dto.platform as EmbedPlatform,
        watchUrl: dto.watchUrl,
        publishedAt: dto.publishedAt ? new Date(dto.publishedAt) : null,
        reviewStatus: (dto.reviewStatus ?? 'PUBLISHED') as ReviewStatus,
        ...(sid ? { sourceId: sid } : {}),
        tags,
        translations: {
          create: dto.translations.map((t) => ({
            locale: t.locale as Locale,
            title: t.title,
            description: t.description ?? null,
          })),
        },
      },
      include: { translations: true, source: true },
    });
  }

  async update(id: string, dto: UpdateExternalVideoDto) {
    const v = await this.prisma.externalVideo.findUnique({ where: { id } });
    if (!v) {
      throw new NotFoundException('Video not found');
    }
    if (dto.translations) {
      const locales = new Set(dto.translations.map((t) => t.locale));
      if (locales.size !== dto.translations.length) {
        throw new BadRequestException('Duplicate locale in translations');
      }
    }
    return this.prisma.$transaction(async (tx) => {
      await tx.externalVideo.update({
        where: { id },
        data: {
          ...(dto.platform !== undefined && {
            platform: dto.platform as EmbedPlatform,
          }),
          ...(dto.watchUrl !== undefined && { watchUrl: dto.watchUrl }),
          ...(dto.publishedAt !== undefined && {
            publishedAt:
              dto.publishedAt === null ? null : new Date(dto.publishedAt),
          }),
          ...(dto.reviewStatus !== undefined && {
            reviewStatus: dto.reviewStatus as ReviewStatus,
          }),
          ...(dto.sourceId !== undefined && {
            sourceId: dto.sourceId?.trim() ? dto.sourceId.trim() : null,
          }),
          ...(dto.tags !== undefined && {
            tags: dto.tags.map((x) => x.trim()).filter((x) => x.length > 0),
          }),
        },
      });
      if (dto.translations?.length) {
        for (const t of dto.translations) {
          await tx.externalVideoTranslation.upsert({
            where: {
              videoId_locale: { videoId: id, locale: t.locale as Locale },
            },
            create: {
              videoId: id,
              locale: t.locale as Locale,
              title: t.title,
              description: t.description ?? null,
            },
            update: {
              title: t.title,
              description: t.description ?? null,
            },
          });
        }
      }
      return tx.externalVideo.findUniqueOrThrow({
        where: { id },
        include: { translations: true, source: true },
      });
    });
  }

  async remove(id: string) {
    const v = await this.prisma.externalVideo.findUnique({ where: { id } });
    if (!v) {
      throw new NotFoundException('Video not found');
    }
    await this.prisma.externalVideo.delete({ where: { id } });
    return { deleted: true, id };
  }
}
```

### `apps/api/src/articles/articles.controller.ts`

```typescript
import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ArticleDetailQueryDto } from './dto/article-detail-query.dto';
import { ArticleListQueryDto } from './dto/article-list-query.dto';
import { ArticlesService } from './articles.service';

@ApiTags('articles')
@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Get()
  @ApiOperation({
    summary: 'List articles with merged locale fields (?locale=bn|en)',
  })
  list(@Query() query: ArticleListQueryDto) {
    return this.articlesService.list(query);
  }

  @Get(':slug')
  @ApiOperation({ summary: 'Single article by slug' })
  getOne(@Param('slug') slug: string, @Query() query: ArticleDetailQueryDto) {
    return this.articlesService.getBySlug(slug, query.locale);
  }
}
```

### `apps/api/src/articles/articles.module.ts`

```typescript
import { Module } from '@nestjs/common';
import { ArticlesController } from './articles.controller';
import { ArticlesService } from './articles.service';

@Module({
  controllers: [ArticlesController],
  providers: [ArticlesService],
})
export class ArticlesModule {}
```

### `apps/api/src/articles/articles.service.ts`

```typescript
import { Injectable, NotFoundException } from '@nestjs/common';
import { Locale, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import type { ArticleListQueryDto, RequestLocale } from './dto/article-list-query.dto';

type TranslationRow = {
  locale: Locale;
  title: string;
  description: string | null;
  bodyMd: string;
  seoTitle: string | null;
  seoDescription: string | null;
};

export type ArticleView = {
  id: string;
  slug: string;
  publishedAt: string | null;
  coverUrl: string | null;
  category: string | null;
  tags: string[];
  title: string;
  description: string | null;
  bodyMd?: string;
  seoTitle?: string | null;
  seoDescription?: string | null;
  locale: RequestLocale;
  source: {
    name: string;
    url: string | null;
  };
};

function pickTranslation(
  rows: TranslationRow[],
  locale: RequestLocale,
): TranslationRow | null {
  const direct = rows.find((t) => t.locale === locale);
  if (direct) return direct;
  const fb: Locale = locale === 'bn' ? 'en' : 'bn';
  return rows.find((t) => t.locale === fb) ?? null;
}

function toArticleView(
  article: {
    id: string;
    slug: string;
    publishedAt: Date | null;
    coverUrl: string | null;
    category: string | null;
    tags: string[];
    source: { name: string; url: string | null };
    translations: TranslationRow[];
  },
  locale: RequestLocale,
  includeBody: boolean,
): ArticleView {
  const t = pickTranslation(article.translations, locale);
  if (!t) {
    throw new NotFoundException(`No translation available for slug ${article.slug}`);
  }

  const base: ArticleView = {
    id: article.id,
    slug: article.slug,
    publishedAt: article.publishedAt?.toISOString() ?? null,
    coverUrl: article.coverUrl,
    category: article.category,
    tags: article.tags ?? [],
    title: t.title,
    description: t.description,
    locale,
    seoTitle: t.seoTitle,
    seoDescription: t.seoDescription,
    source: article.source,
  };

  if (includeBody) {
    base.bodyMd = t.bodyMd;
  }

  return base;
}

@Injectable()
export class ArticlesService {
  constructor(private readonly prisma: PrismaService) {}

  async list(query: ArticleListQueryDto): Promise<{
    data: ArticleView[];
    meta: { page: number; pageSize: number; total: number };
  }> {
    const { locale, page, pageSize, q, category, tag } = query;
    const where: Prisma.ArticleWhereInput = {
      reviewStatus: 'PUBLISHED',
    };

    const and: Prisma.ArticleWhereInput[] = [];
    if (category?.trim()) {
      and.push({ category: category.trim() });
    }
    if (tag?.trim()) {
      const t = tag.trim();
      and.push({
        OR: [
          { tags: { has: t } },
          { category: { equals: t, mode: 'insensitive' } },
        ],
      });
    }
    if (and.length) {
      where.AND = and;
    }

    if (q?.trim()) {
      const term = q.trim();
      where.translations = {
        some: {
          locale: locale as Locale,
          OR: [
            { title: { contains: term, mode: 'insensitive' } },
            { bodyMd: { contains: term, mode: 'insensitive' } },
            { description: { contains: term, mode: 'insensitive' } },
          ],
        },
      };
    }

    const [total, rows] = await Promise.all([
      this.prisma.article.count({ where }),
      this.prisma.article.findMany({
        where,
        orderBy: [{ publishedAt: 'desc' }, { slug: 'asc' }],
        skip: (page - 1) * pageSize,
        take: pageSize,
        include: {
          source: true,
          translations: true,
        },
      }),
    ]);

    const data = rows.map((article) =>
      toArticleView(article, locale, false),
    );

    return { data, meta: { page, pageSize, total } };
  }

  async getBySlug(
    slug: string,
    locale: RequestLocale,
  ): Promise<ArticleView> {
    const article = await this.prisma.article.findFirst({
      where: { slug, reviewStatus: 'PUBLISHED' },
      include: {
        source: true,
        translations: true,
      },
    });

    if (!article) {
      throw new NotFoundException('Article not found');
    }

    return toArticleView(article, locale, true);
  }
}
```

### `apps/api/src/articles/dto/article-detail-query.dto.ts`

```typescript
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsIn } from 'class-validator';
import type { RequestLocale } from './article-list-query.dto';

const LOCALES = ['bn', 'en'] as const;

export class ArticleDetailQueryDto {
  @ApiPropertyOptional({ enum: LOCALES })
  @Transform(({ value }) => (value === 'en' ? 'en' : 'bn'))
  @IsIn([...LOCALES])
  locale: RequestLocale = 'bn';
}
```

### `apps/api/src/articles/dto/article-list-query.dto.ts`

```typescript
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import {
  IsIn,
  IsInt,
  IsOptional,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';

const LOCALES = ['bn', 'en'] as const;
export type RequestLocale = (typeof LOCALES)[number];

export class ArticleListQueryDto {
  @ApiPropertyOptional({ enum: LOCALES })
  @Transform(({ value }) => (value === 'en' ? 'en' : 'bn'))
  @IsIn([...LOCALES])
  locale: RequestLocale = 'bn';

  @ApiPropertyOptional({ default: 1 })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  page = 1;

  @ApiPropertyOptional({ default: 12 })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  pageSize = 12;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @MaxLength(200)
  q?: string;

  @ApiPropertyOptional({
    description: 'Exact match on Article.category (e.g. News, Report)',
  })
  @IsOptional()
  @IsString()
  @MaxLength(120)
  category?: string;

  @ApiPropertyOptional({
    description:
      'Tag: article tags array contains this value, or category equals (case-insensitive)',
  })
  @IsOptional()
  @IsString()
  @MaxLength(80)
  tag?: string;
}
```

### `apps/api/src/auth/admin-jwt.guard.ts`

```typescript
import { AuthGuard } from '@nestjs/passport';

export class AdminJwtGuard extends AuthGuard('admin-jwt') {}
```

### `apps/api/src/auth/auth.module.ts`

```typescript
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AdminAuthController } from '../admin/admin-auth.controller';
import { AdminAuthService } from '../admin/admin-auth.service';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const expiresSec = parseInt(
          config.get<string>('JWT_EXPIRES_SEC') ?? '604800',
          10,
        );
        return {
          secret:
            config.get<string>('JWT_SECRET') ??
            'development-only-jwt-secret-min-32-chars',
          signOptions: {
            expiresIn: expiresSec,
          },
        };
      },
    }),
  ],
  controllers: [AdminAuthController],
  providers: [AdminAuthService, JwtStrategy],
  exports: [AdminAuthService, JwtModule],
})
export class AuthModule {}
```

### `apps/api/src/auth/current-admin.decorator.ts`

```typescript
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export type CurrentAdmin = { id: string; email: string };

export const CurrentAdminUser = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext): CurrentAdmin => {
    const req = ctx.switchToHttp().getRequest<{ user: CurrentAdmin }>();
    return req.user;
  },
);
```

### `apps/api/src/auth/jwt-payload.type.ts`

```typescript
export type AdminJwtPayload = {
  sub: string;
  email: string;
};
```

### `apps/api/src/auth/jwt.strategy.ts`

```typescript
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import type { AdminJwtPayload } from './jwt-payload.type';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'admin-jwt') {
  constructor(
    config: ConfigService,
    private readonly prisma: PrismaService,
  ) {
    const secret =
      config.get<string>('JWT_SECRET') ??
      'development-only-jwt-secret-min-32-chars';
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: secret,
    });
  }

  async validate(payload: AdminJwtPayload) {
    const admin = await this.prisma.admin.findUnique({
      where: { id: payload.sub },
    });
    if (!admin) {
      throw new UnauthorizedException();
    }
    return { id: admin.id, email: admin.email };
  }
}
```

### `apps/api/src/breaking-news/admin-breaking-news.controller.ts`

```typescript
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AdminJwtGuard } from '../auth/admin-jwt.guard';
import { CreateBreakingNewsItemDto } from '../admin/dto/create-breaking-news-item.dto';
import { UpdateBreakingNewsItemDto } from '../admin/dto/update-breaking-news-item.dto';
import { BreakingNewsService } from './breaking-news.service';

@ApiTags('admin-breaking-news')
@ApiBearerAuth('admin-jwt')
@UseGuards(AdminJwtGuard)
@Controller('admin/breaking-news')
export class AdminBreakingNewsController {
  constructor(private readonly breakingNews: BreakingNewsService) {}

  @Get()
  @ApiOperation({ summary: 'List all breaking news ticker lines' })
  list() {
    return this.breakingNews.listAdmin();
  }

  @Post()
  @ApiOperation({ summary: 'Create ticker line' })
  create(@Body() dto: CreateBreakingNewsItemDto) {
    return this.breakingNews.create(dto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update ticker line' })
  update(@Param('id') id: string, @Body() dto: UpdateBreakingNewsItemDto) {
    return this.breakingNews.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete ticker line' })
  remove(@Param('id') id: string) {
    return this.breakingNews.remove(id);
  }
}
```

### `apps/api/src/breaking-news/breaking-news.controller.ts`

```typescript
import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { LocaleOnlyQueryDto } from '../archive-content/locale-query.dto';
import { BreakingNewsService } from './breaking-news.service';

@ApiTags('breaking-news')
@Controller('breaking-news')
export class BreakingNewsController {
  constructor(private readonly breakingNews: BreakingNewsService) {}

  @Get()
  @ApiOperation({ summary: 'Active breaking news lines for ticker (locale title)' })
  list(@Query() query: LocaleOnlyQueryDto) {
    return this.breakingNews.listPublic(query.locale);
  }
}
```

### `apps/api/src/breaking-news/breaking-news.module.ts`

```typescript
import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { AdminBreakingNewsController } from './admin-breaking-news.controller';
import { BreakingNewsController } from './breaking-news.controller';
import { BreakingNewsService } from './breaking-news.service';

@Module({
  imports: [PrismaModule],
  providers: [BreakingNewsService],
  controllers: [BreakingNewsController, AdminBreakingNewsController],
  exports: [BreakingNewsService],
})
export class BreakingNewsModule {}
```

### `apps/api/src/breaking-news/breaking-news.service.ts`

```typescript
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import type { CreateBreakingNewsItemDto } from '../admin/dto/create-breaking-news-item.dto';
import type { UpdateBreakingNewsItemDto } from '../admin/dto/update-breaking-news-item.dto';
import type { RequestLocale } from '../articles/dto/article-list-query.dto';

export type BreakingNewsTickerItem = {
  id: string;
  title: string;
  href: string | null;
};

@Injectable()
export class BreakingNewsService {
  constructor(private readonly prisma: PrismaService) {}

  private normalizeHref(raw: string | null | undefined): string | null {
    if (raw == null || typeof raw !== 'string') {
      return null;
    }
    const t = raw.trim();
    if (!t) {
      return null;
    }
    if (/^https?:\/\//i.test(t)) {
      return t;
    }
    return t.startsWith('/') ? t : `/${t}`;
  }

  async listPublic(locale: RequestLocale): Promise<BreakingNewsTickerItem[]> {
    const rows = await this.prisma.breakingNewsItem.findMany({
      where: { active: true },
      orderBy: [{ sortOrder: 'asc' }, { id: 'asc' }],
      select: { id: true, titleBn: true, titleEn: true, href: true },
    });
    return rows.map((r) => ({
      id: r.id,
      title: locale === 'en' ? r.titleEn : r.titleBn,
      href: r.href,
    }));
  }

  listAdmin() {
    return this.prisma.breakingNewsItem.findMany({
      orderBy: [{ sortOrder: 'asc' }, { id: 'asc' }],
    });
  }

  async create(dto: CreateBreakingNewsItemDto) {
    return this.prisma.breakingNewsItem.create({
      data: {
        titleBn: dto.titleBn.trim(),
        titleEn: dto.titleEn.trim(),
        href: this.normalizeHref(dto.href),
        active: dto.active ?? true,
        sortOrder: dto.sortOrder ?? 0,
      },
    });
  }

  async update(id: string, dto: UpdateBreakingNewsItemDto) {
    const row = await this.prisma.breakingNewsItem.findUnique({ where: { id } });
    if (!row) {
      throw new NotFoundException('Breaking news item not found');
    }
    return this.prisma.breakingNewsItem.update({
      where: { id },
      data: {
        ...(dto.titleBn !== undefined && { titleBn: dto.titleBn.trim() }),
        ...(dto.titleEn !== undefined && { titleEn: dto.titleEn.trim() }),
        ...(dto.href !== undefined && {
          href:
            dto.href === null || dto.href === ''
              ? null
              : this.normalizeHref(dto.href),
        }),
        ...(dto.active !== undefined && { active: dto.active }),
        ...(dto.sortOrder !== undefined && { sortOrder: dto.sortOrder }),
      },
    });
  }

  async remove(id: string) {
    const row = await this.prisma.breakingNewsItem.findUnique({ where: { id } });
    if (!row) {
      throw new NotFoundException('Breaking news item not found');
    }
    await this.prisma.breakingNewsItem.delete({ where: { id } });
    return { deleted: true, id };
  }
}
```

### `apps/api/src/health/health.controller.ts`

```typescript
import { Controller, Get } from '@nestjs/common';
import { SkipThrottle } from '@nestjs/throttler';

@Controller('health')
@SkipThrottle()
export class HealthController {
  @Get()
  get() {
    return { status: 'ok', service: 'citizen-perspective-api' };
  }
}
```

### `apps/api/src/health/health.module.ts`

```typescript
import { Module } from '@nestjs/common';
import { HealthController } from './health.controller';

@Module({
  controllers: [HealthController],
})
export class HealthModule {}
```

### `apps/api/src/prisma/prisma.module.ts`

```typescript
import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
```

### `apps/api/src/prisma/prisma.service.ts`

```typescript
import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
```

### `apps/api/test/app.e2e-spec.ts`

```typescript
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import request from 'supertest';
import { ArticlesService } from './../src/articles/articles.service';
import { PrismaService } from './../src/prisma/prisma.service';
import { AppModule } from './../src/app.module';

describe('Articles API (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(PrismaService)
      .useValue({
        onModuleInit: async () => {},
        onModuleDestroy: async () => {},
        $connect: async () => {},
        $disconnect: async () => {},
      })
      .overrideProvider(ArticlesService)
      .useValue({
        list: jest.fn().mockResolvedValue({
          data: [
            {
              id: '1',
              slug: 'sample-slug',
              publishedAt: '2024-01-01T00:00:00.000Z',
              coverUrl: null,
              category: 'News',
              title: 'Sample',
              description: 'Desc',
              locale: 'bn',
              source: { name: 'Source', url: null },
            },
          ],
          meta: { page: 1, pageSize: 12, total: 1 },
        }),
        getBySlug: jest.fn().mockResolvedValue({
          id: '1',
          slug: 'sample-slug',
          publishedAt: '2024-01-01T00:00:00.000Z',
          coverUrl: null,
          category: 'News',
          title: 'Sample article',
          description: null,
          bodyMd: '# Hi',
          locale: 'bn',
          source: { name: 'Source', url: null },
        }),
      })
      .compile();

    app = moduleFixture.createNestApplication();
    app.setGlobalPrefix('api/v1');
    app.useGlobalPipes(
      new ValidationPipe({
        transform: true,
        whitelist: true,
        forbidUnknownValues: false,
      }),
    );
    await app.init();
  });

  afterEach(async () => {
    await app.close();
  });

  it('GET /api/v1/articles', async () => {
    const res = await request(app.getHttpServer())
      .get('/api/v1/articles?locale=en')
      .expect(200);
    expect(res.body.data).toHaveLength(1);
    expect(res.body.data[0].slug).toBe('sample-slug');
  });

  it('GET /api/v1/articles/:slug', async () => {
    const res = await request(app.getHttpServer())
      .get('/api/v1/articles/sample-slug?locale=en')
      .expect(200);
    expect(res.body.title).toBe('Sample article');
    expect(res.body.bodyMd).toBe('# Hi');
  });
});
```

### `apps/api/test/jest-e2e.json`

```json
{
  "moduleFileExtensions": ["js", "json", "ts"],
  "rootDir": ".",
  "testEnvironment": "node",
  "testRegex": ".e2e-spec.ts$",
  "transform": {
    "^.+\\.(t|j)s$": "ts-jest"
  }
}
```

### `apps/web/.gitignore`

```
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.*
.yarn/*
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/versions

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*

# env files (can opt-in for committing if needed)
.env*

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
```

### `apps/web/eslint.config.mjs`

```
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
```

### `apps/web/next-env.d.ts`

```typescript
/// <reference types="next" />
/// <reference types="next/image-types/global" />
import "./.next/types/routes.d.ts";

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/api-reference/config/typescript for more information.
```

### `apps/web/next.config.ts`

```typescript
import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {};

export default withNextIntl(nextConfig);
```

### `apps/web/package.json`

```json
{
  "name": "web",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  },
  "dependencies": {
    "@jan-drishthi/shared": "^0.0.1",
    "clsx": "^2.1.1",
    "date-fns": "^4.1.0",
    "next": "16.2.6",
    "next-intl": "^4.11.2",
    "react": "19.2.4",
    "react-dom": "19.2.4",
    "react-markdown": "^10.1.0",
    "remark-gfm": "^4.0.1"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.2.6",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}
```

### `apps/web/postcss.config.mjs`

```
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
```

### `apps/web/README.md`

```markdown
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
```

### `apps/web/tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts",
    "**/*.mts"
  ],
  "exclude": ["node_modules"]
}
```

### `apps/web/tsconfig.tsbuildinfo`


### `apps/web/vercel.json`

```json
{
  "framework": "nextjs",
  "installCommand": "cd ../.. && npm ci",
  "buildCommand": "npm run build"
}
```

### `apps/web/messages/bn.json`

```json
{
  "brandName": "জনদৃষ্টি",
  "meta": {
    "title": "জনদৃষ্টি — BD Measles Media Archive",
    "description": "বাংলাদেশে হাম ও শিশু স্বাস্থ্য বিষয়ক যাচাইকৃত মিডিয়া আর্কাইভ · নাগরিক দৃষ্টিকোণ থেকে তথ্য।"
  },
  "nav": {
    "archive": "আর্কাইভ",
    "articles": "প্রবন্ধ",
    "news": "সংবাদ",
    "videos": "ভিডিও",
    "media": "মিডিয়া",
    "timeline": "সময়রেখা",
    "about": "সম্পর্কে",
    "admin": "অ্যাডমিন",
    "searchPlaceholder": "অনুসন্ধান…",
    "breaking": "ব্রেকিং",
    "breakingNewsMarquee": "ব্রেকিং সংবাদ শিরোনাম"
  },
  "home": {
    "heroSubtitle": "BD Measles Media Archive",
    "heroIntro": "বাংলাদেশে হামের প্রাদুর্ভাব ও শিশু স্বাস্থ্য ঘটনাবলী সম্পর্কিত যাচাইকৃত সংবাদ, ভিডিও ও সাক্ষাৎকারের কাঠামোবদ্ধ পাবলিক রেকর্ড।",
    "heroSearchLabel": "গ্লোবাল অনুসন্ধান",
    "filterNews": "সংবাদ",
    "filterVideos": "ভিডিও",
    "filterTimeline": "সময়রেখা",
    "featured": "নির্বাচিত",
    "latestGrid": "সাম্প্রতিক",
    "articlesLead": "সকল প্রকাশিত নিবন্ধ।",
    "timelinePreview": "সময়রেখা (প্রিভিউ)",
    "timelineSeeAll": "সম্পূর্ণ সময়রেখা",
    "timelinePreviewEmpty": "এখনো সময়রেখার ভ্রুক্ত নেই।",
    "noArticles": "কোনো প্রবন্ধ পাওয়া যায়নি। API চালু আছে কিনা যাচাই করুন।",
    "source": "উৎস",
    "read": "পড়ুন"
  },
  "article": {
    "bySource": "উৎস",
    "published": "প্রকাশ",
    "tags": "ট্যাগ",
    "related": "সম্পর্কিত",
    "toc": "সূচিপত্র",
    "verification": "উৎস যাচাই",
    "notFound": "প্রবন্ধ পাওয়া যায়নি।"
  },
  "tagHub": {
    "title": "ট্যাগ: {tag}",
    "intro": "এই ট্যাগের সাথে সংযুক্ত আর্কাইভের সব বিষয়বস্তু।",
    "articles": "প্রবন্ধ",
    "news": "সংবাদ",
    "videos": "ভিডিও",
    "media": "মিডিয়া",
    "empty": "এই ট্যাগে এই বিভাগে কিছু নেই।",
    "seeArticles": "সকল প্রবন্ধ",
    "seeNews": "সংবাদ সূচি"
  },
  "placeholders": {
    "mediaTitle": "মিডিয়া লাইব্রেরি",
    "mediaIntro": "ইউটিউব ও ফেসবুক এমবেড, সাথে ঐচ্ছিক উৎস ও ট্যাগ।",
    "mediaVideosHeading": "ভিডিও",
    "mediaVideosEmpty": "এখনো কোনো প্রকাশিত ভিডিও নেই।",
    "videoSource": "উৎস",
    "videoTags": "ট্যাগ",
    "videoValueEmpty": "উল্লেখ নেই",
    "timelineTitle": "সময়রেখা",
    "timelineIntro": "আর্কাইভের তারিখ অনুযায়ী নোট ও মাইলফলক।",
    "timelineEmpty": "এখনো কোনো সময়রেখা ঘটনা নেই।",
    "aboutTitle": "সম্পর্কে",
    "aboutBody": "জনদৃষ্টি একটি দ্বিভাষিক নাগরিক আর্কাইভ। তথ্যের নিরপেক্ষতা ও উৎসের স্বচ্ছতা আমাদের মূল নীতি।"
  },
  "admin": {
    "title": "অ্যাডমিন",
    "navArticles": "প্রবন্ধ",
    "navSources": "উৎস",
    "logout": "লগআউট",
    "loginTitle": "অ্যাডমিন লগইন",
    "loginEmail": "ইমেইল",
    "loginPassword": "পাসওয়ার্ড",
    "loginSubmit": "সাইন ইন",
    "loginError": "লগইন ব্যর্থ।",
    "bootstrapTitle": "প্রথম সেটআপ",
    "bootstrapHint": "কোনো অ্যাডমিন না থাকলে এবং সার্ভারের ADMIN_BOOTSTRAP_SECRET মিললে কাজ করে।",
    "bootstrapSecret": "বুটস্ট্র্যাপ সিক্রেট",
    "bootstrapSubmit": "অ্যাডমিন তৈরি ও সাইন ইন",
    "bootstrapError": "বুটস্ট্র্যাপ ব্যর্থ।",
    "backToLogin": "লগইনে ফিরুন",
    "articlesTitle": "প্রবন্ধ",
    "newArticle": "নতুন প্রবন্ধ",
    "editArticle": "সম্পাদনা",
    "deleteArticle": "মুছুন",
    "confirmDelete": "এই প্রবন্ধ মুছবেন?",
    "slug": "স্লাগ",
    "source": "উৎস",
    "category": "বিভাগ",
    "status": "অবস্থা",
    "publishedAt": "প্রকাশের তারিখ",
    "coverUrl": "কভার ছবির URL",
    "save": "সংরক্ষণ",
    "cancel": "বাতিল",
    "saving": "সংরক্ষণ হচ্ছে…",
    "loading": "লোড হচ্ছে…",
    "loadError": "ডেটা লোড করা যায়নি।",
    "saveError": "সংরক্ষণ ব্যর্থ।",
    "titleBn": "শিরোনাম (বাংলা)",
    "titleEn": "শিরোনাম (ইংরেজি)",
    "descBn": "বিবরণ (বাংলা)",
    "descEn": "বিবরণ (ইংরেজি)",
    "bodyBn": "মার্কডাউন (বাংলা)",
    "bodyEn": "মার্কডাউন (ইংরেজি)",
    "seoTitleBn": "SEO শিরোনাম (বাংলা)",
    "seoTitleEn": "SEO শিরোনাম (ইংরেজি)",
    "seoDescBn": "SEO বিবরণ (বাংলা)",
    "seoDescEn": "SEO বিবরণ (ইংরেজি)",
    "sourcesTitle": "উৎস",
    "sourceName": "নাম",
    "sourceUrl": "URL",
    "addSource": "উৎস যোগ",
    "editSource": "সংরক্ষণ",
    "deleteSource": "মুছুন",
    "confirmDeleteSource": "এই উৎস মুছবেন? শুধু যদি কোনো প্রবন্ধ না থাকে।",
    "sourceArticleCount": "{count}টি প্রবন্ধ",
    "noSources": "কোনো উৎস নেই।",
    "noArticles": "কোনো প্রবন্ধ নেই।",
    "draft": "খসড়া",
    "published": "প্রকাশিত",
    "all": "সব",
    "filterStatus": "ফিল্টার",
    "navNews": "সংবাদ",
    "navBreakingNews": "ব্রেকিং টিকার",
    "navVideos": "ভিডিও",
    "navMediaUrls": "মিডিয়া URL",
    "navTimeline": "সময়রেখা",
    "breakingNewsTitle": "ব্রেকিং নিউজ টিকার",
    "breakingNewsHint":
      "সাইট হেডারের মার্কিতে দেখানো লাইন। দুই ভাষায় শিরোনাম দিন। লিংক: অভ্যন্তরীণ পথ (/articles/slug) বা https URL। কম সর্ট অর্ডার আগে দেখা যাবে।",
    "breakingNewsAdd": "টিকার লাইন যোগ",
    "breakingNewsAddSubmit": "যোগ করুন",
    "breakingNewsEmpty": "এখনো কোনো টিকার লাইন নেই — কমপক্ষে একটি সক্রিয় লাইন না যোগ করা পর্যন্ত মার্কি লুকানো থাকে।",
    "breakingTitleBn": "শিরোনাম (বাংলা)",
    "breakingTitleEn": "শিরোনাম (ইংরেজি)",
    "breakingHref": "লিংক (ঐচ্ছিক)",
    "breakingSort": "সাজানোর ক্রম",
    "breakingActive": "সক্রিয় (সাইটে দেখান)",
    "confirmDeleteBreakingNews": "এই টিকার লাইন মুছবেন?",
    "videosTitle": "ভিডিও (ইউটিউব / ফেসবুক)",
    "videosHint": "ওয়াচ বা শেয়ার URL এখানে দিন। শিরোনাম ও বিবরণ দ্বিভাষিক।",
    "videoTagsField": "ট্যাগ (কমা দিয়ে আলাদা)",
    "videoTagsHint": "যেমন: হাম, সাক্ষাৎকার",
    "videoTagsLabel": "ট্যাগ",
    "videoSourceNone": "নেই",
    "videosAdd": "ভিডিও যোগ",
    "videosAddSubmit": "ভিডিও যোগ করুন",
    "videosEmpty": "এখনো কোনো ভিডিও নেই।",
    "confirmDeleteVideo": "এই ভিডিও মুছবেন?",
    "videoPlatform": "প্ল্যাটফর্ম",
    "videoWatchUrl": "ওয়াচ URL",
    "videoTitleBn": "শিরোনাম (বাংলা)",
    "videoTitleEn": "শিরোনাম (ইংরেজি)",
    "videoDescBn": "বিবরণ (বাংলা)",
    "videoDescEn": "বিবরণ (ইংরেজি)",
    "mediaItemsTitle": "মিডিয়া URL",
    "mediaItemsHint": "ছবি, PDF, অডিও ইত্যাদির লিংক — এমবেড প্লেয়ার নয়।",
    "mediaItemsAdd": "মিডিয়া URL যোগ",
    "mediaItemsAddSubmit": "যোগ করুন",
    "mediaItemsEmpty": "এখনো কোনো মিডিয়া URL নেই।",
    "confirmDeleteMediaItem": "এই মিডিয়া ভ্রুক্ত মুছবেন?",
    "mediaUrlField": "মিডিয়া URL",
    "mediaCaptionBn": "ক্যাপশন (বাংলা)",
    "mediaCaptionEn": "ক্যাপশন (ইংরেজি)",
    "mediaTitleBn": "শিরোনাম (বাংলা)",
    "mediaTitleEn": "শিরোনাম (ইংরেজি)",
    "timelineAdminTitle": "সময়রেখা",
    "timelineAdminHint": "পাবলিক সময়রেখায় ঘটনাগুলো তারিখ অনুসারে দেখাবে।",
    "timelineAdd": "ঘটনা যোগ",
    "timelineAddSubmit": "ঘটনা যোগ করুন",
    "timelineEmpty": "এখনো কোনো ঘটনা নেই।",
    "confirmDeleteTimeline": "এই সময়রেখা ঘটনা মুছবেন?",
    "timelineEventAt": "ঘটনার তারিখ",
    "timelineTitleBn": "শিরোনাম (বাংলা)",
    "timelineTitleEn": "শিরোনাম (ইংরেজি)",
    "timelineBodyBn": "মার্কডাউন (বাংলা)",
    "timelineBodyEn": "মার্কডাউন (ইংরেজি)"
  }
}
```

### `apps/web/messages/en.json`

```json
{
  "brandName": "Citizen Perspective",
  "meta": {
    "title": "Citizen Perspective — BD Measles Media Archive",
    "description": "Verified media archive on measles outbreaks and child health in Bangladesh — information from a civic point of view."
  },
  "nav": {
    "archive": "Archive",
    "articles": "Articles",
    "news": "News",
    "videos": "Videos",
    "media": "Media",
    "timeline": "Timeline",
    "about": "About",
    "admin": "Admin",
    "searchPlaceholder": "Search…",
    "breaking": "Breaking",
    "breakingNewsMarquee": "Breaking news headlines"
  },
  "home": {
    "heroSubtitle": "BD Measles Media Archive",
    "heroIntro": "A structured public record of verified news, video, and interviews on measles outbreaks and child health incidents in Bangladesh.",
    "heroSearchLabel": "Global search",
    "filterNews": "News",
    "filterVideos": "Videos",
    "filterTimeline": "Timeline",
    "featured": "Featured",
    "latestGrid": "Latest",
    "articlesLead": "All published entries.",
    "timelinePreview": "Timeline preview",
    "timelineSeeAll": "Full timeline",
    "timelinePreviewEmpty": "No timeline entries yet.",
    "noArticles": "No articles found. Ensure the API is running and the database is seeded.",
    "source": "Source",
    "read": "Read"
  },
  "article": {
    "bySource": "Source",
    "published": "Published",
    "tags": "Tags",
    "related": "Related",
    "toc": "Table of contents",
    "verification": "Source verification",
    "notFound": "Article not found."
  },
  "tagHub": {
    "title": "Tag: {tag}",
    "intro": "Everything in the archive linked to this tag.",
    "articles": "Articles",
    "news": "News",
    "videos": "Videos",
    "media": "Media",
    "empty": "Nothing in this section for this tag.",
    "seeArticles": "All articles",
    "seeNews": "News index"
  },
  "placeholders": {
    "mediaTitle": "Media library",
    "mediaIntro": "Embedded YouTube and Facebook videos with optional source attribution and tags.",
    "mediaVideosHeading": "Videos",
    "mediaVideosEmpty": "No published videos yet.",
    "videoSource": "Source",
    "videoTags": "Tags",
    "videoValueEmpty": "Not specified",
    "timelineTitle": "Timeline",
    "timelineIntro": "Chronological notes and milestones from the archive.",
    "timelineEmpty": "No timeline events yet.",
    "aboutTitle": "About",
    "aboutBody": "Citizen Perspective is a bilingual civic archive. Our principles are neutral tone, mandatory attribution, and clarity over sensation."
  },
  "admin": {
    "title": "Admin",
    "navArticles": "Articles",
    "navSources": "Sources",
    "logout": "Log out",
    "loginTitle": "Admin sign in",
    "loginEmail": "Email",
    "loginPassword": "Password",
    "loginSubmit": "Sign in",
    "loginError": "Sign in failed.",
    "bootstrapTitle": "First-time setup",
    "bootstrapHint": "Only works when no admin exists and secret matches server ADMIN_BOOTSTRAP_SECRET.",
    "bootstrapSecret": "Bootstrap secret",
    "bootstrapSubmit": "Create admin & sign in",
    "bootstrapError": "Bootstrap failed.",
    "backToLogin": "Back to sign in",
    "articlesTitle": "Articles",
    "newArticle": "New article",
    "editArticle": "Edit",
    "deleteArticle": "Delete",
    "confirmDelete": "Delete this article?",
    "slug": "Slug",
    "source": "Source",
    "category": "Category",
    "status": "Status",
    "publishedAt": "Published",
    "coverUrl": "Cover image URL",
    "save": "Save",
    "cancel": "Cancel",
    "saving": "Saving…",
    "loading": "Loading…",
    "loadError": "Could not load data.",
    "saveError": "Save failed.",
    "titleBn": "Title (বাংলা)",
    "titleEn": "Title (English)",
    "descBn": "Description (বাংলা)",
    "descEn": "Description (English)",
    "bodyBn": "Body Markdown (বাংলা)",
    "bodyEn": "Body Markdown (English)",
    "seoTitleBn": "SEO title (বাংলা)",
    "seoTitleEn": "SEO title (English)",
    "seoDescBn": "SEO description (বাংলা)",
    "seoDescEn": "SEO description (English)",
    "sourcesTitle": "Sources",
    "sourceName": "Name",
    "sourceUrl": "URL",
    "addSource": "Add source",
    "editSource": "Save changes",
    "deleteSource": "Remove",
    "confirmDeleteSource": "Delete this source? Only if no articles use it.",
    "sourceArticleCount": "{count} articles",
    "noSources": "No sources yet.",
    "noArticles": "No articles.",
    "draft": "Draft",
    "published": "Published",
    "all": "All",
    "filterStatus": "Filter",
    "navNews": "News",
    "navBreakingNews": "Breaking ticker",
    "navVideos": "Videos",
    "navMediaUrls": "Media URLs",
    "navTimeline": "Timeline",
    "breakingNewsTitle": "Breaking news ticker",
    "breakingNewsHint":
      "Lines shown in the site header marquee. Use bilingual titles. Link: internal path (/articles/slug) or https URL. Lower sort order appears first.",
    "breakingNewsAdd": "Add ticker line",
    "breakingNewsAddSubmit": "Add line",
    "breakingNewsEmpty": "No ticker lines yet — the marquee is hidden until you add at least one active line.",
    "breakingTitleBn": "Headline (বাংলা)",
    "breakingTitleEn": "Headline (English)",
    "breakingHref": "Link (optional)",
    "breakingSort": "Sort order",
    "breakingActive": "Active (show on site)",
    "confirmDeleteBreakingNews": "Delete this ticker line?",
    "videosTitle": "Videos (YouTube / Facebook)",
    "videosHint": "Paste a watch or share URL. Titles and descriptions are bilingual.",
    "videoTagsField": "Tags (comma-separated)",
    "videoTagsHint": "e.g. measles, interview",
    "videoTagsLabel": "Tags",
    "videoSourceNone": "None",
    "videosAdd": "Add video",
    "videosAddSubmit": "Add video",
    "videosEmpty": "No videos yet.",
    "confirmDeleteVideo": "Delete this video?",
    "videoPlatform": "Platform",
    "videoWatchUrl": "Watch URL",
    "videoTitleBn": "Title (বাংলা)",
    "videoTitleEn": "Title (English)",
    "videoDescBn": "Description (বাংলা)",
    "videoDescEn": "Description (English)",
    "mediaItemsTitle": "Media URLs",
    "mediaItemsHint": "Links to images, PDFs, audio, or other files — not embed players.",
    "mediaItemsAdd": "Add media URL",
    "mediaItemsAddSubmit": "Add",
    "mediaItemsEmpty": "No media URLs yet.",
    "confirmDeleteMediaItem": "Delete this media entry?",
    "mediaUrlField": "Media URL",
    "mediaCaptionBn": "Caption (বাংলা)",
    "mediaCaptionEn": "Caption (English)",
    "mediaTitleBn": "Title (বাংলা)",
    "mediaTitleEn": "Title (English)",
    "timelineAdminTitle": "Timeline",
    "timelineAdminHint": "Events appear on the public timeline in date order.",
    "timelineAdd": "Add event",
    "timelineAddSubmit": "Add event",
    "timelineEmpty": "No events yet.",
    "confirmDeleteTimeline": "Delete this timeline event?",
    "timelineEventAt": "Event date",
    "timelineTitleBn": "Title (বাংলা)",
    "timelineTitleEn": "Title (English)",
    "timelineBodyBn": "Body Markdown (বাংলা)",
    "timelineBodyEn": "Body Markdown (English)"
  }
}
```

### `apps/web/public/file.svg`

```
<svg fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 13.5V5.41a1 1 0 0 0-.3-.7L9.8.29A1 1 0 0 0 9.08 0H1.5v13.5A2.5 2.5 0 0 0 4 16h8a2.5 2.5 0 0 0 2.5-2.5m-1.5 0v-7H8v-5H3v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1M9.5 5V2.12L12.38 5zM5.13 5h-.62v1.25h2.12V5zm-.62 3h7.12v1.25H4.5zm.62 3h-.62v1.25h7.12V11z" clip-rule="evenodd" fill="#666" fill-rule="evenodd"/></svg>
```

### `apps/web/public/globe.svg`

```
<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g clip-path="url(#a)"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.27 14.1a6.5 6.5 0 0 0 3.67-3.45q-1.24.21-2.7.34-.31 1.83-.97 3.1M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.48-1.52a7 7 0 0 1-.96 0H7.5a4 4 0 0 1-.84-1.32q-.38-.89-.63-2.08a40 40 0 0 0 3.92 0q-.25 1.2-.63 2.08a4 4 0 0 1-.84 1.31zm2.94-4.76q1.66-.15 2.95-.43a7 7 0 0 0 0-2.58q-1.3-.27-2.95-.43a18 18 0 0 1 0 3.44m-1.27-3.54a17 17 0 0 1 0 3.64 39 39 0 0 1-4.3 0 17 17 0 0 1 0-3.64 39 39 0 0 1 4.3 0m1.1-1.17q1.45.13 2.69.34a6.5 6.5 0 0 0-3.67-3.44q.65 1.26.98 3.1M8.48 1.5l.01.02q.41.37.84 1.31.38.89.63 2.08a40 40 0 0 0-3.92 0q.25-1.2.63-2.08a4 4 0 0 1 .85-1.32 7 7 0 0 1 .96 0m-2.75.4a6.5 6.5 0 0 0-3.67 3.44 29 29 0 0 1 2.7-.34q.31-1.83.97-3.1M4.58 6.28q-1.66.16-2.95.43a7 7 0 0 0 0 2.58q1.3.27 2.95.43a18 18 0 0 1 0-3.44m.17 4.71q-1.45-.12-2.69-.34a6.5 6.5 0 0 0 3.67 3.44q-.65-1.27-.98-3.1" fill="#666"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></svg>
```

### `apps/web/public/next.svg`

```
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 394 80"><path fill="#000" d="M262 0h68.5v12.7h-27.2v66.6h-13.6V12.7H262V0ZM149 0v12.7H94v20.4h44.3v12.6H94v21h55v12.6H80.5V0h68.7zm34.3 0h-17.8l63.8 79.4h17.9l-32-39.7 32-39.6h-17.9l-23 28.6-23-28.6zm18.3 56.7-9-11-27.1 33.7h17.8l18.3-22.7z"/><path fill="#000" d="M81 79.3 17 0H0v79.3h13.6V17l50.2 62.3H81Zm252.6-.4c-1 0-1.8-.4-2.5-1s-1.1-1.6-1.1-2.6.3-1.8 1-2.5 1.6-1 2.6-1 1.8.3 2.5 1a3.4 3.4 0 0 1 .6 4.3 3.7 3.7 0 0 1-3 1.8zm23.2-33.5h6v23.3c0 2.1-.4 4-1.3 5.5a9.1 9.1 0 0 1-3.8 3.5c-1.6.8-3.5 1.3-5.7 1.3-2 0-3.7-.4-5.3-1s-2.8-1.8-3.7-3.2c-.9-1.3-1.4-3-1.4-5h6c.1.8.3 1.6.7 2.2s1 1.2 1.6 1.5c.7.4 1.5.5 2.4.5 1 0 1.8-.2 2.4-.6a4 4 0 0 0 1.6-1.8c.3-.8.5-1.8.5-3V45.5zm30.9 9.1a4.4 4.4 0 0 0-2-3.3 7.5 7.5 0 0 0-4.3-1.1c-1.3 0-2.4.2-3.3.5-.9.4-1.6 1-2 1.6a3.5 3.5 0 0 0-.3 4c.3.5.7.9 1.3 1.2l1.8 1 2 .5 3.2.8c1.3.3 2.5.7 3.7 1.2a13 13 0 0 1 3.2 1.8 8.1 8.1 0 0 1 3 6.5c0 2-.5 3.7-1.5 5.1a10 10 0 0 1-4.4 3.5c-1.8.8-4.1 1.2-6.8 1.2-2.6 0-4.9-.4-6.8-1.2-2-.8-3.4-2-4.5-3.5a10 10 0 0 1-1.7-5.6h6a5 5 0 0 0 3.5 4.6c1 .4 2.2.6 3.4.6 1.3 0 2.5-.2 3.5-.6 1-.4 1.8-1 2.4-1.7a4 4 0 0 0 .8-2.4c0-.9-.2-1.6-.7-2.2a11 11 0 0 0-2.1-1.4l-3.2-1-3.8-1c-2.8-.7-5-1.7-6.6-3.2a7.2 7.2 0 0 1-2.4-5.7 8 8 0 0 1 1.7-5 10 10 0 0 1 4.3-3.5c2-.8 4-1.2 6.4-1.2 2.3 0 4.4.4 6.2 1.2 1.8.8 3.2 2 4.3 3.4 1 1.4 1.5 3 1.5 5h-5.8z"/></svg>
```

### `apps/web/public/vercel.svg`

```
<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1155 1000"><path d="m577.3 0 577.4 1000H0z" fill="#fff"/></svg>
```

### `apps/web/public/window.svg`

```
<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 2.5h13v10a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1zM0 1h16v11.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 0 12.5zm3.75 4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M7 4.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m1.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5" fill="#666"/></svg>
```

### `apps/web/src/proxy.ts`

```typescript
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
```

### `apps/web/src/app/favicon.ico`

_Binary file — content not included._

### `apps/web/src/app/globals.css`

```css
@import 'tailwindcss';

@theme {
  --font-sans: var(--font-inter), ui-sans-serif, system-ui, sans-serif;
  --font-bengali: var(--font-noto-bengali), var(--font-inter), ui-sans-serif,
    system-ui, sans-serif;

  --color-archive-bg: #fafafa;
  --color-archive-fg: #111111;
  --color-archive-border: #e5e5e5;
  --color-archive-accent: #2563eb;
  --color-archive-muted: #6b7280;
}

.lang-bn {
  font-family: var(--font-bengali);
}

@keyframes breaking-marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.breaking-marquee__mask {
  mask-image: linear-gradient(
    90deg,
    transparent,
    black 0.75rem,
    black calc(100% - 0.75rem),
    transparent
  );
}

.breaking-marquee__track {
  display: flex;
  width: max-content;
  animation: breaking-marquee 15s linear infinite;
}

.breaking-marquee__track:hover {
  animation-play-state: paused;
}

@media (prefers-reduced-motion: reduce) {
  .breaking-marquee__track {
    animation: none;
    flex-wrap: wrap;
    row-gap: 0.25rem;
    padding-block: 0.35rem;
    padding-inline: 0.75rem;
    width: auto;
    max-width: 100%;
  }
}

.article-body {
  font-size: 1.05rem;
  line-height: 1.7;
}

.article-body h2 {
  margin-top: 1.75rem;
  margin-bottom: 0.75rem;
  font-size: 1.25rem;
  font-weight: 600;
  letter-spacing: -0.02em;
}

.article-body h3 {
  margin-top: 1.25rem;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
  font-weight: 600;
}

.article-body ul {
  margin: 1rem 0;
  list-style: disc;
  padding-inline-start: 1.25rem;
}

.article-body li {
  margin: 0.35rem 0;
}

.article-body blockquote {
  margin: 1.25rem 0;
  padding-left: 1rem;
  border-left: 3px solid var(--color-archive-border);
  color: var(--color-archive-muted);
}

.article-body a {
  color: var(--color-archive-accent);
  text-decoration: underline;
  text-underline-offset: 2px;
}

.article-body p {
  margin: 0.75rem 0;
}

.article-body strong {
  font-weight: 600;
}
```

### `apps/web/src/app/layout.tsx`

```tsx
import { Inter, Noto_Sans_Bengali } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const notoBengali = Noto_Sans_Bengali({
  subsets: ['bengali'],
  variable: '--font-noto-bengali',
  adjustFontFallback: false,
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="bn" className="h-full">
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${notoBengali.variable} flex min-h-full flex-col bg-archive-bg text-archive-fg antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
```

### `apps/web/src/app/[locale]/layout.tsx`

```tsx
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import BreakingNewsMarquee from '@/components/BreakingNewsMarquee';
import PublicOnlyChrome from '@/components/PublicOnlyChrome';
import SiteHeader from '@/components/SiteHeader';
import { routing } from '@/i18n/routing';

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta' });

  return {
    title: t('title'),
    description: t('description'),
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        bn: '/bn',
        en: '/en',
        'x-default': '/bn',
      },
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!(routing.locales as readonly string[]).includes(locale)) {
    notFound();
  }

  setRequestLocale(locale as Locale);

  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div className={locale === 'bn' ? 'lang-bn' : ''} lang={locale}>
        <div className="sticky top-0 z-40">
          <PublicOnlyChrome>
            <BreakingNewsMarquee locale={locale} />
          </PublicOnlyChrome>
          <SiteHeader />
        </div>
        <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-1 flex-col px-5 pb-24 pt-8">
          {children}
        </div>
      </div>
    </NextIntlClientProvider>
  );
}
```

### `apps/web/src/app/[locale]/not-found.tsx`

```tsx
'use client';

import { useTranslations } from 'next-intl';

export default function NotFound404() {
  const t = useTranslations('article');
  return (
    <div className="mx-auto max-w-lg rounded-xl border border-archive-border bg-white px-8 py-12 text-center">
      <p className="text-sm uppercase tracking-[0.2em] text-archive-muted">
        404
      </p>
      <p className="mt-4 text-lg text-archive-fg">{t('notFound')}</p>
    </div>
  );
}
```

### `apps/web/src/app/[locale]/page.tsx`

```tsx
import { getTranslations } from 'next-intl/server';
import { format } from 'date-fns';
import { Link } from '@/i18n/navigation';
import ArticleCard from '@/components/ArticleCard';
import { getArticles, getTimelineEvents } from '@/lib/api';

type Props = { params: Promise<{ locale: string }> };

export default async function Home({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations('home');
  const tNav = await getTranslations('nav');
  const list = await getArticles(locale);
  const articles = list?.data ?? [];
  const timelineEvents = (await getTimelineEvents(locale)) ?? [];
  const timelinePreview = timelineEvents.slice(0, 8);
  const featured = articles[0];
  const secondary = articles[1];

  return (
    <div className="flex flex-col gap-16">
      <section className="mx-auto flex max-w-3xl flex-col gap-8 text-center">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.2em] text-archive-muted">
            {t('heroSubtitle')}
          </p>
          <p className="text-lg leading-relaxed text-archive-muted">{t('heroIntro')}</p>
        </div>
        <div className="w-full space-y-3 text-left">
          <label className="sr-only" htmlFor="hero-search">
            {t('heroSearchLabel')}
          </label>
          <input
            id="hero-search"
            disabled
            type="search"
            placeholder={tNav('searchPlaceholder')}
            className="w-full rounded-lg border border-archive-border bg-white px-5 py-4 text-archive-fg shadow-none outline-none transition-colors placeholder:text-archive-muted disabled:opacity-60"
          />
          <div className="flex flex-wrap justify-center gap-2 md:justify-start">
            <Link
              href="/articles?category=News"
              className="rounded-full border border-archive-border px-3 py-1 text-sm text-archive-muted transition-colors hover:border-archive-accent hover:text-archive-accent"
            >
              {t('filterNews')}
            </Link>
            <Link
              href="/media"
              className="rounded-full border border-archive-border px-3 py-1 text-sm text-archive-muted transition-colors hover:border-archive-accent hover:text-archive-accent"
            >
              {t('filterVideos')}
            </Link>
            <Link
              href="/timeline"
              className="rounded-full border border-archive-border px-3 py-1 text-sm text-archive-muted transition-colors hover:border-archive-accent hover:text-archive-accent"
            >
              {t('filterTimeline')}
            </Link>
          </div>
        </div>
      </section>

      {!articles.length ? (
        <p className="rounded-lg border border-dashed border-archive-border bg-white px-4 py-6 text-center text-sm text-archive-muted">
          {t('noArticles')}
        </p>
      ) : (
        <section aria-labelledby="featured-heading" className="space-y-6">
          <h2 id="featured-heading" className="text-sm font-semibold uppercase tracking-[0.12em] text-archive-muted">
            {t('featured')}
          </h2>
          <div className="grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-7">
              {featured && (
                <ArticleCard article={featured} locale={locale} readLabel={t('read')} />
              )}
            </div>
            <div className="flex flex-col gap-6 lg:col-span-5">
              {secondary && (
                <ArticleCard article={secondary} locale={locale} readLabel={t('read')} />
              )}
            </div>
          </div>
        </section>
      )}

      {articles.length > 2 ? (
        <section aria-labelledby="grid-heading" className="space-y-6">
          <h2
            id="grid-heading"
            className="text-sm font-semibold uppercase tracking-[0.12em] text-archive-muted"
          >
            {t('latestGrid')}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.slice(2).map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                locale={locale}
                readLabel={t('read')}
              />
            ))}
          </div>
        </section>
      ) : null}

      <section aria-labelledby="timeline-heading" className="space-y-4 rounded-xl border border-archive-border bg-white p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 id="timeline-heading" className="text-base font-semibold text-archive-fg">
            {t('timelinePreview')}
          </h2>
          <Link
            href="/timeline"
            className="text-sm font-medium text-archive-accent hover:underline"
          >
            {t('timelineSeeAll')}
          </Link>
        </div>
        <div className="scrollbar-thin overflow-x-auto pb-2">
          <div className="flex min-w-max items-start gap-8 px-2">
            {timelinePreview.length === 0 ? (
              <p className="text-sm text-archive-muted">{t('timelinePreviewEmpty')}</p>
            ) : (
              timelinePreview.map((ev) => (
                <div key={ev.id} className="flex w-44 flex-col items-start gap-2">
                  <div className="flex items-center gap-2">
                    <span className="size-3 shrink-0 rounded-full border-2 border-archive-accent bg-archive-bg" />
                    <span className="font-mono text-sm text-archive-muted">
                      {format(new Date(ev.eventAt), 'yyyy-MM-dd')}
                    </span>
                  </div>
                  <p className="text-xs leading-relaxed text-archive-muted line-clamp-3">
                    {ev.title}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
```

### `apps/web/src/app/[locale]/about/page.tsx`

```tsx
import { getTranslations } from 'next-intl/server';

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  await params;
  const t = await getTranslations('placeholders');

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight">{t('aboutTitle')}</h1>
      <p className="text-lg leading-relaxed text-archive-muted">{t('aboutBody')}</p>
    </div>
  );
}
```

### `apps/web/src/app/[locale]/admin/layout.tsx`

```tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin',
  robots: { index: false, follow: false },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="pb-16 pt-4">{children}</div>;
}
```

### `apps/web/src/app/[locale]/admin/(dashboard)/layout.tsx`

```tsx
import AdminGuard from '@/components/admin/AdminGuard';
import AdminShell from '@/components/admin/AdminShell';

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AdminGuard>
      <AdminShell>{children}</AdminShell>
    </AdminGuard>
  );
}
```

### `apps/web/src/app/[locale]/admin/(dashboard)/page.tsx`

```tsx
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
```

### `apps/web/src/app/[locale]/admin/(dashboard)/articles/page.tsx`

```tsx
'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { useCallback, useEffect, useState } from 'react';
import { adminFetch, readApiError } from '@/lib/admin-api';

type ArticleRow = {
  slug: string;
  reviewStatus: string;
  publishedAt: string | null;
  source: { name: string };
  translations: { locale: string; title: string }[];
};

export default function AdminArticlesPage() {
  const t = useTranslations('admin');
  const locale = useLocale();
  const [status, setStatus] = useState<'ALL' | 'DRAFT' | 'PUBLISHED'>('ALL');
  const [rows, setRows] = useState<ArticleRow[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    const q = status === 'ALL' ? '' : `?status=${status}`;
    const res = await adminFetch(`admin/articles${q}`);
    setLoading(false);
    if (!res.ok) {
      setError(`${t('loadError')} ${await readApiError(res)}`);
      setRows([]);
      return;
    }
    setRows((await res.json()) as ArticleRow[]);
  }, [status, t]);

  useEffect(() => {
    void load();
  }, [load]);

  function titleFor(a: ArticleRow) {
    const tr =
      a.translations.find((x) => x.locale === locale) ?? a.translations[0];
    return tr?.title?.trim() || a.slug;
  }

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-xl font-semibold text-archive-fg">
          {t('articlesTitle')}
        </h1>
        <Link
          href="/admin/articles/new"
          className="rounded-md bg-archive-accent px-4 py-2 text-sm font-medium text-white"
        >
          {t('newArticle')}
        </Link>
      </div>
      <div className="mb-4 flex items-center gap-2 text-sm">
        <label className="text-archive-muted">{t('filterStatus')}</label>
        <select
          value={status}
          onChange={(e) =>
            setStatus(e.target.value as 'ALL' | 'DRAFT' | 'PUBLISHED')
          }
          className="rounded-md border border-archive-border px-2 py-1"
        >
          <option value="ALL">{t('all')}</option>
          <option value="DRAFT">{t('draft')}</option>
          <option value="PUBLISHED">{t('published')}</option>
        </select>
      </div>
      {error && (
        <p className="mb-4 rounded-md border border-archive-border bg-archive-bg px-3 py-2 text-sm text-archive-fg">
          {error}
        </p>
      )}
      {loading ? (
        <p className="text-sm text-archive-muted">{t('loading')}</p>
      ) : rows.length === 0 ? (
        <p className="text-sm text-archive-muted">{t('noArticles')}</p>
      ) : (
        <ul className="divide-y divide-archive-border rounded-xl border border-archive-border bg-white">
          {rows.map((a) => (
            <li
              key={a.slug}
              className="flex flex-wrap items-center justify-between gap-3 px-4 py-3"
            >
              <div className="min-w-0">
                <p className="truncate font-medium text-archive-fg">
                  {titleFor(a)}
                </p>
                <p className="text-xs text-archive-muted">
                  {a.slug} · {a.source.name} ·{' '}
                  {a.reviewStatus === 'PUBLISHED' ? t('published') : t('draft')}
                </p>
              </div>
              <Link
                href={`/admin/articles/${encodeURIComponent(a.slug)}/edit`}
                className="shrink-0 text-sm text-archive-accent underline"
              >
                {t('editArticle')}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
```

### `apps/web/src/app/[locale]/admin/(dashboard)/articles/[slug]/edit/page.tsx`

```tsx
'use client';

import ArticleForm from '@/components/admin/ArticleForm';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { useRouter } from '@/i18n/navigation';
import { useState } from 'react';
import { adminFetch, readApiError } from '@/lib/admin-api';

export default function AdminEditArticlePage() {
  const t = useTranslations('admin');
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const [deleting, setDeleting] = useState(false);
  const [delError, setDelError] = useState<string | null>(null);

  async function onDelete() {
    if (!window.confirm(t('confirmDelete'))) return;
    setDeleting(true);
    setDelError(null);
    const res = await adminFetch(
      `admin/articles/${encodeURIComponent(slug)}`,
      { method: 'DELETE' },
    );
    setDeleting(false);
    if (!res.ok) {
      setDelError(await readApiError(res));
      return;
    }
    router.replace('/admin/articles');
  }

  return (
    <div className="space-y-6">
      <ArticleForm mode="edit" editSlug={slug} />
      <div className="rounded-xl border border-archive-border bg-white p-4">
        {delError && (
          <p className="mb-3 text-sm text-archive-fg">{delError}</p>
        )}
        <button
          type="button"
          disabled={deleting}
          onClick={() => void onDelete()}
          className="rounded-md border border-archive-border px-3 py-2 text-sm text-archive-muted hover:border-archive-fg hover:text-archive-fg disabled:opacity-50"
        >
          {deleting ? t('loading') : t('deleteArticle')}
        </button>
      </div>
    </div>
  );
}
```

### `apps/web/src/app/[locale]/admin/(dashboard)/articles/new/page.tsx`

```tsx
import ArticleForm from '@/components/admin/ArticleForm';

export default async function AdminNewArticlePage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const c = category?.trim();
  return (
    <ArticleForm mode="create" defaultCategory={c || undefined} />
  );
}
```

### `apps/web/src/app/[locale]/admin/(dashboard)/breaking-news/page.tsx`

```tsx
'use client';

import { useTranslations } from 'next-intl';
import { useCallback, useEffect, useState } from 'react';
import { adminFetch, readApiError } from '@/lib/admin-api';

type Row = {
  id: string;
  sortOrder: number;
  active: boolean;
  titleBn: string;
  titleEn: string;
  href: string | null;
};

export default function AdminBreakingNewsPage() {
  const t = useTranslations('admin');
  const [rows, setRows] = useState<Row[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const [titleBn, setTitleBn] = useState('');
  const [titleEn, setTitleEn] = useState('');
  const [href, setHref] = useState('');
  const [sortOrder, setSortOrder] = useState('0');
  const [active, setActive] = useState(true);
  const [adding, setAdding] = useState(false);

  const [editId, setEditId] = useState<string | null>(null);
  const [savingId, setSavingId] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    const res = await adminFetch('admin/breaking-news');
    setLoading(false);
    if (!res.ok) {
      setError(`${t('loadError')} ${await readApiError(res)}`);
      setRows([]);
      return;
    }
    setRows((await res.json()) as Row[]);
  }, [t]);

  useEffect(() => {
    void load();
  }, [load]);

  function startEdit(row: Row) {
    setEditId(row.id);
    setTitleBn(row.titleBn);
    setTitleEn(row.titleEn);
    setHref(row.href ?? '');
    setSortOrder(String(row.sortOrder));
    setActive(row.active);
  }

  function cancelEdit() {
    setEditId(null);
  }

  function resetAddForm() {
    setTitleBn('');
    setTitleEn('');
    setHref('');
    setSortOrder('0');
    setActive(true);
  }

  async function addLine(e: React.FormEvent) {
    e.preventDefault();
    if (!titleBn.trim() || !titleEn.trim()) return;
    setAdding(true);
    setError(null);
    const res = await adminFetch('admin/breaking-news', {
      method: 'POST',
      body: JSON.stringify({
        titleBn: titleBn.trim(),
        titleEn: titleEn.trim(),
        href: href.trim() || undefined,
        sortOrder: Number.parseInt(sortOrder, 10) || 0,
        active,
      }),
    });
    setAdding(false);
    if (!res.ok) {
      setError(await readApiError(res));
      return;
    }
    resetAddForm();
    void load();
  }

  async function saveEdit() {
    if (!editId) return;
    setSavingId(editId);
    setError(null);
    const res = await adminFetch(`admin/breaking-news/${editId}`, {
      method: 'PATCH',
      body: JSON.stringify({
        titleBn: titleBn.trim(),
        titleEn: titleEn.trim(),
        href: href.trim() === '' ? null : href.trim(),
        sortOrder: Number.parseInt(sortOrder, 10) || 0,
        active,
      }),
    });
    setSavingId(null);
    if (!res.ok) {
      setError(await readApiError(res));
      return;
    }
    cancelEdit();
    resetAddForm();
    void load();
  }

  async function remove(row: Row) {
    if (!window.confirm(t('confirmDeleteBreakingNews'))) return;
    setError(null);
    const res = await adminFetch(`admin/breaking-news/${row.id}`, {
      method: 'DELETE',
    });
    if (!res.ok) {
      setError(await readApiError(res));
      return;
    }
    if (editId === row.id) cancelEdit();
    void load();
  }

  return (
    <div>
      <h1 className="mb-2 text-xl font-semibold text-archive-fg">
        {t('breakingNewsTitle')}
      </h1>
      <p className="mb-6 text-sm text-archive-muted">{t('breakingNewsHint')}</p>
      {error && (
        <p className="mb-4 rounded-md border border-archive-border bg-archive-bg px-3 py-2 text-sm text-archive-fg">
          {error}
        </p>
      )}

      <form
        onSubmit={addLine}
        className="mb-10 space-y-4 rounded-xl border border-archive-border bg-white p-4"
      >
        <p className="text-sm font-medium text-archive-fg">
          {t('breakingNewsAdd')}
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="text-sm sm:col-span-2">
            <span className="text-archive-muted">{t('breakingTitleBn')}</span>
            <input
              required
              className="mt-1 w-full rounded-md border border-archive-border px-2 py-1.5"
              value={titleBn}
              onChange={(e) => setTitleBn(e.target.value)}
            />
          </label>
          <label className="text-sm sm:col-span-2">
            <span className="text-archive-muted">{t('breakingTitleEn')}</span>
            <input
              required
              className="mt-1 w-full rounded-md border border-archive-border px-2 py-1.5"
              value={titleEn}
              onChange={(e) => setTitleEn(e.target.value)}
            />
          </label>
          <label className="text-sm sm:col-span-2">
            <span className="text-archive-muted">{t('breakingHref')}</span>
            <input
              className="mt-1 w-full rounded-md border border-archive-border px-2 py-1.5"
              value={href}
              onChange={(e) => setHref(e.target.value)}
              placeholder="/articles/your-slug or https://…"
            />
          </label>
          <label className="text-sm">
            <span className="text-archive-muted">{t('breakingSort')}</span>
            <input
              type="number"
              min={0}
              className="mt-1 w-full rounded-md border border-archive-border px-2 py-1.5"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            />
          </label>
          <label className="flex items-end gap-2 text-sm">
            <input
              type="checkbox"
              checked={active}
              onChange={(e) => setActive(e.target.checked)}
              className="rounded border-archive-border"
            />
            <span className="text-archive-muted">{t('breakingActive')}</span>
          </label>
        </div>
        <button
          type="submit"
          disabled={adding}
          className="rounded-md bg-archive-accent px-4 py-2 text-sm font-medium text-white disabled:opacity-50"
        >
          {adding ? t('loading') : t('breakingNewsAddSubmit')}
        </button>
      </form>

      {loading ? (
        <p className="text-sm text-archive-muted">{t('loading')}</p>
      ) : rows.length === 0 ? (
        <p className="text-sm text-archive-muted">{t('breakingNewsEmpty')}</p>
      ) : (
        <ul className="divide-y divide-archive-border rounded-xl border border-archive-border bg-white">
          {rows.map((row) => (
            <li key={row.id} className="px-4 py-4">
              {editId === row.id ? (
                <div className="space-y-3">
                  <div className="grid gap-2 sm:grid-cols-2">
                    <input
                      className="rounded-md border border-archive-border px-2 py-1.5 text-sm sm:col-span-2"
                      value={titleBn}
                      onChange={(e) => setTitleBn(e.target.value)}
                    />
                    <input
                      className="rounded-md border border-archive-border px-2 py-1.5 text-sm sm:col-span-2"
                      value={titleEn}
                      onChange={(e) => setTitleEn(e.target.value)}
                    />
                    <input
                      className="rounded-md border border-archive-border px-2 py-1.5 text-sm sm:col-span-2"
                      value={href}
                      onChange={(e) => setHref(e.target.value)}
                      placeholder="href"
                    />
                    <input
                      type="number"
                      min={0}
                      className="rounded-md border border-archive-border px-2 py-1.5 text-sm"
                      value={sortOrder}
                      onChange={(e) => setSortOrder(e.target.value)}
                    />
                    <label className="flex items-center gap-2 text-sm">
                      <input
                        type="checkbox"
                        checked={active}
                        onChange={(e) => setActive(e.target.checked)}
                      />
                      {t('breakingActive')}
                    </label>
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      disabled={savingId === row.id}
                      onClick={() => void saveEdit()}
                      className="rounded-md bg-archive-accent px-3 py-1.5 text-sm text-white disabled:opacity-50"
                    >
                      {savingId === row.id ? t('loading') : t('save')}
                    </button>
                    <button
                      type="button"
                      onClick={cancelEdit}
                      className="text-sm text-archive-muted underline"
                    >
                      {t('cancel')}
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="font-medium text-archive-fg">{row.titleEn}</p>
                    <p className="text-sm text-archive-muted">{row.titleBn}</p>
                    <p className="mt-1 text-xs text-archive-muted">
                      {row.href ?? '—'} · order {row.sortOrder} ·{' '}
                      {row.active ? t('published') : t('draft')}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => startEdit(row)}
                      className="text-sm text-archive-accent underline"
                    >
                      {t('editArticle')}
                    </button>
                    <button
                      type="button"
                      onClick={() => void remove(row)}
                      className="text-sm text-archive-muted underline"
                    >
                      {t('deleteSource')}
                    </button>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
```

### `apps/web/src/app/[locale]/admin/(dashboard)/media-items/page.tsx`

```tsx
'use client';

import { useTranslations } from 'next-intl';
import { useCallback, useEffect, useState } from 'react';
import { adminFetch, readApiError } from '@/lib/admin-api';

type Trans = { locale: string; title: string; caption: string | null };

type MediaRow = {
  id: string;
  mediaUrl: string;
  publishedAt: string | null;
  reviewStatus: string;
  tags: string[];
  translations: Trans[];
};

export default function AdminMediaItemsPage() {
  const t = useTranslations('admin');
  const [rows, setRows] = useState<MediaRow[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const [mediaUrl, setMediaUrl] = useState('');
  const [publishedAt, setPublishedAt] = useState('');
  const [reviewStatus, setReviewStatus] = useState<'DRAFT' | 'PUBLISHED'>(
    'PUBLISHED',
  );
  const [titleBn, setTitleBn] = useState('');
  const [titleEn, setTitleEn] = useState('');
  const [capBn, setCapBn] = useState('');
  const [capEn, setCapEn] = useState('');
  const [tagsInput, setTagsInput] = useState('');
  const [adding, setAdding] = useState(false);

  const [editId, setEditId] = useState<string | null>(null);
  const [savingId, setSavingId] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    const res = await adminFetch('admin/media-items');
    setLoading(false);
    if (!res.ok) {
      setError(`${t('loadError')} ${await readApiError(res)}`);
      setRows([]);
      return;
    }
    setRows((await res.json()) as MediaRow[]);
  }, [t]);

  useEffect(() => {
    void load();
  }, [load]);

  function startEdit(row: MediaRow) {
    setEditId(row.id);
    setMediaUrl(row.mediaUrl);
    setPublishedAt(
      row.publishedAt ? row.publishedAt.slice(0, 16) : '',
    );
    setReviewStatus(
      row.reviewStatus === 'DRAFT' ? 'DRAFT' : 'PUBLISHED',
    );
    const bn = row.translations.find((x) => x.locale === 'bn');
    const en = row.translations.find((x) => x.locale === 'en');
    setTitleBn(bn?.title ?? '');
    setTitleEn(en?.title ?? '');
    setCapBn(bn?.caption ?? '');
    setCapEn(en?.caption ?? '');
    setTagsInput(row.tags?.length ? row.tags.join(', ') : '');
  }

  function cancelEdit() {
    setEditId(null);
  }

  function transPayload() {
    return [
      {
        locale: 'bn' as const,
        title: titleBn.trim(),
        caption: capBn.trim() || undefined,
      },
      {
        locale: 'en' as const,
        title: titleEn.trim(),
        caption: capEn.trim() || undefined,
      },
    ];
  }

  function parseTags() {
    return tagsInput
      .split(',')
      .map((x) => x.trim())
      .filter(Boolean);
  }

  async function addItem(e: React.FormEvent) {
    e.preventDefault();
    if (!mediaUrl.trim() || !titleBn.trim() || !titleEn.trim()) return;
    setAdding(true);
    setError(null);
    const res = await adminFetch('admin/media-items', {
      method: 'POST',
      body: JSON.stringify({
        mediaUrl: mediaUrl.trim(),
        publishedAt: publishedAt
          ? new Date(publishedAt).toISOString()
          : undefined,
        reviewStatus,
        translations: transPayload(),
        tags: parseTags(),
      }),
    });
    setAdding(false);
    if (!res.ok) {
      setError(await readApiError(res));
      return;
    }
    setMediaUrl('');
    setPublishedAt('');
    setTagsInput('');
    setTitleBn('');
    setTitleEn('');
    setCapBn('');
    setCapEn('');
    void load();
  }

  async function saveEdit() {
    if (!editId) return;
    setSavingId(editId);
    setError(null);
    const res = await adminFetch(`admin/media-items/${editId}`, {
      method: 'PATCH',
      body: JSON.stringify({
        mediaUrl: mediaUrl.trim(),
        publishedAt: publishedAt
          ? new Date(publishedAt).toISOString()
          : null,
        reviewStatus,
        translations: transPayload(),
        tags: parseTags(),
      }),
    });
    setSavingId(null);
    if (!res.ok) {
      setError(await readApiError(res));
      return;
    }
    cancelEdit();
    void load();
  }

  async function remove(row: MediaRow) {
    if (!window.confirm(t('confirmDeleteMediaItem'))) return;
    setError(null);
    const res = await adminFetch(`admin/media-items/${row.id}`, {
      method: 'DELETE',
    });
    if (!res.ok) {
      setError(await readApiError(res));
      return;
    }
    if (editId === row.id) cancelEdit();
    void load();
  }

  return (
    <div>
      <h1 className="mb-6 text-xl font-semibold text-archive-fg">
        {t('mediaItemsTitle')}
      </h1>
      <p className="mb-6 text-sm text-archive-muted">{t('mediaItemsHint')}</p>
      {error && (
        <p className="mb-4 rounded-md border border-archive-border bg-archive-bg px-3 py-2 text-sm text-archive-fg">
          {error}
        </p>
      )}

      <form
        onSubmit={addItem}
        className="mb-10 space-y-4 rounded-xl border border-archive-border bg-white p-4"
      >
        <p className="text-sm font-medium text-archive-fg">
          {t('mediaItemsAdd')}
        </p>
        <label className="block text-sm">
          <span className="text-archive-muted">{t('mediaUrlField')}</span>
          <input
            required
            type="text"
            className="mt-1 w-full rounded-md border border-archive-border px-2 py-1.5"
            value={mediaUrl}
            onChange={(e) => setMediaUrl(e.target.value)}
            placeholder="https://"
          />
        </label>
        <div className="flex flex-wrap gap-3">
          <label className="text-sm">
            <span className="text-archive-muted">{t('publishedAt')}</span>
            <input
              type="datetime-local"
              className="mt-1 block rounded-md border border-archive-border px-2 py-1.5"
              value={publishedAt}
              onChange={(e) => setPublishedAt(e.target.value)}
            />
          </label>
          <label className="text-sm">
            <span className="text-archive-muted">{t('status')}</span>
            <select
              className="mt-1 block rounded-md border border-archive-border px-2 py-1.5"
              value={reviewStatus}
              onChange={(e) =>
                setReviewStatus(e.target.value as 'DRAFT' | 'PUBLISHED')
              }
            >
              <option value="PUBLISHED">{t('published')}</option>
              <option value="DRAFT">{t('draft')}</option>
            </select>
          </label>
        </div>
        <label className="block text-sm">
          <span className="text-archive-muted">{t('videoTagsField')}</span>
          <input
            className="mt-1 w-full rounded-md border border-archive-border px-2 py-1.5"
            value={tagsInput}
            onChange={(e) => setTagsInput(e.target.value)}
            placeholder={t('videoTagsHint')}
          />
        </label>
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="text-sm">
            <span className="text-archive-muted">{t('mediaTitleBn')}</span>
            <input
              required
              className="mt-1 w-full rounded-md border border-archive-border px-2 py-1.5"
              value={titleBn}
              onChange={(e) => setTitleBn(e.target.value)}
            />
          </label>
          <label className="text-sm">
            <span className="text-archive-muted">{t('mediaTitleEn')}</span>
            <input
              required
              className="mt-1 w-full rounded-md border border-archive-border px-2 py-1.5"
              value={titleEn}
              onChange={(e) => setTitleEn(e.target.value)}
            />
          </label>
          <label className="text-sm">
            <span className="text-archive-muted">{t('mediaCaptionBn')}</span>
            <textarea
              rows={2}
              className="mt-1 w-full rounded-md border border-archive-border px-2 py-1.5"
              value={capBn}
              onChange={(e) => setCapBn(e.target.value)}
            />
          </label>
          <label className="text-sm">
            <span className="text-archive-muted">{t('mediaCaptionEn')}</span>
            <textarea
              rows={2}
              className="mt-1 w-full rounded-md border border-archive-border px-2 py-1.5"
              value={capEn}
              onChange={(e) => setCapEn(e.target.value)}
            />
          </label>
        </div>
        <button
          type="submit"
          disabled={adding}
          className="rounded-md bg-archive-accent px-4 py-2 text-sm font-medium text-white disabled:opacity-50"
        >
          {adding ? t('loading') : t('mediaItemsAddSubmit')}
        </button>
      </form>

      {loading ? (
        <p className="text-sm text-archive-muted">{t('loading')}</p>
      ) : rows.length === 0 ? (
        <p className="text-sm text-archive-muted">{t('mediaItemsEmpty')}</p>
      ) : (
        <ul className="divide-y divide-archive-border rounded-xl border border-archive-border bg-white">
          {rows.map((row) => (
            <li key={row.id} className="px-4 py-4">
              {editId === row.id ? (
                <div className="space-y-3">
                  <input
                    type="url"
                    className="w-full rounded-md border border-archive-border px-2 py-1.5 text-sm"
                    value={mediaUrl}
                    onChange={(e) => setMediaUrl(e.target.value)}
                  />
                  <input
                    type="datetime-local"
                    className="rounded-md border border-archive-border px-2 py-1.5 text-sm"
                    value={publishedAt}
                    onChange={(e) => setPublishedAt(e.target.value)}
                  />
                  <select
                    className="rounded-md border border-archive-border px-2 py-1.5 text-sm"
                    value={reviewStatus}
                    onChange={(e) =>
                      setReviewStatus(
                        e.target.value as 'DRAFT' | 'PUBLISHED',
                      )
                    }
                  >
                    <option value="PUBLISHED">{t('published')}</option>
                    <option value="DRAFT">{t('draft')}</option>
                  </select>
                  <input
                    type="text"
                    className="w-full rounded-md border border-archive-border px-2 py-1.5 text-sm sm:col-span-2"
                    value={tagsInput}
                    onChange={(e) => setTagsInput(e.target.value)}
                    placeholder={t('videoTagsHint')}
                  />
                  <div className="grid gap-2 sm:grid-cols-2">
                    <input
                      className="rounded-md border border-archive-border px-2 py-1.5 text-sm"
                      value={titleBn}
                      onChange={(e) => setTitleBn(e.target.value)}
                    />
                    <input
                      className="rounded-md border border-archive-border px-2 py-1.5 text-sm"
                      value={titleEn}
                      onChange={(e) => setTitleEn(e.target.value)}
                    />
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      disabled={savingId === row.id}
                      onClick={() => void saveEdit()}
                      className="rounded-md bg-archive-accent px-3 py-1.5 text-sm text-white disabled:opacity-50"
                    >
                      {savingId === row.id ? t('loading') : t('save')}
                    </button>
                    <button
                      type="button"
                      onClick={cancelEdit}
                      className="text-sm text-archive-muted underline"
                    >
                      {t('cancel')}
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="font-medium text-archive-fg">{row.mediaUrl}</p>
                    <p className="text-sm text-archive-muted">
                      {row.translations.find((x) => x.locale === 'en')?.title}
                    </p>
                    {row.tags?.length ? (
                      <p className="text-xs text-archive-muted">
                        {t('videoTagsLabel')}: {row.tags.join(', ')}
                      </p>
                    ) : null}
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => startEdit(row)}
                      className="text-sm text-archive-accent underline"
                    >
                      {t('editArticle')}
                    </button>
                    <button
                      type="button"
                      onClick={() => void remove(row)}
                      className="text-sm text-archive-muted underline"
                    >
                      {t('deleteSource')}
                    </button>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
```

### `apps/web/src/app/[locale]/admin/(dashboard)/sources/page.tsx`

```tsx
'use client';

import { useTranslations } from 'next-intl';
import { useCallback, useEffect, useState } from 'react';
import { adminFetch, readApiError } from '@/lib/admin-api';

type SourceRow = {
  id: string;
  name: string;
  url: string | null;
  _count: { articles: number };
};

export default function AdminSourcesPage() {
  const t = useTranslations('admin');
  const [rows, setRows] = useState<SourceRow[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [newName, setNewName] = useState('');
  const [newUrl, setNewUrl] = useState('');
  const [adding, setAdding] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);
  const [editName, setEditName] = useState('');
  const [editUrl, setEditUrl] = useState('');
  const [savingId, setSavingId] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    const res = await adminFetch('admin/sources');
    setLoading(false);
    if (!res.ok) {
      setError(`${t('loadError')} ${await readApiError(res)}`);
      setRows([]);
      return;
    }
    setRows((await res.json()) as SourceRow[]);
  }, [t]);

  useEffect(() => {
    void load();
  }, [load]);

  function startEdit(s: SourceRow) {
    setEditId(s.id);
    setEditName(s.name);
    setEditUrl(s.url ?? '');
  }

  function cancelEdit() {
    setEditId(null);
    setEditName('');
    setEditUrl('');
  }

  async function saveEdit() {
    if (!editId) return;
    setSavingId(editId);
    setError(null);
    const body: { name?: string; url?: string | null } = { name: editName };
    const trimmed = editUrl.trim();
    body.url = trimmed === '' ? null : trimmed;
    const res = await adminFetch(`admin/sources/${editId}`, {
      method: 'PATCH',
      body: JSON.stringify(body),
    });
    setSavingId(null);
    if (!res.ok) {
      setError(await readApiError(res));
      return;
    }
    cancelEdit();
    void load();
  }

  async function addSource(e: React.FormEvent) {
    e.preventDefault();
    if (!newName.trim()) return;
    setAdding(true);
    setError(null);
    const body: { name: string; url?: string } = { name: newName.trim() };
    const trimmed = newUrl.trim();
    if (trimmed) body.url = trimmed;
    const res = await adminFetch('admin/sources', {
      method: 'POST',
      body: JSON.stringify(body),
    });
    setAdding(false);
    if (!res.ok) {
      setError(await readApiError(res));
      return;
    }
    setNewName('');
    setNewUrl('');
    void load();
  }

  async function removeSource(s: SourceRow) {
    if (!window.confirm(t('confirmDeleteSource'))) return;
    setError(null);
    const res = await adminFetch(`admin/sources/${s.id}`, {
      method: 'DELETE',
    });
    if (!res.ok) {
      setError(await readApiError(res));
      return;
    }
    void load();
  }

  return (
    <div>
      <h1 className="mb-6 text-xl font-semibold text-archive-fg">
        {t('sourcesTitle')}
      </h1>
      {error && (
        <p className="mb-4 rounded-md border border-archive-border bg-archive-bg px-3 py-2 text-sm text-archive-fg">
          {error}
        </p>
      )}
      <form
        onSubmit={addSource}
        className="mb-8 flex flex-wrap items-end gap-3 rounded-xl border border-archive-border bg-white p-4"
      >
        <label className="text-sm">
          <span className="text-archive-muted">{t('sourceName')}</span>
          <input
            required
            className="mt-1 block w-48 rounded-md border border-archive-border px-2 py-1.5"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </label>
        <label className="text-sm">
          <span className="text-archive-muted">{t('sourceUrl')}</span>
          <input
            type="url"
            placeholder="https://"
            className="mt-1 block w-64 max-w-full rounded-md border border-archive-border px-2 py-1.5"
            value={newUrl}
            onChange={(e) => setNewUrl(e.target.value)}
          />
        </label>
        <button
          type="submit"
          disabled={adding}
          className="rounded-md bg-archive-accent px-4 py-2 text-sm font-medium text-white disabled:opacity-50"
        >
          {adding ? t('loading') : t('addSource')}
        </button>
      </form>
      {loading ? (
        <p className="text-sm text-archive-muted">{t('loading')}</p>
      ) : rows.length === 0 ? (
        <p className="text-sm text-archive-muted">{t('noSources')}</p>
      ) : (
        <ul className="divide-y divide-archive-border rounded-xl border border-archive-border bg-white">
          {rows.map((s) => (
            <li key={s.id} className="px-4 py-3">
              {editId === s.id ? (
                <div className="flex flex-wrap items-end gap-3">
                  <label className="text-sm">
                    <span className="text-archive-muted">{t('sourceName')}</span>
                    <input
                      className="mt-1 block w-48 rounded-md border border-archive-border px-2 py-1.5"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                    />
                  </label>
                  <label className="text-sm">
                    <span className="text-archive-muted">{t('sourceUrl')}</span>
                    <input
                      type="url"
                      className="mt-1 block w-64 max-w-full rounded-md border border-archive-border px-2 py-1.5"
                      value={editUrl}
                      onChange={(e) => setEditUrl(e.target.value)}
                    />
                  </label>
                  <button
                    type="button"
                    disabled={savingId === s.id}
                    onClick={() => void saveEdit()}
                    className="rounded-md bg-archive-accent px-3 py-1.5 text-sm text-white disabled:opacity-50"
                  >
                    {savingId === s.id ? t('loading') : t('editSource')}
                  </button>
                  <button
                    type="button"
                    onClick={cancelEdit}
                    className="text-sm text-archive-muted underline"
                  >
                    {t('cancel')}
                  </button>
                </div>
              ) : (
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="min-w-0">
                    <p className="font-medium text-archive-fg">{s.name}</p>
                    <p className="truncate text-xs text-archive-muted">
                      {s.url ?? '—'} ·{' '}
                      {t('sourceArticleCount', {
                        count: s._count.articles,
                      })}
                    </p>
                  </div>
                  <div className="flex shrink-0 gap-2">
                    <button
                      type="button"
                      onClick={() => startEdit(s)}
                      className="text-sm text-archive-accent underline"
                    >
                      {t('editArticle')}
                    </button>
                    <button
                      type="button"
                      onClick={() => void removeSource(s)}
                      className="text-sm text-archive-muted underline"
                    >
                      {t('deleteSource')}
                    </button>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
```

### `apps/web/src/app/[locale]/admin/(dashboard)/timeline/page.tsx`

```tsx
'use client';

import { useTranslations } from 'next-intl';
import { useCallback, useEffect, useState } from 'react';
import { adminFetch, readApiError } from '@/lib/admin-api';

type Trans = { locale: string; title: string; bodyMd: string };

type TimelineRow = {
  id: string;
  eventAt: string;
  reviewStatus: string;
  translations: Trans[];
};

export default function AdminTimelinePage() {
  const t = useTranslations('admin');
  const [rows, setRows] = useState<TimelineRow[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const [eventAt, setEventAt] = useState('');
  const [reviewStatus, setReviewStatus] = useState<'DRAFT' | 'PUBLISHED'>(
    'PUBLISHED',
  );
  const [titleBn, setTitleBn] = useState('');
  const [titleEn, setTitleEn] = useState('');
  const [bodyBn, setBodyBn] = useState('');
  const [bodyEn, setBodyEn] = useState('');
  const [adding, setAdding] = useState(false);

  const [editId, setEditId] = useState<string | null>(null);
  const [savingId, setSavingId] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    const res = await adminFetch('admin/timeline-events');
    setLoading(false);
    if (!res.ok) {
      setError(`${t('loadError')} ${await readApiError(res)}`);
      setRows([]);
      return;
    }
    setRows((await res.json()) as TimelineRow[]);
  }, [t]);

  useEffect(() => {
    void load();
  }, [load]);

  function startEdit(row: TimelineRow) {
    setEditId(row.id);
    setEventAt(row.eventAt.slice(0, 16));
    setReviewStatus(
      row.reviewStatus === 'DRAFT' ? 'DRAFT' : 'PUBLISHED',
    );
    const bn = row.translations.find((x) => x.locale === 'bn');
    const en = row.translations.find((x) => x.locale === 'en');
    setTitleBn(bn?.title ?? '');
    setTitleEn(en?.title ?? '');
    setBodyBn(bn?.bodyMd ?? '');
    setBodyEn(en?.bodyMd ?? '');
  }

  function cancelEdit() {
    setEditId(null);
  }

  function transPayload() {
    return [
      {
        locale: 'bn' as const,
        title: titleBn.trim(),
        bodyMd: bodyBn.trim(),
      },
      {
        locale: 'en' as const,
        title: titleEn.trim(),
        bodyMd: bodyEn.trim(),
      },
    ];
  }

  async function addEvent(e: React.FormEvent) {
    e.preventDefault();
    if (
      !eventAt ||
      !titleBn.trim() ||
      !titleEn.trim() ||
      !bodyBn.trim() ||
      !bodyEn.trim()
    )
      return;
    setAdding(true);
    setError(null);
    const res = await adminFetch('admin/timeline-events', {
      method: 'POST',
      body: JSON.stringify({
        eventAt: new Date(eventAt).toISOString(),
        reviewStatus,
        translations: transPayload(),
      }),
    });
    setAdding(false);
    if (!res.ok) {
      setError(await readApiError(res));
      return;
    }
    setEventAt('');
    setTitleBn('');
    setTitleEn('');
    setBodyBn('');
    setBodyEn('');
    void load();
  }

  async function saveEdit() {
    if (!editId) return;
    if (!bodyBn.trim() || !bodyEn.trim()) return;
    setSavingId(editId);
    setError(null);
    const res = await adminFetch(`admin/timeline-events/${editId}`, {
      method: 'PATCH',
      body: JSON.stringify({
        eventAt: new Date(eventAt).toISOString(),
        reviewStatus,
        translations: transPayload(),
      }),
    });
    setSavingId(null);
    if (!res.ok) {
      setError(await readApiError(res));
      return;
    }
    cancelEdit();
    void load();
  }

  async function remove(row: TimelineRow) {
    if (!window.confirm(t('confirmDeleteTimeline'))) return;
    setError(null);
    const res = await adminFetch(`admin/timeline-events/${row.id}`, {
      method: 'DELETE',
    });
    if (!res.ok) {
      setError(await readApiError(res));
      return;
    }
    if (editId === row.id) cancelEdit();
    void load();
  }

  return (
    <div>
      <h1 className="mb-6 text-xl font-semibold text-archive-fg">
        {t('timelineAdminTitle')}
      </h1>
      <p className="mb-6 text-sm text-archive-muted">{t('timelineAdminHint')}</p>
      {error && (
        <p className="mb-4 rounded-md border border-archive-border bg-archive-bg px-3 py-2 text-sm text-archive-fg">
          {error}
        </p>
      )}

      <form
        onSubmit={addEvent}
        className="mb-10 space-y-4 rounded-xl border border-archive-border bg-white p-4"
      >
        <p className="text-sm font-medium text-archive-fg">{t('timelineAdd')}</p>
        <div className="flex flex-wrap gap-3">
          <label className="text-sm">
            <span className="text-archive-muted">{t('timelineEventAt')}</span>
            <input
              required
              type="datetime-local"
              className="mt-1 block rounded-md border border-archive-border px-2 py-1.5"
              value={eventAt}
              onChange={(e) => setEventAt(e.target.value)}
            />
          </label>
          <label className="text-sm">
            <span className="text-archive-muted">{t('status')}</span>
            <select
              className="mt-1 block rounded-md border border-archive-border px-2 py-1.5"
              value={reviewStatus}
              onChange={(e) =>
                setReviewStatus(e.target.value as 'DRAFT' | 'PUBLISHED')
              }
            >
              <option value="PUBLISHED">{t('published')}</option>
              <option value="DRAFT">{t('draft')}</option>
            </select>
          </label>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="text-sm">
            <span className="text-archive-muted">{t('timelineTitleBn')}</span>
            <input
              required
              className="mt-1 w-full rounded-md border border-archive-border px-2 py-1.5"
              value={titleBn}
              onChange={(e) => setTitleBn(e.target.value)}
            />
          </label>
          <label className="text-sm">
            <span className="text-archive-muted">{t('timelineTitleEn')}</span>
            <input
              required
              className="mt-1 w-full rounded-md border border-archive-border px-2 py-1.5"
              value={titleEn}
              onChange={(e) => setTitleEn(e.target.value)}
            />
          </label>
          <label className="text-sm sm:col-span-2">
            <span className="text-archive-muted">{t('timelineBodyBn')}</span>
            <textarea
              rows={4}
              className="mt-1 w-full rounded-md border border-archive-border px-2 py-1.5 font-mono text-sm"
              value={bodyBn}
              onChange={(e) => setBodyBn(e.target.value)}
            />
          </label>
          <label className="text-sm sm:col-span-2">
            <span className="text-archive-muted">{t('timelineBodyEn')}</span>
            <textarea
              rows={4}
              className="mt-1 w-full rounded-md border border-archive-border px-2 py-1.5 font-mono text-sm"
              value={bodyEn}
              onChange={(e) => setBodyEn(e.target.value)}
            />
          </label>
        </div>
        <button
          type="submit"
          disabled={adding}
          className="rounded-md bg-archive-accent px-4 py-2 text-sm font-medium text-white disabled:opacity-50"
        >
          {adding ? t('loading') : t('timelineAddSubmit')}
        </button>
      </form>

      {loading ? (
        <p className="text-sm text-archive-muted">{t('loading')}</p>
      ) : rows.length === 0 ? (
        <p className="text-sm text-archive-muted">{t('timelineEmpty')}</p>
      ) : (
        <ul className="divide-y divide-archive-border rounded-xl border border-archive-border bg-white">
          {rows.map((row) => (
            <li key={row.id} className="px-4 py-4">
              {editId === row.id ? (
                <div className="space-y-3">
                  <input
                    type="datetime-local"
                    className="rounded-md border border-archive-border px-2 py-1.5 text-sm"
                    value={eventAt}
                    onChange={(e) => setEventAt(e.target.value)}
                  />
                  <select
                    className="rounded-md border border-archive-border px-2 py-1.5 text-sm"
                    value={reviewStatus}
                    onChange={(e) =>
                      setReviewStatus(
                        e.target.value as 'DRAFT' | 'PUBLISHED',
                      )
                    }
                  >
                    <option value="PUBLISHED">{t('published')}</option>
                    <option value="DRAFT">{t('draft')}</option>
                  </select>
                  <div className="grid gap-2 sm:grid-cols-2">
                    <input
                      className="rounded-md border border-archive-border px-2 py-1.5 text-sm"
                      value={titleBn}
                      onChange={(e) => setTitleBn(e.target.value)}
                    />
                    <input
                      className="rounded-md border border-archive-border px-2 py-1.5 text-sm"
                      value={titleEn}
                      onChange={(e) => setTitleEn(e.target.value)}
                    />
                  </div>
                  <textarea
                    rows={3}
                    className="w-full rounded-md border border-archive-border px-2 py-1.5 font-mono text-sm"
                    value={bodyBn}
                    onChange={(e) => setBodyBn(e.target.value)}
                  />
                  <textarea
                    rows={3}
                    className="w-full rounded-md border border-archive-border px-2 py-1.5 font-mono text-sm"
                    value={bodyEn}
                    onChange={(e) => setBodyEn(e.target.value)}
                  />
                  <div className="flex gap-2">
                    <button
                      type="button"
                      disabled={savingId === row.id}
                      onClick={() => void saveEdit()}
                      className="rounded-md bg-archive-accent px-3 py-1.5 text-sm text-white disabled:opacity-50"
                    >
                      {savingId === row.id ? t('loading') : t('editSource')}
                    </button>
                    <button
                      type="button"
                      onClick={cancelEdit}
                      className="text-sm text-archive-muted underline"
                    >
                      {t('cancel')}
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="font-mono text-sm text-archive-muted">
                      {row.eventAt.slice(0, 10)}
                    </p>
                    <p className="font-medium text-archive-fg">
                      {row.translations.find((x) => x.locale === 'en')?.title}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => startEdit(row)}
                      className="text-sm text-archive-accent underline"
                    >
                      {t('editArticle')}
                    </button>
                    <button
                      type="button"
                      onClick={() => void remove(row)}
                      className="text-sm text-archive-muted underline"
                    >
                      {t('deleteSource')}
                    </button>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
```

### `apps/web/src/app/[locale]/admin/(dashboard)/videos/page.tsx`

```tsx
'use client';

import { useTranslations } from 'next-intl';
import { useCallback, useEffect, useState } from 'react';
import { adminFetch, readApiError } from '@/lib/admin-api';

type Trans = { locale: string; title: string; description: string | null };

type SourceMini = { id: string; name: string; url: string | null };

type VideoRow = {
  id: string;
  platform: 'YOUTUBE' | 'FACEBOOK';
  watchUrl: string;
  publishedAt: string | null;
  reviewStatus: string;
  sourceId: string | null;
  source: SourceMini | null;
  tags: string[];
  translations: Trans[];
};

function titleFor(row: VideoRow, loc: string) {
  return (
    row.translations.find((x) => x.locale === loc)?.title ??
    row.translations[0]?.title ??
    row.id
  );
}

function parseTagsComma(s: string) {
  return s
    .split(',')
    .map((x) => x.trim())
    .filter((x) => x.length > 0);
}

export default function AdminVideosPage() {
  const t = useTranslations('admin');
  const [rows, setRows] = useState<VideoRow[]>([]);
  const [sources, setSources] = useState<SourceMini[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const [platform, setPlatform] = useState<'YOUTUBE' | 'FACEBOOK'>('YOUTUBE');
  const [watchUrl, setWatchUrl] = useState('');
  const [publishedAt, setPublishedAt] = useState('');
  const [reviewStatus, setReviewStatus] = useState<'DRAFT' | 'PUBLISHED'>(
    'PUBLISHED',
  );
  const [sourceId, setSourceId] = useState('');
  const [tagsInput, setTagsInput] = useState('');
  const [titleBn, setTitleBn] = useState('');
  const [titleEn, setTitleEn] = useState('');
  const [descBn, setDescBn] = useState('');
  const [descEn, setDescEn] = useState('');
  const [adding, setAdding] = useState(false);

  const [editId, setEditId] = useState<string | null>(null);
  const [savingId, setSavingId] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    const [vRes, sRes] = await Promise.all([
      adminFetch('admin/videos'),
      adminFetch('admin/sources'),
    ]);
    setLoading(false);
    if (!vRes.ok) {
      setError(`${t('loadError')} ${await readApiError(vRes)}`);
      setRows([]);
      return;
    }
    setRows((await vRes.json()) as VideoRow[]);
    if (sRes.ok) {
      setSources((await sRes.json()) as SourceMini[]);
    } else {
      setSources([]);
    }
  }, [t]);

  useEffect(() => {
    void load();
  }, [load]);

  function startEdit(row: VideoRow) {
    setEditId(row.id);
    setPlatform(row.platform);
    setWatchUrl(row.watchUrl);
    setPublishedAt(row.publishedAt ? row.publishedAt.slice(0, 16) : '');
    setReviewStatus(row.reviewStatus === 'DRAFT' ? 'DRAFT' : 'PUBLISHED');
    setSourceId(row.sourceId ?? '');
    setTagsInput(row.tags?.length ? row.tags.join(', ') : '');
    const bn = row.translations.find((x) => x.locale === 'bn');
    const en = row.translations.find((x) => x.locale === 'en');
    setTitleBn(bn?.title ?? '');
    setTitleEn(en?.title ?? '');
    setDescBn(bn?.description ?? '');
    setDescEn(en?.description ?? '');
  }

  function cancelEdit() {
    setEditId(null);
  }

  function transPayload() {
    return [
      {
        locale: 'bn' as const,
        title: titleBn.trim(),
        description: descBn.trim() || undefined,
      },
      {
        locale: 'en' as const,
        title: titleEn.trim(),
        description: descEn.trim() || undefined,
      },
    ];
  }

  function sourceSelect() {
    return (
      <label className="min-w-[160px] text-sm">
        <span className="text-archive-muted">{t('source')}</span>
        <select
          className="mt-1 block w-full rounded-md border border-archive-border px-2 py-1.5"
          value={sourceId}
          onChange={(e) => setSourceId(e.target.value)}
        >
          <option value="">{t('videoSourceNone')}</option>
          {sources.map((s) => (
            <option key={s.id} value={s.id}>
              {s.name}
            </option>
          ))}
        </select>
      </label>
    );
  }

  function tagsField(className?: string) {
    return (
      <label className={className ?? 'min-w-[200px] flex-1 text-sm'}>
        <span className="text-archive-muted">{t('videoTagsField')}</span>
        <input
          className="mt-1 w-full rounded-md border border-archive-border px-2 py-1.5"
          value={tagsInput}
          onChange={(e) => setTagsInput(e.target.value)}
          placeholder={t('videoTagsHint')}
        />
      </label>
    );
  }

  async function addVideo(e: React.FormEvent) {
    e.preventDefault();
    if (!watchUrl.trim() || !titleBn.trim() || !titleEn.trim()) return;
    setAdding(true);
    setError(null);
    const tags = parseTagsComma(tagsInput);
    const body: Record<string, unknown> = {
      platform,
      watchUrl: watchUrl.trim(),
      publishedAt: publishedAt
        ? new Date(publishedAt).toISOString()
        : undefined,
      reviewStatus,
      translations: transPayload(),
      tags,
    };
    const sid = sourceId.trim();
    if (sid) body.sourceId = sid;
    const res = await adminFetch('admin/videos', {
      method: 'POST',
      body: JSON.stringify(body),
    });
    setAdding(false);
    if (!res.ok) {
      setError(await readApiError(res));
      return;
    }
    setWatchUrl('');
    setPublishedAt('');
    setSourceId('');
    setTagsInput('');
    setTitleBn('');
    setTitleEn('');
    setDescBn('');
    setDescEn('');
    void load();
  }

  async function saveEdit() {
    if (!editId) return;
    setSavingId(editId);
    setError(null);
    const res = await adminFetch(`admin/videos/${editId}`, {
      method: 'PATCH',
      body: JSON.stringify({
        platform,
        watchUrl: watchUrl.trim(),
        publishedAt: publishedAt
          ? new Date(publishedAt).toISOString()
          : null,
        reviewStatus,
        sourceId: sourceId.trim(),
        tags: parseTagsComma(tagsInput),
        translations: transPayload(),
      }),
    });
    setSavingId(null);
    if (!res.ok) {
      setError(await readApiError(res));
      return;
    }
    cancelEdit();
    void load();
  }

  async function remove(row: VideoRow) {
    if (!window.confirm(t('confirmDeleteVideo'))) return;
    setError(null);
    const res = await adminFetch(`admin/videos/${row.id}`, {
      method: 'DELETE',
    });
    if (!res.ok) {
      setError(await readApiError(res));
      return;
    }
    if (editId === row.id) cancelEdit();
    void load();
  }

  return (
    <div>
      <h1 className="mb-6 text-xl font-semibold text-archive-fg">
        {t('videosTitle')}
      </h1>
      <p className="mb-6 text-sm text-archive-muted">{t('videosHint')}</p>
      {error && (
        <p className="mb-4 rounded-md border border-archive-border bg-archive-bg px-3 py-2 text-sm text-archive-fg">
          {error}
        </p>
      )}

      <form
        onSubmit={addVideo}
        className="mb-10 space-y-4 rounded-xl border border-archive-border bg-white p-4"
      >
        <p className="text-sm font-medium text-archive-fg">{t('videosAdd')}</p>
        <div className="flex flex-wrap gap-3">
          <label className="text-sm">
            <span className="text-archive-muted">{t('videoPlatform')}</span>
            <select
              className="mt-1 block rounded-md border border-archive-border px-2 py-1.5"
              value={platform}
              onChange={(e) =>
                setPlatform(e.target.value as 'YOUTUBE' | 'FACEBOOK')
              }
            >
              <option value="YOUTUBE">YouTube</option>
              <option value="FACEBOOK">Facebook</option>
            </select>
          </label>
          <label className="min-w-[200px] flex-1 text-sm">
            <span className="text-archive-muted">{t('videoWatchUrl')}</span>
            <input
              required
              className="mt-1 w-full rounded-md border border-archive-border px-2 py-1.5"
              value={watchUrl}
              onChange={(e) => setWatchUrl(e.target.value)}
              placeholder="https://..."
            />
          </label>
          <label className="text-sm">
            <span className="text-archive-muted">{t('publishedAt')}</span>
            <input
              type="datetime-local"
              className="mt-1 block rounded-md border border-archive-border px-2 py-1.5"
              value={publishedAt}
              onChange={(e) => setPublishedAt(e.target.value)}
            />
          </label>
          <label className="text-sm">
            <span className="text-archive-muted">{t('status')}</span>
            <select
              className="mt-1 block rounded-md border border-archive-border px-2 py-1.5"
              value={reviewStatus}
              onChange={(e) =>
                setReviewStatus(e.target.value as 'DRAFT' | 'PUBLISHED')
              }
            >
              <option value="PUBLISHED">{t('published')}</option>
              <option value="DRAFT">{t('draft')}</option>
            </select>
          </label>
          {sourceSelect()}
          {tagsField()}
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="text-sm">
            <span className="text-archive-muted">{t('videoTitleBn')}</span>
            <input
              required
              className="mt-1 w-full rounded-md border border-archive-border px-2 py-1.5"
              value={titleBn}
              onChange={(e) => setTitleBn(e.target.value)}
            />
          </label>
          <label className="text-sm">
            <span className="text-archive-muted">{t('videoTitleEn')}</span>
            <input
              required
              className="mt-1 w-full rounded-md border border-archive-border px-2 py-1.5"
              value={titleEn}
              onChange={(e) => setTitleEn(e.target.value)}
            />
          </label>
          <label className="text-sm">
            <span className="text-archive-muted">{t('videoDescBn')}</span>
            <textarea
              rows={2}
              className="mt-1 w-full rounded-md border border-archive-border px-2 py-1.5"
              value={descBn}
              onChange={(e) => setDescBn(e.target.value)}
            />
          </label>
          <label className="text-sm">
            <span className="text-archive-muted">{t('videoDescEn')}</span>
            <textarea
              rows={2}
              className="mt-1 w-full rounded-md border border-archive-border px-2 py-1.5"
              value={descEn}
              onChange={(e) => setDescEn(e.target.value)}
            />
          </label>
        </div>
        <button
          type="submit"
          disabled={adding}
          className="rounded-md bg-archive-accent px-4 py-2 text-sm font-medium text-white disabled:opacity-50"
        >
          {adding ? t('loading') : t('videosAddSubmit')}
        </button>
      </form>

      {loading ? (
        <p className="text-sm text-archive-muted">{t('loading')}</p>
      ) : rows.length === 0 ? (
        <p className="text-sm text-archive-muted">{t('videosEmpty')}</p>
      ) : (
        <ul className="divide-y divide-archive-border rounded-xl border border-archive-border bg-white">
          {rows.map((row) => (
            <li key={row.id} className="px-4 py-4">
              {editId === row.id ? (
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-3">
                    <select
                      className="rounded-md border border-archive-border px-2 py-1.5 text-sm"
                      value={platform}
                      onChange={(e) =>
                        setPlatform(e.target.value as 'YOUTUBE' | 'FACEBOOK')
                      }
                    >
                      <option value="YOUTUBE">YouTube</option>
                      <option value="FACEBOOK">Facebook</option>
                    </select>
                    <input
                      className="min-w-[200px] flex-1 rounded-md border border-archive-border px-2 py-1.5 text-sm"
                      value={watchUrl}
                      onChange={(e) => setWatchUrl(e.target.value)}
                    />
                    <input
                      type="datetime-local"
                      className="rounded-md border border-archive-border px-2 py-1.5 text-sm"
                      value={publishedAt}
                      onChange={(e) => setPublishedAt(e.target.value)}
                    />
                    <select
                      className="rounded-md border border-archive-border px-2 py-1.5 text-sm"
                      value={reviewStatus}
                      onChange={(e) =>
                        setReviewStatus(
                          e.target.value as 'DRAFT' | 'PUBLISHED',
                        )
                      }
                    >
                      <option value="PUBLISHED">{t('published')}</option>
                      <option value="DRAFT">{t('draft')}</option>
                    </select>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {sourceSelect()}
                    {tagsField()}
                  </div>
                  <div className="grid gap-2 sm:grid-cols-2">
                    <input
                      className="rounded-md border border-archive-border px-2 py-1.5 text-sm"
                      value={titleBn}
                      onChange={(e) => setTitleBn(e.target.value)}
                      placeholder="bn title"
                    />
                    <input
                      className="rounded-md border border-archive-border px-2 py-1.5 text-sm"
                      value={titleEn}
                      onChange={(e) => setTitleEn(e.target.value)}
                      placeholder="en title"
                    />
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      disabled={savingId === row.id}
                      onClick={() => void saveEdit()}
                      className="rounded-md bg-archive-accent px-3 py-1.5 text-sm text-white disabled:opacity-50"
                    >
                      {savingId === row.id ? t('loading') : t('save')}
                    </button>
                    <button
                      type="button"
                      onClick={cancelEdit}
                      className="text-sm text-archive-muted underline"
                    >
                      {t('cancel')}
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="font-medium text-archive-fg">
                      {titleFor(row, 'en')} / {titleFor(row, 'bn')}
                    </p>
                    <p className="text-xs text-archive-muted">
                      {row.platform} · {row.reviewStatus}
                    </p>
                    <p className="truncate text-xs text-archive-muted">
                      {row.watchUrl}
                    </p>
                    {row.source ? (
                      <p className="text-xs text-archive-muted">
                        {t('source')}: {row.source.name}
                      </p>
                    ) : null}
                    {row.tags?.length ? (
                      <p className="text-xs text-archive-muted">
                        {t('videoTagsLabel')}: {row.tags.join(', ')}
                      </p>
                    ) : null}
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => startEdit(row)}
                      className="text-sm text-archive-accent underline"
                    >
                      {t('editArticle')}
                    </button>
                    <button
                      type="button"
                      onClick={() => void remove(row)}
                      className="text-sm text-archive-muted underline"
                    >
                      {t('deleteSource')}
                    </button>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
```

### `apps/web/src/app/[locale]/admin/bootstrap/page.tsx`

```tsx
'use client';

import { useTranslations } from 'next-intl';
import { Link, useRouter } from '@/i18n/navigation';
import { useState } from 'react';
import { adminFetch, readApiError, setAdminSession } from '@/lib/admin-api';

export default function AdminBootstrapPage() {
  const t = useTranslations('admin');
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secret, setSecret] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setPending(true);
    setError(null);
    const res = await adminFetch('admin/auth/bootstrap', {
      method: 'POST',
      body: JSON.stringify({ email, password, secret }),
    });
    setPending(false);
    if (!res.ok) {
      setError(`${t('bootstrapError')} ${await readApiError(res)}`);
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
      <h1 className="text-xl font-semibold text-archive-fg">
        {t('bootstrapTitle')}
      </h1>
      <p className="mt-2 text-sm text-archive-muted">{t('bootstrapHint')}</p>
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
            required
            className="mt-1 w-full rounded-md border border-archive-border px-3 py-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label className="block text-sm">
          <span className="text-archive-muted">{t('bootstrapSecret')}</span>
          <input
            type="password"
            required
            className="mt-1 w-full rounded-md border border-archive-border px-3 py-2"
            value={secret}
            onChange={(e) => setSecret(e.target.value)}
          />
        </label>
        <button
          type="submit"
          disabled={pending}
          className="w-full rounded-md bg-archive-accent py-2 text-sm font-medium text-white disabled:opacity-50"
        >
          {t('bootstrapSubmit')}
        </button>
      </form>
      <p className="mt-6 text-center text-sm">
        <Link href="/admin/login" className="text-archive-accent underline">
          {t('backToLogin')}
        </Link>
      </p>
    </div>
  );
}
```

### `apps/web/src/app/[locale]/admin/login/page.tsx`

```tsx
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
```

### `apps/web/src/app/[locale]/articles/page.tsx`

```tsx
import { getTranslations } from 'next-intl/server';
import ArticleCard from '@/components/ArticleCard';
import { getArticles } from '@/lib/api';

export default async function ArticlesPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ category?: string }>;
}) {
  const { locale } = await params;
  const { category } = await searchParams;
  const categoryTrim = category?.trim();
  const t = await getTranslations('home');
  const tNav = await getTranslations('nav');
  const result = await getArticles(
    locale,
    categoryTrim ? { category: categoryTrim } : undefined,
  );

  const articles = result?.data ?? [];

  const pageTitle =
    categoryTrim === 'News'
      ? tNav('news')
      : categoryTrim
        ? categoryTrim
        : tNav('articles');

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">{pageTitle}</h1>
        <p className="text-archive-muted">{t('articlesLead')}</p>
      </header>
      {!articles.length ? (
        <p className="rounded-lg border border-dashed border-archive-border bg-white px-4 py-6 text-center text-sm text-archive-muted">
          {t('noArticles')}
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
              locale={locale}
              readLabel={t('read')}
            />
          ))}
        </div>
      )}
    </div>
  );
}
```

### `apps/web/src/app/[locale]/articles/[slug]/page.tsx`

```tsx
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Link } from '@/i18n/navigation';
import ArticleCard from '@/components/ArticleCard';
import MarkdownBody from '@/components/MarkdownBody';
import { getArticle, getArticles } from '@/lib/api';
import { formatPublishDate } from '@/lib/format-date';
import { slugifyHeading } from '@/lib/slug-heading';

type Props = { params: Promise<{ locale: string; slug: string }> };

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

function headingsFromMarkdown(md: string): { id: string; text: string }[] {
  const out: { id: string; text: string }[] = [];
  const re = /^##\s+(.+)$/gm;
  let m: RegExpExecArray | null;
  while ((m = re.exec(md)) !== null) {
    const text = m[1].trim();
    out.push({ id: slugifyHeading(text), text });
  }
  return out;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = await getArticle(slug, locale);
  const t = await getTranslations({ locale, namespace: 'article' });

  if (!article) {
    return { title: t('notFound'), metadataBase: new URL(siteUrl) };
  }

  const title = article.seoTitle ?? article.title;
  const description = article.seoDescription ?? article.description ?? undefined;

  return {
    title,
    description,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: `/${locale}/articles/${slug}`,
      languages: {
        bn: `/bn/articles/${slug}`,
        en: `/en/articles/${slug}`,
        'x-default': `/bn/articles/${slug}`,
      },
    },
    openGraph: { title, description },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { locale, slug } = await params;
  const t = await getTranslations('article');
  const tHome = await getTranslations('home');

  const article = await getArticle(slug, locale);
  if (!article || !article.bodyMd) {
    notFound();
  }

  const toc = headingsFromMarkdown(article.bodyMd);
  const list = await getArticles(locale);
  const related =
    list?.data?.filter((a) => a.slug !== article.slug).slice(0, 4) ?? [];

  return (
    <div className="grid gap-12 lg:grid-cols-12">
      <article className="lg:col-span-8">
        {article.coverUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={article.coverUrl}
            alt=""
            className="mb-8 w-full max-h-[420px] rounded-xl border border-archive-border object-cover"
          />
        ) : null}
        <header className="space-y-4 border-b border-archive-border pb-8">
          {article.category ? (
            <Link
              href={`/tags/${encodeURIComponent(article.category)}`}
              className="inline-flex rounded-full border border-archive-border px-2 py-0.5 text-xs font-medium uppercase tracking-wide text-archive-muted transition-colors hover:border-archive-accent hover:text-archive-accent"
            >
              {article.category}
            </Link>
          ) : null}
          <h1 className="text-4xl font-semibold tracking-tight text-archive-fg">
            {article.title}
          </h1>
          <div className="flex flex-wrap gap-4 text-sm text-archive-muted">
            <span>
              {t('bySource')}:{' '}
              {article.source.url ? (
                <a
                  href={article.source.url}
                  className="text-archive-accent underline underline-offset-2"
                  rel="noreferrer"
                  target="_blank"
                >
                  {article.source.name}
                </a>
              ) : (
                article.source.name
              )}
            </span>
            <span>
              {t('published')}:{' '}
              <time dateTime={article.publishedAt ?? undefined}>
                {formatPublishDate(article.publishedAt, locale)}
              </time>
            </span>
            {(article.tags?.length || article.category) && (
              <span className="flex flex-wrap items-center gap-1.5">
                <span className="shrink-0">{t('tags')}:</span>
                {article.category ? (
                  <Link
                    href={`/tags/${encodeURIComponent(article.category)}`}
                    className="rounded-full bg-archive-bg px-2 py-0.5 text-archive-fg ring-1 ring-archive-border hover:ring-archive-accent"
                  >
                    {article.category}
                  </Link>
                ) : null}
                {(article.tags ?? [])
                  .filter(
                    (tg) =>
                      !article.category ||
                      tg.toLowerCase() !== article.category.toLowerCase(),
                  )
                  .map((tg) => (
                    <Link
                      key={tg}
                      href={`/tags/${encodeURIComponent(tg)}`}
                      className="rounded-full bg-archive-bg px-2 py-0.5 text-archive-fg ring-1 ring-archive-border hover:ring-archive-accent"
                    >
                      {tg}
                    </Link>
                  ))}
              </span>
            )}
          </div>
        </header>
        <div className="mt-8 max-w-[720px]">
          <MarkdownBody markdown={article.bodyMd} />
        </div>
      </article>
      <aside className="space-y-10 lg:col-span-4">
        {toc.length ? (
          <nav
            aria-label={t('toc')}
            className="sticky top-20 hidden rounded-xl border border-archive-border bg-white p-5 lg:block"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-archive-muted">
              {t('toc')}
            </p>
            <ol className="mt-4 space-y-2 text-sm">
              {toc.map((h) => (
                <li key={h.id}>
                  <a
                    href={`#${h.id}`}
                    className="text-archive-muted hover:text-archive-accent"
                  >
                    {h.text}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        ) : null}
        <section className="rounded-xl border border-archive-border bg-white p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-archive-muted">
            {t('verification')}
          </p>
          <p className="mt-2 text-sm text-archive-muted">
            {article.source.url ? (
              <a
                href={article.source.url}
                className="text-archive-accent underline underline-offset-2"
                rel="noreferrer"
                target="_blank"
              >
                {article.source.name}
              </a>
            ) : (
              article.source.name
            )}
          </p>
        </section>
        {related.length ? (
          <section className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-archive-muted">
              {t('related')}
            </h2>
            <div className="flex flex-col gap-4">
              {related.map((a) => (
                <ArticleCard
                  key={a.id}
                  article={a}
                  locale={locale}
                  readLabel={tHome('read')}
                />
              ))}
            </div>
          </section>
        ) : null}
      </aside>
    </div>
  );
}
```

### `apps/web/src/app/[locale]/media/page.tsx`

```tsx
import { getTranslations } from 'next-intl/server';
import { getVideos } from '@/lib/api';
import VideoFigure from '@/components/VideoFigure';

type Props = { params: Promise<{ locale: string }> };

export default async function MediaPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations('placeholders');
  const videos = (await getVideos(locale)) ?? [];

  return (
    <div className="mx-auto max-w-4xl space-y-12">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">
          {t('mediaTitle')}
        </h1>
        <p className="text-archive-muted">{t('mediaIntro')}</p>
      </header>

      <section aria-labelledby="videos-heading" className="space-y-4">
        <h2
          id="videos-heading"
          className="text-lg font-semibold text-archive-fg"
        >
          {t('mediaVideosHeading')}
        </h2>
        {videos.length === 0 ? (
          <p className="text-sm text-archive-muted">{t('mediaVideosEmpty')}</p>
        ) : (
          <div className="flex flex-col gap-8">
            {videos.map((v) => (
              <VideoFigure
                key={v.id}
                platform={v.platform}
                watchUrl={v.watchUrl}
                title={v.title}
                description={v.description}
                source={v.source}
                tags={v.tags}
                labels={{
                  source: t('videoSource'),
                  tags: t('videoTags'),
                  empty: t('videoValueEmpty'),
                }}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
```

### `apps/web/src/app/[locale]/tags/[tag]/page.tsx`

```tsx
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import ArticleCard from '@/components/ArticleCard';
import VideoFigure from '@/components/VideoFigure';
import { Link } from '@/i18n/navigation';
import { getArticles, getMediaItems, getVideos } from '@/lib/api';

type Props = { params: Promise<{ locale: string; tag: string }> };

export default async function TagHubPage({ params }: Props) {
  const { locale, tag: tagParam } = await params;
  const tag = decodeURIComponent(tagParam).trim();
  if (!tag) {
    notFound();
  }

  const t = await getTranslations('tagHub');
  const tHome = await getTranslations('home');
  const tPlace = await getTranslations('placeholders');

  const articlesRes = await getArticles(locale, { tag });
  const all = articlesRes?.data ?? [];
  const newsArticles = all.filter(
    (a) => (a.category ?? '').toLowerCase() === 'news',
  );
  const otherArticles = all.filter(
    (a) => (a.category ?? '').toLowerCase() !== 'news',
  );

  const [videos, media] = await Promise.all([
    getVideos(locale, { tag }),
    getMediaItems(locale, { tag }),
  ]);

  return (
    <div className="mx-auto max-w-4xl space-y-12">
      <header className="space-y-2 border-b border-archive-border pb-8">
        <h1 className="text-3xl font-semibold tracking-tight text-archive-fg">
          {t('title', { tag })}
        </h1>
        <p className="text-archive-muted">{t('intro')}</p>
      </header>

      <section aria-labelledby="tag-articles" className="space-y-4">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h2
            id="tag-articles"
            className="text-lg font-semibold text-archive-fg"
          >
            {t('articles')}
          </h2>
          <Link
            href="/articles"
            className="text-sm text-archive-accent underline"
          >
            {t('seeArticles')}
          </Link>
        </div>
        {!otherArticles.length ? (
          <p className="text-sm text-archive-muted">{t('empty')}</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2">
            {otherArticles.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                locale={locale}
                readLabel={tHome('read')}
              />
            ))}
          </div>
        )}
      </section>

      <section aria-labelledby="tag-news" className="space-y-4">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h2 id="tag-news" className="text-lg font-semibold text-archive-fg">
            {t('news')}
          </h2>
          <Link
            href="/articles?category=News"
            className="text-sm text-archive-accent underline"
          >
            {t('seeNews')}
          </Link>
        </div>
        {!newsArticles.length ? (
          <p className="text-sm text-archive-muted">{t('empty')}</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2">
            {newsArticles.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                locale={locale}
                readLabel={tHome('read')}
              />
            ))}
          </div>
        )}
      </section>

      <section aria-labelledby="tag-videos" className="space-y-4">
        <h2 id="tag-videos" className="text-lg font-semibold text-archive-fg">
          {t('videos')}
        </h2>
        {!videos?.length ? (
          <p className="text-sm text-archive-muted">{t('empty')}</p>
        ) : (
          <div className="flex flex-col gap-8">
            {videos.map((v) => (
              <VideoFigure
                key={v.id}
                platform={v.platform}
                watchUrl={v.watchUrl}
                title={v.title}
                description={v.description}
                source={v.source}
                tags={v.tags}
                labels={{
                  source: tPlace('videoSource'),
                  tags: tPlace('videoTags'),
                  empty: tPlace('videoValueEmpty'),
                }}
              />
            ))}
          </div>
        )}
      </section>

      <section aria-labelledby="tag-media" className="space-y-4">
        <h2 id="tag-media" className="text-lg font-semibold text-archive-fg">
          {t('media')}
        </h2>
        {!media?.length ? (
          <p className="text-sm text-archive-muted">{t('empty')}</p>
        ) : (
          <ul className="divide-y divide-archive-border rounded-xl border border-archive-border bg-white">
            {media.map((m) => (
              <li key={m.id} className="px-4 py-3">
                <p className="font-medium text-archive-fg">{m.title}</p>
                {m.caption ? (
                  <p className="text-sm text-archive-muted">{m.caption}</p>
                ) : null}
                <a
                  href={m.mediaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-archive-accent underline break-all"
                >
                  {m.mediaUrl}
                </a>
                {m.tags?.length ? (
                  <ul className="mt-2 flex flex-wrap gap-1.5">
                    {m.tags.map((tg) => (
                      <li key={tg}>
                        <Link
                          href={`/tags/${encodeURIComponent(tg)}`}
                          className="inline-block rounded-full bg-archive-bg px-2 py-0.5 text-xs text-archive-fg ring-1 ring-archive-border hover:ring-archive-accent"
                        >
                          {tg}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
```

### `apps/web/src/app/[locale]/timeline/page.tsx`

```tsx
import { getTranslations } from 'next-intl/server';
import { getTimelineEvents } from '@/lib/api';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { format } from 'date-fns';

type Props = { params: Promise<{ locale: string }> };

export default async function TimelinePage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations('placeholders');
  const events = (await getTimelineEvents(locale)) ?? [];

  return (
    <div className="mx-auto max-w-3xl space-y-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">
          {t('timelineTitle')}
        </h1>
        <p className="text-archive-muted">{t('timelineIntro')}</p>
      </header>

      {events.length === 0 ? (
        <p className="text-sm text-archive-muted">{t('timelineEmpty')}</p>
      ) : (
        <ol className="relative space-y-8 border-l border-archive-border pl-8">
          {events.map((ev) => (
            <li key={ev.id} className="relative">
              <span className="absolute -left-[1.15rem] top-1.5 size-3 rounded-full border-2 border-archive-accent bg-white" />
              <time
                dateTime={ev.eventAt}
                className="font-mono text-sm text-archive-muted"
              >
                {format(new Date(ev.eventAt), 'yyyy-MM-dd')}
              </time>
              <h2 className="mt-1 text-lg font-semibold text-archive-fg">
                {ev.title}
              </h2>
              <div className="prose prose-sm mt-2 max-w-none text-archive-muted prose-headings:text-archive-fg prose-a:text-archive-accent">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {ev.bodyMd}
                </ReactMarkdown>
              </div>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
```

### `apps/web/src/components/ArticleCard.tsx`

```tsx
import { Link } from '@/i18n/navigation';
import { formatPublishDate } from '@/lib/format-date';
import type { ArticleView } from '@/lib/api';

type Props = {
  article: ArticleView;
  locale: string;
  readLabel: string;
};

export default function ArticleCard({ article, locale, readLabel }: Props) {
  const tags = article.tags ?? [];

  return (
    <div className="group flex flex-col overflow-hidden rounded-[12px] border border-archive-border bg-white transition-colors hover:border-archive-muted">
      <Link
        href={`/articles/${article.slug}`}
        className="block shrink-0"
      >
        <div className="flex aspect-video items-center justify-center bg-archive-bg text-xs text-archive-muted">
          {article.coverUrl ? (
            // eslint-disable-next-line @next/next/no-img-element -- remote URLs from archive; no fixed dimensions
            <img
              src={article.coverUrl}
              alt=""
              className="size-full object-cover"
            />
          ) : (
            <span aria-hidden>{article.category ?? 'Article'}</span>
          )}
        </div>
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex flex-wrap gap-1.5">
          {article.category ? (
            <Link
              href={`/tags/${encodeURIComponent(article.category)}`}
              className="inline-flex w-fit rounded-full border border-archive-border px-2 py-0.5 text-xs font-medium uppercase tracking-wide text-archive-muted transition-colors hover:border-archive-accent hover:text-archive-accent"
            >
              {article.category}
            </Link>
          ) : null}
          {tags
            .filter(
              (tg) =>
                !article.category ||
                tg.toLowerCase() !== article.category.toLowerCase(),
            )
            .map((tg) => (
              <Link
                key={tg}
                href={`/tags/${encodeURIComponent(tg)}`}
                className="inline-flex rounded-full bg-archive-bg px-2 py-0.5 text-xs text-archive-fg ring-1 ring-archive-border transition-colors hover:ring-archive-accent"
              >
                {tg}
              </Link>
            ))}
        </div>
        <Link href={`/articles/${article.slug}`}>
          <h3 className="line-clamp-2 text-lg font-semibold tracking-tight text-archive-fg group-hover:text-archive-accent">
            {article.title}
          </h3>
        </Link>
        <Link
          href={`/articles/${article.slug}`}
          className="line-clamp-2 flex-1 text-sm leading-relaxed text-archive-muted group-hover:text-archive-fg"
        >
          {article.description ?? '\u00A0'}
        </Link>
        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-archive-border pt-3 text-xs text-archive-muted">
          <span className="truncate">{article.source.name}</span>
          <time dateTime={article.publishedAt ?? undefined}>
            {formatPublishDate(article.publishedAt, locale)}
          </time>
        </div>
        <Link
          href={`/articles/${article.slug}`}
          className="text-xs font-semibold text-archive-accent"
        >
          {readLabel}
        </Link>
      </div>
    </div>
  );
}
```

### `apps/web/src/components/BreakingNewsMarquee.tsx`

```tsx
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
```

### `apps/web/src/components/LanguageToggle.tsx`

```tsx
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
```

### `apps/web/src/components/MarkdownBody.tsx`

```tsx
'use client';

import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { slugifyHeading } from '@/lib/slug-heading';

function headingText(children: React.ReactNode): string {
  return React.Children.toArray(children)
    .map((child) =>
      typeof child === 'string' || typeof child === 'number'
        ? String(child)
        : '',
    )
    .join('')
    .trim();
}

type Props = {
  markdown: string;
};

export default function MarkdownBody({ markdown }: Props) {
  return (
    <div className="article-body article-prose">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h2(props) {
            const { children, ...rest } = props;
            const text = headingText(children);
            const id = slugifyHeading(text);
            return (
              <h2 id={id} {...rest}>
                {children}
              </h2>
            );
          },
          h3(props) {
            return <h3 {...props}>{props.children}</h3>;
          },
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
```

### `apps/web/src/components/PublicOnlyChrome.tsx`

```tsx
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
```

### `apps/web/src/components/SiteHeader.tsx`

```tsx
'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import LanguageToggle from './LanguageToggle';

export default function SiteHeader() {
  const t = useTranslations('nav');
  const root = useTranslations();

  const brand = root('brandName');

  return (
    <header className="border-b border-archive-border bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between gap-4 px-5">
        <div className="flex min-w-0 items-center gap-6">
          <Link
            href="/"
            className="truncate text-base font-semibold tracking-tight text-archive-fg"
          >
            {brand}
          </Link>
          <nav className="hidden items-center gap-5 text-sm text-archive-muted md:flex">
            <Link href="/" className="hover:text-archive-fg">
              {t('archive')}
            </Link>
            <Link href="/articles" className="hover:text-archive-fg">
              {t('articles')}
            </Link>
            <Link
              href="/articles?category=News"
              className="hover:text-archive-fg"
            >
              {t('news')}
            </Link>
            <Link href="/media" className="hover:text-archive-fg">
              {t('videos')}
            </Link>
            <Link href="/media" className="hover:text-archive-fg">
              {t('media')}
            </Link>
            <Link href="/timeline" className="hover:text-archive-fg">
              {t('timeline')}
            </Link>
            <Link href="/about" className="hover:text-archive-fg">
              {t('about')}
            </Link>
            <Link href="/admin" className="hover:text-archive-fg">
              {t('admin')}
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <label className="hidden max-w-[200px] items-center rounded-md border border-archive-border bg-archive-bg px-2 py-1 md:flex">
            <span className="sr-only">{t('searchPlaceholder')}</span>
            <input
              type="search"
              placeholder={t('searchPlaceholder')}
              className="w-full bg-transparent text-sm outline-none placeholder:text-archive-muted"
              disabled
            />
          </label>
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
}
```

### `apps/web/src/components/VideoFigure.tsx`

```tsx
import { videoEmbedSrc } from '@/lib/embeds';
import { Link } from '@/i18n/navigation';

type Props = {
  platform: 'YOUTUBE' | 'FACEBOOK';
  watchUrl: string;
  title: string;
  description: string | null;
  source: { name: string; url: string | null } | null;
  tags: string[];
  labels: { source: string; tags: string; empty: string };
};

export default function VideoFigure({
  platform,
  watchUrl,
  title,
  description,
  source,
  tags,
  labels,
}: Props) {
  const src = videoEmbedSrc(platform, watchUrl);
  return (
    <figure className="space-y-3 rounded-xl border border-archive-border bg-white p-4">
      {src ? (
        <div className="aspect-video w-full max-w-3xl overflow-hidden rounded-lg bg-black">
          <iframe
            src={src}
            title={title}
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      ) : (
        <p className="text-sm text-archive-muted">
          <a
            href={watchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-archive-accent underline"
          >
            {watchUrl}
          </a>
        </p>
      )}
      <figcaption className="space-y-2">
        <p className="font-medium text-archive-fg">{title}</p>
        {description ? (
          <p className="text-sm text-archive-muted">{description}</p>
        ) : null}
        <dl className="grid gap-2 text-sm sm:grid-cols-[auto_1fr] sm:gap-x-3 sm:gap-y-1">
          <dt className="text-archive-muted">{labels.source}</dt>
          <dd className="text-archive-fg">
            {source ? (
              source.url ? (
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-archive-accent underline"
                >
                  {source.name}
                </a>
              ) : (
                source.name
              )
            ) : (
              <span className="text-archive-muted">{labels.empty}</span>
            )}
          </dd>
          <dt className="text-archive-muted">{labels.tags}</dt>
          <dd>
            {tags.length > 0 ? (
              <ul className="flex flex-wrap gap-1.5">
                {tags.map((tag) => (
                  <li key={tag}>
                    <Link
                      href={`/tags/${encodeURIComponent(tag)}`}
                      className="inline-block rounded-full bg-archive-bg px-2.5 py-0.5 text-xs text-archive-fg ring-1 ring-archive-border transition-colors hover:bg-white hover:ring-archive-accent"
                    >
                      {tag}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <span className="text-archive-muted">{labels.empty}</span>
            )}
          </dd>
        </dl>
        <p className="text-xs uppercase tracking-wide text-archive-muted">
          {platform === 'YOUTUBE' ? 'YouTube' : 'Facebook'}
        </p>
      </figcaption>
    </figure>
  );
}
```

### `apps/web/src/components/admin/AdminGuard.tsx`

```tsx
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
```

### `apps/web/src/components/admin/AdminShell.tsx`

```tsx
'use client';

import { useTranslations } from 'next-intl';
import { Link, useRouter } from '@/i18n/navigation';
import { clearAdminSession, getAdminProfile } from '@/lib/admin-api';

export default function AdminShell({ children }: { children: React.ReactNode }) {
  const t = useTranslations('admin');
  const router = useRouter();
  const profile = getAdminProfile();

  function logout() {
    clearAdminSession();
    router.replace('/admin/login');
  }

  return (
    <div className="flex min-h-[calc(100vh-8rem)] flex-col gap-6 md:flex-row">
      <aside className="shrink-0 rounded-xl border border-archive-border bg-white p-4 md:w-52">
        <p className="mb-3 truncate text-xs font-medium text-archive-muted">
          {profile?.email}
        </p>
        <nav className="flex flex-col gap-2 text-sm">
          <Link
            href="/admin/articles/new?category=News"
            className="rounded-md px-2 py-1.5 text-archive-fg hover:bg-archive-bg"
          >
            {t('navNews')}
          </Link>
          <Link
            href="/admin/breaking-news"
            className="rounded-md px-2 py-1.5 text-archive-fg hover:bg-archive-bg"
          >
            {t('navBreakingNews')}
          </Link>
          <Link
            href="/admin/videos"
            className="rounded-md px-2 py-1.5 text-archive-fg hover:bg-archive-bg"
          >
            {t('navVideos')}
          </Link>
          <Link
            href="/admin/media-items"
            className="rounded-md px-2 py-1.5 text-archive-fg hover:bg-archive-bg"
          >
            {t('navMediaUrls')}
          </Link>
          <Link
            href="/admin/timeline"
            className="rounded-md px-2 py-1.5 text-archive-fg hover:bg-archive-bg"
          >
            {t('navTimeline')}
          </Link>
          <Link
            href="/admin/articles"
            className="rounded-md px-2 py-1.5 text-archive-fg hover:bg-archive-bg"
          >
            {t('navArticles')}
          </Link>
          <Link
            href="/admin/sources"
            className="rounded-md px-2 py-1.5 text-archive-fg hover:bg-archive-bg"
          >
            {t('navSources')}
          </Link>
          <button
            type="button"
            onClick={logout}
            className="mt-2 rounded-md border border-archive-border px-2 py-1.5 text-left text-archive-muted hover:border-archive-accent hover:text-archive-accent"
          >
            {t('logout')}
          </button>
        </nav>
      </aside>
      <main className="min-w-0 flex-1">{children}</main>
    </div>
  );
}
```

### `apps/web/src/components/admin/ArticleForm.tsx`

```tsx
'use client';

import { useTranslations } from 'next-intl';
import { Link, useRouter } from '@/i18n/navigation';
import { useCallback, useEffect, useState } from 'react';
import { adminFetch, readApiError } from '@/lib/admin-api';

type SourceOpt = { id: string; name: string };

type Trans = {
  locale: 'bn' | 'en';
  title: string;
  description: string;
  bodyMd: string;
  seoTitle: string;
  seoDescription: string;
};

function emptyTrans(locale: 'bn' | 'en'): Trans {
  return {
    locale,
    title: '',
    description: '',
    bodyMd: '',
    seoTitle: '',
    seoDescription: '',
  };
}

type Props = {
  mode: 'create' | 'edit';
  editSlug?: string;
  /** Prefill category on create (e.g. `News` from /admin/articles/new?category=News) */
  defaultCategory?: string;
};

export default function ArticleForm({
  mode,
  editSlug,
  defaultCategory,
}: Props) {
  const t = useTranslations('admin');
  const router = useRouter();
  const [sources, setSources] = useState<SourceOpt[]>([]);
  const [slug, setSlug] = useState('');
  const [sourceId, setSourceId] = useState('');
  const [category, setCategory] = useState(defaultCategory ?? '');
  const [tagsInput, setTagsInput] = useState('');
  const [coverUrl, setCoverUrl] = useState('');
  const [publishedAt, setPublishedAt] = useState('');
  const [reviewStatus, setReviewStatus] = useState<'DRAFT' | 'PUBLISHED'>(
    'PUBLISHED',
  );
  const [translations, setTranslations] = useState<Trans[]>([
    emptyTrans('bn'),
    emptyTrans('en'),
  ]);
  const [loading, setLoading] = useState(mode === 'edit');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const setTrans = useCallback(
    (locale: 'bn' | 'en', field: keyof Trans, value: string) => {
      setTranslations((prev) =>
        prev.map((row) =>
          row.locale === locale ? { ...row, [field]: value } : row,
        ),
      );
    },
    [],
  );

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const res = await adminFetch('admin/sources');
      if (!res.ok || cancelled) return;
      const data = (await res.json()) as {
        id: string;
        name: string;
      }[];
      if (!cancelled) setSources(data);
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (mode !== 'edit' || !editSlug) return;
    let cancelled = false;
    (async () => {
      setLoading(true);
      const res = await adminFetch(
        `admin/articles/${encodeURIComponent(editSlug)}`,
      );
      if (cancelled) return;
      if (!res.ok) {
        setError(await readApiError(res));
        setLoading(false);
        return;
      }
      const a = (await res.json()) as {
        slug: string;
        sourceId: string;
        category: string | null;
        tags: string[];
        coverUrl: string | null;
        publishedAt: string | null;
        reviewStatus: string;
        translations: {
          locale: string;
          title: string;
          description: string | null;
          bodyMd: string;
          seoTitle: string | null;
          seoDescription: string | null;
        }[];
      };
      setSlug(a.slug);
      setSourceId(a.sourceId);
      setCategory(a.category ?? '');
      setTagsInput(a.tags?.length ? a.tags.join(', ') : '');
      setCoverUrl(a.coverUrl ?? '');
      setPublishedAt(
        a.publishedAt ? a.publishedAt.slice(0, 16) : '',
      );
      setReviewStatus(
        a.reviewStatus === 'DRAFT' ? 'DRAFT' : 'PUBLISHED',
      );
      const bn =
        a.translations.find((x) => x.locale === 'bn') ??
        ({
          locale: 'bn',
          title: '',
          description: '',
          bodyMd: '',
          seoTitle: '',
          seoDescription: '',
        } as const);
      const en =
        a.translations.find((x) => x.locale === 'en') ??
        ({
          locale: 'en',
          title: '',
          description: '',
          bodyMd: '',
          seoTitle: '',
          seoDescription: '',
        } as const);
      setTranslations([
        {
          locale: 'bn',
          title: bn.title,
          description: bn.description ?? '',
          bodyMd: bn.bodyMd,
          seoTitle: bn.seoTitle ?? '',
          seoDescription: bn.seoDescription ?? '',
        },
        {
          locale: 'en',
          title: en.title,
          description: en.description ?? '',
          bodyMd: en.bodyMd,
          seoTitle: en.seoTitle ?? '',
          seoDescription: en.seoDescription ?? '',
        },
      ]);
      setLoading(false);
    })();
    return () => {
      cancelled = true;
    };
  }, [mode, editSlug]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError(null);
    const translationsPayload = translations.map((tr) => ({
      locale: tr.locale,
      title: tr.title,
      description: tr.description || undefined,
      bodyMd: tr.bodyMd,
      seoTitle: tr.seoTitle || undefined,
      seoDescription: tr.seoDescription || undefined,
    }));
    const tags = tagsInput
      .split(',')
      .map((x) => x.trim())
      .filter(Boolean);
    let res: Response;
    if (mode === 'create') {
      res = await adminFetch('admin/articles', {
        method: 'POST',
        body: JSON.stringify({
          slug,
          sourceId,
          category: category || undefined,
          coverUrl: coverUrl || undefined,
          publishedAt: publishedAt
            ? new Date(publishedAt).toISOString()
            : undefined,
          reviewStatus,
          translations: translationsPayload,
          tags,
        }),
      });
    } else {
      res = await adminFetch(
        `admin/articles/${encodeURIComponent(editSlug!)}`,
        {
          method: 'PATCH',
          body: JSON.stringify({
            sourceId,
            category: category ? category : null,
            coverUrl: coverUrl ? coverUrl : null,
            publishedAt: publishedAt
              ? new Date(publishedAt).toISOString()
              : null,
            reviewStatus,
            translations: translationsPayload,
            tags,
          }),
        },
      );
    }
    setSaving(false);
    if (!res.ok) {
      setError(await readApiError(res));
      return;
    }
    router.push('/admin/articles');
  }

  if (loading) {
    return <p className="text-sm text-archive-muted">{t('loading')}</p>;
  }

  const row = (loc: 'bn' | 'en', labels: { title: string; desc: string; body: string; st: string; sd: string }) => {
    const tr = translations.find((x) => x.locale === loc)!;
    return (
      <fieldset
        key={loc}
        className="space-y-3 rounded-lg border border-archive-border bg-archive-bg p-4"
      >
        <legend className="px-1 text-sm font-semibold uppercase tracking-wide text-archive-muted">
          {loc}
        </legend>
        <label className="block text-sm">
          <span className="text-archive-muted">{labels.title}</span>
          <input
            className="mt-1 w-full rounded-md border border-archive-border bg-white px-3 py-2"
            value={tr.title}
            onChange={(e) => setTrans(loc, 'title', e.target.value)}
            required
          />
        </label>
        <label className="block text-sm">
          <span className="text-archive-muted">{labels.desc}</span>
          <input
            className="mt-1 w-full rounded-md border border-archive-border bg-white px-3 py-2"
            value={tr.description}
            onChange={(e) => setTrans(loc, 'description', e.target.value)}
          />
        </label>
        <label className="block text-sm">
          <span className="text-archive-muted">{labels.body}</span>
          <textarea
            className="mt-1 min-h-[160px] w-full rounded-md border border-archive-border bg-white px-3 py-2 font-mono text-sm"
            value={tr.bodyMd}
            onChange={(e) => setTrans(loc, 'bodyMd', e.target.value)}
            required
          />
        </label>
        <label className="block text-sm">
          <span className="text-archive-muted">{labels.st}</span>
          <input
            className="mt-1 w-full rounded-md border border-archive-border bg-white px-3 py-2"
            value={tr.seoTitle}
            onChange={(e) => setTrans(loc, 'seoTitle', e.target.value)}
          />
        </label>
        <label className="block text-sm">
          <span className="text-archive-muted">{labels.sd}</span>
          <input
            className="mt-1 w-full rounded-md border border-archive-border bg-white px-3 py-2"
            value={tr.seoDescription}
            onChange={(e) => setTrans(loc, 'seoDescription', e.target.value)}
          />
        </label>
      </fieldset>
    );
  };

  return (
    <form onSubmit={onSubmit} className="max-w-3xl space-y-6">
      {error && (
        <p className="rounded-md border border-archive-border bg-white px-3 py-2 text-sm text-red-700">
          {error}
        </p>
      )}
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm sm:col-span-2">
          <span className="text-archive-muted">{t('slug')}</span>
          <input
            className="mt-1 w-full rounded-md border border-archive-border bg-white px-3 py-2"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            required
            disabled={mode === 'edit'}
          />
        </label>
        <label className="block text-sm sm:col-span-2">
          <span className="text-archive-muted">{t('source')}</span>
          <select
            className="mt-1 w-full rounded-md border border-archive-border bg-white px-3 py-2"
            value={sourceId}
            onChange={(e) => setSourceId(e.target.value)}
            required
          >
            <option value="">—</option>
            {sources.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm">
          <span className="text-archive-muted">{t('category')}</span>
          <input
            className="mt-1 w-full rounded-md border border-archive-border bg-white px-3 py-2"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </label>
        <label className="block text-sm">
          <span className="text-archive-muted">{t('status')}</span>
          <select
            className="mt-1 w-full rounded-md border border-archive-border bg-white px-3 py-2"
            value={reviewStatus}
            onChange={(e) =>
              setReviewStatus(e.target.value as 'DRAFT' | 'PUBLISHED')
            }
          >
            <option value="PUBLISHED">{t('published')}</option>
            <option value="DRAFT">{t('draft')}</option>
          </select>
        </label>
        <label className="block text-sm">
          <span className="text-archive-muted">{t('publishedAt')}</span>
          <input
            type="datetime-local"
            className="mt-1 w-full rounded-md border border-archive-border bg-white px-3 py-2"
            value={publishedAt}
            onChange={(e) => setPublishedAt(e.target.value)}
          />
        </label>
        <label className="block text-sm sm:col-span-2">
          <span className="text-archive-muted">{t('videoTagsField')}</span>
          <input
            className="mt-1 w-full rounded-md border border-archive-border bg-white px-3 py-2"
            value={tagsInput}
            onChange={(e) => setTagsInput(e.target.value)}
            placeholder={t('videoTagsHint')}
          />
        </label>
        <label className="block text-sm sm:col-span-2">
          <span className="text-archive-muted">{t('coverUrl')}</span>
          <input
            className="mt-1 w-full rounded-md border border-archive-border bg-white px-3 py-2"
            value={coverUrl}
            onChange={(e) => setCoverUrl(e.target.value)}
          />
        </label>
      </div>
      {row('bn', {
        title: t('titleBn'),
        desc: t('descBn'),
        body: t('bodyBn'),
        st: t('seoTitleBn'),
        sd: t('seoDescBn'),
      })}
      {row('en', {
        title: t('titleEn'),
        desc: t('descEn'),
        body: t('bodyEn'),
        st: t('seoTitleEn'),
        sd: t('seoDescEn'),
      })}
      <div className="flex flex-wrap gap-3">
        <button
          type="submit"
          disabled={saving}
          className="rounded-md bg-archive-accent px-4 py-2 text-sm font-medium text-white disabled:opacity-50"
        >
          {saving ? t('saving') : t('save')}
        </button>
        <Link
          href="/admin/articles"
          className="rounded-md border border-archive-border px-4 py-2 text-sm text-archive-muted hover:border-archive-accent"
        >
          {t('cancel')}
        </Link>
      </div>
    </form>
  );
}
```

### `apps/web/src/i18n/navigation.ts`

```typescript
import { createNavigation } from 'next-intl/navigation';
import { routing } from './routing';

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
```

### `apps/web/src/i18n/request.ts`

```typescript
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !(routing.locales as readonly string[]).includes(locale)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
```

### `apps/web/src/i18n/routing.ts`

```typescript
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['bn', 'en'],
  defaultLocale: 'bn',
  localePrefix: 'always',
});
```

### `apps/web/src/lib/admin-api.ts`

```typescript
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
```

### `apps/web/src/lib/api.ts`

```typescript
export type ArticleListResponse = {
  data: ArticleView[];
  meta: { page: number; pageSize: number; total: number };
};

export type ArticleView = {
  id: string;
  slug: string;
  publishedAt: string | null;
  coverUrl: string | null;
  category: string | null;
  tags: string[];
  title: string;
  description: string | null;
  bodyMd?: string;
  seoTitle?: string | null;
  seoDescription?: string | null;
  locale: string;
  source: {
    name: string;
    url: string | null;
  };
};

const baseUrl =
  process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001/api/v1';

async function safeFetch<T>(
  url: string,
  init?: RequestInit,
): Promise<T | null> {
  try {
    const res = await fetch(url, {
      ...init,
      next: { revalidate: 120 },
      headers: { Accept: 'application/json', ...(init?.headers ?? {}) },
    });

    if (!res.ok) {
      return null;
    }

    return (await res.json()) as T;
  } catch {
    return null;
  }
}

export function getArticles(
  locale: string,
  opts?: { q?: string; category?: string; tag?: string; pageSize?: number },
): Promise<ArticleListResponse | null> {
  const pageSize = Math.min(Math.max(opts?.pageSize ?? 24, 1), 48);
  const params = new URLSearchParams({
    locale,
    page: '1',
    pageSize: String(pageSize),
  });
  if (opts?.q?.trim()) {
    params.set('q', opts.q.trim());
  }
  if (opts?.category?.trim()) {
    params.set('category', opts.category.trim());
  }
  if (opts?.tag?.trim()) {
    params.set('tag', opts.tag.trim());
  }
  const url = `${baseUrl}/articles?${params.toString()}`;
  return safeFetch<ArticleListResponse>(url);
}

export function getArticle(
  slug: string,
  locale: string,
): Promise<ArticleView | null> {
  const params = new URLSearchParams({ locale });
  const url = `${baseUrl}/articles/${encodeURIComponent(slug)}?${params.toString()}`;
  return safeFetch<ArticleView>(url);
}

export type ExternalVideoView = {
  id: string;
  platform: 'YOUTUBE' | 'FACEBOOK';
  watchUrl: string;
  publishedAt: string | null;
  title: string;
  description: string | null;
  locale: string;
  source: { name: string; url: string | null } | null;
  tags: string[];
};

export type MediaItemView = {
  id: string;
  mediaUrl: string;
  publishedAt: string | null;
  title: string;
  caption: string | null;
  locale: string;
  tags: string[];
};

export type TimelineEventView = {
  id: string;
  eventAt: string;
  title: string;
  bodyMd: string;
  locale: string;
};

export function getVideos(
  locale: string,
  opts?: { tag?: string },
): Promise<ExternalVideoView[] | null> {
  const params = new URLSearchParams({ locale });
  if (opts?.tag?.trim()) {
    params.set('tag', opts.tag.trim());
  }
  return safeFetch<ExternalVideoView[]>(
    `${baseUrl}/videos?${params.toString()}`,
  );
}

export function getMediaItems(
  locale: string,
  opts?: { tag?: string },
): Promise<MediaItemView[] | null> {
  const params = new URLSearchParams({ locale });
  if (opts?.tag?.trim()) {
    params.set('tag', opts.tag.trim());
  }
  return safeFetch<MediaItemView[]>(
    `${baseUrl}/media-items?${params.toString()}`,
  );
}

export function getTimelineEvents(
  locale: string,
): Promise<TimelineEventView[] | null> {
  const params = new URLSearchParams({ locale });
  return safeFetch<TimelineEventView[]>(
    `${baseUrl}/timeline-events?${params.toString()}`,
  );
}

export type BreakingNewsTickerItem = {
  id: string;
  title: string;
  href: string | null;
};

export function getBreakingNews(
  locale: string,
): Promise<BreakingNewsTickerItem[] | null> {
  const params = new URLSearchParams({ locale });
  return safeFetch<BreakingNewsTickerItem[]>(
    `${baseUrl}/breaking-news?${params.toString()}`,
  );
}
```

### `apps/web/src/lib/embeds.ts`

```typescript
/** Build iframe `src` for YouTube watch / youtu.be URLs. */
export function youtubeEmbedSrc(watchUrl: string): string | null {
  const m = watchUrl.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/,
  );
  return m ? `https://www.youtube.com/embed/${m[1]}` : null;
}

/** Facebook video plugin URL from a watch / share link. */
export function facebookEmbedSrc(watchUrl: string): string | null {
  if (!watchUrl.includes('facebook.com')) return null;
  return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(watchUrl)}&show_text=false&width=560`;
}

export function videoEmbedSrc(
  platform: 'YOUTUBE' | 'FACEBOOK',
  watchUrl: string,
): string | null {
  if (platform === 'YOUTUBE') return youtubeEmbedSrc(watchUrl);
  return facebookEmbedSrc(watchUrl);
}
```

### `apps/web/src/lib/format-date.ts`

```typescript
export function formatPublishDate(dateIso: string | null | undefined, locale: string) {
  if (!dateIso) return '—';

  try {
    return new Intl.DateTimeFormat(locale === 'bn' ? 'bn-BD' : 'en-GB', {
      dateStyle: 'medium',
      timeZone: 'Asia/Dhaka',
    }).format(new Date(dateIso));
  } catch {
    return dateIso;
  }
}
```

### `apps/web/src/lib/slug-heading.ts`

```typescript
/** Shared heading anchors for TOC + Markdown (Unicode-safe). */
export function slugifyHeading(text: string): string {
  let s = text
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\p{L}\p{N}-]/gu, '');

  if (!s) s = 'section';
  return s;
}
```

### `packages/shared/package.json`

```json
{
  "name": "@jan-drishthi/shared",
  "version": "0.0.1",
  "private": true,
  "main": "./src/index.ts",
  "types": "./src/index.ts"
}
```

### `packages/shared/src/index.ts`

```typescript
export const LOCALES = ["bn", "en"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "bn";
```

