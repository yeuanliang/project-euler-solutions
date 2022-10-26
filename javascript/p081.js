'use strict'

const helper = require("./helper");

const p081Solution = function () {
    const data = helper.readFile("p081_matrix.txt").split('\n').map(item=>item.split(',').map(s=>+s));
    const size = data.length
    const pathSums =Array.from({length:size},()=>Array.from({length:size},()=>0))
    pathSums[0][0]=data[0][0]
    for(let i=1;i<size;i++){
        pathSums[0][i]=pathSums[0][i-1]+data[0][i]
        pathSums[i][0]=pathSums[i-1][0]+data[i][0]
    }
    for(let i=1;i<size;i++){
        for(let j=1;j<size;j++){
            pathSums[i][j] = Math.min(pathSums[i][j-1],pathSums[i-1][j]) + data[i][j]
        }
    }
    return pathSums[size-1][size-1]
}

console.log(p081Solution())