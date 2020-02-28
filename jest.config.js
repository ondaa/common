module.exports = {
  verbose: true,
  transform: {
    "^.+\\.(ts)?$": "ts-jest"
  },
  testRegex: "/test/.*(\\.|/)(test)\\.(ts?)$",
  moduleFileExtensions: ["ts", "js", "node", "json"],
  transformIgnorePatterns: [`${__dirname}/(node_modules)`]
};
