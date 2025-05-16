import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Extend Next.js and TypeScript configurations
  ...compat.config({
    env: {
      browser: true,
      node: true,
      es2021: true,
    },
    extends: [
      "next", // Next.js recommended rules
      "plugin:@typescript-eslint/recommended", // TypeScript recommended rules
    ],
    parser: "@typescript-eslint/parser", // TypeScript parser
    plugins: ["@typescript-eslint"], // TypeScript ESLint plugin
    rules: {
      // Your existing rules
      "react/no-unescaped-entities": "off",
      "@next/next/no-page-custom-font": "off",
      // Disable the problematic TypeScript rule
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/ban-ts-comment": "off"
    },
  }),
];

export default eslintConfig;