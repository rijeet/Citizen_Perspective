-- AlterTable
ALTER TABLE "ExternalVideo" ADD COLUMN "sourceId" TEXT,
ADD COLUMN "tags" TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[];

-- CreateIndex
CREATE INDEX "ExternalVideo_sourceId_idx" ON "ExternalVideo"("sourceId");

-- AddForeignKey
ALTER TABLE "ExternalVideo" ADD CONSTRAINT "ExternalVideo_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "Source"("id") ON DELETE SET NULL ON UPDATE CASCADE;
