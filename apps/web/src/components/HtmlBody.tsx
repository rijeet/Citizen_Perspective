type Props = {
  html: string;
  className?: string;
};

export default function HtmlBody({ html, className = '' }: Props) {
  return (
    <div
      className={`prose prose-neutral max-w-none ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
