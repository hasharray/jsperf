---
title: Bitwise vs Math.floor
setup: |
  var x = .5, r = .0;
tests:
  -
    name: Bitwise
    code: |
      x = x + .5;
      r = x | 0;
  -
    name: Math.floor
    code: |
      x = x + .5;
      r = Math.floor(x);
---
Bitwise vs Math.floor
