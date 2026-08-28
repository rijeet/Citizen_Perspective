const PUNCTUATION = /[\u2013\u2014\u2212:;,.!?'"“”‘’()[\]{}|/\\@#%^&*+=<>~`]/g;

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

/**
 * Pick headline text for a news-item URL slug.
 * - English-only headlines → Latin slug
 * - Bengali headlines → Unicode Bengali slug (vowel signs preserved)
 * - Mixed EN field (BN + outlet name) → prefer dedicated BN headline when present
 */
export function pickNewsSlugSource(headlineEn: string, headlineBn: string): string {
  const en = headlineEn.trim();
  const bn = headlineBn.trim();

  if (en && !hasBengaliScript(en) && latinLetterCount(en) >= 3) return en;

  if (bn && hasBengaliScript(bn)) return bn;
  if (en && hasBengaliScript(en)) return en;

  const latinFromEn = extractLatinRuns(en);
  if (latinLetterCount(latinFromEn) >= 3) return latinFromEn;

  return bn || en || 'update';
}

/** URL slug from headline text (Unicode-safe; keeps Bengali combining marks). */
export function slugifyText(text: string, maxLen = 72): string {
  let s = normalizeSlugInput(text)
    .toLowerCase()
    .replace(/\s+/g, '-')
    // \p{M} keeps Bengali vowel signs (ে, া, etc.) attached to letters.
    .replace(/[^\p{L}\p{M}\p{N}-]/gu, '')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');

  if (!s) s = 'update';
  if (s.length > maxLen) s = s.slice(0, maxLen).replace(/-+$/g, '');
  return s;
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
