'use strict'
// time cost: 20min13sec
const helper = require("./helper");
//https://www.zybuluo.com/ArrowLLL/note/713749
// A(m,n) = c(i,2i)*c(2i,m)*2**(n-2*i*m) i = [0 , m/2], n = m * m
const timestamp = Date.now()
const p = 10n ** 9n + 7n;
const n = 10n ** 16n;
const m = 10n ** 8n;
const numerators = [1n];
const denominators = [1n];
for (let i = 1n; i <= m / 2n; i++) {
  numerators[i] =
    (numerators[i - 1n] * (m - 2n * i + 2n) * (m - 2n * i + 1n)) % p;
  denominators[i] = (denominators[i - 1n] * i) % p;
}
console.log((Date.now()-timestamp)/1000)
const modCombinatorial = function (k, p) {
  return (
    (numerators[k] *
      helper.modularInverse((denominators[k] * denominators[k]) % p, p)) %
    p
  );
};

const p743Solution = function () {
  let r = helper.modPower(2n, n, p);
  let rr = helper.modPower(2n, m, p);
  for (let i = 1n; i < m / 2n; i++) {
    if(i%10000000n===0n){
      console.log((Date.now()-timestamp)/1000)
    }
    r +=
      (modCombinatorial(i, p) * helper.modPower(rr, 10n ** 8n - 2n * i, p)) % p;
  }
  r += modCombinatorial(m / 2n, p);
  return r % p;
};

console.log(p743Solution());
