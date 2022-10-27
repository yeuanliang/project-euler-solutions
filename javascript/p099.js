"use strict";

const helper = require("./helper");

const p099Solution = function () {
  const data = helper
    .readFile("p099_base_exp.txt")
    .split("\n")
    .map((item) => item.split(",").map((s) => +s));
  let max = 0;
  let lineNumber = 0;
  for (let i = 0; i < data.length; i++) {
    let log = data[i][1] * Math.log10(data[i][0]);
    if (log > max) {
      max = log;
      lineNumber = i + 1;
    }
  }
  return lineNumber;
};

console.log(p099Solution());
