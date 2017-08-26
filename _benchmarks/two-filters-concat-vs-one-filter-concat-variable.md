---
title: two filters+concat vs one filter+concat+variable
setup: |
  
tests:
  -
    name: two filters+concat
    code: |
      var moveZeros = function (arr) {
        return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
      }
      
      moveZeros([1,2,0,1,0,1,0,3,0,1]);
      moveZeros([9,0.0,0,9,1,2,0,1,0,1,0.0,3,0,1,9,0,0,0,0,9])
      moveZeros(["a",0,0,"b","c","d",0,1,0,1,0,3,0,1,9,0,0,0,0,9])
  -
    name: one filter+concat+variable
    code: |
      var moveZeros = function (arr) {
        let zeros = [];
        return arr.filter((el,index)=>{
          if(el === 0){
            zeros.push(0);
            return false;
          }
          else return true;
        }).concat(zeros);
      }
      
      moveZeros([1,2,0,1,0,1,0,3,0,1]);
      moveZeros([9,0.0,0,9,1,2,0,1,0,1,0.0,3,0,1,9,0,0,0,0,9])
      moveZeros(["a",0,0,"b","c","d",0,1,0,1,0,3,0,1,9,0,0,0,0,9])
---
two filters+concat vs one filter+concat+variable
