// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  base: '/portfolio/',
  site: 'https://khushiuxui.github.io',
  vite: {
    plugins: [tailwindcss()],
  },
  output: 'static',
});
