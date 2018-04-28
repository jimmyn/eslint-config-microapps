const prettierConfig = require('./prettier.config');

module.exports = {
  extends: ['eslint:recommended', 'prettier'],
  plugins: ['prettier'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 8
  },
  env: {
    es6: true,
    node: true,
    jest: true
  },
  rules: {
    'prettier/prettier': ['warn', prettierConfig]
  }
};
