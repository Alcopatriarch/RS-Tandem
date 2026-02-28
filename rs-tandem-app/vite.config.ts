import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import type { UserConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./tests/setup.js",
  },
} as UserConfig);
