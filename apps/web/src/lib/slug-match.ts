/** Encoding-safe slug comparison for canonical redirects (mirrors API slug.util). */
export function decodeSlugSegment(segment: string): string {
  let current = segment;
  for (let i = 0; i < 2; i += 1) {
    try {
      const decoded = decodeURIComponent(current);
      if (decoded === current) break;
      current = decoded;
    } catch {
      break;
    }
  }
  return current;
}

export function normalizeSlugKey(slug: string): string {
  return decodeSlugSegment(slug).normalize('NFC').toLowerCase().replace(/-+/g, '-');
}

export function slugKeysMatch(a: string, b: string): boolean {
  const left = normalizeSlugKey(a);
  const right = normalizeSlugKey(b);
  if (left === right) return true;
  const shorter = left.length <= right.length ? left : right;
  const longer = left.length <= right.length ? right : left;
  return shorter.length >= 24 && longer.startsWith(`${shorter}-`);
}
