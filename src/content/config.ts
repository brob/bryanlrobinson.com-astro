import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		date: z.date(),
		updatedDate: z.coerce.date().optional(),
		featuredImg: z.string().optional(),
		canonical: z.string().optional(),
		heroImage: z.string().optional(),
	}),
});

export const collections = { blog };
