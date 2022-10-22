'use strict'

const helper = require('./helper')

const p072Solution = function(limit){
    const count = helper.countProperFractions(limit)
    return count
}

console.log(p072Solution(1000000))