'use strict'

const helper = require('./helper')

// Similar to Problem 76 and Problem 31
const waysPrimes = function(n){
    const primes = helper.getPrimes(n)
    const ways = []
    for(let i=0;i<=n;i++){
        ways.push(0)
    }
    ways[0]=1
    for (let i = 0; i < primes.length; i++) {
        for (let j = primes[i]; j <= n; j++) {
          ways[j] = ways[j] + ways[j - primes[i]];
        }
      }
      if(helper.isPrime(n)){
        return ways[n]-1
      }else{
        return ways[n];
      }
}

const p077Solution = function(limit){
    let start =2
    let count=0
    while(true){
        count=waysPrimes(start)
        if(count>limit){
            return start
        }
        start++
    }
}

console.log(p077Solution(5000))