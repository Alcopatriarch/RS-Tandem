import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import type { UserConfig } from "vite";
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
  tailwindcss(),],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./tests/setup.js",
  },
} as UserConfig);

