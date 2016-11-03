---
title: obj === fixed vs Array.prototype.includes
setup: |
  var myInt = 5;
  var myString = 'string';
  var ints = [1, 2, 5, 6];
  var strings = ['my', 'string', 'is', 'here'];
tests:
  -
    name: obj === fixed
    code: |
      myInt === 5;
      myString === 'string';
  -
    name: Array.prototype.includes
    code: |
      ints.includes(myInt);
      strings.includes(myString);
---

