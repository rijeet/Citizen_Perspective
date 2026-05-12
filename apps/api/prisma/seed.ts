import * as bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
import { loadEnvForSeed } from "./load-env-for-seed";

/** Prisma enum `Locale` — use literals so seed typings work even if hoisted `@prisma/client` omits `$Enums`/`Locale` re-exports. */
const locale = { bn: "bn", en: "en" } as const;

loadEnvForSeed();

const prisma = new PrismaClient();

async function main() {
  await prisma.externalVideo.deleteMany();
  await prisma.mediaItem.deleteMany();
  await prisma.timelineEvent.deleteMany();
  await prisma.breakingNewsItem.deleteMany();
  await prisma.articleTranslation.deleteMany();
  await prisma.article.deleteMany();
  await prisma.source.deleteMany();

  const source = await prisma.source.create({
    data: {
      name: "বাংলাদেশ স্বাস্থ্য অধিদপ্তর",
      url: "https://dghs.gov.bd",
    },
  });

  await prisma.article.create({
    data: {
      slug: "measles-vaccination-campaign-2024",
      publishedAt: new Date("2024-03-15"),
      category: "News",
      tags: ["measles", "হাম", "vaccination"],
      sourceId: source.id,
      reviewStatus: "PUBLISHED",
      translations: {
        create: [
          {
            locale: locale.bn,
            title:
              "টিকাদান অভিযান: পরিমাপযোগ্য তথ্য ও মিডিয়া আচরণ",
            description:
              "শিশু স্বাস্থ্য সম্পর্কিত প্রতিবেদনের জন্য নিরপেক্ষ উৎস ও তারিখের গুরুত্ব।",
            bodyMd: `## প্রসঙ্গ

এই আর্কাইভে আমরা **যাচাইকৃত উৎস** থেকে সংগৃহীত তথ্য রাখি। উদ্দেশ্য — আবেগ নয়, **পরিমাপযোগ্য তথ্য**।

- উৎসের নাম প্রকাশ করা বাধ্যতামূলক
- তারিভ ও সংস্করণ ট্রাক করা হয়
`,
            seoTitle: "জনদৃষ্টি — টিকাসংক্রান্ত সংবাদ সংগ্রহ",
            seoDescription:
              "বাংলাদেশে হাম ও শিশু স্বাস্থ্য বিষয়ক যাচাইকৃত মিডিয়া আর্কাইভ।",
          },
          {
            locale: locale.en,
            title:
              "Measles vaccination coverage: credible reporting checkpoints",
            description:
              "Neutral framing for caregivers and journalists citing primary sources.",
            bodyMd: `## Context

This archive stores **verified** excerpts and citations. Tone is deliberate: informative, respectful, never sensational.

- Source attribution is mandatory  
- Publication dates anchor every record  
`,
            seoTitle: "Citizen Perspective — Measles media archive note",
            seoDescription:
              "Structured Bangladesh measles-related coverage archive entry.",
          },
        ],
      },
    },
  });

  await prisma.article.create({
    data: {
      slug: "clinical-guidance-follow-up-resources",
      publishedAt: new Date("2024-06-02"),
      category: "Report",
      tags: ["measles", "clinical"],
      sourceId: source.id,
      reviewStatus: "PUBLISHED",
      translations: {
        create: [
          {
            locale: locale.bn,
            title:
              "ক্লিনিক্যাল ও জনস্বাস্থ্য নির্দেশনা: উপলব্ধ রিসোর্স কীভাবে পড়বেন",
            description:
              "সাস্থ্য সংস্থার নথি ও সংবাদ কভারেজ একসূত্রে খুঁজে পড়ার উপক্রমণিকা।",
            bodyMd: `### পাঠ সম্পাদনীয় কাঠামো

1. সংস্থার প্রাথমিক নথি  
2. স্বাধীন মিডিয়া ফলো-আপ  
3. সময়সীমাতে সংঘটিত ঘটনা  

> উদ্ধৃতি ব্যবহার করলে মূল প্রকাশনার লিংক সংরক্ষণ করুন।

`,
          },
          {
            locale: locale.en,
            title:
              "How to read bundled clinical and public-health guidance excerpts",
            description:
              "An editorial scaffold for aligning agency bulletins with follow-up journalism.",
            bodyMd: `### Reading order

1. Primary bulletin or guideline  
2. Independent follow-ups with dates  
3. Timeline proximity for related incidents  

> Blockquotes mirror source tone; headings stay neutral.`,
          },
        ],
      },
    },
  });

  await prisma.article.create({
    data: {
      slug: "measles-awareness-interview-health-workers",
      publishedAt: new Date("2024-09-21"),
      category: "Interview",
      tags: ["measles", "interview"],
      sourceId: source.id,
      reviewStatus: "PUBLISHED",
      translations: {
        create: [
          {
            locale: locale.bn,
            title:
              "সাস্থ্যকর্মীদের সাথে সাক্ষাৎকার: ব্যবহারিক বার্তাগুলোর সারণী",
            description:
              "সাক্ষাৎকার থেকে ব্যবহারিক বার্তা বেছে নিন—ড্রামাটাইজ করা নয়।",
            bodyMd: `## সংক্ষেপে

- উপসর্গ সংক্রান্ত তথ্য **সুনির্দিষ্ট উৎস** এর সাথে যুক্ত করুন।  
- **পুনরাবৃত্তি এড়িয়ে চলুন**: একই ফ্রেজ ব্যবহার নয় জনসাধারণের বিভ্রান্তির জন্য।  

`,
          },
        ],
      },
    },
  });

  await prisma.breakingNewsItem.createMany({
    data: [
      {
        sortOrder: 0,
        active: true,
        titleBn: 'টিকাদান অভিযান: যাচাইকৃত রিপোর্ট ও উৎস',
        titleEn: 'Vaccination campaign: verified reporting and sources',
        href: '/articles/measles-vaccination-campaign-2024',
      },
      {
        sortOrder: 1,
        active: true,
        titleBn: 'স্বাস্থ্য অধিদপ্তর — প্রাথমিক তথ্য',
        titleEn: 'DGHS — primary information',
        href: 'https://dghs.gov.bd',
      },
    ],
  });

  await prisma.externalVideo.create({
    data: {
      platform: "YOUTUBE",
      watchUrl: "https://www.youtube.com/watch?v=jNQXAC9IVRw",
      publishedAt: new Date("2024-05-01"),
      reviewStatus: "PUBLISHED",
      sourceId: source.id,
      tags: ["measles", "sample", "হাম"],
      translations: {
        create: [
          {
            locale: locale.bn,
            title: "নমুনা ইউটিউব ভিডিও",
            description: "অ্যাডমিন থেকে যোগ করা ইমবেডের উদাহরণ।",
          },
          {
            locale: locale.en,
            title: "Sample YouTube embed",
            description: "Example entry managed from admin.",
          },
        ],
      },
    },
  });

  await prisma.externalVideo.create({
    data: {
      platform: "FACEBOOK",
      watchUrl:
        "https://www.facebook.com/facebook/videos/10153231379926729/",
      publishedAt: new Date("2024-05-10"),
      reviewStatus: "PUBLISHED",
      tags: ["facebook", "sample"],
      translations: {
        create: [
          {
            locale: locale.bn,
            title: "নমুনা ফেসবুক ভিডিও",
            description: "ফেসবুক ওয়াচ URL।",
          },
          {
            locale: locale.en,
            title: "Sample Facebook video",
            description: "Facebook watch URL.",
          },
        ],
      },
    },
  });

  await prisma.mediaItem.create({
    data: {
      mediaUrl: "https://dghs.gov.bd",
      publishedAt: new Date("2024-04-01"),
      reviewStatus: "PUBLISHED",
      tags: ["measles"],
      translations: {
        create: [
          {
            locale: locale.bn,
            title: "স্বাস্থ্য অধিদপ্তর ওয়েবসাইট",
            caption: "প্রাথমিক উৎস লিংক (মিডিয়া তালিকা)।",
          },
          {
            locale: locale.en,
            title: "DGHS website",
            caption: "Primary source link (media list).",
          },
        ],
      },
    },
  });

  await prisma.timelineEvent.create({
    data: {
      eventAt: new Date("2024-03-15"),
      reviewStatus: "PUBLISHED",
      translations: {
        create: [
          {
            locale: locale.bn,
            title: "টিকাদান অভিযান – ২০২৪",
            bodyMd: "সংক্ষিপ্ত টাইমলাইন নোট (নমুনা)।",
          },
          {
            locale: locale.en,
            title: "Vaccination campaign — Mar 2024",
            bodyMd: "Short timeline note (sample).",
          },
        ],
      },
    },
  });

  const adminEmail = process.env.ADMIN_EMAIL?.trim();
  const adminPassword = process.env.ADMIN_PASSWORD;
  if (adminEmail && adminPassword) {
    const passwordHash = await bcrypt.hash(adminPassword, 10);
    await prisma.admin.upsert({
      where: { email: adminEmail },
      update: { passwordHash },
      create: { email: adminEmail, passwordHash },
    });
    console.log(`Admin upserted: ${adminEmail}`);
  } else if (adminEmail && !adminPassword) {
    console.warn(
      "ADMIN_EMAIL is set but ADMIN_PASSWORD is missing; skipping admin upsert. Use `npm run db:seed:admin` after setting both.",
    );
  } else if (!adminEmail && adminPassword) {
    console.warn(
      "ADMIN_PASSWORD is set but ADMIN_EMAIL is missing; skipping admin upsert.",
    );
  } else {
    console.log(
      "Skipping admin: set ADMIN_EMAIL and ADMIN_PASSWORD to upsert an admin (or run `npm run db:seed:admin`).",
    );
  }

  console.log("Seed finished.");
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    void prisma.$disconnect();
    process.exit(1);
  });
