---
title: Big Test vs Small Test
setup: |
  
tests:
  -
    name: Big Test
    code: |
      var MULTIPLE = 2;
      var BASE_POINTS = 200;
      
      var testFunc = function(exp) {
      return Math.floor((Math.sqrt(4 * BASE_POINTS * MULTIPLE * exp + Math.pow(BASE_POINTS, 2)) - BASE_POINTS) / (2 * BASE_POINTS * MULTIPLE))+1;
      }
      
      testFunc(234234)
  -
    name: Small Test
    code: |
      [1, 2, 3, 4, 5, 6, 7].reduce(item => false}
---

