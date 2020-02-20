import { notIncludeNull } from "../../bin/object";

const testObject = {
  name: "Octoper",
  value: null
};

const key = notIncludeNull(testObject);

console.log(key);
