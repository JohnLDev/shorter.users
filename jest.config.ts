import type { JestConfigWithTsJest } from 'ts-jest'

const config: JestConfigWithTsJest = {
  bail: 0,
  testEnvironment: 'node',
  clearMocks: true,
  collectCoverage: false,
  collectCoverageFrom: ['src/domain/**/*.ts', 'src/business/useCases/**/*.ts', 'src/shared/**/*.ts', '!src/**/*.d.ts'],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  coverageReporters: ['json', 'text', 'lcov', 'clover'],
  moduleFileExtensions: ['js', 'ts', 'json', 'node'],
  preset: 'ts-jest',
  testRegex: '/.*.spec.ts$',
  moduleNameMapper: {
    '@domain/(.*)': '<rootDir>/src/1-domain/$1',
    '@business/(.*)': '<rootDir>/src/2-business/$1',
    '@controller/(.*)': '<rootDir>/src/3-controller/$1',
    '@framework/(.*)': '<rootDir>/src/4-framework/$1',
    '@shared/(.*)': '<rootDir>/src/shared/$1',
    '@tests/(.*)': '<rootDir>/tests/$1'
  }
}

export default config
