import { configDotenv } from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';

/**
 * Hydrate `process.env` before Prisma/Nest bootstrap.
 * Build output lives under `dist/src/` so two levels up = `apps/api`.
 */
const apiPkgDir = path.resolve(__dirname, '..', '..');
const repoRootDir = path.resolve(apiPkgDir, '..', '..');

// `configDotenv` avoids dotenv v17 `config()` vault path when `DOTENV_KEY` is set globally.
const paths = [
  path.join(apiPkgDir, '.env'),
  path.join(repoRootDir, '.env'),
  path.resolve(process.cwd(), 'apps', 'api', '.env'),
  path.resolve(process.cwd(), '.env'),
];
for (const envPath of paths) {
  if (fs.existsSync(envPath)) {
    configDotenv({ path: envPath, quiet: true });
  }
}
