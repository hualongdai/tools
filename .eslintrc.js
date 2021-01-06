module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    semi: 'error',
    indent: [
        'error',
        4,
    ],
    quotes: [
        'error',
        'single',
    ],
    'lines-between-class-members': [
        'error',
        'always',
        {
            exceptAfterSingleLine: true,
        },
    ],
    'max-len': [
        'error',
        {
            code: 120,
            tabWidth: 4,
        },
    ],
    'no-param-reassign': [
        'error',
        {
            props: false,
        },
    ],
    'prefer-promise-reject-errors': 'off',
    'vue/html-indent': [
        'error',
        4,
        {
            attribute: 1,
            baseIndent: 1,
            closeBracket: 0,
            alignAttributesVertically: true,
            ignores: [],
        },
    ],
  },
};
