import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { rehypeBaseLinks } from './src/utils/rehype-base-links';

const SITE_BASE = '/portfolio';

export default defineConfig({
  output: 'static',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],
  site: 'https://leigh-chr.github.io',
  base: SITE_BASE,
  compressHTML: true,
  build: {
    inlineStylesheets: 'always',
  },
  markdown: {
    rehypePlugins: [[rehypeBaseLinks, { base: SITE_BASE }]],
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'DM Sans',
      cssVariable: '--font-dm-sans',
    },
    {
      provider: fontProviders.fontsource(),
      name: 'Space Grotesk',
      cssVariable: '--font-space-grotesk',
    },
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
    },
  },
  experimental: {
    clientPrerender: true,
    contentIntellisense: true,
  },
});
