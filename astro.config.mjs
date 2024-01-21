import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import keystatic from "@keystatic/astro";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), svelte(), react(), markdoc(), keystatic()],
  output: "hybrid",
  site: "https://thomasmol.com",
  adapter: vercel(),
});
