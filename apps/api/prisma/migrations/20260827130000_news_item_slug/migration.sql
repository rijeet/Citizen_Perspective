-- AlterTable
ALTER TABLE "NewsItem" ADD COLUMN "slug" TEXT;

-- Backfill existing rows
UPDATE "NewsItem" SET "slug" = 'update-' || "id" WHERE "slug" IS NULL;

ALTER TABLE "NewsItem" ALTER COLUMN "slug" SET NOT NULL;

CREATE UNIQUE INDEX "NewsItem_slug_key" ON "NewsItem"("slug");
