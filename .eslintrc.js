module.exports = {
  extends: ["next/core-web-vitals"],
  rules: {
    "@typescript-eslint/no-unused-vars": "warn", // Downgrade from error to warning
    "@typescript-eslint/prefer-nullish-coalescing": "warn", // Downgrade from error to warning
  },
}; 