const OFF = 0;
/* const WARNING = 1; */
const ERROR = 2;

module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    jest: true,
    node: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    allowImportExportEverywhere: true,
  },
  extends: ['airbnb'],
  plugins: ['react-hooks'],
  rules: {
    // Ignore certain webpack alias because it can't be resolved
    'import/extensions': OFF,
    'react/jsx-closing-bracket-location': OFF, // Conflicts with Prettier.
    'react/jsx-filename-extension': OFF,
    'react-hooks/rules-of-hooks': ERROR,
    'react/prop-types': OFF, // PropTypes aren't used much these days.
  },
  overrides: [
    {
      files: ['*.md', '*.mdx'],
      extends: 'plugin:mdx/recommended',
      rules: {
        'import/prefer-default-export': OFF,
      },
    },
  ],
};

