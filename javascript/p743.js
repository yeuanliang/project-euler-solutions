"use strict";
// time cost: 1min13sec
const helper = require("./helper");
//https://www.zybuluo.com/ArrowLLL/note/713749
// A(m,n) = c(i,2i)*c(2i,m)*2**(n-2*i*m) i = [0 , m/2], n = m * m
// f(i+1) = f(i)*(m-2*i)*(m-2*i-1)/((i+1)*(i+1)*2**(2*m))
const p = 10n ** 9n + 7n;
const n = 10n ** 16n;
const m = 10n ** 8n;

const p743Solution = function () {
  let r = helper.modPower(2n, n, p);
  let rr = helper.modPower(2n, 2n * m * (p - 2n), p);
  let last = r;
  for (let i = 1n; i <= m / 2n; i++) {
    let inv = helper.exgcd(Number((i * i) % p), Number(p))[1];
    if (inv < 0) {
      inv += Number(p);
    }
    let current =
      (last *
        ((((m - 2n * i + 2n) * (m - 2n * i + 1n)) % p) * BigInt(inv)) *
        rr) %
      p;
    r += current;
    last = current;
  }
  return r % p;
};

console.log(p743Solution());
