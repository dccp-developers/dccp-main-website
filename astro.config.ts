// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import cloudflare from "@astrojs/cloudflare";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  output: "server",
  site: process.env.CI ? "https://www.dccp.edu.ph" : "http://localhost:4321",
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      external: [],
    },
    build: {
      minify: false,
    },
  },
  integrations: [react()],
  adapter: vercel({
    isr: true,
    webAnalytics: {
      enabled: true,
    },
  }),
  server: {
    allowedHosts: ["dccpweb.koamishin.org", "dccp.edu.ph", "www.dccp.edu.ph"],
  },
  devToolbar: {
    enabled: false,
  },
});
