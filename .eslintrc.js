const reactAppConfig = require('eslint-config-react-app')
const { overrides } = reactAppConfig
const rules = {
  ...overrides.rules,
  '@typescript-eslint/no-unused-vars': 'off',
  'no-unused-vars': 'off',
}

module.exports = {
  extends: ['react-app'],
  overrides: { ...overrides, rules },
}
