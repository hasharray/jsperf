---
title: abs vs square
setup: |
  
tests:
  -
    name: abs
    code: |
      var a = 0.5 - Math.random(), b = 0.5 - Math.random();
      var q = Math.abs(a);
      var r = Math.abs(b);
      var x = q > r;
  -
    name: square
    code: |
      var a = 0.5 - Math.random(), b = 0.5 - Math.random();
      var q = a*a;
      var r = b*b;
      var x = q > r;
---
square or abs
