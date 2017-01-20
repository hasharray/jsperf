---
title: 1 loop 2ops vs 2 loops 1op
setup: |
  var arr = [1,2,3,4,5,6,7,8,9,10];
tests:
  -
    name: 1 loop 2ops
    code: |
      arr.forEach(function(el) {
       el += 2;
      el /= 2;
      });
  -
    name: 2 loops 1op
    code: |
      arr.forEach(function(el) {
       el += 2;
      });
      arr.forEach(function(el) {
      el /= 2;
      });
---

