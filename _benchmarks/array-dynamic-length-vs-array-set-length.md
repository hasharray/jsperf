---
title: array dynamic length vs array set length
setup: |
  
tests:
  -
    name: array dynamic length
    code: |
      var arr = [];
      for (var i = 0; i < 100000; i++) {
          arr.unshift(i);
      }
  -
    name: array set length
    code: |
      var arr = new Array(100000);
      for (var i = 0; i < 100000; i++) {
          arr.unshift(i);
      }
---

