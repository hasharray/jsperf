---
title: For loop vs xzc
setup: |
  var array = [1,2,3,4,5,6,9,8,7,8,9,6,8];
  var i;
tests:
  -
    name: For loop
    code: |
      for(i = 0, i < array.length; i++) {
         console.log(array[i])
      }
  -
    name: xzc
    code: |
      while(array > 0) {
       console.log(array.pop());
      }
---
for vs while vs foreach
