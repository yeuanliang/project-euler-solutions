"use strict";

const helper = require("./helper");

const p087Solution = function () {
  const limit = 5 * 10 ** 7;
  const squares = [];
  const cubes = [];
  const fourthPowers = [];
  const primes = helper.getPrimes(Math.floor(Math.sqrt(limit)));
  for (let i = 0; i < primes.length; i++) {
    let s = primes[i] ** 2;
    if (s < limit) {
      squares.push(s);
    }
    let c = primes[i] ** 3;
    if (c < limit) {
      cubes.push(c);
    }
    let f = primes[i] ** 4;
    if (f < limit) {
      fourthPowers.push(f);
    }
  }
  let resultSet = new Set();
  for (let i = 0; i < squares.length; i++) {
    for (let j = 0; j < cubes.length; j++) {
      for (let k = 0; k < fourthPowers.length; k++) {
        let num = squares[i] + cubes[j] + fourthPowers[k];
        if (num < limit) {
          resultSet.add(num);
        }
      }
    }
  }
  return resultSet.size;
};

console.log(p087Solution());
