-- CreateEnum
CREATE TYPE "NewsSourceType" AS ENUM ('YOUTUBE', 'ARTICLE', 'FACEBOOK');

-- CreateEnum
CREATE TYPE "GovInvestigationStage" AS ENUM ('INCIDENT_OCCURRED', 'INVESTIGATION_PROMISED', 'COMMITTEE_FORMED', 'INVESTIGATION_ONGOING', 'REPORT_SUBMITTED', 'ACTION_TAKEN', 'CLOSED_NO_ACTION', 'CLOSED_RESOLVED');

-- CreateEnum
CREATE TYPE "GovInvestigationStatus" AS ENUM ('ON_TRACK', 'DELAYED', 'STALLED', 'RESOLVED');

-- CreateEnum
CREATE TYPE "ArticleContentType" AS ENUM ('MARKDOWN', 'HTML');

-- AlterTable
ALTER TABLE "Article" ADD COLUMN "contentType" "ArticleContentType" NOT NULL DEFAULT 'MARKDOWN';

-- AlterTable
ALTER TABLE "ArticleTranslation" ALTER COLUMN "bodyMd" DROP NOT NULL;
ALTER TABLE "ArticleTranslation" ADD COLUMN "bodyHtml" TEXT;

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CategoryTranslation" (
    "id" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "locale" "Locale" NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "CategoryTranslation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Subcategory" (
    "id" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Subcategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SubcategoryTranslation" (
    "id" TEXT NOT NULL,
    "subcategoryId" TEXT NOT NULL,
    "locale" "Locale" NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "SubcategoryTranslation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Incident" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "subcategoryId" TEXT,
    "currentStage" TEXT NOT NULL DEFAULT '',
    "currentStatus" TEXT,
    "reviewStatus" "ReviewStatus" NOT NULL DEFAULT 'PUBLISHED',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Incident_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IncidentTranslation" (
    "id" TEXT NOT NULL,
    "incidentId" TEXT NOT NULL,
    "locale" "Locale" NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "IncidentTranslation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NewsItem" (
    "id" TEXT NOT NULL,
    "incidentId" TEXT NOT NULL,
    "sourceUrl" TEXT NOT NULL,
    "sourceType" "NewsSourceType" NOT NULL,
    "headlineBn" TEXT NOT NULL,
    "headlineEn" TEXT NOT NULL,
    "thumbnailUrl" TEXT,
    "publishedAt" TIMESTAMP(3),
    "stage" TEXT NOT NULL,
    "status" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "NewsItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GovernmentInvestigation" (
    "id" TEXT NOT NULL,
    "incidentId" TEXT,
    "currentStage" "GovInvestigationStage" NOT NULL DEFAULT 'INCIDENT_OCCURRED',
    "currentStatus" "GovInvestigationStatus" NOT NULL DEFAULT 'ON_TRACK',
    "reviewStatus" "ReviewStatus" NOT NULL DEFAULT 'PUBLISHED',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GovernmentInvestigation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GovInvestigationTranslation" (
    "id" TEXT NOT NULL,
    "investigationId" TEXT NOT NULL,
    "locale" "Locale" NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "GovInvestigationTranslation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GovernmentInvestigationUpdate" (
    "id" TEXT NOT NULL,
    "investigationId" TEXT NOT NULL,
    "sourceUrl" TEXT NOT NULL,
    "sourceType" "NewsSourceType" NOT NULL,
    "headlineBn" TEXT NOT NULL,
    "headlineEn" TEXT NOT NULL,
    "thumbnailUrl" TEXT,
    "publishedAt" TIMESTAMP(3),
    "stage" "GovInvestigationStage" NOT NULL,
    "status" "GovInvestigationStatus" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "GovernmentInvestigationUpdate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FeaturedBanner" (
    "id" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "captionBn" TEXT NOT NULL,
    "captionEn" TEXT NOT NULL,
    "sectionType" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FeaturedBanner_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Category_slug_key" ON "Category"("slug");

-- CreateIndex
CREATE INDEX "Category_sortOrder_idx" ON "Category"("sortOrder");

-- CreateIndex
CREATE INDEX "CategoryTranslation_locale_idx" ON "CategoryTranslation"("locale");

-- CreateIndex
CREATE UNIQUE INDEX "CategoryTranslation_categoryId_locale_key" ON "CategoryTranslation"("categoryId", "locale");

-- CreateIndex
CREATE UNIQUE INDEX "Subcategory_categoryId_slug_key" ON "Subcategory"("categoryId", "slug");

-- CreateIndex
CREATE INDEX "SubcategoryTranslation_locale_idx" ON "SubcategoryTranslation"("locale");

-- CreateIndex
CREATE UNIQUE INDEX "SubcategoryTranslation_subcategoryId_locale_key" ON "SubcategoryTranslation"("subcategoryId", "locale");

-- CreateIndex
CREATE UNIQUE INDEX "Incident_slug_key" ON "Incident"("slug");

-- CreateIndex
CREATE INDEX "Incident_updatedAt_idx" ON "Incident"("updatedAt" DESC);

-- CreateIndex
CREATE INDEX "Incident_reviewStatus_idx" ON "Incident"("reviewStatus");

-- CreateIndex
CREATE INDEX "Incident_categoryId_idx" ON "Incident"("categoryId");

-- CreateIndex
CREATE INDEX "IncidentTranslation_locale_idx" ON "IncidentTranslation"("locale");

-- CreateIndex
CREATE UNIQUE INDEX "IncidentTranslation_incidentId_locale_key" ON "IncidentTranslation"("incidentId", "locale");

-- CreateIndex
CREATE INDEX "NewsItem_incidentId_createdAt_idx" ON "NewsItem"("incidentId", "createdAt");

-- CreateIndex
CREATE INDEX "GovernmentInvestigation_updatedAt_idx" ON "GovernmentInvestigation"("updatedAt" DESC);

-- CreateIndex
CREATE INDEX "GovernmentInvestigation_reviewStatus_idx" ON "GovernmentInvestigation"("reviewStatus");

-- CreateIndex
CREATE INDEX "GovInvestigationTranslation_locale_idx" ON "GovInvestigationTranslation"("locale");

-- CreateIndex
CREATE UNIQUE INDEX "GovInvestigationTranslation_investigationId_locale_key" ON "GovInvestigationTranslation"("investigationId", "locale");

-- CreateIndex
CREATE INDEX "GovernmentInvestigationUpdate_investigationId_createdAt_idx" ON "GovernmentInvestigationUpdate"("investigationId", "createdAt");

-- CreateIndex
CREATE INDEX "FeaturedBanner_createdAt_idx" ON "FeaturedBanner"("createdAt" DESC);

-- AddForeignKey
ALTER TABLE "CategoryTranslation" ADD CONSTRAINT "CategoryTranslation_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subcategory" ADD CONSTRAINT "Subcategory_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubcategoryTranslation" ADD CONSTRAINT "SubcategoryTranslation_subcategoryId_fkey" FOREIGN KEY ("subcategoryId") REFERENCES "Subcategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Incident" ADD CONSTRAINT "Incident_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Incident" ADD CONSTRAINT "Incident_subcategoryId_fkey" FOREIGN KEY ("subcategoryId") REFERENCES "Subcategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IncidentTranslation" ADD CONSTRAINT "IncidentTranslation_incidentId_fkey" FOREIGN KEY ("incidentId") REFERENCES "Incident"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NewsItem" ADD CONSTRAINT "NewsItem_incidentId_fkey" FOREIGN KEY ("incidentId") REFERENCES "Incident"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GovernmentInvestigation" ADD CONSTRAINT "GovernmentInvestigation_incidentId_fkey" FOREIGN KEY ("incidentId") REFERENCES "Incident"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GovInvestigationTranslation" ADD CONSTRAINT "GovInvestigationTranslation_investigationId_fkey" FOREIGN KEY ("investigationId") REFERENCES "GovernmentInvestigation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GovernmentInvestigationUpdate" ADD CONSTRAINT "GovernmentInvestigationUpdate_investigationId_fkey" FOREIGN KEY ("investigationId") REFERENCES "GovernmentInvestigation"("id") ON DELETE CASCADE ON UPDATE CASCADE;
