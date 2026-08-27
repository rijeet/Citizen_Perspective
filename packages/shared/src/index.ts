export const LOCALES = ["bn", "en"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "bn";

export const NEWS_SOURCE_TYPES = ["YOUTUBE", "ARTICLE", "FACEBOOK"] as const;
export type NewsSourceType = (typeof NEWS_SOURCE_TYPES)[number];

export const GOV_INVESTIGATION_STAGES = [
  "INCIDENT_OCCURRED",
  "INVESTIGATION_PROMISED",
  "COMMITTEE_FORMED",
  "INVESTIGATION_ONGOING",
  "REPORT_SUBMITTED",
  "ACTION_TAKEN",
  "CLOSED_NO_ACTION",
  "CLOSED_RESOLVED",
] as const;
export type GovInvestigationStage = (typeof GOV_INVESTIGATION_STAGES)[number];

export const GOV_INVESTIGATION_STATUSES = [
  "ON_TRACK",
  "DELAYED",
  "STALLED",
  "RESOLVED",
] as const;
export type GovInvestigationStatus = (typeof GOV_INVESTIGATION_STATUSES)[number];

export const ARTICLE_CONTENT_TYPES = ["MARKDOWN", "HTML"] as const;
export type ArticleContentType = (typeof ARTICLE_CONTENT_TYPES)[number];
