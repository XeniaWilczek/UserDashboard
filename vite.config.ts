import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: "/UserDashboard/",
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: (content, filename) => {
          if (
            filename.includes("variables.scss") ||
            filename.includes("mixins.scss")
          ) {
            return content;
          }

          return `
            @use "@/variables" as *;
            @use "@/mixins" as *;
            ${content}
          `;
        },
      },
    },
  },
});
