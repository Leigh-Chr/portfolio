import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    shortDescription: z.string(),
    thumbnail: z.string(),
    order: z.number(),
    relatedSkills: z.array(z.string()),
    context: z.object({
      period: z.string(),
      role: z.string(),
      company: z.string(),
    }),
  }),
});

const skills = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.enum(['technical', 'soft']),
    group: z.string(),
    level: z.number().min(1).max(10),
    icon: z.string(),
    order: z.number(),
    relatedProjects: z.array(z.string()),
    summary: z.string(),
  }),
});

const experiences = defineCollection({
  type: 'content',
  schema: z.object({
    type: z.enum(['work', 'education']),
    title: z.string(),
    organization: z.string(),
    logo: z.string().optional(),
    location: z.string(),
    startDate: z.string(),
    endDate: z.string().optional(),
    current: z.boolean().optional(),
    status: z.string().optional(),
    order: z.number(),
    relatedProjects: z.array(z.string()).optional(),
    relatedSkills: z.array(z.string()).optional(),
  }),
});

export const collections = {
  projects,
  skills,
  experiences,
};
