import type { FeaturedBannerView } from '@/lib/api';

type Props = {
  banners: FeaturedBannerView[];
};

export default function FeaturedBannerStrip({ banners }: Props) {
  if (!banners.length) return null;

  return (
    <section aria-label="Featured" className="space-y-3">
      <div className="flex gap-4 overflow-x-auto pb-2">
        {banners.map((banner) => (
          <figure
            key={banner.id}
            className="relative min-w-[280px] max-w-sm shrink-0 overflow-hidden rounded-xl border border-archive-border bg-white"
          >
            <div className="aspect-[16/9] bg-archive-bg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={banner.imageUrl}
                alt=""
                className="size-full object-cover"
              />
            </div>
            <figcaption className="space-y-1 p-3">
              <span className="text-[10px] font-semibold uppercase tracking-wide text-archive-accent">
                {banner.sectionType}
              </span>
              <p className="text-sm font-medium text-archive-fg">{banner.caption}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
