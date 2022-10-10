"use strict";

const helper = require("./helper");

const p025BigIntSolution = function (t) {
  let a = 1n;
  let b = 1n;
  let c = 0n;
  let number = 2;
  while (true) {
    c = a + b;
    number += 1;
    if (c.toString().length === t) {
      break;
    }
    a = b;
    b = c;
  }
  return number;
};

const p025Solution = function (length) {
  let a = [1];
  let b = [1];
  let c = [];
  let number = 2;
  while (true) {
    c = helper.bigNumberSum(a, b);
    number += 1;
    if (c.length === length) {
      break;
    }
    a = b;
    b = c;
  }
  return number;
};

console.log(p025Solution(1000));
