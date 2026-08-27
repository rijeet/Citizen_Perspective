import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
import path from 'path';

const monorepoRoot = path.join(__dirname, '../..');

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  // Hoisted deps live at repo root; Turbopack needs this on Windows monorepos.
  turbopack: {
    root: monorepoRoot,
  },
  outputFileTracingRoot: monorepoRoot,
};

export default withNextIntl(nextConfig);
