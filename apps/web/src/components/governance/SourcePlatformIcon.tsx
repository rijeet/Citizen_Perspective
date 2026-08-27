type Props = {
  sourceType: 'YOUTUBE' | 'ARTICLE' | 'FACEBOOK';
  className?: string;
};

export default function SourcePlatformIcon({ sourceType, className = '' }: Props) {
  const label =
    sourceType === 'YOUTUBE'
      ? 'YouTube'
      : sourceType === 'FACEBOOK'
        ? 'Facebook'
        : 'Article';

  return (
    <span
      className={`inline-flex items-center rounded-full border border-archive-border bg-archive-bg px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-archive-muted ${className}`}
      title={label}
    >
      {sourceType === 'YOUTUBE' ? 'YT' : sourceType === 'FACEBOOK' ? 'FB' : 'NEWS'}
    </span>
  );
}
