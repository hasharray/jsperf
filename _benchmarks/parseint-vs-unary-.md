---
title: parseint vs unary +
setup: |
  
tests:
  -
    name: parseint
    code: |
      var test1 = '1';
      var test2 = null;
      var test3 = 3;
  -
    name: unary +
    code: |
      var test1 = '1';
      var test2 = null;
      var test3 = 3;
---
compare parse to +
