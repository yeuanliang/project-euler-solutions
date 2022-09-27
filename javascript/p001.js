"use strict";

let sum_3x = 0;
let sum_5x = 0;
let sum_15x = 0;
let result = 0;

for (let i = 3; i < 1000; i = i + 3) {
  sum_3x += i;
}

for (let i = 5; i < 1000; i = i + 5) {
  sum_3x += i;
}

for (let i = 15; i < 1000; i = i + 15) {
  sum_15x += i;
}

result = sum_3x + sum_5x - sum_15x;

console.log(result);
