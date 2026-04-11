import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		tags: z.array(z.string()).default([]),
	}),
});

const projects = defineCollection({
	loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		tags: z.array(z.string()).default([]),
	}),
});

const site = defineCollection({
	loader: file('src/site-config.yml'),
});

const cv = defineCollection({
  loader: file("src/content/cv.yml"),
  schema: z.object({
    id: z.string().optional(),
    heading: z.string(),
    component: z.string().optional(),
    collection: z.string().optional(),
    limit: z.number().optional(),
    viewAllHref: z.string().optional(),
    viewAllLabel: z.string().optional(),
    items: z
      .array(
        z.object({
          title: z.string(),
          description: z.string().optional(),
          datetime: z.string().optional(),
          href: z.string().optional(),
        }),
      )
      .optional(),
    links: z
      .array(
        z.object({
          label: z.string(),
          href: z.string(),
        }),
      )
      .optional(),
  }),
});

export const collections = { blog, cv, projects, site };