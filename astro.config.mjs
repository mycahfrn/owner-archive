// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import tunnel from 'astro-tunnel';


// https://astro.build/config
export default defineConfig({
  site: 'https://mycahfrn.github.io',
  base:  "/owner-archive",
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [tunnel()],
});