const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './'
})

const customJestConfig = {
  collectCoverageFrom: [
    'src/components/**/*.{ts,tsx}',
    '!src/components/layout/*.{ts,tsx}',
  ],
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/$1'
  },
  modulePathIgnorePatterns: ['<rootDir>/.next/standalone/package.json'],
  setupFilesAfterEnv: ['./__tests__/setupTests.ts'],
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['**/__tests__/**/*.test.ts?(x)']
}

module.exports = createJestConfig(customJestConfig)
