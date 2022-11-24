"use strict";

const helper = require("./helper");

const p129Solution = function () {
  let start = 10 ** 6 + 1;
  while (true) {
    if (start % 5 === 0) {
      start += 2;
    }
    let k = helper.findRepunit(start);
    if (k > 1000000) {
      return start;
    }
    start += 2;
  }
};

console.log(p129Solution());
