import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    assetsDir: "",
    rollupOptions: {
      input: "src/main.ts",
      output: {
        file: "./dist/content-script.js",
        dir: undefined,
      },
      external: ["vue"],
    },
  },
  plugins: [vue()],
});
