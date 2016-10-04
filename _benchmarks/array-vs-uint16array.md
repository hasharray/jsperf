---
title: Array vs Uint16Array
setup: |
  
tests:
  -
    name: Array
    code: |
      var a = new Array(1000);
      for(let i=0;i<1000;i++){
         a[i] = i;
      }
  -
    name: Uint16Array
    code: |
      var b = new Uint16Array(1000);
      for(let i=0;i<1000;i++){
         b[i] = i;
      }
---

