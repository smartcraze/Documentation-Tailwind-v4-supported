import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    env: {
      browser: true,
      node: true,
      es2021: true,
    },
    extends: [
      "next/core-web-vitals", // more production-focused than just "next"
      "plugin:@typescript-eslint/recommended",
    ],
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    rules: {
      // Reasonable overrides
      "react/no-unescaped-entities": "warn", // not "off" in prod; just warn
      "@next/next/no-page-custom-font": "warn", // allow flexibility, but still get warning
      "@typescript-eslint/no-explicit-any": "warn", // discourage in prod
      "@typescript-eslint/ban-ts-comment": "warn", // allows, but shows warning
    },
  }),
];

export default eslintConfig;
