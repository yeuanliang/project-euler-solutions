"use strict";

const helper = require("./helper");

// d(n,m) = 9**(n-m+1)*c(n,m), m=[n/2+1,n]

const calcC = function (n, mod) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    let half = Math.floor(i / 2);
    let temp = [1];
    for (let j = 1; j <= half; j++) {
      let r = helper.extgcd(mod, j)["y"];
      if (r < 0) {
        r += mod;
      }
      let s = (BigInt(temp[j - 1]) * BigInt(r)) % BigInt(mod);
      temp[j] = (Number(s) * (i - j + 1)) % mod;
    }
    result.push(temp);
  }
  return result;
};

const p788Solution = function (n) {
  const mod = 10 ** 9 + 7;
  const c = calcC(n, mod);
  const max = Math.floor(n / 2) + 1;
  const power9 = [1];
  for (let i = 1; i <= max; i++) {
    power9[i] = (power9[i - 1] * 9) % mod;
  }
  let count = 0n;
  for (let i = 1; i <= n; i++) {
    let m = Math.floor(i / 2) + 1;
    for (let j = m; j <= i; j++) {
      count +=
        (BigInt(power9[i - j + 1]) * BigInt(c[i - 1][i - j])) % BigInt(mod);
    }
  }
  return Number(count % BigInt(mod));
};

console.log(p788Solution(2022));
