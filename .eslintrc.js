module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  env: {
    browser: true,
    es6: true,
    node: true,
    'jest/globals': true,
  },
  extends: [
    'airbnb',
    'prettier',
    'plugin:jest/recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'prettier/react',
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
  plugins: ['react', 'jest'],
  rules: {
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    'linebreak-style': ['error', 'windows'],
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
    '@typescript-eslint/explicit-function-return-type': 'off',
    'import/no-extraneous-dependencies': ['error', { packageDir: ['.'] }], // ignore all package.json except the one in root folder
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
    'import/resolver': {
      node: {
        paths: ['.'],
      },
    },
  },
  overrides: [
    // https://github.com/eslint/typescript-eslint-parser/issues/437
    // Disable no-undef rule for ts files
    {
      files: ['**/*.{ts, tsx}'],
      rules: {
        'no-undef': 'off',
      },
    },
  ],
};
