'use client';

import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { slugifyHeading } from '@/lib/slug-heading';

function headingText(children: React.ReactNode): string {
  return React.Children.toArray(children)
    .map((child) =>
      typeof child === 'string' || typeof child === 'number'
        ? String(child)
        : '',
    )
    .join('')
    .trim();
}

type Props = {
  markdown: string;
};

export default function MarkdownBody({ markdown }: Props) {
  return (
    <div className="article-body article-prose">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h2(props) {
            const { children, ...rest } = props;
            const text = headingText(children);
            const id = slugifyHeading(text);
            return (
              <h2 id={id} {...rest}>
                {children}
              </h2>
            );
          },
          h3(props) {
            return <h3 {...props}>{props.children}</h3>;
          },
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
