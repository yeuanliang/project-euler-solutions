'use strict'

const swap = function (string, i, j) {
    const array = string.split("");
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    return array.join("");
  };

const quickPerm = function(s){
  const permutations=[]
  const length = string.length;
  const p = [];
  for (let i = 0; i < length + 1; i++) {
    p[i] = i;
  }
  let i = 1;
  let j = 0;
  permutations.push(+string)
  while (i < length) {
    p[i] -= 1;
    j = i % 2 === 0 ? 0 : p[i];
    string = swap(string, j, i);
    permutations.push(+string)
    i = 1;
    while (p[i] === 0) {
      p[i] = i;
      i++;
    }
  }
  return permutations
}

// next lexicographical permutation
const nextPermutation = function(current){
    let length = current.length
    let i = length -1
    while(i>=0&&current.charAt(i-1)>=current.charAt(i)){
        i=i-1
    }
    if(i<0){
        return null
    }else{
        let j = length
        while(j>i&&current.charAt(j-1)<=current.charAt(i-1)){
            j=j-1
        }
        current = swap(current,j-1,i-1)
        i=i+1
        j=length
        while(i<j){
            current = swap(current,i-1,j-1)
            i=i+1
            j=j-1
        }
        return current
    }
}

// previous lexicographical permutation
const previousPermutation = function(current){
    let length = current.length
    let i = length -1
    while(i>=0&&current.charAt(i-1)<=current.charAt(i)){
        i=i-1
    }
    if(i<0){
        return null
    }else{
        let j = length
        while(j>i&&current.charAt(j-1)>=current.charAt(i-1)){
            j=j-1
        }
        current = swap(current,j-1,i-1)
        i=i+1
        j=length
        while(i<j){
            current = swap(current,i-1,j-1)
            i=i+1
            j=j-1
        }
        return current
    }
}

// generating permutations recursively
const anagrams = function(s){
    if(s===''){
      return [s]
    }else{
      let ans = []
      for(let an of anagrams(s.slice(1))){
        for(let i=0;i<an.length+1;i++){
          ans.push(an.slice(0,i)+s.charAt(0)+an.slice(i))
        }
      }
      return ans
    }
  }