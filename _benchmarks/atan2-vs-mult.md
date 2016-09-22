---
title: atan2 vs mult
setup: |
  
tests:
  -
    name: atan2
    code: |
      var a = 1.0;
      for(var i=1.0; i<1000; i++) {
        a += Math.atan2(i, a);
      }
  -
    name: mult
    code: |
      var a = 1.0;
      for(var i=1.0; i<1000; i++) {
        a += a*a*a*a*a*1e-10;
      }
---
atan2 vs mult
