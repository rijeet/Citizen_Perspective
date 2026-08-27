# Admin edit guidelines

How to manage **Citizen Perspective** (জনদৃষ্টি) content through the admin UI. The site is bilingual: **বাংলা (bn)** and **English (en)**. Fill both languages whenever possible.

---

## Login

| Item | Value |
|------|--------|
| Admin URL | `http://localhost:3000/bn/admin/login` (or `/en/admin/login`) |
| Credentials | From root `.env`: `ADMIN_EMAIL` and `ADMIN_PASSWORD` |

After login you land on **Articles**. Use the left sidebar to reach other sections.

**Reset admin password** (from project root):

```bash
npm run db:seed:admin
```

**Clear all content but keep admin** (wipes articles, incidents, categories, etc.):

```bash
npm run db:seed
```

---

## Site sections (public navigation)

The top menu matches the Bengali labels visitors see. Each item is a different **content area** on the site.

| Menu (bn) | English | Public URL | What visitors see | How to edit (admin) |
|-----------|---------|------------|-------------------|---------------------|
| **জনদৃষ্টি** | Citizen Perspective (brand) | `/bn` or `/en` | Site name in the header; links to the **homepage** with both panels below. | Not edited in admin (site title comes from `messages/bn.json` / `en.json` → `brandName`). |
| **আর্কাইভ** | Archive | `/` (homepage) | Full **homepage**: top = **জবাবদিহিতা ট্র্যাকার** (categories, recent incidents); bottom = **মিডিয়া আর্কাইভ** (article grid + timeline preview). | No single “archive” page — edit the parts listed in the rows below. |
| **ঘটনা** | Incidents | `/incidents` | **Accountability Tracker** — list of governance **case threads** (cards with latest headline, stage, category). Filter by category. | **Categories** (`/admin/categories`) then **Incidents** (`/admin/incidents`). Add **news items** inside each incident for timeline updates. |
| **তদন্ত** | Investigations | `/investigations` | **Government investigations** — official probes with fixed stages (committee formed, stalled, etc.) and an update timeline. | **Investigations** (`/admin/investigations`) — create investigation, add updates on its detail page. |
| **প্রবন্ধ** | Articles | `/articles` | **All published articles** in the media archive (any category: News, Report, Interview, etc.). | **Articles** (`/admin/articles`) — create/edit; set **Published** to show publicly. |
| **সংবাদ** | News | `/articles?category=News` | Same article list **filtered to category “News”** only. | **Articles** — set **Category** to `News` (or use sidebar **News** quick link when creating). |
| **ভিডিও** | Videos | `/media` | **Embedded videos** (YouTube / Facebook) with titles and descriptions. | **Videos** (`/admin/videos`). |
| **মিডিয়া** | Media | `/media` | Same as **ভিডিও** today — the media hub page lists video embeds. (Separate **media URL** entries are admin-only list items; see Media items.) | **Videos** for embeds; **Media items** (`/admin/media-items`) for linked URLs with captions (if used on site later). |
| **সময়রেখা** | Timeline | `/timeline` | **Chronological archive events** — dated milestones with short Markdown bodies (media archive timeline, not incident news). | **Timeline** (`/admin/timeline`) — add events with date + bn/en title and body. |

### Two main homepage panels (under **আর্কাইভ**)

1. **জবাবদিহিতা ট্র্যাকার** (Accountability Tracker) — same content as **ঘটনা** / incidents: categories grid, featured banners, recent incident cards.  
   - Admin: **Categories**, **Incidents**, **Featured banners**, news items on each incident.

2. **মিডিয়া আর্কাইভ** (Media Archive) — article cards, filters (সংবাদ / ভিডিও / সময়রেখা), and a **সময়রেখা (প্রিভিউ)** strip.  
   - Admin: **Articles**, **Videos**, **Timeline**, **Breaking news** (top ticker if enabled), **Sources**.

### Incident updates vs archive timeline

| | Incident **news items** | Archive **timeline** |
|--|-------------------------|----------------------|
| Bengali context | Updates inside a **ঘটনা** thread | **সময়রেখা** on homepage / `/timeline` |
| Public URL | `/incidents/{slug}/updates/{news-slug}` | `/timeline` |
| Admin | Incident → **Add news item** | `/admin/timeline` |
| Typical use | Follow a case: reports, arrests, editorials | General dated notes for the media archive |


---

## Recommended setup order

1. **Categories** — topic buckets for the Accountability Tracker (e.g. Homicide, Corruption).
2. **Incidents** — a case/thread under a category (e.g. one custodial-death case).
3. **News items** — timeline updates inside each incident (linked articles, YouTube, Facebook).
4. **Government investigations** — optional parallel track for official probes.
5. **Featured banners** — homepage strip images/captions.
6. **Media archive** (optional) — articles, breaking news, videos, timeline, sources.

---

## Accountability Tracker

### Categories (`/admin/categories`)

