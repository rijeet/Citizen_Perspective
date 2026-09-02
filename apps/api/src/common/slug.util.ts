const PUNCTUATION = /[\u2013\u2014\u2212:;,.!?'"“”‘’()[\]{}|/\\@#%^&*+=<>~`]/g;
const MAX_SLUG_CHARS = 64;
const MAX_SLUG_WORDS = 10;

/** NFC + punctuation → spaces before slug rules. */
export function normalizeSlugInput(text: string): string {
  return text.normalize('NFC').replace(PUNCTUATION, ' ').trim();
}

/** Compare slugs from URLs or DB (encoding-safe). */
export function normalizeSlugKey(slug: string): string {
  let decoded = slug;
  try {
    decoded = decodeURIComponent(slug);
  } catch {
    // keep raw slug
  }
  return decoded.normalize('NFC').toLowerCase().replace(/-+/g, '-');
}

export function slugKeysMatch(a: string, b: string): boolean {
  const left = normalizeSlugKey(a);
  const right = normalizeSlugKey(b);
  if (left === right) return true;
  // Tolerate legacy long URLs that extend a stored canonical slug.
  const shorter = left.length <= right.length ? left : right;
  const longer = left.length <= right.length ? right : left;
  return shorter.length >= 24 && longer.startsWith(`${shorter}-`);
}

function latinLetterCount(text: string): number {
  return (text.match(/[A-Za-z]/g) ?? []).length;
}

function extractLatinRuns(text: string): string {
  const runs = text.match(/[A-Za-z][A-Za-z0-9\s'’.-]*/g) ?? [];
  return runs.join(' ').trim();
}

function hasBengaliScript(text: string): boolean {
  return /[\u0980-\u09FF]/.test(text);
}

function shortenHeadlineForSlug(text: string): string {
  const words = normalizeSlugInput(text).split(/\s+/).filter(Boolean);
  return words.slice(0, MAX_SLUG_WORDS).join(' ');
}

/**
 * Pick headline text for a news-item URL slug.
 * - English-only headlines → Latin slug
 * - Latin-heavy English field → Latin slug (even if mixed with Bengali)
 * - Otherwise → shortened Bengali headline (not the full sentence)
 */
export function pickNewsSlugSource(headlineEn: string, headlineBn: string): string {
  const en = headlineEn.trim();
  const bn = headlineBn.trim();

  if (en && !hasBengaliScript(en) && latinLetterCount(en) >= 3) {
    return shortenHeadlineForSlug(en);
  }

  if (bn && hasBengaliScript(bn)) return shortenHeadlineForSlug(bn);
  if (en && hasBengaliScript(en)) return shortenHeadlineForSlug(en);

  const latinFromEn = extractLatinRuns(en);
  if (latinFromEn && latinLetterCount(latinFromEn) >= 3) {
    return shortenHeadlineForSlug(latinFromEn);
  }

  return shortenHeadlineForSlug(bn || en || 'update');
}

function trimSlugAtBoundary(s: string, maxLen: number): string {
  if (s.length <= maxLen) return s;
  const cut = s.slice(0, maxLen);
  const lastHyphen = cut.lastIndexOf('-');
  if (lastHyphen >= 20) return cut.slice(0, lastHyphen);
  return cut.replace(/-+$/g, '');
}

/** URL slug from headline text (Unicode-safe; keeps Bengali combining marks). */
export function slugifyText(text: string, maxLen = MAX_SLUG_CHARS): string {
  let s = normalizeSlugInput(text)
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\p{L}\p{M}\p{N}-]/gu, '')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');

  if (!s) s = 'update';
  return trimSlugAtBoundary(s, maxLen);
}

export function buildNewsItemSlug(headlineEn: string, headlineBn: string): string {
  return slugifyText(pickNewsSlugSource(headlineEn, headlineBn));
}

export async function uniqueNewsItemSlug(
  findExisting: (slug: string) => Promise<boolean>,
  headlineEn: string,
  headlineBn: string,
): Promise<string> {
  const base = buildNewsItemSlug(headlineEn, headlineBn);
  let slug = base;
  let n = 0;
  while (await findExisting(slug)) {
    n += 1;
    slug = `${base}-${n}`;
  }
  return slug;
}
