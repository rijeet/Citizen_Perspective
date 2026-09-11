/** Newest news first (by publish date, then record time). */
export const newsItemOrderDesc = [
  { publishedAt: 'desc' as const },
  { createdAt: 'desc' as const },
];
