export function looksLikeHtml(text: string): boolean {
  const trimmed = text.trim();
  return trimmed.startsWith('<') && /<[a-z][\s\S]*>/i.test(trimmed);
}

export function resolveDescriptionContentType(
  description: string,
  contentType: 'MARKDOWN' | 'HTML',
): 'MARKDOWN' | 'HTML' {
  if (contentType === 'HTML') return 'HTML';
  if (looksLikeHtml(description)) return 'HTML';
  return 'MARKDOWN';
}
