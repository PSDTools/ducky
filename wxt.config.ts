import { defineConfig } from "wxt";
import htmlMinifier from "vite-plugin-html-minifier";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// See https://wxt.dev/api/config.html
export default defineConfig({
  srcDir: "src",
  extensionApi: "chrome",
  modules: ["@wxt-dev/module-svelte", "@wxt-dev/auto-icons"],

  vite: () => ({
    build: {
      cssMinify: "lightningcss",
    },

    css: {
      transformer: "lightningcss",
    },

    plugins: [
      htmlMinifier({
        minify: true,
      }),
    ],
  }),

  autoIcons: {
    baseIconPath: resolve(__dirname, "src/assets/ducky.svg"),
    grayscaleOnDevelopment: false,
  },
});
