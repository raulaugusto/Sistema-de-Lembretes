module.exports = {
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest"
  },
  testEnvironment: 'jsdom',
  moduleFileExtensions: ["js", "jsx"],
  transformIgnorePatterns: ["/node_modules/(?!(axios|some-other-dependency)/)"],
  moduleNameMapper: {
    '\\.(scss|css)$': 'identity-obj-proxy', // Mocks para arquivos CSS/SCSS
  },
  testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"],
  testEnvironment: "jsdom",
};

