---
title: object value updating vs pseudo static value updating
setup: |
  
tests:
  -
    name: object value updating
    code: |
      var obj = {};
      obj['a'] = 0;
      obj['b'] = 0;
      for (var i = 0; i < 100000; i++) {
        if (i % 5 === 0) { 
          obj['c'] = 5;
        }
        obj['a']++;
        obj['b'] += 2;
      }
  -
    name: pseudo static value updating
    code: |
      var obj = {
        a: 0,
        b: 0,
        c: 0
      };
      for (var i = 0; i < 100000; i++) {
        if (i % 5 === 0) { 
          obj['c'] = 5;
        }
        obj['a']++;
        obj['b'] += 2;
      }
---

