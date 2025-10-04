// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  output: "server",
  site: process.env.CI
    ? "https://dccp.edu.ph"
    : "http://localhost:4321",
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
  server: {
    allowedHosts: ["dccpweb.koamishin.org", "dccp.edu.ph"],
  },
  devToolbar: {
    enabled: false,
  },
});
