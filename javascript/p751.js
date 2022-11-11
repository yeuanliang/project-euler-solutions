"use strict";

const getNext = function (current) {
  let integerPart = Math.floor(current);
  let decimalPart = current - integerPart;
  return integerPart * (decimalPart + 1);
};

const p751Solution = function () {
  const a = [];
  let current = 2;
  let theta = "2.";
  let t = 2;
  while (a.length < 15) {
    let next = getNext(current);
    let integerPart = Math.floor(next);
    a.push(integerPart);
    theta = theta + integerPart;
    let i = Math.floor(t * (+theta - 2));
    current = integerPart + t * (+theta - 2) - i;
    t *= integerPart;
  }
  return "2." + a.join("").slice(0, 24);
};

console.log(p751Solution());
