import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([".next/**", "out/**", "node_modules/**", "next-env.d.ts"]),
  {
    rules: {
      // Pages Router rule; a <link> font in app/layout.tsx already loads site-wide.
      "@next/next/no-page-custom-font": "off",
    },
  },
]);
