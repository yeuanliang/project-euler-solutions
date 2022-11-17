"use strict";

// x = y + d, z = y - d; y = 2 * d +/- sqrt(4 * d * d - n)
// 6min35sec
const helper = require("./helper");

const isSingleton = function (n) {
  let count = 0;
  let divisors = helper.genDivisors(n).sort((a, b) => a - b);
  let divisorsCount = divisors.length;
  for (let i = 0; i < divisorsCount / 2; i++) {
    let a = n / divisors[i];
    let b = divisors[i];
    let diff = a - b;
    let sum = a + b;
    if (diff % 2 === 0 && sum % 4 === 0) {
      let k = diff / 2;
      let d = sum / 4;
      if (d > k && k !== 0) {
        return false
      } else {
        count += 1;
      }
    }
    if (count > 1) {
      return false;
    }
  }
  if (count === 1) {
    return true;
  } else {
    return false;
  }
};

const p136Solution = function (limit) {
  let numbersCount = 0;
  for (let i = 1; i < limit; i++) {
    if (isSingleton(i)) {
      numbersCount++;
    }
  }
  return numbersCount;
};

console.log(p136Solution(5 * 10 ** 7));

// time cost: 29sec
// let x = a+d, y = d, and z = a-d, we get x2 - y2 - z2 = a(4d-a) = n.
// let n = uv, such that u = a and v = 4d-a, so u + v = a + 4d-a = 4d.
// n will have a unique solution iff n = 4, 16, p≡-1 mod 4, 4p, 16p (where p is an odd prime).
const p136Solution2 = function (limit) {
  let count = 0;
  for (let i = 1; i < limit; i++) {
    if (i === 4 || i === 16) {
      count++;
    }
    if (helper.isPrime(i)) {
      if ((i + 1) % 4 === 0) {
        if (limit / i > 16) {
          count += 3;
        } else if (limit / i > 4) {
          count += 2;
        } else {
          count++;
        }
      } else if (i !== 2) {
        if (limit / i > 16) {
          count += 2;
        } else if (limit / i > 4) {
          count += 1;
        }
      }
    }
  }
  return count;
};

// console.log(p136Solution2(5 * 10 ** 7));
