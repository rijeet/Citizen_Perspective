/** Build iframe `src` for YouTube watch / youtu.be URLs. */
export function youtubeEmbedSrc(watchUrl: string): string | null {
  const m = watchUrl.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/,
  );
  return m ? `https://www.youtube.com/embed/${m[1]}` : null;
}

/** Facebook video plugin URL from a watch / share link. */
export function facebookEmbedSrc(watchUrl: string): string | null {
  if (!watchUrl.includes('facebook.com')) return null;
  return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(watchUrl)}&show_text=false&width=560`;
}

export function videoEmbedSrc(
  platform: 'YOUTUBE' | 'FACEBOOK',
  watchUrl: string,
): string | null {
  if (platform === 'YOUTUBE') return youtubeEmbedSrc(watchUrl);
  return facebookEmbedSrc(watchUrl);
}
