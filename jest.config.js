export default {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',
  extensionsToTreatAsEsm: ['.ts'],
  globals: {
    'ts-jest': {
      useESM: true,
      tsconfig: 'tsconfig.json',
    },
  },
  moduleNameMapper: {
    '^\.\/index.js$': '<rootDir>/src/index.ts',
  },
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { useESM: true, tsconfig: 'tsconfig.json' }],
    '^.+\\.[jt]s$': ['babel-jest', { presets: ['@babel/preset-env'] }],
  },
  transformIgnorePatterns: [
    '/node_modules/(?!(graphql-request)/)',
  ],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
};
