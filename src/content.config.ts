import { defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Schema for skills/competencies
const skills = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/skills' }),
  schema: z.object({
    title: z.string(),
    category: z.enum(['technical', 'human']),
    group: z.enum(['frontend', 'backend', 'personal', 'interpersonal']),
    level: z.number().min(1).max(10),
    icon: z.string().optional(),
    order: z.number(),
    relatedProjects: z.array(reference('projects')).default([]),
    summary: z.string(),
    publishedDate: z.coerce.date().optional(),
    modifiedDate: z.coerce.date().optional(),
  }),
});

// Schema for projects/realizations
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      shortDescription: z.string(),
      thumbnail: image().optional(),
      fullImage: image().optional(),
      order: z.number(),
      relatedSkills: z.array(reference('skills')).default([]),
      context: z.object({
        period: z.string(),
        role: z.string(),
        company: z.string().optional(),
      }),
      links: z
        .object({
          repository: z.url().optional(),
          website: z.url().optional(),
        })
        .optional(),
      gallery: z
        .array(
          z.object({
            src: image(),
            alt: z.string(),
          })
        )
        .optional(),
      publishedDate: z.coerce.date().optional(),
      modifiedDate: z.coerce.date().optional(),
    }),
});

// Schema for experiences (timeline)
const experiences = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experiences' }),
  schema: ({ image }) =>
    z.object({
      type: z.enum(['work', 'education']),
      title: z.string(),
      organization: z.string(),
      logo: image().optional(),
      location: z.string().optional(),
      startDate: z.string(),
      endDate: z.string().optional(),
      current: z.boolean().default(false),
      status: z.string().optional(),
      website: z.url().optional(),
      order: z.number(),
      relatedProjects: z.array(reference('projects')).default([]),
      relatedSkills: z.array(reference('skills')).default([]),
    }),
});

export const collections = { skills, projects, experiences };
