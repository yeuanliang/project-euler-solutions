"use strict";
const helper = require("./helper.js");
const findPandigitals = function () {
  let result = [];
  for (let i = 0; i < 10; i++) {
    for (let j = 1000; j < 10000; j++) {
      if (i * j > 10000) {
        break;
      }
      let s = i + "" + j + i * j;
      if (helper.isPandigital(s) && !result.includes(i * j)) {
        result.push(i * j);
      }
    }
  }
  for (let i = 11; i < 100; i++) {
    for (let j = 101; j < 1000; j++) {
      if (i * j > 10000) {
        break;
      }
      let s = i + "" + j + i * j;
      if (helper.isPandigital(s) && !result.includes(i * j)) {
        result.push(i * j);
      }
    }
  }
  return result;
};

console.log(findPandigitals().reduce((x, y) => x + y));
