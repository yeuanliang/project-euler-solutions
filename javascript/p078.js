"use strict";

// https://en.wikipedia.org/wiki/Partition_function_(number_theory)
const partitionFunction = function (n) {
  const pn = [1n, 1n];
  for (let i = 2n; i <= n; i++) {
    let k = 1n;
    let acc = 0n;
    const g1 = (k) => i - (k * (3n * k - 1n)) / 2n;
    const g2 = (k) => i - (k * (3n * k + 1n)) / 2n;
    const f = (x) => (x >= 0n ? pn[x] : 0n);
    while (g1(k) >= 0n) {
      acc += (-1n) ** (k + 1n) * (f(g1(k)) + f(g2(k)));
      k += 1n;
    }
    pn.push(acc);
  }
  return pn;
};

const p078Solution = function (limit) {
  const guess = 100000n;
  const ways = partitionFunction(guess);
  for (let i = 0; i < ways.length; i++)
    if (ways[i] % limit === 0n) {
      console.log(i);
      console.log(ways[i]);
      return i;
    }
};

console.log(p078Solution(10n ** 6n));
