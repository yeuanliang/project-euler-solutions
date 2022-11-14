"use strict";
// time cost: 9min13sec
const helper = require("./helper");
//https://www.zybuluo.com/ArrowLLL/note/713749
// A(m,n) = c(i,2i)*c(2i,m)*2**(n-2*i*m) i = [0 , m/2], n = m * m
const p = 10n ** 9n + 7n;
const n = 10n ** 16n;
const m = 10n ** 8n;

const p743Solution = function () {
  let r = helper.modPower(2n, n, p);
  let rr = helper.modPower(2n, m, p);
  let last = 1n;
  for (let i = 1n; i <= m / 2n; i++) {
    let inv = helper.exgcd(Number((i * i) % p), Number(p))[1];
    if (inv < 0) {
      inv += Number(p);
    }
    let current =
      (last * ((((m - 2n * i + 2n) * (m - 2n * i + 1n)) % p) * BigInt(inv))) %
      p;
    r += (current * helper.modPower(rr, 10n ** 8n - 2n * i, p)) % p;
    last = current;
  }
  return r % p;
};

console.log(p743Solution());
