-- CreateTable
CREATE TABLE "BreakingNewsItem" (
    "id" TEXT NOT NULL,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "titleBn" TEXT NOT NULL,
    "titleEn" TEXT NOT NULL,
    "href" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BreakingNewsItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "BreakingNewsItem_active_sortOrder_idx" ON "BreakingNewsItem"("active", "sortOrder");
