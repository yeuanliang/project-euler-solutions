"use strict";

const helper = require("./helper");

const firstTriangularNumberHasNDivisors = function (divisorsCount) {
  let i = 3;
  while (true) {
    let triangularNumber = (i * (i + 1)) / 2;
    let count = 1;
    if ((i + 1) % 2 === 0) {
      count = helper.countDivisors((i + 1) / 2) * helper.countDivisors(i);
    } else {
      count = helper.countDivisors(i / 2) * helper.countDivisors(i + 1);
    }
    if (count > divisorsCount) {
      return triangularNumber;
    } else {
      i = i + 1;
    }
  }
};

console.log(firstTriangularNumberHasNDivisors(500));
