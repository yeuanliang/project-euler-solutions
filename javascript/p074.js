"use strict";

const helper = require("./helper");

const digitsFactorials = [];
// const chainLength = new Map()
// chainLength.set(169,3)
// chainLength.set(363601,3)
// chainLength.set(1454,3)
// chainLength.set(871,2)
// chainLength.set(872,2)
// chainLength.set(45361,2)
// chainLength.set(45362,2)

for (let i = 0; i <= 9; i++) {
  digitsFactorials.push(helper.factorial(i));
}

const sumDigitFactorial = function (n) {
  let sum = 0;
  while (n / 10 > 0) {
    sum += digitsFactorials[n % 10];
    n = Math.floor(n / 10);
  }
  return sum;
};

// const countNonRepeating = function(n){
//     if(chainLength.has(n)){
//         return chainLength.get(n)
//     }
//     const result = [n]
//     let sum = sumDigitFactorial(n)
//     if(chainLength.has(sum)){
//         return chainLength.get(sum)+1
//     }else{
//         result.push(sum)
//     }
//     while(true){
//         sum = sumDigitFactorial(sum)
//         if(chainLength.has(sum)){
//             for(let i=0;i<result.length;i++){
//                 chainLength.set(result[i],result.length+chainLength.get(sum)-i)
//             }
//             return chainLength.get(sum)+result.length
//         }else{
//             result.push(sum)
//         }
//     }
// }

const countNonRepeating = function (n) {
  const result = [n];
  let sum = sumDigitFactorial(n);
  while (!result.includes(sum)) {
    result.push(sum);
    sum = sumDigitFactorial(sum);
  }
  return result.length;
};

const p074Solution = function () {
  let count = 0;
  for (let i = 3; i < 1000000; i++) {
    let len = countNonRepeating(i);
    if (len === 60) {
      count++;
    }
  }
  return count;
};

console.log(p074Solution());
