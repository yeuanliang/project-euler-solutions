"use strict";

const helper = require("./helper");

// use BigInt
// const result = Array.from(BigInt(2 ** 1000).toString()).reduce(
//   (x, y) => +x + +y
// );
// console.log(result);

// don't use BigInt

console.log(helper.customPower(2, 1000).reduce((x, y) => x + y));