- Create **category** with slug (URL-safe, e.g. `homicide`), names in bn/en.
- Add **subcategories** under a category when needed (e.g. `custodial-death` under Homicide).
- Categories appear on the homepage grid and filter the incident list.

### Incidents (`/admin/incidents`)

- **Slug** — permanent URL segment, e.g. `custodial-death-dhaka-2026` → public URL `/bn/incidents/custodial-death-dhaka-2026`.
- **Category** and optional **subcategory**.
- **Title** (bn + en) — thread title on the incident page.
- **Current stage / status** — free text shown on cards (e.g. `Arrest Made`, `Ongoing`).
- **Review status** — use **Published** for public visibility.

### News items (inside an incident)

Open an incident → **Add news item**.

| Field | Notes |
|--------|--------|
| **Source URL** | Paste link, then **Fetch metadata** (or blur the field) to auto-fill headline, thumbnail, description hints. |
| **Source type** | Article, YouTube, or Facebook. |
| **Headlines** (bn + en) | Shown on timeline cards and update page. **English headline sets the SEO URL slug.** |
| **Content type** | **Markdown** for `.md` notes, or **HTML** for styled editorial (tables, cards). Scripts/`onclick` are stripped on the public site. |
| **Description** (bn + en) | Full editorial body on the **update page** (not on the timeline card). |
| **Stage** | Updates incident’s current stage when saved (e.g. `Initial`, `Arrest Made`). |
| **Status** | Optional (e.g. `Ongoing`, `Closed`). |
| **Thumbnail / published date** | Optional; metadata fetch often fills these. |

**Public URLs**

- Incident timeline: `/bn/incidents/{incident-slug}`
- Single update: `/bn/incidents/{incident-slug}/updates/{news-slug}`  
  Example: `…/updates/nazrul-was-a-source-of-strength-in-every-major-movement-rizvi`

Timeline cards show **image + title**; click opens the full update page.

**Regenerate SEO slugs** from headlines (after bulk imports):

```bash
npm run db:backfill-news-slugs
```

---

## Government investigations (`/admin/investigations`)

- Track **official probes** (committee formed, report submitted, stalled, etc.).
- Link to an **incident** when relevant.
- **Stage** uses fixed enums (Incident occurred → Closed).
- **Status**: On track, Delayed, Stalled, Resolved.
- Add **updates** on the investigation detail page (similar to news URLs and headlines).

Public: `/bn/investigations` and `/bn/investigations/{id}`.

---

## Featured banners (`/admin/featured-banners`)

- Image URL + caption (bn/en).
- **Section type** (e.g. `Breaking`) groups banners on the homepage strip.

---

## Media archive (measles / general archive)

These sections power the **Media Archive** panel on the homepage (separate from Accountability Tracker).

### Sources (`/admin/sources`)

- Name + optional URL for attribution on **articles** and **videos**.

### Articles (`/admin/articles`)

- **Slug** — `/bn/articles/{slug}`.
- **Category** tag, cover image, published date, tags.
- **Content type**: Markdown (`bodyMd`) or HTML (`bodyHtml`).
- **Translations** (bn/en): title, description, body, optional SEO title/description.

Quick link **News** pre-fills category `News`.

### Breaking news (`/admin/breaking-news`)

- Short ticker lines (bn/en) + optional link (internal path or external URL).

### Videos (`/admin/videos`)

- YouTube or Facebook **watch URL**, bilingual title/description, optional source.

### Media items (`/admin/media-items`)

- External **media URL** with bilingual title/caption (link list, not embed).

### Timeline (`/admin/timeline`)

- Dated events with bilingual title + Markdown body for the archive timeline page.

---

## Tips

- **Publish** only when ready; drafts stay out of the public API.
- Prefer **stable slugs** — changing incident slugs breaks old links; news slugs can be backfilled from headlines.
- For long HTML editorials, use **HTML** content type and `election-card` / `card-details` classes for expandable blocks (no inline JavaScript).
- **Metadata fetch** works best for news articles and YouTube; Facebook may need manual fields.
- Run **API** (`npm run dev:api`) and **web** (`npm run dev:web`) locally while editing.

---

## Environment (`.env`)

| Variable | Purpose |
|----------|---------|
| `DATABASE_URL` | PostgreSQL (Neon or local) |
| `ADMIN_EMAIL` / `ADMIN_PASSWORD` | Admin login + seed |
| `NEXT_PUBLIC_API_URL` | Web → API (e.g. `http://localhost:3001/api/v1`) |
| `NEXT_PUBLIC_SITE_URL` | Canonical URLs for SEO (production domain) |

---

## Quick command reference

```bash
npm run db:deploy          # apply migrations
npm run db:seed            # wipe all content, keep/upsert admin
npm run db:seed:admin      # upsert admin only (no wipe)
npm run db:backfill-news-slugs  # SEO slugs from English headlines
npm run dev:api            # API :3001
npm run dev:web            # site :3000
```

API docs: `http://localhost:3001/api/docs`
