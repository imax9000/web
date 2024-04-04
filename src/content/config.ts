import { defineCollection, z } from "astro:content";

const guidesCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		description: z.string(),
		category: z.string(),
		library: z.string(),
		sort: z.number().optional(),
	}),
});

export const collections = { guides: guidesCollection };
