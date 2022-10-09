"use strict";

const helper = require("./helper");
const p024Solution = function(){
  let target = 1000000;
  const result = [];
  const remain = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i = 0; i < 10; i++) {
    let temp = 0;
    while (target - temp * helper.factorial(9 - i) > 0) {
      temp += 1;
    }
    target = target - (temp - 1) * helper.factorial(9 - i);
    result.push(remain[temp - 1]);
    remain.splice(temp - 1, 1);
  }
  return result.reduce((x, y) => x + "" + y)
}
console.log(p024Solution());
