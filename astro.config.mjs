import { defineConfig } from "astro/config";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  site: "https://davidgasquez.github.io",
  base: "/serverless-dashboard",
  integrations: [vue()],
});
