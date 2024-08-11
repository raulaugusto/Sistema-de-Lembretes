module.exports = {
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest"
  },
  testEnvironment: 'jsdom',
  moduleFileExtensions: ["js", "jsx"],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  transformIgnorePatterns: ["/node_modules/(?!(axios|some-other-dependency)/)"],
  moduleNameMapper: {
    '\\.(scss|css)$': 'identity-obj-proxy', // Mocks para arquivos CSS/SCSS
  },
};
