module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
  plugins: [],
  // add your custom rules here
  rules: {
    semi: ['warn', 'never'],
    quotes: [
      'warn',
      'single',
      { allowTemplateLiterals: true, avoidEscape: true },
    ],
    'no-console': 'off',
    'import/no-named-as-default-member': 'off',
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['index', 'default', 'error', 'empty'],
      },
    ],
  },
}
