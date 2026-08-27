import { ArticleContentType } from '@prisma/client';

export function looksLikeHtml(text: string): boolean {
  const trimmed = text.trim();
  return trimmed.startsWith('<') && /<[a-z][\s\S]*>/i.test(trimmed);
}

export function resolveNewsItemDescriptionContentType(
  descriptionBn?: string | null,
  descriptionEn?: string | null,
  explicit?: 'MARKDOWN' | 'HTML' | null,
): ArticleContentType {
  if (explicit === 'HTML') return 'HTML';
  const bn = descriptionBn?.trim();
  const en = descriptionEn?.trim();
  if ((bn && looksLikeHtml(bn)) || (en && looksLikeHtml(en))) return 'HTML';
  return (explicit ?? 'MARKDOWN') as ArticleContentType;
}
