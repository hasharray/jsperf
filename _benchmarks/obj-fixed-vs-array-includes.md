---
title: obj[fixed] vs array.includes
setup: |
  var IntObj = {5: true, 2: true, 6:true, 1: true };
    var ints = [1, 2, 5, 6];
tests:
  -
    name: obj[fixed]
    code: |
      IntObj[5]
  -
    name: array.includes
    code: |
      ints.includes(5)
---
For small N, which is faster, object property lookup or array iteration
