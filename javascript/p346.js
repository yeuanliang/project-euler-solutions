"use strict";

const p346Solution = function (limit) {
  const root = Math.floor(Math.sqrt(limit));
  const repunits = new Map();
  for (let b = 2; b < root; b++) {
    let n = 1;
    let exp = 1;
    while (n + b ** exp < limit) {
      n += b ** exp;
      if (repunits.has(n)) {
        repunits.set(n, repunits.get(n) + 1);
      } else {
        repunits.set(n, 1);
      }
      exp++;
    }
  }
  let sum = 1n; // 1 is strong repunit
  repunits.forEach((value, key) => {
    if (key > root) {
      sum += BigInt(key);
    } else {
      if (value > 1) {
        sum += BigInt(key);
      }
    }
  });
  return sum;
};

console.log(p346Solution(10 ** 12));
