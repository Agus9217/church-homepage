module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'i18n'],
  rules: {
    'react/jsx-pascal-case': 'off'['error', {
      allowAllCaps: true,  // Permite mayúsculas en identificadores JSX
      ignore: [],  // Puedes agregar más excepciones aquí
    }],

    'i18n/no-non-english-keywords': [
      'error',
      {
        checkStrings: false, // Puedes ajustar esto según tus necesidades
        checkTemplateLiterals: false, // Puedes ajustar esto según tus necesidades
      },
    ],
    //'react-refresh/only-export-components': [
    //  'warn',
    //  { allowConstantExport: true },
    //],
  },
}
