---
title: Array vs TypedArray
setup: |
  
tests:
  -
    name: Array
    code: |
      var a = [];
      for(let i=0;i<1000;i++){
         a[i] = i;
      }
  -
    name: TypedArray
    code: |
      var a = new Uint16Array(1000);
      for(let i=0;i<1000;i++){
         a[i] = i;
      }
---

