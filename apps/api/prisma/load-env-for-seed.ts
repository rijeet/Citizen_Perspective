import { configDotenv } from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';

/**
 * Load `.env` for Prisma seed scripts. Prefer `configDotenv` so a global
 * `DOTENV_KEY` does not skip plain `.env`. Stops once `DATABASE_URL` is set.
 */
export function loadEnvForSeed(): void {
  const envCandidates = [
    path.join(process.cwd(), '.env'),
    path.join(process.cwd(), '..', '..', '.env'),
    path.join(__dirname, '..', '.env'),
    path.join(__dirname, '..', '..', '.env'),
  ];
  for (const envPath of envCandidates) {
    if (fs.existsSync(envPath)) {
      configDotenv({ path: envPath, quiet: true });
      if (process.env.DATABASE_URL) break;
    }
  }
}
