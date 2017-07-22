---
title: Testing string vs Testing string length
setup: |
  
tests:
  -
    name: Testing string
    code: |
      var x = ""; 
      return x === "";
  -
    name: Testing string length
    code: |
      var y = ""; 
      return y.length === 0;
---

