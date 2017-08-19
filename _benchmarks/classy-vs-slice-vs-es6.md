---
title: classy vs slice vs es6
setup: |
  var arrs = [], count = 6;  
    var i, j, arr;  
    for (i=0; i < count; i++) {
      arr = []
      for (j=0; j < Math.pow(10, i); j++) {
        arr.push(j);
      }
      arrs.push(arr);
    }
tests:
  -
    name: classy
    code: |
      var arr = arrs[5];
      var x = arr[arr.length - 1];
  -
    name: slice
    code: |
      var arr = arrs[5];
      var x = arr.slice(-1)[0];
  -
    name: es6
    code: |
      var arr = arrs[5];
      var x = [...arr].pop()
---

