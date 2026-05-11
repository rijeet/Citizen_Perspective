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
