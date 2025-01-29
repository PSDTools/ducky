import { defineConfig } from "wxt";
import htmlMinifier from "vite-plugin-html-minifier";

// See https://wxt.dev/api/config.html
export default defineConfig({
  srcDir: "src",
  extensionApi: "chrome",
  modules: ["@wxt-dev/module-svelte", "@wxt-dev/unocss"],
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
});
