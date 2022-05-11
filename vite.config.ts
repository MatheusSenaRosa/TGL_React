import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@pages": path.resolve(__dirname, "src/pages"),
      "@components": path.resolve(__dirname, "src/components"),
      "@routes": path.resolve(__dirname, "src/routes"),
      "@store": path.resolve(__dirname, "src/shared/store"),
      "@utils": path.resolve(__dirname, "src/shared/utils"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@fireBase": path.resolve(__dirname, "src/shared/firebase"),
      "@themes": path.resolve(__dirname, "src/styles/themes"),
      "@types": path.resolve(__dirname, "src/shared/utils/types"),
      "@animations": path.resolve(__dirname, "src/styles/animations"),
    },
  },
});
