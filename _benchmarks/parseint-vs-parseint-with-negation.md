---
title: ParseInt vs ParseInt with negation
setup: |
  var a = 2.17232;
  var b = 3.1415926535 8979323846;
  var c,d;
tests:
  -
    name: ParseInt
    code: |
      c = parseInt(a);
      d = parseInt(b);
  -
    name: ParseInt with negation
    code: |
      c =~~(a);
      d = ~~(b);
---
Parseint
