---
title: Math.floor vs |0
setup: |
  
tests:
  -
    name: Math.floor
    code: |
      var a = Math.floor(5 + 1.2);
  -
    name: |0
    code: |
      var a = (5 + 1.2)|0;
---
Math.floor vs |0
