---
title: arr vs obj
setup: |
  
tests:
  -
    name: arr
    code: |
      var x = [];
      x[30000]= Math.random()
      x[40000] = x[30000]*Math.random()
      console.log(x[40000], x.length)
  -
    name: obj
    code: |
      var x = {};
      x[30000]= Math.random()
      x[40000] = x[30000]*Math.random()
      console.log(x[40000], x.length)
---

