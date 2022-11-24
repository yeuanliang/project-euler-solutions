"use strict";

// time cost: 2m 9s

const helper = require("./helper");

// const findNumber = function (p1, p2) {
//   const exp = (p1 + "").length;
//   let i = 3;
//   while (true) {
//     let t = p2 * i;
//     if (t % 10 ** exp === p1) {
//       return t;
//     }
//     i += 2;
//     if(p1!==5&&i%5===0){
//         i+=2
//     }
//   }
// };

const findNumber = function (p1, p2) {
  const exp = (p1 + "").length;
  const r1 = p2 - p1;
  const r2 = 10 ** exp % p2;
  // r2*k ≡ r1 (mod p2)
  let y = helper.extgcd(p2, r2)["y"];
  if (y < 0) {
    y += p2;
  }
  let t = ((r1 * y) % p2) * 10 ** exp + p1;
  return t;
};

const p134Solution = function () {
  const primes = helper.getPrimes(1000100);
  const p = primes.slice(2);
  let i = 0;
  let sum = 0n;
  while (p[i] < 1000000) {
    let t = findNumber(p[i], p[i + 1]);
    sum += BigInt(t);
    i++;
  }
  return sum;
};

console.log(p134Solution());
