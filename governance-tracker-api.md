# জবাবদিহিতা ট্র্যাকার API — external sites (e.g. bdvote2026.vercel.app)

Public read-only JSON API for the **Accountability Tracker**. No auth required.

Use from [Bangladesh Election Insights](https://bdvote2026.vercel.app/) or any site that needs incident feeds, categories, and banners.

---

## 1. Deploy / base URL

Your BDCP API must be reachable on the internet (e.g. Vercel, Railway, or a VPS).

| Environment | Example base URL |
|-------------|------------------|
| Local | `http://localhost:3001/api/v1` |
| Production | `https://your-bdcp-api.example.com/api/v1` |

On **bdvote2026** (Vercel), set:

```env
NEXT_PUBLIC_ACCOUNTABILITY_API_URL=https://your-bdcp-api.example.com/api/v1
NEXT_PUBLIC_ACCOUNTABILITY_SITE_URL=https://your-bdcp-web.example.com
```

`ACCOUNTABILITY_SITE_URL` is the Citizen Perspective **web** app (for “read more” links to incidents and updates).

---

## 2. CORS (required)

The API only allows browser `fetch` from origins listed in **`CORS_ORIGIN`** (comma-separated).

Add your election site:

```env
CORS_ORIGIN=http://localhost:3000,https://bdvote2026.vercel.app,https://your-bdcp-web.vercel.app
```

Redeploy/restart the API after changing env.

Server-side fetches (Next.js Server Components, `getServerSideProps`) do **not** need CORS.

---

## 3. Quick bundle — one request

Best for a homepage widget on bdvote2026.

```http
GET /governance/tracker?locale=bn&incidentLimit=12
```

| Query | Default | Description |
|-------|---------|-------------|
| `locale` | `bn` | `bn` or `en` |
| `category` | — | Filter incidents by category slug |
| `q` | — | Search title / stage / headlines |
| `incidentLimit` | `12` | Max incidents returned (1–50) |

**Example**

```bash
curl "https://your-api.example.com/api/v1/governance/tracker?locale=bn&incidentLimit=6"
```

**Response shape**

```json
{
  "locale": "bn",
  "categories": [
    { "id": "...", "slug": "homicide", "name": "হত্যাকাণ্ড", "incidentCount": 2, "subcategories": [] }
  ],
  "incidents": [
    {
      "id": "...",
      "slug": "custodial-death-case",
      "title": "...",
      "category": { "slug": "homicide", "name": "..." },
      "currentStage": "Arrest Made",
      "latestNewsItem": {
        "slug": "nazrul-was-a-source-of-strength-in-every-major-movement-rizvi",
        "headline": "...",
        "thumbnailUrl": "...",
        "description": "...",
        "descriptionContentType": "HTML"
      },
      "updatedAt": "2026-08-27T..."
    }
  ],
  "featuredBanners": [
    { "id": "...", "imageUrl": "...", "caption": "...", "sectionType": "Breaking" }
  ]
}
```

---

## 4. Individual endpoints

All support `?locale=bn` or `?locale=en`.

| Purpose | Method | Path |
|---------|--------|------|
| Categories + counts | `GET` | `/categories` |
| Incident list | `GET` | `/incidents?category={slug}&q={search}` |
| Incident + news timeline | `GET` | `/incidents/{incidentSlug}` |
| Single news update | `GET` | `/incidents/{incidentSlug}/updates/{newsSlug}` |
| Gov investigations list | `GET` | `/gov-investigations` |
| Gov investigation detail | `GET` | `/gov-investigations/{id}` |
| Featured banners | `GET` | `/featured-banners` |
| Health check | `GET` | `/health` (no `/api/v1` prefix) |

OpenAPI: `{API_BASE}/../api/docs` (Swagger on the API host).

---

## 5. Linking back to Citizen Perspective

If your BDCP **web** app is at `https://citizen-perspective.vercel.app`:

| Content | URL pattern |
|---------|-------------|
| Incident thread | `/bn/incidents/{incidentSlug}` |
| News update (full article) | `/bn/incidents/{incidentSlug}/updates/{newsSlug}` |
| All incidents | `/bn/incidents` |
| Investigations | `/bn/investigations` |

Example update link:

```text
https://citizen-perspective.vercel.app/bn/incidents/sample-case/updates/nazrul-was-a-source-of-strength-in-every-major-movement-rizvi
```

---

## 6. Next.js example (bdvote2026)

**Server Component**

```tsx
const API = process.env.NEXT_PUBLIC_ACCOUNTABILITY_API_URL!;
const SITE = process.env.NEXT_PUBLIC_ACCOUNTABILITY_SITE_URL!;

export async function AccountabilityFeed() {
  const res = await fetch(`${API}/governance/tracker?locale=bn&incidentLimit=6`, {
    next: { revalidate: 120 },
  });
  if (!res.ok) return <p>Tracker unavailable</p>;
  const data = await res.json();

  return (
    <ul>
      {data.incidents.map((inc: { slug: string; title: string; latestNewsItem?: { slug: string; headline: string } }) => (
        <li key={inc.slug}>
          <a
            href={
              inc.latestNewsItem
                ? `${SITE}/bn/incidents/${inc.slug}/updates/${inc.latestNewsItem.slug}`
                : `${SITE}/bn/incidents/${inc.slug}`
            }
          >
            {inc.latestNewsItem?.headline ?? inc.title}
          </a>
        </li>
      ))}
    </ul>
  );
}
```

**Client `fetch`** (browser must have CORS origin allowed):

```ts
const res = await fetch(
  `${process.env.NEXT_PUBLIC_ACCOUNTABILITY_API_URL}/governance/tracker?locale=bn`,
);
const data = await res.json();
```

---

## 7. Rate limit

Public API: **120 requests / minute** per IP (Nest throttler). Use server-side fetch + caching (`revalidate`) on bdvote to stay within limits.

---

## 8. Checklist

1. BDCP API deployed with `DATABASE_URL` and content published in admin.
2. `CORS_ORIGIN` includes `https://bdvote2026.vercel.app`.
3. bdvote env: `NEXT_PUBLIC_ACCOUNTABILITY_API_URL` + optional `NEXT_PUBLIC_ACCOUNTABILITY_SITE_URL`.
4. Test: `curl {API}/governance/tracker?locale=bn` and open bdvote in browser (no CORS errors).
