---
title: toString.call vs typeof / instanceof
setup: |
  var x = 123;
  var y = new Number(123);
tests:
  -
    name: toString.call
    code: |
      Object.prototype.toString.call(x) === "[object Number]";
      Object.prototype.toString.call(y) === "[object Number]";
  -
    name: typeof / instanceof
    code: |
      typeof x === "number" || x instanceof Number;
      typeof y === "number" || y instanceof Number;
---

