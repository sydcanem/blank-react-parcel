module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/recommended",
    "plugin:prettier/recommended"
  ],
  plugins: ["react-hooks", "prettier"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "prettier/prettier": ["error", { "singleQuote": true }],
    quotes: [2, "single", "avoid-escape"]
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};
