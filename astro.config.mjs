import { defineConfig } from "astro/config";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  site: "https://davidgasquez.github.io",
  base: "/astro-static-dashboard",
  integrations: [vue()],
});
