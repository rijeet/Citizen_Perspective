import MarkdownBody from '@/components/MarkdownBody';
import GovernanceHtmlBody from './GovernanceHtmlBody';
import { resolveDescriptionContentType } from './resolve-description-content-type';

type Props = {
  description: string;
  contentType: 'MARKDOWN' | 'HTML';
};

export default function NewsItemDescription({ description, contentType }: Props) {
  const resolved = resolveDescriptionContentType(description, contentType);

  if (resolved === 'HTML') {
    return <GovernanceHtmlBody html={description} />;
  }
  return <MarkdownBody markdown={description} />;
}
