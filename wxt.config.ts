import path from "node:path";
import { defineConfig } from "wxt";
import htmlMinifier from "vite-plugin-html-minifier";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// See https://wxt.dev/api/config.html
export default defineConfig({
  srcDir: "src",
  extensionApi: "chrome",
  modules: ["@wxt-dev/module-svelte", "@wxt-dev/auto-icons"],

  vite: () => ({
    build: {
      cssMinify: "lightningcss",
    },

    plugins: [
      htmlMinifier({
        minify: true,
      }),
    ],
  }),

  autoIcons: {
    baseIconPath: path.resolve(__dirname, "src/assets/ducky.svg"),
    grayscaleOnDevelopment: false,
  },
});
