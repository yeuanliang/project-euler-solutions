"use strict";

const values = new Map();
values.set(1, 1);

const getCollatzSequence = function (n) {
  let s = "";
  while (n > 1) {
    s += n + " -> ";
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n = 3 * n + 1;
    }
  }
  return s + 1;
};

const countCollatzSequence = function (n) {
  if (values.has(n)) {
    return values.get(n);
  }
  if (n % 2 === 0) {
    values.set(n, 1 + countCollatzSequence(n / 2));
  } else {
    values.set(n, 2 + countCollatzSequence((3 * n + 1) / 2));
  }
  return values.get(n);
};

const longestSequence = function(n){
    let longestSequence = 0;
    let answer = -1;
    for (let i = Math.floor(n/2); i < n; i++) {
      if (countCollatzSequence(i) > longestSequence) {
        longestSequence = countCollatzSequence(i);
        answer = i;
      }
    }
    return {
        number: answer,
        sequenceLength: longestSequence
    }
}

console.log(longestSequence(1000000))
