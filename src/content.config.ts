import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const names = defineCollection({
  loader: glob({ pattern: "*.mdx", base: "./src/content" }),
  schema: z.object({
    name: z.string(),
  }),
});

export const collections = { names };
