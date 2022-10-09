"use strict";

const fs = require("fs");
const path = require("path");

const file = fs.readFileSync(
  path.resolve(__dirname, "../assets/p022_names.txt")
);
const names = file.toString().split(",").sort();
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
