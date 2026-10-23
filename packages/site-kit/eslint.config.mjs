import nextConfig from "@arismile/config/eslint/next";

const config = [
  ...nextConfig,
  {
    // Pages Router rule; this package has no pages directory.
    rules: { "@next/next/no-html-link-for-pages": "off" },
  },
];

export default config;
