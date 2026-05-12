import { getTranslations } from 'next-intl/server';
import { getVideos } from '@/lib/api';
import VideoFigure from '@/components/VideoFigure';

type Props = { params: Promise<{ locale: string }> };

export default async function MediaPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations('placeholders');
  const videos = (await getVideos(locale)) ?? [];

  return (
    <div className="mx-auto max-w-4xl space-y-12">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">
          {t('mediaTitle')}
        </h1>
        <p className="text-archive-muted">{t('mediaIntro')}</p>
      </header>

      <section aria-labelledby="videos-heading" className="space-y-4">
        <h2
          id="videos-heading"
          className="text-lg font-semibold text-archive-fg"
        >
          {t('mediaVideosHeading')}
        </h2>
        {videos.length === 0 ? (
          <p className="text-sm text-archive-muted">{t('mediaVideosEmpty')}</p>
        ) : (
          <div className="flex flex-col gap-8">
            {videos.map((v) => (
              <VideoFigure
                key={v.id}
                platform={v.platform}
                watchUrl={v.watchUrl}
                title={v.title}
                description={v.description}
                source={v.source}
                tags={v.tags}
                labels={{
                  source: t('videoSource'),
                  tags: t('videoTags'),
                  empty: t('videoValueEmpty'),
                }}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
