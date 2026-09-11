import MarkdownBody from '@/components/MarkdownBody';
import GovernanceHtmlBody from '@/components/governance/GovernanceHtmlBody';
import {
  looksLikeHtml,
  resolveDescriptionContentType,
} from '@/components/governance/resolve-description-content-type';

type Props = {
  contentType: 'MARKDOWN' | 'HTML';
  bodyMd?: string | null;
  bodyHtml?: string | null;
  description?: string | null;
};

export function articleHasRenderableBody(
  contentType: 'MARKDOWN' | 'HTML',
  bodyMd?: string | null,
  bodyHtml?: string | null,
  description?: string | null,
): boolean {
  const html = bodyHtml?.trim();
  const md = bodyMd?.trim();
  const desc = description?.trim();
  if (html || md) return true;
  if (desc && (contentType === 'HTML' || looksLikeHtml(desc))) return true;
  return false;
}

function pickArticleText(
  bodyHtml?: string | null,
  bodyMd?: string | null,
  description?: string | null,
): string {
  const html = bodyHtml?.trim();
  const md = bodyMd?.trim();
  const desc = description?.trim();
  if (html) return html;
  if (md) return md;
  if (desc && looksLikeHtml(desc)) return desc;
  return '';
}

export default function ArticleBody({
  contentType,
  bodyMd,
  bodyHtml,
  description,
}: Props) {
  const text = pickArticleText(bodyHtml, bodyMd, description);
  if (!text) return null;

  const resolved = resolveDescriptionContentType(
    text,
    bodyHtml?.trim() ? 'HTML' : contentType,
  );

  if (resolved === 'HTML') {
    return (
      <div className="w-full min-w-0">
        <GovernanceHtmlBody html={text} />
      </div>
    );
  }

  return <MarkdownBody markdown={text} />;
}
