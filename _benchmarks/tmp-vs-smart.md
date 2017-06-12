---
title: tmp vs smart
setup: |
  
tests:
  -
    name: tmp
    code: |
      var a = 3, b = 8;
      var tmp = a;
      a = b;
      b = tmp;
  -
    name: smart
    code: |
      var a = 3, b = 8;
      a = b + a - (b = a)
---

