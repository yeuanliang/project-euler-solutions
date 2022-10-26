'use strict'

const helper = require('./helper')

// the last 10 digits of 2^N have a period of 7812500 (4*5^9)

const p097Solution = function(){
    const exp = 7830457
    const a = 4 * 5 ** 9
    const b=helper.customPower(2,exp % a)
    const c=helper.bigNumberMultiply(b,[2,8,4,3,3])
    const d=helper.bigNumberSum(c,[1])
    const len=d.length
    return d.slice(len-10).join('')
}

console.log(p097Solution())

// console.log((28433n*2n**7830457n+1n)%10n**10n)

