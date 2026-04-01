module.exports = [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'commonjs',
      globals: {
        test: 'readonly',
        expect: 'readonly',
        module: 'readonly',
        require: 'readonly',
      },
    },
    rules: {
      'max-len': ['error', { code: 80 }],
    },
  },
];