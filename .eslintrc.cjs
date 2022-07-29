module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    // node: true,
    "vue/setup-compiler-macros": true,
  },
  extends: ["eslint:recommended", "@vue/typescript/recommended", "plugin:vue/vue3-essential", "prettier"],
  parserOptions: {
    ecmaVersion: 13,
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "vue"],
  rules: {
    "vue/first-attribute-linebreak": [
      "error",
      {
        singleline: "beside",
        multiline: "below",
      },
    ],
    "vue/max-attributes-per-line": [
      "error",
      {
        singleline: {
          max: 1,
        },
        multiline: {
          max: 1,
        },
      },
    ],
    "vue/html-indent": ["error"],
    "vue/html-closing-bracket-newline": [
      "error", {
      "singleline": "never",
      "multiline": "always"
    }]
  },
}
