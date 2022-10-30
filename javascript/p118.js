"use strict";

// time cost: 15s

const helper = require("./helper");

const primes = helper.getPrimes(10 ** 8);
// primes less than 10**8, p.length = 43089 
const p = primes.filter((item) => {
  return (
    (item + "").includes("0") === false &&
    helper.hasDuplicateDigit(item) === false
  );
});

const subPrimes = function (start, end, primes) {
  const len = primes.length;
  const p = [];
  for (let i = 0; i < len; i++) {
    if (primes[i] < start) {
      continue;
    }
    if (primes[i] > end) {
      break;
    }
    p.push(primes[i]);
  }
  return p;
};

const primes1 = subPrimes(1, 10, p);
const primes2 = subPrimes(10, 100, p);
const primes3 = subPrimes(100, 1000, p);
const primes4 = subPrimes(1000, 10000, p);
const primes5 = subPrimes(10000, 100000, p);
const primes6 = subPrimes(100000, 1000000, p);
const primes7 = subPrimes(1000000, 10000000, p);
const primes8 = subPrimes(10000000, 100000000, p);

const remainDigits = function (s) {
  let digits = '123456789'
  let remain = ''
  for (let i = 0; i < 9; i++) {
    if (s.includes(digits[i])) {
      continue
    }
    remain += digits[i]
  }
  return remain
}

const hasCommonDigit = function (a, b) {
  const s = Array.from(a + '')
  const t = Array.from(b + '')
  let digits = new Set(s.concat(t))
  return digits.size !== s.length + t.length
}

function getCombinations(array) {
  const combinations = [];
  let temp = [];
  const len = Math.pow(2, array.length);
  for (let i = 0; i < len; i++) {
    temp = [];
    for (let j = 0; j < array.length; j++) {
      if ((i & Math.pow(2, j))) {
        temp.push(array[j]);
      }
    }
    if (temp.length > 0) {
      combinations.push(temp);
    }
  }
  combinations.sort((a, b) => a.length - b.length);
  return combinations;
}

// count sets include 2-digit prime
const countSets2 = function () {
  // 2 kinds
  let count = 0
  for (let i = 0; i < primes2.length; i++) {
    for (let j = i + 1; j < primes2.length; j++) {
      if (hasCommonDigit(primes2[i], primes2[j])) {
        continue
      }
      for (let k = j + 1; k < primes2.length; k++) {
        if (hasCommonDigit(primes2[i], primes2[k]) || hasCommonDigit(primes2[j], primes2[k])) {
          continue
        }
        let s = primes2[i] + '' + primes2[j] + '' + primes2[k]
        let r = remainDigits(s)
        if (r === '235' || r === '237' || r === '257' || r === '357') {
          // console.log(primes2[i], primes2[j], primes2[k])
          count++
        }
      }
    }
  }
  for (let i = 0; i < primes2.length; i++) {
    for (let j = i + 1; j < primes2.length; j++) {
      if (hasCommonDigit(primes2[i], primes2[j])) {
        continue
      }
      for (let k = j + 1; k < primes2.length; k++) {
        if (hasCommonDigit(primes2[i], primes2[k]) || hasCommonDigit(primes2[j], primes2[k])) {
          continue
        }
        for (let l = k + 1; l < primes2.length; l++) {
          let t = +(primes2[i] + '' + primes2[j] + '' + primes2[k])
          if (hasCommonDigit(t, primes2[l])) {
            continue
          }
          let s = primes2[i] + '' + primes2[j] + '' + primes2[k] + '' + primes2[l]
          let r = remainDigits(s)
          if (r === '2' || r === '3' || r === '5' || r === '7') {
            // console.log(primes2[i], primes2[j], primes2[k], primes2[l])
            count++
          }
        }
      }
    }
  }
  return count
}

