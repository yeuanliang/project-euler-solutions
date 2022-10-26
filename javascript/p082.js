'use strict'

const helper = require("./helper");

const p082Solution = function () {
    const data = helper.readFile("p082_matrix.txt").split('\n').map(item=>item.split(',').map(s=>+s));
    const size = data.length
    const pathSums =[]
    for(let i=0;i<size;i++){
        pathSums.push(data[i][0])
    }
    for(let i=1;i<size;i++){
        pathSums[0]+= data[0][i]
        for(let j=1;j<size;j++){
            pathSums[j]=Math.min(pathSums[j],pathSums[j-1])+data[j][i]
        }
        for(let j=size-2;j>=0;j--){
            pathSums[j]=Math.min(pathSums[j],pathSums[j+1]+data[j][i])
        }
    }
    return Math.min(...pathSums)
}

console.log(p082Solution())