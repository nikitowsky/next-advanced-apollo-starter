module.exports = {
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '<rootDir>/__tests__/__mocks__/',
  ],
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
};