// count sets include 3-digit prime
const countSets3 = function () {
  // 6 kinds
  let count = 0
  // 3+3+3
  for (let i = 0; i < primes3.length; i++) {
    for (let j = i + 1; j < primes3.length; j++) {
      if (hasCommonDigit(primes3[i], primes3[j])) {
        continue
      }
      for (let k = j + 1; k < primes3.length; k++) {
        if (hasCommonDigit(primes3[i], primes3[k]) || hasCommonDigit(primes3[j], primes3[k])) {
          continue
        }
        // console.log(primes3[i], primes3[j], primes3[k])
        count++
      }
    }
  }
  // 3+3+2+1, 3+3+1+1+1+1
  for (let i = 0; i < primes3.length; i++) {
    for (let j = i + 1; j < primes3.length; j++) {
      if (hasCommonDigit(primes3[i], primes3[j])) {
        continue
      }
      let t33 = primes3[i] + '' + primes3[j]
      let r = remainDigits(t33)
      if (r === '235' || r === '237' || r === '257' || r === '357') {
        count++
      }
      for (let k = 0; k < primes2.length; k++) {
        if (hasCommonDigit(primes3[i], primes2[k]) || hasCommonDigit(primes3[j], primes2[k])) {
          continue
        }
        let s = primes3[i] + '' + primes3[j] + '' + primes2[k]
        let r = remainDigits(s)
        if (r === '2' || r === '3' || r === '5' || r === '7') {
          // console.log(primes3[i], primes3[j], primes2[k])
          count++
        }
      }
    }
  }
  // 3+2+2+2, 3+2+1+1+1+1, 3+2+2+1+1
  for (let i = 0; i < primes3.length; i++) {
    for (let j = 0; j < primes2.length; j++) {
      if (hasCommonDigit(primes3[i], primes2[j])) {
        continue
      }
      let t32 = primes3[i] + '' + primes2[j]
      let r = remainDigits(t32)
      if (r === '2357') {
        count++
      }
      for (let k = j + 1; k < primes2.length; k++) {
        if (hasCommonDigit(primes3[i], primes2[k]) || hasCommonDigit(primes2[j], primes2[k])) {
          continue
        }
        let s = primes3[i] + '' + primes2[j] + '' + primes2[k]
        let r = remainDigits(s)
        if (r === '23' || r === '35' || r === '57' || r === '27' || r === '25' || r === '37') {
          // console.log(primes3[i], primes2[j], primes2[k])
          count++
        }
        for (let l = k + 1; l < primes2.length; l++) {
          let t = +(primes3[i] + '' + primes2[j] + '' + primes2[k])
          if (hasCommonDigit(t, primes2[l])) {
            continue
          }
          // console.log(primes3[i], primes2[j], primes2[k], primes2[l])
          count++
        }
      }
    }
  }
  return count
}

// count sets include 4-digit prime
const countSets4 = function () {
  // 5 kinds
  let count = 0
  // 4+4+1
  for (let i = 0; i < primes4.length; i++) {
    for (let j = i + 1; j < primes4.length; j++) {
      if (hasCommonDigit(primes4[i], primes4[j])) {
        continue
      }
      let s = primes4[i] + '' + primes4[j]
      let r = remainDigits(s)
      if (r === '2' || r === '3' || r === '5' || r === '7') {
        // console.log(primes4[i], primes4[j])
        count++
      }
    }
  }
  // 4+3+2, 4+3+1+1
  for (let i = 0; i < primes4.length; i++) {
    for (let j = 0; j < primes3.length; j++) {
      if (hasCommonDigit(primes4[i], primes3[j])) {
        continue
      }
      let t43 = primes4[i] + '' + primes3[j]
      let r = remainDigits(t43)
      if (r === '23' || r === '35' || r === '57' || r === '27' || r === '25' || r === '37') {
        // console.log(primes4[i], primes3[j])
        count++
      }
      for (let k = 0; k < primes2.length; k++) {
        if (hasCommonDigit(primes4[i], primes2[k]) || hasCommonDigit(primes3[j], primes2[k])) {
          continue
        }
        // console.log(primes4[i], primes3[j], primes2[k])
        count++
      }
    }
  }
  // 4+2+2+1,4+2+1+1+1
  for (let i = 0; i < primes4.length; i++) {
    for (let j = 0; j < primes2.length; j++) {
      if (hasCommonDigit(primes4[i], primes2[j])) {
        continue
      }
      let t42 = primes4[i] + '' + primes2[j]
      let r = remainDigits(t42)
      if (r === '235' || r === '237' || r === '257' || r === '357') {
        // console.log(primes4[i], primes2[j])
        count++
      }
      for (let k = j + 1; k < primes2.length; k++) {
        if (hasCommonDigit(primes4[i], primes2[k]) || hasCommonDigit(primes2[j], primes2[k])) {
          continue
        }
        let s = primes4[i] + '' + primes2[j] + '' + primes2[k]
        let r = remainDigits(s)
        if (r === '2' || r === '3' || r === '5' || r === '7') {
          // console.log(primes4[i], primes2[j], primes2[k])
          count++
        }
      }
    }
  }
  return count
}

