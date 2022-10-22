"use strict";

// a * a = q * q + r * r + q * r
// b * b = p * p + q * q + p * q
// c * c = p * p + r * r + p * r
// runtime: 71s, MacBook Pro Early 2015

const p143Solution = function () {
  const temp = [];
  for (let i = 1; i < 120000; i++) {
    for (let j = i; j < 120000; j++) {
      let n = Math.sqrt(i * i + j * j + i * j);
      if (Number.isInteger(n)) {
        temp.push([i, j]);
      }
      if (i + j > 120000) {
        break;
      }
    }
  }

  const results = [];
  for (let i = 0; i < temp.length; i++) {
    for (let j = i; j < temp.length; j++) {
      if (temp[j][0] === temp[i][1]) {
        let k = i + 1;
        while (temp[k][0] === temp[i][0]) {
          if (temp[k][1] === temp[j][1]) {
            results.push([...new Set(temp[i].concat(temp[j]).concat(temp[k]))]);
          }
          k++;
        }
      }
      if (temp[j][0] > temp[i][1]) {
        break;
      }
    }
  }
  let sum = 0;
  const sumSet = new Map();
  for (const result of results) {
    let s = result.reduce((x, y) => x + y);
    if (s <= 120000) {
      if (!sumSet.has(s)) {
        sumSet.set(s, s);
        sum += s;
      }
    }
  }
  return sum;
};

console.log(p143Solution());
