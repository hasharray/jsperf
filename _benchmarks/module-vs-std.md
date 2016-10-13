---
title: module vs std
setup: |
  
tests:
  -
    name: module
    code: |
      'use strict';
      
      function repeat(ele, num) {
       var arr = new Array(num);
      
       for (var i = 0; i < num; i++) {
        arr[i] = ele;
       }
       return arr;
      }
      
      var f = repeat("yo", 2);
      var g = repeat(12, 2);
      var h = repeat({a:"yo", b: 12}, 2);
  -
    name: std
    code: |
      function repeat(ele, num) {
        return new Array(num).fill(ele);
      }
      
      var f = repeat("yo", 2);
      var g = repeat(12, 2);
      var h = repeat({a:"yo", b: 12}, 2);
---
fill array
