"use strict";

const genNext = function (n) {
  return String(n)
    .split("")
    .map((item) => +item * +item)
    .reduce((x, y) => x + y);
};
const arrives = new Map();

const countChain = function (n) {
  let num = n;
  while (num !== 89 && num !== 1) {
    if (arrives.has(num)) {
      return arrives.get(num);
    }
    num = genNext(num);
  }
  arrives.set(n, num);
  return num;
};

const p092Solution = function (limit) {
  let count = 0;
  for (let i = 1; i < limit; i++) {
    let arrive = countChain(i);
    if (arrive === 89) {
      count++;
    }
  }
  return count;
};

console.log(p092Solution(10 ** 7));
