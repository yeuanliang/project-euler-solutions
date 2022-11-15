"use strict";
// https://oeis.org/A072389
// N = x * (x + 1) * y * (y + 1)
// Javascript Set MaxSize = 2 ** 24 = 16777216
// time cost : 7min40sec

const p757Solution = function (limit) {
  const stealthyNumbers = [];
  let i = 1;
  while (true) {
    let n = i * (i + 1);
    if (2 * n > limit) {
      break;
    }
    let k = i;
    while (true) {
      let m = k * (k + 1);
      let c = m * n;
      if (c > limit) {
        break;
      }
      stealthyNumbers.push(c);
      k++;
    }
    i++;
  }
  stealthyNumbers.sort()
  let count=0
  let len = stealthyNumbers.length
  for(let i=0;i<len;i++){
    if(stealthyNumbers[i]!==stealthyNumbers[i-1]){
        count++
    }
  }
  return count;
};

console.log(p757Solution(10 ** 14));
