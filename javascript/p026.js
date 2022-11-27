"use strict";

// a fraction contains a numerator and a non-zero denominator
// division, divisor, dividend, quotient, remainder,
const unitFraction = function (d) {
  if (!Number.isInteger(d)) {
    return -1;
  }
  if (Number.isInteger(d) && d < 2) {
    return -1;
  }
  const result = [];
  const remainders = [1];
  let hasCycle = true;
  let cycleStartAt = 0;
  let divisor = 1;
  while (true) {
    divisor *= 10;
    if (divisor % d === 0) {
      hasCycle = false;
      result.push(divisor / d);
      return { result };
    }
    let remainder = divisor % d;
    let quotient = Math.floor(divisor / d);
    result.push(quotient);
    if (remainders.includes(remainder)) {
      cycleStartAt = remainders.indexOf(remainder);
      break;
    } else {
      remainders.push(remainder);
      divisor = remainder;
    }
  }
  return {
    result,
    cycleStartAt,
  };
};

const p026Solution = function (n) {
  let result = {
    max: 0,
  };
  let cycleLength = 0;
  for (let i = 2; i < n; i++) {
    const info = unitFraction(i);
    if (info.hasOwnProperty("cycleStartAt")) {
      cycleLength = info.result.length - info.cycleStartAt;
      if (cycleLength > result.max) {
        result = {
          max: cycleLength,
          number: i,
          cycleInfo: info,
        };
      }
    }
  }
  return result;
};

console.log(p026Solution(1000));
