const helper = require("./helper");

// time cost: 16min23s; memory: 6GB

const limit = 10 ** 8;
const rootLimit = Math.floor(Math.sqrt(limit));
const primesSet = helper.getPrimes(Math.floor(Math.sqrt(limit)));
const squaresSum = [];

for (let i = 0; i <= limit; i++) {
  squaresSum.push(false);
}

// gcd(a,b) = 1 && a * a + b * b is composite
for (let i = 1; i <= rootLimit; i++) {
  for (let j = i + 1; j <= rootLimit; j++) {
    let k = i * i + j * j;
    if (k > limit) {
      break;
    }
    if (helper.gcd(i, j) === 1) {
      if (squaresSum[k].length > 0) {
        squaresSum[k].push([i, j]);
      } else {
        squaresSum[k] = [[i, j]];
      }
    }
  }
}

// const findSquareSum = function (n) {
//   let result = [];
//   for (let i = 1; i < Math.sqrt(n); i++) {
//     for (let j = i + 1; j < Math.sqrt(n); j++) {
//       if (helper.gcd(i, j) === 1 && i * i + j * j === n) {
//         result.push(i, j);
//       }
//     }
//   }
//   if (result.length === 0) {
//     result = null;
//   }
//   return result;
// };

const primeFactorization = function (n) {
  const bases = [];
  const exponents = [];
  for (let i = 0; primesSet[i] * primesSet[i] <= n; ++i) {
    if (n % primesSet[i] == 0) {
      let count = 0;
      while (n % primesSet[i] == 0) {
        n /= primesSet[i];
        count += 1;
      }
      bases.push(primesSet[i]);
      exponents.push(count);
    }
  }
  if (n > 1) {
    bases.push(n);
    exponents.push(1);
  }
  return { bases, exponents };
};

const genDivisors = function (primes, exponents) {
  let i = 0;
  let temp = [];
  let divisors = [1];
  while (i < primes.length) {
    for (let j = 0; j <= exponents[i]; j++) {
      for (let k = 0; k < divisors.length; k++) {
        temp.push(divisors[k] * primes[i] ** j);
      }
    }
    divisors = temp;
    temp = [];
    i++;
  }
  return divisors;
};

const sumCompositeComplexDivisors = function (n, primes, exponents) {
  let sumCompositeComplex = 0;
  const divisors = genDivisors(primes, exponents);
  for (const d of divisors) {
    if (!helper.isPrime(d) && squaresSum[d]) {
      let pairs = squaresSum[d];
      for (const p of pairs) {
        if (n / d === 1) {
          sumCompositeComplex += 2 * (p[0] + p[1]);
        } else {
          let { bases, exponents } = primeFactorization(n / d);
          sumCompositeComplex +=
            sumRealDivisors(bases, exponents) * 2 * (p[0] + p[1]);
        }
      }
    }
  }
  return sumCompositeComplex;
};

const sumRealDivisors = function (primes, exponents) {
  let sumReal = 1;
  for (let i = 0; i < primes.length; i++) {
    sumReal *= (primes[i] ** (exponents[i] + 1) - 1) / (primes[i] - 1);
  }
  return sumReal;
};

const sumPrimeComplexDivisors = function (primes, exponents) {
  const primesLength = primes.length;
  const complexIntegers = [];
  for (let i = 0; i < primesLength; i++) {
    if (primes[i] === 2) {
      complexIntegers.push([1, 1]);
    } else {
      let pairs = squaresSum[primes[i]];
      if (pairs) {
        complexIntegers.push(...pairs);
      } else {
        complexIntegers.push(false);
      }
    }
  }
  let sumPrimeComplex = 0;
  for (let i = 0; i < primesLength; i++) {
    if (complexIntegers[i]) {
      let s = 1;
      let c = complexIntegers[i][0] + complexIntegers[i][1];
      for (let j = 0; j < primesLength; j++) {
        if (j !== i) {
          s *= (primes[j] ** (exponents[j] + 1) - 1) / (primes[j] - 1);
        } else {
          s *= (primes[j] ** exponents[j] - 1) / (primes[j] - 1);
        }
      }
      if (c === 2) {
        sumPrimeComplex += s * 2;
      } else {
        sumPrimeComplex += s * 2 * c;
      }
    }
  }
  return sumPrimeComplex;
};

const complexDivisorsSum = function (n) {
  const { bases, exponents } = primeFactorization(n);
  const sumReal = sumRealDivisors(bases, exponents);
  const sumPrimeComplex = sumPrimeComplexDivisors(bases, exponents);
  const sumCompositeComplex = sumCompositeComplexDivisors(n, bases, exponents);
  return sumReal + sumPrimeComplex + sumCompositeComplex;
};

const p153Solution = function () {
  let sum = 1n;
  for (let i = 2; i <= limit; i++) {
    sum += BigInt(complexDivisorsSum(i));
  }
  return sum;
};

console.log(p153Solution());

// time cost: 3min41s
const p153Solution2 = function(){
  let [s1, r, x, s] = [0n, 0n, 0n, 0n];
  for (let a = 1n; a <= n; a++) {
    s += a * (n / a) + 2n * a * (n / (2n * a));
    for (let b = a + 1n; a * a + b * b <= n; b++) {
      if (helper.gcd(a, b) === 1n) {
        r = n / (a * a + b * b);
        s1 = 0n;
        for (x = 1n; x <= r; x++) {
          s1 += x * (r / x);
        }
        s += 2n * (a + b) * s1;
      }
    }
  }
  return s;
}

console.log(p153Solution2());