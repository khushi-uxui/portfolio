// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  redirects: {
    "/": "https://www.behance.net/khushigautam3",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
