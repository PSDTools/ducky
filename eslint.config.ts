import { includeIgnoreFile } from "@eslint/compat";
import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import svelte from "eslint-plugin-svelte";
import unicorn from "eslint-plugin-unicorn";
import globals from "globals";
import { fileURLToPath } from "node:url";
import ts from "typescript-eslint";
const gitignorePath = fileURLToPath(new URL("./.gitignore", import.meta.url));

const error = "error";
const warn = "warn";
const off = "off";

export default ts.config(
  includeIgnoreFile(gitignorePath),
  { linterOptions: { reportUnusedDisableDirectives: warn } },
  js.configs.recommended,
  ...ts.configs.strictTypeChecked,
  ...ts.configs.stylisticTypeChecked,
  unicorn.configs["flat/recommended"],
  ...svelte.configs["flat/recommended"],
  prettier,
  ...svelte.configs["flat/prettier"],
  {
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        extraFileExtensions: [".svelte"],
        projectService: {
          allowDefaultProject: [".prettierrc.js"],
        },
        tsconfigRootDir: import.meta.dirname,
        parser: ts.parser,
      },
    },
  },
  {
    files: ["**/*.{js,ts,svelte}"],
    rules: {
      "no-undef": off,
      "arrow-body-style": off,
      curly: [error, "multi-line"],
      "func-style": [error, "declaration", { allowArrowFunctions: true }],
      "no-console": warn,
      "no-negated-condition": off,
      "no-nested-ternary": off,
      "no-plusplus": [error, { allowForLoopAfterthoughts: true }],
      "no-void": [error, { allowAsStatement: true }],
      "operator-assignment": [warn, "always"],
      "prefer-destructuring": off,

      "@typescript-eslint/ban-ts-comment": [
        error,
        {
          "ts-check": false,
          "ts-expect-error": { descriptionFormat: String.raw`^\(TS\d+\): .+$` },
        },
      ],
      "@typescript-eslint/explicit-function-return-type": [
        warn,
        { allowExpressions: true },
      ],
      "@typescript-eslint/explicit-module-boundary-types": "error",
      "@typescript-eslint/naming-convention": off,
      "@typescript-eslint/no-confusing-void-expression": warn,
      "@typescript-eslint/no-non-null-assertion": off,
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "all",
          argsIgnorePattern: "^_",
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          varsIgnorePattern: "^_",

          ignoreRestSiblings: true,
        },
      ],
      "@typescript-eslint/prefer-destructuring": warn,
      "@typescript-eslint/prefer-function-type": warn,
      "@typescript-eslint/promise-function-async": warn,
      "@typescript-eslint/restrict-template-expressions": [
        error,
        { allowNumber: true },
      ],
      "@typescript-eslint/return-await": [error, "always"],
      "@typescript-eslint/strict-boolean-expressions": warn,
      "@typescript-eslint/switch-exhaustiveness-check": error,

      "unicorn/relative-url-style": [warn, "always"],
      "unicorn/prevent-abbreviations": [
        error,
        { allowList: { Props: true, props: true, env: true } },
      ],
    },
  },
  {
    files: ["*.js"],
    rules: {
      "@typescript-eslint/explicit-function-return-type": off,
      "@typescript-eslint/explicit-module-boundary-types": off,
      "@typescript-eslint/no-unsafe-assignment": off,
      "@typescript-eslint/parameter-properties": off,
      "@typescript-eslint/typedef": off,
    },
  },
  {
    files: ["**/*.svelte"],
    rules: {
      // Rules that don't work well with Svelte.
      "@typescript-eslint/no-confusing-void-expression": off,
      "@typescript-eslint/no-unsafe-argument": off,
      "@typescript-eslint/no-unsafe-assignment": off,
      "@typescript-eslint/no-unsafe-call": off,
      "unicorn/filename-case": off,

      // Security Vulnerability
      "svelte/no-target-blank": warn,

      // Best Practices
      "prefer-const": off,
      "svelte/block-lang": [warn, { script: "ts" }],
      "svelte/button-has-type": warn,
      "svelte/no-inline-styles": warn,
      "svelte/prefer-const": warn,
      "svelte/require-optimized-style-attribute": warn,

      // Stylistic Issues
      "svelte/consistent-selector-style": [warn, { style: ["class"] }],
      "svelte/html-self-closing": warn,
      "svelte/prefer-class-directive": warn,
      "svelte/prefer-style-directive": warn,
      "svelte/shorthand-attribute": warn,
      "svelte/shorthand-directive": warn,
      "svelte/sort-attributes": warn,
      "svelte/spaced-html-comment": warn,
    },
  },
);
