---
title: slice vs reverse and index 0 vs pop
setup: |
  var arr = [1,2,3,4,5,6,7,8,9];
tests:
  -
    name: slice
    code: |
      var lastVal = arr.slice(-1);
      console.log(lastVal);
  -
    name: reverse and index 0
    code: |
      var lastVal = arr.reverse()[0];
      console.log(lastVal);
  -
    name: pop
    code: |
      var lastVal = arr.pop();
      console.log(lastVal);
---
Find fastest way to get the last item of an array
