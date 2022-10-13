'use strict'

const coins = [1,2,5,10,20,50,100,200]
// top-down approach of dynamic programming
const p031Solution = function(amount,availableCoins){
    const memo = []
    for(let i=0;i<=amount;i++){
        memo[i]=[]
        for(let j=0;j<7;j++){
            memo[i][j]=0
        }
    }
    const ways =function(target, availableCoins){
        if(availableCoins<=1){
            return 1
        }
        let t = target
        if(memo[t][availableCoins-2]>0){
            return memo[t][availableCoins-2]
        }
        let res = 0
        while(target>=0){
            res += ways(target, availableCoins-1)
            target -= coins[availableCoins-1]
        }
        memo[t][availableCoins-2]=res
        return res
    }
    return ways(amount,availableCoins)
}
// console.log(p031Solution(200,8))
// bottom-up approach of dynamic programming
const p031Solution2 = function(amount,availableCoins){
    const ways=[]
    for(let i=0;i<=amount;i++){
        ways[i]=0
    }
    ways[0]=1
    for(let i=0;i<availableCoins;i++){
        for(let j=coins[i];j<=amount;j++){
            ways[j]=ways[j]+ways[j-coins[i]]
        }
    }
    return ways[amount]
}
console.log(p031Solution2(200,8))