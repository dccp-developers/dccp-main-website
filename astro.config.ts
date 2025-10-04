// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  output: "server",
  site: process.env.CI ? "https://dccp.edu.ph" : "http://localhost:4321",
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      external: [],
    },
    resolve: {
      alias: {
        // Use react-dom/server.edge for production builds
        "react-dom/server": "react-dom/server.edge",
      },
    },
    build: {
      minify: false,
    },
  },
  integrations: [react()],
  adapter: cloudflare({
    imageService: "compile",
  }),
  server: {
    allowedHosts: ["dccpweb.koamishin.org", "dccp.edu.ph"],
  },
  devToolbar: {
    enabled: false,
  },
});
