"use strict";

const helper = require("./helper");

const firstTriangularNumberHasNDivisors = function(divisorsCount){
    let i = 3
    while(true){
        let triangularNumber = i*(i+1)/2
        let count = 1
        if((i+1)%2===0){
            count = helper.getDivisors((i+1)/2).count * helper.getDivisors(i).count
        }else{
            count = helper.getDivisors(i/2).count * helper.getDivisors(i+1).count
        }
        if(count>divisorsCount){
            return triangularNumber
            break
        }else{
            i=i+1
        }
    } 
}

console.log(firstTriangularNumberHasNDivisors(500))