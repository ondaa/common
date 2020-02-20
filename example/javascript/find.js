const { notIncludeNull } = require("../../bin/object");

const testObject = {
  name: "Victor",
  value: null
};

const result = notIncludeNull(testObject);

console.log(result);
