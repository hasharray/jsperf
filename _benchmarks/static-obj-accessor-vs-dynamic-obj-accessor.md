---
title: static obj accessor vs dynamic obj accessor
setup: |
  
tests:
  -
    name: static obj accessor
    code: |
      var a = {
          a1: 1,
          a2: 2,
          a3: 3
      };
      
      a.a1;
      a.a2;
      a.a3;
  -
    name: dynamic obj accessor
    code: |
      var a = {
          a1: 1,
          a2: 2,
          a3: 3
      };
      
      var f = function(n) { return a[n]; };
      f("a1");
      f("a2");
      f("a3");
---

