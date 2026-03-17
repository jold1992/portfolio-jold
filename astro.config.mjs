// @ts-nocheck
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://jold1992.github.io',
  base: process.env.GITHUB_ACTIONS ? '/portfolio-jold/' : '/',
  vite: {
    plugins: [tailwindcss()]
  }
});