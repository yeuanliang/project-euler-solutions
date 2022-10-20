"use strict";

const helper = require('./helper')

const findCubes = function(n){
  const cubes = [];
  const start = Math.floor(Math.cbrt(10**(n-1)))
  for (let i=start+1;i<10**n;i++){
    cubes.push(i * i * i);
  }
  let maxPermutations = 1;
  for (let i = 0; i < cubes.length; i++) {
    let p = 1;
    let temp=[cubes[i]]
    for (let j = i + 1; j < cubes.length; j++) {
      if ((cubes[j] + "").length > (cubes[i] + "").length) {
        break;
      }
      if (helper.hasSameDigits(cubes[i],cubes[j])) {
        p++;
        temp.push(cubes[j])
      }
    }
    if (p > maxPermutations) {
      maxPermutations = p;
    }
    if (maxPermutations === 5) {
      return cubes[i];
    }
  }
}

const p062Solution = function () {
  let minCube = 0
  let start = 8
  while(!minCube){
    minCube = findCubes(start)
    start+=1
  }
  if(minCube>0){
    return minCube
  }
};

console.log(p062Solution())