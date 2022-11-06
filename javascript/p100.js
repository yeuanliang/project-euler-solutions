"use strict";

const arr = function () {
  for (let t = 2; t <= 10 ** 8; t++) {
    let n = Math.sqrt(1 + 2 * t * (t - 1));
    if (Number.isInteger(n) && n % 2 === 1) {
      console.log(t, (1 + n) / 2);
      // 4 3
      // 21 15
      // 120 85
      // 697 493
      // 4060 2871
      // 23661 16731
      // 137904 97513
      // 803761 568345
      // 4684660 3312555
      // 27304197 19306983
    }
  }
};

const genConvergent = function () {
  const a = [1, 3];
  const b = [1, 2];
  const result = [[3,4]];
  for (let i = 2; i < 20; i++) {
    a[i] = 2 * a[i - 1] + a[i - 2];
    b[i] = 2 * b[i - 1] + b[i - 2];
    if(b[i]%2===0){
        result.push([a[i]*b[i-1],2*b[i]*b[i-1]])
    }else{
        result.push([b[i]*a[i-1],a[i]*a[i-1]])
    }
  }
  return result
};

const p100Solution = function(){
    const arrangements = genConvergent();
    for(let i=0;i<arrangements.length;i++){
        if(arrangements[i][1]>10**12){
            return arrangements[i][0]
        }
    }
}

console.log(p100Solution())