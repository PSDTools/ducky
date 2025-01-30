/** @type {import('prettier').Config} */
export default {
  plugins: ["prettier-plugin-svelte"],
  trailingComma: "all",
  singleQuote: false,
  semi: true,
  tabWidth: 2,
  useTabs: false,
  endOfLine: "lf",
  experimentalTernaries: true,
  overrides: [
    {
      files: "*.svelte",
      options: {
        parser: "svelte",
      },
    },
  ],
};
