const prettierOptions = require('./.prettierrc.js')
const extensions = ['.tsx', '.jsx', '.ts', '.js', '.json']

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    'react',
    '@typescript-eslint',
    'prettier',
    '@fudgi-packages/simple-import-sort',
  ],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      classes: true,
      impliedStrict: true,
      experimentalObjectRestSpread: true,
    },
  },
  settings: {
    'import/resolver': {
      alias: {
        extensions,
        map: [['@', 'src']],
      },
    },
  },
  env: {
    node: true,
    browser: true,
    jasmine: true,
    jest: true,
    es2021: true,
  },
  rules: {
    'no-debugger': ['warn'],
    'prettier/prettier': ['warn', prettierOptions],
    'max-len': ['warn', { code: 140 }],

    'react/prop-types': 'off',
    'react/display-name': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-closing-bracket-location': ['error', 'tag-aligned'],

    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/ban-types': 'off',

    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',

    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: ['../../../*'],
            message: 'USE ALIAS!!!',
          },
        ],
      },
    ],
  },
  globals: {
    module: 'readonly',
    process: 'readonly',
    require: 'readonly',
  },
}
