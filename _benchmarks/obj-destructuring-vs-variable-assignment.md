---
title: obj destructuring vs variable assignment
setup: |
  var obj= {
    a: 'a',
    b: 'b',
    c: 'c'
  };
tests:
  -
    name: obj destructuring
    code: |
      var {a, b} = obj;
  -
    name: variable assignment
    code: |
      var a = obj.a;
      var b = obj.b;
---
to test whether obj destructuring is faster than manual variable assignment
