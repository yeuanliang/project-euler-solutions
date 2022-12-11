"use strict";

// https://en.wikipedia.org/wiki/Tree_of_primitive_Pythagorean_triples
// a*a-1 = (c-b)*(c+b)
// limitA = limit/(2+Math.SQRT2)

const helper = require("./helper");

// time cost: 1h 37min 42s
const p223Solution = function (limit) {
  const limitA = Math.floor(limit / (2 + Math.SQRT2));
  let count = Math.floor((limit - 1) / 2);
  for (let a = 2; a < limitA; a++) {
    let product = a * a - 1;
    let divisors = helper.genDivisors(product).sort((a, b) => a - b);
    for (let j = 0; divisors[j] < a-1; j++) {
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

console.log(p223Solution(25000000));

// from a triplet (a,b,c), the next 3 triplets
// (2c + b - 2a, 2c + 2b - a, 3c + 2b - 2a)
// (2c + b + 2a, 2c + 2b + a, 3c + 2b + 2a)
// (2c - 2b + a, 2c - b + 2a, 3c - 2b + 2a)
// Start from (1,1,1) and (1,2,2), be careful about duplicates when a=b