// count sets include 5-digit prime
const countSets5 = function () {
  let count = 0
  // 5+4, 5+1+1+1+1
  for (let i = 0; i < primes5.length; i++) {
    let r = remainDigits(primes5[i] + '')
    if (r === '2357') {
      count += 1
    }
    for (let j = 0; j < primes4.length; j++) {
      if (hasCommonDigit(primes5[i], primes4[j])) {
        continue
      }
      count += 1
    }
  }
  // 5+3+1
  for (let i = 0; i < primes5.length; i++) {
    for (let j = 0; j < primes3.length; j++) {
      if (hasCommonDigit(primes5[i], primes3[j])) {
        continue
      }
      let t53 = primes5[i] + '' + primes3[j]
      let r = remainDigits(t53)
      if (r === '2' || r === '3' || r === '5' || r === '7') {
        count++
      }
    }
  }
  // 5+2+2, 5+2+1+1
  for (let i = 0; i < primes5.length; i++) {
    for (let j = 0; j < primes2.length; j++) {
      if (hasCommonDigit(primes5[i], primes2[j])) {
        continue
      }
      let t52 = primes5[i] + '' + primes2[j]
      let r = remainDigits(t52)
      if (r === '23' || r === '27' || r === '25' || r === '35' || r === '37' || r === '57') {
        count++
      }
      for (let k = j + 1; k < primes2.length; k++) {
        if (hasCommonDigit(primes5[i], primes2[k]) || hasCommonDigit(primes2[j], primes2[k])) {
          continue
        }
        // console.log(primes5[i], primes2[j], primes2[k])
        count++

      }
    }
  }
  return count
}

// count sets include 6-digit prime
const countSets6 = function () {
  let count = 0
  // 6+3, 6+1+1+1
  for (let i = 0; i < primes6.length; i++) {
    let r = remainDigits(primes6[i] + '')
    if (r === '235' || r == '237' || r === '257' || r === '357') {
      count += 1
    }
    for (let j = 0; j < primes3.length; j++) {
      if (hasCommonDigit(primes6[i], primes3[j])) {
        continue
      }
      count += 1
    }
  }
  // 6+2+1
  for (let i = 0; i < primes6.length; i++) {
    for (let j = 0; j < primes2.length; j++) {
      if (hasCommonDigit(primes6[i], primes2[j])) {
        continue
      }
      let t62 = primes6[i] + '' + primes2[j]
      let r = remainDigits(t62)
      if (r === '2' || r === '3' || r === '5' || r === '7') {
        count++
      }
    }
  }
  return count
}

// count sets include 7-digit prime
const countSets7 = function () {
  let count = 0
  // 7+2, 7+1+1
  for (let i = 0; i < primes7.length; i++) {
    let r = remainDigits(primes7[i] + '')
    if (r === '23' || r == '27' || r === '25' || r === '35' || r === '37' || r === '57') {
      count += 1
    }
    for (let j = 0; j < primes2.length; j++) {
      if (hasCommonDigit(primes7[i], primes2[j])) {
        continue
      }
      count += 1
    }
  }
  return count
}

// count sets include 8-digit prime
const countSets8 = function () {
  let count = 0
  // 8+1
  for (let i = 0; i < primes8.length; i++) {
    let r = remainDigits(primes8[i] + '')
    if (r === '3' || r == '7' || r === '2' || r === '5') {
      count += 1
    }
  }
  return count
}

