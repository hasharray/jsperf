---
title: Spread array vs slice
setup: |
  
tests:
  -
    name: Spread array
    code: |
      var a = [1,2,3,4,5,6,7,8,9,10];
      var b = [...a];
  -
    name: slice
    code: |
      var a = [1,2,3,4,5,6,7,8,9,0];
      var b = a.slice();
---

