module.exports = {
  rootDir: '.',
  //globalSetup: '<rootDir>/test/config/globalSetup.js',
  // globalTeardown: '<rootDir>/test/config/globalTeardown.ts',
  setupFiles: ['<rootDir>/test/config/dotenv-config.js'],
  setupFilesAfterEnv: ['<rootDir>/test/config/envSetup.js'],
  testMatch: ['<rootDir>/test/*.js'],
  moduleFileExtensions: ['js'],
  modulePathIgnorePatterns: ['helpers', 'config', 'seeders'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/test/helpers/',
    '/test/config/',
    '/test/seeders/'
  ],
  verbose: true,
  collectCoverage: false,
  testTimeout: 5000,
  testEnvironment: 'node'
};
