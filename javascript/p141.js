"use strict";
const helper = require("./helper");

const genPerfectSquares = function (limit) {
  // n = d * q + r (r < d, q; if d < q -> r * q = d * d)
  // a < b
  // r = a * a * c
  // d = a * b * c
  // q = b * b * c
  // n = a * b^3 * c^2 + a^2 * c
  const perfectSquares = new Set();
  for (let a = 1; a * a * a * a < limit; a++) {
    for (let b = a + 1; b * b * b < limit; b++) {
      if (helper.gcd(a, b) === 1) {
        let c = 1;
        let aa = a * a;
        let abbb = a * b * b * b;
        let n = aa * c + abbb * c * c;
        if (n > limit) {
          break;
        }
        while (n < limit) {
          if (helper.isSquare(n)) {
            perfectSquares.add(n);
          }
          c += 1;
          n = aa * c + abbb * c * c;
        }
      }
    }
  }
  return Array.from(perfectSquares).sort((a, b) => a - b);
};

const p141Solution2 = function () {
  const perfectSquares = genPerfectSquares(10 ** 12);
  return perfectSquares.reduce((x, y) => x + y);
};

console.log(p141Solution2());

const isProgressive = function (n) {
  let d = 2;
  while (d < Math.sqrt(n)) {
    if (n % d === 0) {
      d++;
    }
    let q = Math.floor(n / d);
    let r = n % d;
    if (d * d === q * r || q * q == d * r) {
      return true;
    }
    d++;
  }
  return false;
};

const p141Solution = function (limit) {
  let t = Date.now();
  let sum = 0;
  for (let i = 2; i * i < limit; i++) {
    if (isProgressive(i * i)) {
      sum += i * i;
    }
  }
  return sum;
};

// 2h26min43s
// console.log(p141Solution(10**12))
