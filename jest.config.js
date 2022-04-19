// @see https://nextjs.org/docs/testing#setting-up-jest-with-the-rust-compiler
const nextJest = require('next/jest');
const path = require('path');

const createJestConfig = nextJest({
  dir: path.join(__dirname, './'),
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
};

module.exports = createJestConfig(customJestConfig);
