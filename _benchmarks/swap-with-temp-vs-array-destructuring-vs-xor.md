---
title: swap with temp vs array destructuring vs xor
setup: |
  var a = 1;
  var b = 2;
tests:
  -
    name: swap with temp
    code: |
      var tmp = a;
      a = b;
      b = tmp;
  -
    name: array destructuring
    code: |
      [b, a] = [a, b]
  -
    name: xor
    code: |
      a = a ^ b;
      b = a ^ b;
      a = a ^ b;
---

