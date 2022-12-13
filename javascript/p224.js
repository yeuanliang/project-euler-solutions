"use strict";

// https://en.wikipedia.org/wiki/Tree_of_primitive_Pythagorean_triples
// a*a+1 = (c-b)*(c+b)
// limitA = limit/(2+Math.SQRT2)

const helper = require("./helper");
// time cost: 2d 5h 6m 36s
const p224Solution = function (limit) {
  const limitA = Math.floor(limit / (2 + Math.SQRT2));
  let count = 0;
  for (let a = 2; a < limitA; a += 2) {
    let product = a * a + 1;
    let divisors = helper.genDivisors(product).sort((a, b) => a - b);
    for (let j = 0; divisors[j] < a; j++) {
      let k = product / divisors[j];
      let b = (k - divisors[j]) / 2;
      if (b < a) {
        break;
      }
      if (!Number.isInteger(b)) {
        continue;
      }
      let c = (k + divisors[j]) / 2;
      if (a + b + c <= limit) {
        count++;
      }
    }
  }
  return count;
};

console.log(p224Solution(75000000));
