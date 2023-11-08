import { defineConfig } from "astro/config";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  site: "https://davidgasquez.github.io",
  base: "/static-data-dashboard",
  integrations: [vue()],
});