const p118Solution = function () {

  const digitsSetsMap = new Map()
  const c = getCombinations(primes1)
  // 1,1+1,1+1+1,1+1+1+1
  for (const arr of c) {
    digitsSetsMap.set(arr.join(''), 1)
  }
  // 2
  for (const p of primes2) {
    let s = Array.from(p + '').sort().join('')
    if (digitsSetsMap.has(s)) {
      let count = digitsSetsMap.get(s)
      digitsSetsMap.set(s, count + 1)
    } else {
      digitsSetsMap.set(s, 1)
    }
  }
  // 3
  for (const p of primes3) {
    let s = Array.from(p + '').sort().join('')
    if (digitsSetsMap.has(s)) {
      let count = digitsSetsMap.get(s)
      digitsSetsMap.set(s, count + 1)
    } else {
      digitsSetsMap.set(s, 1)
    }
  }
  // 4
  for (const p of primes4) {
    let s = Array.from(p + '').sort().join('')
    if (digitsSetsMap.has(s)) {
      let count = digitsSetsMap.get(s)
      digitsSetsMap.set(s, count + 1)
    } else {
      digitsSetsMap.set(s, 1)
    }
  }
  // 1+2
  for (let i = 0; i < primes1.length; i++) {
    for (let j = 0; j < primes2.length; j++) {
      if (hasCommonDigit(primes1[i], primes2[j])) {
        continue
      }
      let s = (primes1[i] + '' + primes2[j]).split('').sort().join('')
      if (digitsSetsMap.has(s)) {
        let count = digitsSetsMap.get(s)
        digitsSetsMap.set(s, count + 1)
      } else {
        digitsSetsMap.set(s, 1)
      }
    }
  }
  // 1+1+2
  for (let i = 0; i < primes1.length; i++) {
    for (let j = i + 1; j < primes1.length; j++) {
      for (let k = 0; k < primes2.length; k++) {
        if (hasCommonDigit(primes1[i], primes2[k]) || hasCommonDigit(primes1[j], primes2[k])) {
          continue
        }
        let s = (primes1[i] + '' + primes1[j] + '' + primes2[k]).split('').sort().join('')
        if (digitsSetsMap.has(s)) {
          let count = digitsSetsMap.get(s)
          digitsSetsMap.set(s, count + 1)
        } else {
          digitsSetsMap.set(s, 1)
        }
      }
    }
  }
  // 1+3
  for (let i = 0; i < primes1.length; i++) {
    for (let j = 0; j < primes3.length; j++) {
      if (hasCommonDigit(primes1[i], primes3[j])) {
        continue
      }
      let s = (primes1[i] + '' + primes3[j]).split('').sort().join('')
      if (digitsSetsMap.has(s)) {
        let count = digitsSetsMap.get(s)
        digitsSetsMap.set(s, count + 1)
      } else {
        digitsSetsMap.set(s, 1)
      }
    }
  }
  // 2+2
  for (let i = 0; i < primes2.length; i++) {
    for (let j = i + 1; j < primes2.length; j++) {
      if (hasCommonDigit(primes2[i], primes2[j])) {
        continue
      }
      let s = (primes2[i] + '' + primes2[j]).split('').sort().join('')
      if (digitsSetsMap.has(s)) {
        let count = digitsSetsMap.get(s)
        digitsSetsMap.set(s, count + 1)
      } else {
        digitsSetsMap.set(s, 1)
      }
    }
  }
  let start = p.length - 1
  let count = 0
  while (p[start] > 10000) {
    let r = remainDigits(p[start] + '')
    if (digitsSetsMap.has(r)) {
      count += digitsSetsMap.get(r)
    }
    start--
  }
  count += countSets2() + countSets3() + countSets4()
  return count
};

console.log(p118Solution())

const p118Solution2 = function(){
  let count=0
  count+=countSets2()+countSets3()+countSets4()+countSets5()+countSets6()+countSets7()+countSets8()
  return count
}

console.log(p118Solution2());

const p118Solution3 = function () {
  const digits = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  let count = 0
  const generateSets = function (number, last, left) {
    if (last != -1 && number > last) return;
    if (left == 0) {
      if (helper.isPrime(number)) {
        count++;
      }
      return;
    }
    for (let i = 1; i < 10; i++) {
      if (digits[i]) {
        digits[i] = 0;
        generateSets(number * 10 + i, last, left - 1);
        digits[i] = 1;
      }
    }
    if (helper.isPrime(number)) {
      generateSets(0, number, left);
    }
  }
  generateSets(0, -1, 9)
  return count
}
console.log(p118Solution3())

const p118Solution4 = function(){
  const digitsFilled = [0,0,0,0,0,0,0,0,0,0]
  const partNumbers = [0,0,0,0,0,0,0,0,0,0,0]
  let count = 0
  const sets=[]
  const fillit = function(position){
    let allDone=0
    if(partNumbers[position]===0){
      allDone=1
      let i=1;
      while(i<=9&&allDone===1){
        if(digitsFilled[i]===0){
          allDone=0
        }
        i++
      }
      if(allDone===1){
        sets.push([].concat(partNumbers))
        count++
        return
      }
    }
    for(let i=1;i<=9;i++){
      if(digitsFilled[i]===0){
        partNumbers[position]=partNumbers[position]*10+i
        digitsFilled[i]=1
        if(partNumbers[position]>partNumbers[position-1]){
          if(helper.isPrime(partNumbers[position])){
            fillit(position+1)
          }
          fillit(position)
        }else{
          fillit(position)
        }
        partNumbers[position]=Math.floor(partNumbers[position]/10)
        digitsFilled[i]=0
      }
    }
  }
  fillit(1)
  return count
}

console.log(p118Solution4())