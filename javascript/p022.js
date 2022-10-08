"use strict";

const fs = require("fs");
const path = require("path");

const file = fs.readFileSync(
  path.resolve(__dirname, "../assets/p022_names.txt")
);
const names = file.toString().split(",").sort();
const letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
let sum = 0;
for (let i = 0; i < names.length; i++) {
  let nameLength = names[i].length;
  let nameScore = 0;
  for (let j = 0; j < nameLength; j++) {
    nameScore += letters.indexOf(names[i][j]) + 1;
  }
  sum += (i + 1) * nameScore;
}
console.log(sum);
