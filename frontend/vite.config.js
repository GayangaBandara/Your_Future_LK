import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  server: {
    headers: {
      "Content-Security-Policy": "script-src 'self' 'unsafe-inline';"
    }
  }
});
