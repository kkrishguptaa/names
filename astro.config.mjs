// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import partytown from '@astrojs/partytown';
import sentry from '@sentry/astro';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), partytown(), sentry(), sitemap()],

  vite: {
    plugins: [tailwindcss()]
  }
});