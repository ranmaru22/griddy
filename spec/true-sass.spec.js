const path = require("path");
const sassTrue = require("sass-true");

const sassFile = path.join(__dirname, "true-sass-tests/sass_tests.scss");
sassTrue.runSass(
  {
    file: sassFile,
  },
  {
    sass: require("sass"),
    describe,
    it,
  }
);
