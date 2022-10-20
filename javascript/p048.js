"use strict";

const helper = require("./helper.js");

const p048Solution = function (limit) {
  let result = [];
  for (let i = limit; i > 0; i--) {
    result = helper.bigNumberSum(helper.customPower(i, i), result);
  }
  return result.slice(-10);
};

console.log(p048Solution(1000));
