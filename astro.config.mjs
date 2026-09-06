import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site: process.env.SITE_URL || 'https://example.github.io',
  base,
  output: 'static',
  compressHTML: true,
  build: { format: 'directory' },
  integrations: [mdx()],
});
