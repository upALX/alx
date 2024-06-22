module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: "latest", // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  env: {
    browser: true, // Browser global variables
    es2022: true, // Includes ECMAScript 2022 globals
    node: true, // Node.js global variables and Node.js scoping.
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended", // Ensures hooks rules are included
    "plugin:prettier/recommended", // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors
  ],
  plugins: ["react", "react-hooks", "@typescript-eslint"],
  rules: {
    // Define your custom ESLint rules here, if needed.
  },
  settings: {
    react: {
      version: "detect", // Automatically detects the React version
    },
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"], // Your TypeScript files extension
      rules: {
        // Specific rules for TypeScript files
      },
    },
  ],
};
