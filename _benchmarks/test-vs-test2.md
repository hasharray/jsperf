---
title: test vs test2
setup: |
  var test1 = 'a';
  var test2 = 'ab';
tests:
  -
    name: test
    code: |
      console.log(test1);
  -
    name: test2
    code: |
      console.log(test2);
---
testa
