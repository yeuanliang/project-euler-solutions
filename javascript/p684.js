"use strict";

const p = 10n ** 9n + 7n;
const fibs = [0n, 1n];
for (let i = 2n; i <= 90n; i++) {
  fibs[i] = fibs[i - 1n] + fibs[i - 2n];
}
// console.log(fibs)
// const s = function(n){
//     const a = n%9n
//     const e=(n-a)/9n
//     return a*10n**e+10n**e-1n
// }

// const ssNormal = function(n){
//     let sum=0n
//     for(let i=1n;i<=n;i++){
//         sum+=s(i)
//     }
//     return sum
// }

const ss = function (n) {
  const r = n % 9n;
  const q = (n - r) / 9n;
  return [(r * r + 3n * r + 12n) / 2n, q, n + 6n];
};

const mod = function (a, b, c) {
  let r = 0n;
  if(b>=p-1n){
    b=b%(p-1n)
  }
  if(c>=p){
    c=c%p
  }
  if (b < 9n) {
    r = a * 10n ** b - c;
  } else if (b >= 9 && b < p - 1n) {
    let base = -7n;
    let t = b % 9n;
    let exp = (b - t) / 9n;
    let k = a * 10n ** t;
    r = (k * modPower(base, exp) - c) % p;
    if (r < 0n) {
      r = p + r;
    }
  }
  return r;
};

const modPower = function (base, n) {
  if (n === 0n) {
    return 1n;
  } else if (n === 1n) {
    return base % p;
  }
  let sqrt = modPower(base, n / 2n);
  let mul = 1n;
  if (n % 2n === 1n) {
    mul = base;
  }
  return (mul * sqrt * sqrt) % p;
};

const p684Solution = function () {
  let r = 0n;
  for (let i = 2; i <= 90; i++) {
    let s = ss(fibs[i]);
    let rr = mod(...s);
    r += rr;
  }
  if (r > p) {
    r = r % p;
  }
  return r;
};

console.log(p684Solution());
