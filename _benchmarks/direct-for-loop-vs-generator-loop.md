---
title: Direct for loop vs Generator loop
setup: |
  function* range(n) {
    for(var i=0; i<n; i++) yield i;
  }
  var arr = [];
  for(var i of range(5000)) {
    arr.push(i*1.2);
  }
tests:
  -
    name: Direct for loop
    code: |
      var sum=0;
      for(var i=0; i<5000; i++) sum+=arr[i];
  -
    name: Generator loop
    code: |
      var sum=0;
      for(var i of range(5000)) sum+=arr[i];
---

