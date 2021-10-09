module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  globals: {
    test: 'readable',
    expect: 'readable'
  },
  rules: {
    'no-extend-native': 0
  }
}
