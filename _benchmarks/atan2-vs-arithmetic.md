---
title: atan2 vs arithmetic
setup: |
  
tests:
  -
    name: atan2
    code: |
      var sum = 0.0
      for(var i=0; i<100; i++) {
        sum += Math.atan2(i, sum);
      }
  -
    name: arithmetic
    code: |
      var sum = 0.0
      for(var i=0; i<100; i++) {
        sum += (sum*sum+1.0)/(sum+i+1.0);
      }
---
Math.atan2 vs common arithmetic operations
