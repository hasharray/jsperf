---
title: For loop vs forEach Loop
setup: |
  var arr = [];
    for (var i = 0; i < 1000; i++) {
      arr[i] = 'value' + i;
    }
  
    function someFn(ix) {
      return ix * 5 + 1 / 3 * 8;
    }
tests:
  -
    name: For loop
    code: |
      for (var i = 0; i < arr.length; i++) {
        someFn(arr[i]);
      }
  -
    name: forEach Loop
    code: |
      arr.forEach(function(a,i){
      someFn(a);
      })
---
Javascript array iteration comaprison between for and forEach.
