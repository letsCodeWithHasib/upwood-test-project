// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { nodePolyfills } from "vite-plugin-node-polyfills";

export default defineConfig({
  build: {
    chunkSizeWarningLimit: 1000, // Increase the limit to 1000 kB
  },
  plugins: [react(), nodePolyfills()],
});
