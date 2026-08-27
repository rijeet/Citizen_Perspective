/** Plain-text snippet for meta description (strips HTML). */
export function metaDescriptionFromHtml(
  text: string | null | undefined,
  maxLen = 160,
): string | undefined {
  if (!text?.trim()) return undefined;
  const plain = text
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, ' ')
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  if (!plain) return undefined;
  if (plain.length <= maxLen) return plain;
  return `${plain.slice(0, maxLen - 1).trim()}…`;
}
