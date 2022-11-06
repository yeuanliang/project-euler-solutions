'use strict'

const helper = require('./helper')

const divisibilityFactorial = function(base,exp){
    if(base>10){
        return base*exp
    }
    let m = base
    let t=1
    while(t<exp){
        m+=base
        let temp=m
        while(temp%base===0){
            t+=1
            temp=temp/base
        }
    }
    return m
}

const smallestFactorial = function(n){
    if(helper.isPrime(n)){
        return n
    }
    const {bases,exponents} = helper.getDivisors(n)
    const len = bases.length
    let m=0
    for(let i=len-1;i>=0;i--){
        if(bases[i]*exponents[i]<m){
            continue
        }
        let temp = divisibilityFactorial(bases[i],exponents[i])
        if(m<temp){
            m=temp
        }
    }
    return m
}

const p549Solution = function(limit){
    let sum = 0
    for(let i=2;i<=limit;i++){
        sum+=smallestFactorial(i)
    }
    return sum
}

console.log(p549Solution(10**8))