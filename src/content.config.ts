import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const requiredText = z.string().trim().min(1);
const publicImage = requiredText.refine((value) => value.startsWith('/images/'), {
  message: 'Image paths must begin with /images/',
});

const research = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/research' }),
  schema: z.object({
    title: requiredText,
    publicQuestion: requiredText,
    pillar: z.enum(['feeding', 'flickering', 'feedback', 'xray']),
    date: z.coerce.date(),
    authors: z.array(requiredText).min(1),
    leadership: requiredText,
    paperUrl: z.url(),
    paperTitle: requiredText,
    citation: requiredText,
    journal: requiredText,
    figure: publicImage,
    cardFigure: publicImage.optional(),
    cardFigureAlt: requiredText.optional(),
    figureAlt: requiredText,
    figureCredit: requiredText,
    summary: requiredText,
    draft: z.boolean().default(false),
  }),
});

const researchCategories = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/research-categories' }),
  schema: z.object({
    heading: requiredText,
    shortHeading: requiredText,
    question: requiredText,
    introduction: requiredText,
    heroImage: publicImage,
    heroAlt: requiredText,
    heroCredit: requiredText,
    heroSourceUrl: z.url(),
    order: z.number().int().positive(),
    relatedPapers: z.array(z.object({
      title: requiredText,
      authors: requiredText,
      year: z.number().int(),
      url: z.url().optional(),
      status: requiredText.optional(),
    })).default([]),
  }),
});

const people = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/people' }),
  schema: z.object({
    name: requiredText,
    nameZh: requiredText.optional(),
    role: requiredText,
    group: z.enum(['leaders', 'postdocs', 'graduate', 'undergraduate', 'visiting']),
    order: z.number().int().positive(),
    initials: requiredText,
    interests: z.array(requiredText).min(1).optional(),
    portrait: publicImage.optional(),
    homepage: z.url().optional(),
    email: z.email().optional(),
    bio: requiredText.optional(),
  }),
});

const pastMemberHistory = z.object({
  role: z.enum(['postdoc', 'phd', 'masters', 'undergraduate', 'visiting', 'other']),
  startYear: z.number().int().min(1900).max(2100).optional(),
  endYear: z.number().int().min(1900).max(2100).optional(),
}).superRefine((item, context) => {
  if (item.startYear && item.endYear && item.endYear < item.startYear) {
    context.addIssue({ code: 'custom', message: 'endYear must not precede startYear' });
  }
});

const pastMembers = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/past-members' }),
  schema: z.object({
    name: requiredText,
    nameZh: requiredText.optional(),
    portrait: publicImage.optional(),
    featured: z.boolean().default(false),
    history: z.array(pastMemberHistory).default([]),
  }),
});

const facilities = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/facilities' }),
  schema: z.object({
    name: requiredText,
    shortName: requiredText,
    wavelength: z.enum(['X-ray', 'Optical']),
    status: requiredText,
    officialUrl: z.url(),
    image: publicImage,
    imageAlt: requiredText,
    imageCredit: requiredText,
    summary: requiredText,
    usage: requiredText,
    relatedPapers: z.array(z.object({
      title: requiredText,
      citation: requiredText,
      url: z.url(),
    })).default([]),
    order: z.number().int().positive(),
  }),
});

const activities = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/activities' }),
  schema: z.object({
    title: requiredText,
    date: z.coerce.date(),
    cover: publicImage,
    coverAlt: requiredText,
    imageCredit: requiredText,
    consentConfirmed: z.literal(true),
    summary: requiredText,
    gallery: z.array(z.object({
      src: publicImage,
      alt: requiredText,
      credit: requiredText,
    })).default([]),
  }),
});

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: requiredText,
    date: z.coerce.date(),
    image: publicImage,
    imageAlt: requiredText,
    imageCredit: requiredText,
    url: requiredText.refine((value) => /^(\/|https?:\/\/)/.test(value), {
      message: 'News URLs must be an internal /path/ or a complete http(s) URL',
    }).optional(),
    pinned: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { research, researchCategories, people, pastMembers, facilities, activities, news };
