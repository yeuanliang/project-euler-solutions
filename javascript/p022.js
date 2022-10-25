"use strict";

const helper = require("./helper");

const names = helper.readFile('p022_names.txt').split(",").sort();
const namesCount = names.length
let sum = 0;
for (let i = 0; i < namesCount; i++) {
  let nameLength = names[i].length;
  let nameScore = 0;
  for (let j = 1; j < nameLength-1; j++) {
    nameScore += (names[i][j].codePointAt()-64);
  }
  sum += (i + 1) * nameScore;
}
console.log(sum);
