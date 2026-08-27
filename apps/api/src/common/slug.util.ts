/** URL slug from headline text (Unicode-safe, same rules as web slug-heading). */
export function slugifyText(text: string): string {
  let s = text
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\p{L}\p{N}-]/gu, '');

  if (!s) s = 'update';
  if (s.length > 80) s = s.slice(0, 80).replace(/-+$/, '');
  return s;
}

export async function uniqueNewsItemSlug(
  findExisting: (slug: string) => Promise<boolean>,
  baseText: string,
): Promise<string> {
  const base = slugifyText(baseText);
  let slug = base;
  let n = 0;
  while (await findExisting(slug)) {
    n += 1;
    slug = `${base}-${n}`;
  }
  return slug;
}
