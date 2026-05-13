import js from "@eslint/js";
import nextPlugin from "@next/eslint-plugin-next";

export default [
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "jest.config.cjs"
    ],
  },

  js.configs.recommended,

  {
    plugins: {
      "@next/next": nextPlugin,
    },

    rules: {},
  },
];