module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-recommended",
    "standard",
    "prettier",
  ],
  overrides: [
    {
      // List of file extensions to lint.
      files: "**/*.{js,jsx,ts,tsx,vue}",
    },
    {
      // Remove when `<setup script>` works with ESLint.
      // https://github.com/vuejs/eslint-plugin-vue/issues/1248
      files: "**/*.vue",
      rules: {
        "@typescript-eslint/no-unused-vars": "off",
        "no-unused-vars": "off",
      },
    },
  ],
  parserOptions: {
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: ["vue", "@typescript-eslint"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "vue/sort-keys": "error",
  },
};
