import { defineCollection } from 'astro:content';
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
    relatedProjects: z.array(z.string()).default([]),
    summary: z.string(),
  }),
});

// Schema for projects/realizations
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    shortDescription: z.string(),
    thumbnail: z.string().optional(),
    fullImage: z.string().optional(),
    order: z.number(),
    relatedSkills: z.array(z.string()).default([]),
    context: z.object({
      period: z.string(),
      role: z.string(),
      company: z.string().optional(),
    }),
    links: z
      .object({
        repository: z.string().url().optional(),
        website: z.string().url().optional(),
      })
      .optional(),
  }),
});

// Schema for experiences (timeline)
const experiences = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experiences' }),
  schema: z.object({
    type: z.enum(['work', 'education', 'certification']),
    title: z.string(),
    organization: z.string(),
    logo: z.string().optional(),
    location: z.string().optional(),
    startDate: z.string(),
    endDate: z.string().optional(),
    current: z.boolean().default(false),
    status: z.string().optional(),
    website: z.string().url().optional(),
    order: z.number(),
    relatedProjects: z.array(z.string()).default([]),
    relatedSkills: z.array(z.string()).default([]),
  }),
});

export const collections = { skills, projects, experiences };
