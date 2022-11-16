"use strict";

const sumSquares = function (limit) {
  const p = BigInt(10 ** 9 + 7);
  const root = Math.floor(Math.sqrt(limit));
  const a = [0];
  let sum = 0n;
  for (let i = 1; i <= root; i++) {
    a[i] = 1;
  }
  for (let i = root; i > 0; i--) {
    let s = 0;
    for (let j = 2; j <= Math.floor(root / i); j++) {
      s += a[i * j];
    }
    a[i] = Math.floor(limit / (i * i))-s;
  }
  for (let i = 1; i < a.length; i++) {
    sum += BigInt(i * i * a[i]) % p;
  }
  return sum % p;
};

const p745Solution = function (limit) {
  return sumSquares(limit)
};

console.log(p745Solution(10 ** 14));
