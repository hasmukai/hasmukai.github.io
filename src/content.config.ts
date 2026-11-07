import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { isAbsolute, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const markdownLoader = glob({ pattern: '**/*.md', base: './src/content/blog' });

const blog = defineCollection({
  loader: {
    ...markdownLoader,
    async load(context) {
      // Astro 7's glob loader returns early for an empty directory, retaining
      // cached entries and skipping its watcher. Handle the empty blog explicitly.
      context.store.clear();
      await markdownLoader.load(context);
      const watcher = context.watcher;
      if (!watcher || context.store.keys().length > 0) return;

      const directory = fileURLToPath(new URL('./src/content/blog/', context.config.root));
      let initialized = false;
      let pending = Promise.resolve();
      const onFirstArticle = (path: string) => {
        const entry = relative(directory, path);
        if (isAbsolute(entry) || entry.startsWith('..') || !entry.endsWith('.md')) return;
        pending = pending.then(async () => {
          if (initialized) return;
          try {
            await markdownLoader.load(context);
            if (context.store.keys().length > 0) {
              initialized = true;
              watcher.off('add', onFirstArticle);
              watcher.off('change', onFirstArticle);
            }
          } catch (error) {
            // A first save may contain incomplete frontmatter. Keep listening
            // until it is valid and the standard glob watcher is installed.
            context.logger.error(String(error));
          }
        });
      };
      watcher.add(directory);
      watcher.on('add', onFirstArticle);
      watcher.on('change', onFirstArticle);
    },
  },
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog };
