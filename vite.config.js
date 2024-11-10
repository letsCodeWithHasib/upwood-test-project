// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { nodePolyfills } from "vite-plugin-node-polyfills";

export default defineConfig({
  build: {
    emptyOutDir: true, // Ensure the output directory is cleared before each build
    chunkSizeWarningLimit: 1000, // Set the chunk size warning limit to 1000 kB
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Separate node_modules into a vendor chunk
          if (id.includes("node_modules")) {
            return "vendor";
          }
          // Additional manual chunking logic can be added here
        },
      },
    },
  },
  plugins: [react(), nodePolyfills()],
});
