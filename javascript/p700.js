const helper = require("./helper");

const p700Solution = function () {
  const divisor = 4503599627370517n;
  const eulerNumber = 1504170715041707n;
  const r1 = 3n * eulerNumber - divisor;
  const eulerCoins = [eulerNumber, r1];
  let lastR = r1;
  let lastA = 1;
  let lastB = 3;
  const findNext = function (a, b) {
    const [y0, x0] = helper.exgcd(a, b);
    let t = 0;
    while (true) {
      x = x0 - b * t;
      y = y0 + a * t;
      let r = BigInt(Math.abs(x)) * eulerNumber - BigInt(y) * divisor;
      if (r > 0 && r < lastR) {
        return [r, Math.abs(x), y];
      }
      t++;
    }
  };
  while (lastR !== 1n) {
    [lastR, lastB, lastA] = findNext(lastA, lastB);
    eulerCoins.push(lastR);
  }
  return eulerCoins;
};

console.log(p700Solution().reduce((x, y) => x + y));

const p700 = function () {
  let sum = 0;
  let n1 = 1504170715041707; // 17 * 1249 * 12043 * 5882353
  let b = 4503599627370517; // 2^52 + 21
  while (n1 != 1) {
    sum += n1;
    b = b % n1;
    n1 = n1 - b;
  }
  return sum + 1;
};
// console.log(p700());

const solveP700 = function () {
  let m = 1504170715041707;
  let d = 4503599627370517;
  let n = (3 * m) % d;
  const eulerCoins = [];
  eulerCoins.push(m, n);
  while (n > 1) {
    let len = eulerCoins.length
    m=eulerCoins[len-2]
    n=eulerCoins[len-1]
    if(n===1){
      break
    }
    if (n >= m - n) {
      eulerCoins.push(2*n-m);
    } else {
      let k = 1;
      let d = m - n;
      while (k * n < d) {
        k++;
      }
      let newCoin = k * n - d;
      eulerCoins.push(newCoin);
    }
  }
  return eulerCoins.reduce((x,y)=>x+y);
};
// console.log(solveP700());

const p700_2 = function(){
  let c=1504170715041707
  let d=4503599627370517
  const coins = [c]
  let sum=c
  while(c!==0){
    let t=Math.ceil(d/c)*c-d
    coins.push(t)
    sum+=t
    d=c
    c=t
  }
  console.log(coins)
  return sum
}

// console.log(p700_2())