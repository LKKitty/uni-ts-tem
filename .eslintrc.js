module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: [
    "plugin:prettier/recommended",
    "plugin:vue/essential",
    "eslint:recommended"
  ],
  rules: {
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-unused-vars": "off",
    "no-undef": "off",
    "no-empty": "warn",
    "prettier/prettier": "warn",
    "no-fallthrough": "off"
  },
  parserOptions: {
    parser: "@typescript-eslint/parser"
  }
};
