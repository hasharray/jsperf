---
title: unshift vs push vs concat
setup: |
  var arr = new Array(10000);
  var i;
  for(i=0;i < arr.length - 1;i++) {
       arr[i] = {a}
  }
tests:
  -
    name: unshift
    code: |
      arr.unshift({a:2,b:6});
  -
    name: push
    code: |
      arr.push({a:2,b:6});
  -
    name: concat
    code: |
      arr.concat([{a:2,b:6}]);
---
testing push & shift performance
