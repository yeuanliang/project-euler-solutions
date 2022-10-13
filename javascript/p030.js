"use strict";

const p030Solution = function (k) {
  let numbers = [];
  const upLimit = k * 10 ** k;
  for (let i = 10; i < upLimit; i++) {
    let sum = 0;
    let temp = i;
    while (temp > 0) {
      sum += (temp % 10) ** k;
      temp = Math.floor(temp / 10);
    }
    if (i === sum) {
      numbers.push(i);
    }
  }
  console.log(numbers);
  return numbers;
};

console.log(p030Solution(5).reduce((x, y) => x + y));
