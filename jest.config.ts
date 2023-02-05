import type { JestConfigWithTsJest } from 'ts-jest'

const config: JestConfigWithTsJest = {
  bail: 0,
  testEnvironment: 'node',
  clearMocks: true,
  collectCoverage: false,
  collectCoverageFrom: ['src/domain/**/*.ts', 'src/business/**/*.ts', 'src/shared/**/*.ts', '!src/**/*.d.ts'],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  coverageReporters: ['json', 'text', 'lcov', 'clover'],
  moduleFileExtensions: ['js', 'ts', 'json', 'node'],
  preset: 'ts-jest',
  testRegex: '/.*.spec.ts$',
  moduleNameMapper: {
    '@domain/(.*)': '<rootDir>/src/domain/$1',
    '@business/(.*)': '<rootDir>/src/business/$1',
    '@shared/(.*)': '<rootDir>/src/shared/$1',
    '@framework/(.*)': '<rootDir>/src/framework/$1'
  }
}

export default config
