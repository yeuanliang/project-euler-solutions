"use strict";

const helper = require("./helper");

// time cost: 33s

const calChain = function (n, limit = 10 ** 6) {
  let num = n;
  let sumDivisors = 0;
  let chain = [num];
  while (true) {
    sumDivisors = helper.sumOfDivisors(num) - num;
    if (sumDivisors > limit || sumDivisors === 0) {
      chain = null;
      break;
    }
    if (chain.includes(sumDivisors)) {
      if (sumDivisors === n) {
        break;
      } else {
        chain = null;
        break;
      }
    } else {
      chain.push(sumDivisors);
    }
    num = sumDivisors;
  }
  return chain;
};

const p095Solution = function () {
  let maxLength = 0;
  let chain = [];
  const limit = 10 ** 6;
  for (let i = 1; i < limit; i++) {
    let c = calChain(i);
    if (c && c.length > maxLength) {
      maxLength = c.length;
      chain = c;
    }
  }
  console.log(chain);
  return Math.min(...chain);
};

console.log(p095Solution());
