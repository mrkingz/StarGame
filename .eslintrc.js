module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "curly": 0,
    "comma-dangle": 0,
    "arrow-parens": 0,
    "no-plusplus": 0,
    "default-case": 0,
    "arrow-body-style": 0,
    "padded-blocks": 0,
    "no-trailing-spaces": 0,
    "nonblock-statement-body-position": 0,
    "react/button-has-type": 0,
    "react/no-array-index-key": 0,
    "react/prop-types": 0,
    "react/jsx-fragments": 0,
    "react/jsx-one-expression-per-line": 0,
    "react/destructuring-assignment": 0,
    "global-require": 0,
    "import/no-dynamic-require": 0,
    "import/no-extraneous-dependencies": 0,
    "quotes": ["error", "single"],
  },
};
