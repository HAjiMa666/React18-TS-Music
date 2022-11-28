const { off } = require('process')

/*
 * @Author: czx
 * @Date: 2022-11-28 18:46:35
 * @LastEditTime: 2022-11-28 19:42:23
 * @LastEditors: czx
 * @Description:
 */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-var-requires': 'off'
  }
}
