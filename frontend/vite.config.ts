import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  preview: {
    port: 3000,
    strictPort: true,
  },
  server: {
    host: true,
    port: 3000,
    strictPort: true,
    watch: {
      usePolling: true,
    },
    hmr: { host: "0.0.0.0" },
    proxy: {
      "/api": {
        target: "http://backend:8080",
        changeOrigin: true,
        ws: true,
      },
    },
  },
});
