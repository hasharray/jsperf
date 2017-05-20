---
title: ++ vs +1
setup: |
  var num = 0;
tests:
  -
    name: ++
    code: |
      if (num < 500) {
      num++;
      }
  -
    name: +1
    code: |
      if (num < 500) {
      num = num+1;
      }
---
++
