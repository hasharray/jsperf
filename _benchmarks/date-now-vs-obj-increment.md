---
title: Date.now vs obj increment
setup: |
  var obj = { num: 0 };
tests:
  -
    name: Date.now
    code: |
      var test = Date.now();
      
      console.log(test);
  -
    name: obj increment
    code: |
      ++obj.num;
      
      console.log(obj.num);
---

