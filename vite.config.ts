import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  // Use only the React plugin; remove Lovable tagger for standalone hosting
  plugins: [react()],
  // Use relative base so assets work on GitHub Pages (including project subpaths)
  base: "./",
  build: {
    // Output to docs/ so GitHub Pages can deploy from the main branch
    outDir: "docs",
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
