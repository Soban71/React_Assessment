module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.css$": "jest-css-modules-transform",
  },
  transformIgnorePatterns: ["/node_modules/(?!axios)/"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  moduleFileExtensions: ["js", "jsx"],
};
