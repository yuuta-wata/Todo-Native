module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    semi: ['off', 'always'],
    '@typescript-eslint/no-unused-vars': ['warn'],
    'react-native/no-inline-styles': ['off', 'always'],
    'comma-dangle': ['off', 'always'],
    'eol-last': ['off'],
    'no-trailing-spaces': ['off'],
    'prettier/prettier': ['off', { htmlWhitespaceSensitivity: 'ignore' }],
    curly: ['off']
  }
}
