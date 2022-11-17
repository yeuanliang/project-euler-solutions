"use strict";

// https://www.alpertron.com.ar/QUAD.HTM
// A = (x + 3 * x^2) / (1 - x - x^2)
// x = (-A-1+( 5 * A^2 + 14 * A + 1)^0.5) / ( 6 + 2 * A)
// (5 * A + 7)^2 - 5 * y^2 = 44 (A = 2, y = -7)
// xn+1 = - 9 ⁢xn - 4 ⁢yn - 14 ⁢
// yn+1 = - 20 ⁢xn - 9 ⁢yn - 28 ⁢
const helper = require("./helper");
const equationSolver = function(x, startX, startY){
    let x1 = startX
    let y1 = startY
    const solutions = []
    while(solutions.length!= x){
        let xn = -9n*x1 -4n*y1 - 14n
        let yn = -20n*x1 -9n*y1 - 28n
        if (xn > 0n){
            solutions.push((xn))
        }
        x1 = xn
        y1 = yn
    }
    return solutions
}
const p140Solution = function () {
    const solutions = new Set()
    equationSolver(10n,0n,1n).forEach(item=>solutions.add(item))
    equationSolver(10n,0n,-1n).forEach(item=>solutions.add(item))
    equationSolver(10n,-3n,-2n).forEach(item=>solutions.add(item))
    equationSolver(10n,-3n,2n).forEach(item=>solutions.add(item))
    equationSolver(10n,-4n,-5n).forEach(item=>solutions.add(item))
    equationSolver(10n,-4n,5n).forEach(item=>solutions.add(item))
    equationSolver(10n,2n,-7n).forEach(item=>solutions.add(item))
    equationSolver(10n,2n,7n).forEach(item=>solutions.add(item))
    const s = new Array(...solutions)
    s.sort((a,b)=> {return (Number(a)-Number(b))})
    let sum=0n
    for(let i=0;i<30;i++){
        sum +=s[i]
    }
    return sum
};

console.log(p140Solution());

const p140Solution2 = function(){
    const a = helper.findContinuedFraction(5)
    const h = [BigInt(a[0]),BigInt(a[0])*BigInt(a[1][0])+1n]
    const k = [1n,BigInt(a[1][0])]
    const solutions = new Set()
    for(let i=1;i<31;i++){
        if(i>1){
            h[i]=BigInt(a[1][0])*h[i-1]+h[i-2]
            k[i]=BigInt(a[1][0])*k[i-1]+k[i-2]
        }
        // 5A+7,y : [8,2],[13,5],[43,19]
        if(h[i]*h[i]-5n*k[i]*k[i]===1n){
            let x1= 8n*h[i]-10n*k[i]
            if(x1-7n>0n&&(x1-7n)%5n===0n){
                solutions.add((x1-7n)/5n)
            }
            let x2= 8n*h[i]+10n*k[i]
            if(x2-7n>0n&&(x2-7n)%5n===0n){
                solutions.add((x2-7n)/5n)
            }
            let x3= 13n*h[i]+25n*k[i]
            if(x3-7n>0n&&(x3-7n)%5n===0n){
                solutions.add((x3-7n)/5n)
            }
            let x4= 13n*h[i]-25n*k[i]
            if(x4-7n>0n&&(x4-7n)%5n===0n){
                solutions.add((x4-7n)/5n)
            }
            let x5= 43n*h[i]+95n*k[i]
            if(x5-7n>0n&&(x5-7n)%5n===0n){
                solutions.add((x5-7n)/5n)
            }
            let x6= 43n*h[i]-95n*k[i]
            if(x6-7n>0n&&(x6-7n)%5n===0n){
                solutions.add((x6-7n)/5n)
            }
            
        }
    }
    const s = new Array(...solutions)
    s.sort((a,b)=>{return Number(a)-Number(b)})
    let sum=0n
    for(let i=0;i<30;i++){
        sum+=s[i]
    }
    return sum
}

// console.log(p140Solution2())

//   2n,
//   5n,
//   21n,
//   42n,
//   152n,
//   296n,
//   1050n,
//   2037n,
//   7205n,
//   13970n,
//   49392n,
//   95760n,
//   338546n,
//   656357n,
//   2320437n,
//   4498746n,
//   15904520n,
//   30834872n,
//   109011210n,
//   211345365n,
//   747173957n,
//   1448582690n,
//   5121206496n,
//   9928733472n,
//   35101271522n,
//   68052551621n,
//   240587694165n,
//   466439127882n,
//   1649012587640n,
//   3197021343560n,
//   11302500419322n,
//   21912710277045n,
//   77468490347621n,
//   150191950595762n,
//   530976932014032n,
//   1029430943893296n,
//   3639370033750610n,
//   7055824656657317n,
//   24944613304240245n,
//   48361341652707930n,
//   170972923095931112n,
//   331473566912298200n,
//   1171865848367277546n,
//   2271953626733379477n,
//   8032088015475011717n,
//   15572201820221358146n,
//   55052750259957804480n,
//   106733459114816127552n,
//   377337163804229619650n,
//   731562011983491534725n,
//   2586307396369649533077n,
//   5014200624769624615530n,
//   17726814610783317111896n,
//   34367842361403880773992n,
//   121501394879113570250202n,
//   235560695905057540802421n,
//   832782949543011674639525n,
//   1614557028973998904842962n,
//   5707979251921968152226480n,
//   11066338506912934793098320n,
//   39123071813910765390945842n
