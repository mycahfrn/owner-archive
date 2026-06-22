// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://mycahfn.github.io/',
  base:  "/owner-archive",
  vite: {
    plugins: [tailwindcss()]
  }
});