---
title: Object property existance
setup: |
  var a = {a: 5, b:59239};
  var key = "asd";
tests:
  -
    name: hasOwnProperty by new Object
    code: |
      {}.hasOwnProperty.call(a, key);
  -
    name: check for undefined
    code: |
      a[key] === undefined;
---

