"use strict";

const helper = require("./helper");

const daysOfMonth = function (year) {
  if (helper.isLeapYear(year)) {
    return [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  } else {
    return [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  }
};

const countSundays = function () {
  let sundayCount = 0;
  let start = daysOfMonth(1900).reduce((x, y) => x + y);
  for (let i = 1901; i <= 2000; i++) {
    let daysMonth = daysOfMonth(i);
    for (let j = 0; j < 12; j++) {
      if (i === 1901 && j === 0) {
        start += 1;
      } else if (j === 0) {
        start += 31;
      } else {
        start += daysMonth[j - 1];
      }
      if (start % 7 === 0) {
        sundayCount += 1;
      }
    }
  }
  return sundayCount;
};

console.log(countSundays());
