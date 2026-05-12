-- CreateEnum
CREATE TYPE "EmbedPlatform" AS ENUM ('YOUTUBE', 'FACEBOOK');

-- CreateTable
CREATE TABLE "ExternalVideo" (
    "id" TEXT NOT NULL,
    "platform" "EmbedPlatform" NOT NULL,
    "watchUrl" TEXT NOT NULL,
    "publishedAt" TIMESTAMP(3),
    "reviewStatus" "ReviewStatus" NOT NULL DEFAULT 'PUBLISHED',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ExternalVideo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExternalVideoTranslation" (
    "id" TEXT NOT NULL,
    "videoId" TEXT NOT NULL,
    "locale" "Locale" NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "ExternalVideoTranslation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MediaItem" (
    "id" TEXT NOT NULL,
    "mediaUrl" TEXT NOT NULL,
    "publishedAt" TIMESTAMP(3),
    "reviewStatus" "ReviewStatus" NOT NULL DEFAULT 'PUBLISHED',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MediaItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MediaItemTranslation" (
    "id" TEXT NOT NULL,
    "mediaItemId" TEXT NOT NULL,
    "locale" "Locale" NOT NULL,
    "title" TEXT NOT NULL,
    "caption" TEXT,

    CONSTRAINT "MediaItemTranslation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TimelineEvent" (
    "id" TEXT NOT NULL,
    "eventAt" TIMESTAMP(3) NOT NULL,
    "reviewStatus" "ReviewStatus" NOT NULL DEFAULT 'PUBLISHED',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TimelineEvent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TimelineEventTranslation" (
    "id" TEXT NOT NULL,
    "eventId" TEXT NOT NULL,
    "locale" "Locale" NOT NULL,
    "title" TEXT NOT NULL,
    "bodyMd" TEXT NOT NULL,

    CONSTRAINT "TimelineEventTranslation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ExternalVideo_publishedAt_idx" ON "ExternalVideo"("publishedAt" DESC);

-- CreateIndex
CREATE INDEX "ExternalVideo_reviewStatus_idx" ON "ExternalVideo"("reviewStatus");

-- CreateIndex
CREATE UNIQUE INDEX "ExternalVideoTranslation_videoId_locale_key" ON "ExternalVideoTranslation"("videoId", "locale");

-- CreateIndex
CREATE INDEX "ExternalVideoTranslation_locale_idx" ON "ExternalVideoTranslation"("locale");

-- CreateIndex
CREATE INDEX "MediaItem_publishedAt_idx" ON "MediaItem"("publishedAt" DESC);

-- CreateIndex
CREATE INDEX "MediaItem_reviewStatus_idx" ON "MediaItem"("reviewStatus");

-- CreateIndex
CREATE UNIQUE INDEX "MediaItemTranslation_mediaItemId_locale_key" ON "MediaItemTranslation"("mediaItemId", "locale");

-- CreateIndex
CREATE INDEX "MediaItemTranslation_locale_idx" ON "MediaItemTranslation"("locale");

-- CreateIndex
CREATE INDEX "TimelineEvent_eventAt_idx" ON "TimelineEvent"("eventAt");

-- CreateIndex
CREATE INDEX "TimelineEvent_reviewStatus_idx" ON "TimelineEvent"("reviewStatus");

-- CreateIndex
CREATE UNIQUE INDEX "TimelineEventTranslation_eventId_locale_key" ON "TimelineEventTranslation"("eventId", "locale");

-- CreateIndex
CREATE INDEX "TimelineEventTranslation_locale_idx" ON "TimelineEventTranslation"("locale");

-- AddForeignKey
ALTER TABLE "ExternalVideoTranslation" ADD CONSTRAINT "ExternalVideoTranslation_videoId_fkey" FOREIGN KEY ("videoId") REFERENCES "ExternalVideo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MediaItemTranslation" ADD CONSTRAINT "MediaItemTranslation_mediaItemId_fkey" FOREIGN KEY ("mediaItemId") REFERENCES "MediaItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TimelineEventTranslation" ADD CONSTRAINT "TimelineEventTranslation_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "TimelineEvent"("id") ON DELETE CASCADE ON UPDATE CASCADE;
