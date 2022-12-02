"use strict";

// time cost: 14m 31s
// a^2 - c*b^2 = p^3
// 3*p = 1 - 2*a , a = 3*k-1, p = 1-2*k
// k^2*(8*k-3) = c*b^2 (k>=1)
// p = gcd(b,k), b = p*r, k = p*q, q^2*(8*k-3) = c*r^2, r is odd
// 8*k-3 = s*r^2, c = s*q^2, gcd(q,r) = 1, a = 3*p*q-1
// 8*p*q = s*r^2+3, a+b+c = 3*p*q+p*r+s*q^2 <= limit+1

const helper = require("./helper");
const p251Solution = function (limit) {
  let count = 0;
  let k = 1;
  while (true) {
    let a = 3 * k - 1;
    let m = 8 * k - 3;
    let r = Math.floor(Math.sqrt(m));
    let t = Math.floor(Math.sqrt(k));
    let d1 = [];
    for (let j = 3; j <= r; j += 2) {
      if (m % (j * j) === 0) {
        d1.push(j);
      }
    }
    let d2 = [];
    for (let i = 1; i <= t; i++) {
      if (k % i === 0 && i * i !== k) {
        d2.push(i);
        d2.push(k / i);
      } else if (i * i === k) {
        d2.push(i);
      }
    }
    let d = [].concat(d2);
    if (d1.length > 0) {
      for (let i = 0; i < d1.length; i++) {
        for (let j = 0; j < d2.length; j++) {
          let product = d1[i] * d2[j];
          if (!d.includes(product)) {
            d.push(product);
          }
        }
      }
    }
    for (let i = 0; i < d.length; i++) {
      let b = d[i];
      let c = (BigInt(k) * BigInt(k) * BigInt(m)) / (BigInt(b) * BigInt(b));
      if (a + b + Number(c) <= limit) {
        count++;
      }
    }
    k++;
    if (k > limit / 6) {
      break;
    }
  }
  return count;
};

console.log(p251Solution(110000000));
