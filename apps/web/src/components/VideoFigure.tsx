import { videoEmbedSrc } from '@/lib/embeds';
import { Link } from '@/i18n/navigation';

type Props = {
  platform: 'YOUTUBE' | 'FACEBOOK';
  watchUrl: string;
  title: string;
  description: string | null;
  source: { name: string; url: string | null } | null;
  tags: string[];
  labels: { source: string; tags: string; empty: string };
};

export default function VideoFigure({
  platform,
  watchUrl,
  title,
  description,
  source,
  tags,
  labels,
}: Props) {
  const src = videoEmbedSrc(platform, watchUrl);
  return (
    <figure className="space-y-3 rounded-xl border border-archive-border bg-white p-4">
      {src ? (
        <div className="aspect-video w-full max-w-3xl overflow-hidden rounded-lg bg-black">
          <iframe
            src={src}
            title={title}
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      ) : (
        <p className="text-sm text-archive-muted">
          <a
            href={watchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-archive-accent underline"
          >
            {watchUrl}
          </a>
        </p>
      )}
      <figcaption className="space-y-2">
        <p className="font-medium text-archive-fg">{title}</p>
        {description ? (
          <p className="text-sm text-archive-muted">{description}</p>
        ) : null}
        <dl className="grid gap-2 text-sm sm:grid-cols-[auto_1fr] sm:gap-x-3 sm:gap-y-1">
          <dt className="text-archive-muted">{labels.source}</dt>
          <dd className="text-archive-fg">
            {source ? (
              source.url ? (
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-archive-accent underline"
                >
                  {source.name}
                </a>
              ) : (
                source.name
              )
            ) : (
              <span className="text-archive-muted">{labels.empty}</span>
            )}
          </dd>
          <dt className="text-archive-muted">{labels.tags}</dt>
          <dd>
            {tags.length > 0 ? (
              <ul className="flex flex-wrap gap-1.5">
                {tags.map((tag) => (
                  <li key={tag}>
                    <Link
                      href={`/tags/${encodeURIComponent(tag)}`}
                      className="inline-block rounded-full bg-archive-bg px-2.5 py-0.5 text-xs text-archive-fg ring-1 ring-archive-border transition-colors hover:bg-white hover:ring-archive-accent"
                    >
                      {tag}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <span className="text-archive-muted">{labels.empty}</span>
            )}
          </dd>
        </dl>
        <p className="text-xs uppercase tracking-wide text-archive-muted">
          {platform === 'YOUTUBE' ? 'YouTube' : 'Facebook'}
        </p>
      </figcaption>
    </figure>
  );
}
