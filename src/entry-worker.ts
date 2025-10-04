// Custom Worker entry point with polyfills
import "@/lib/workers-polyfills.ts";

// Import the actual Astro entry point
export { default } from "./dist/_worker.js/index.js";