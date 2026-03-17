// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://jold1992.github.io',
  base: '/portfolio-jold',
  vite: {
    plugins: [tailwindcss()]
  }
});