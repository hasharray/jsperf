---
title: Array vs Float64 Typed Array
setup: |
  
tests:
  -
    name: Array
    code: |
      var a = [];
      for(let i=0;i<100000;i++){
         a[i] = Math.random();
      }
  -
    name: Float64 Typed Array
    code: |
      var a = new Float64Array(100000);
      for(let i=0;i<100000;i++){
         a[i] = Math.random();
      }
---

