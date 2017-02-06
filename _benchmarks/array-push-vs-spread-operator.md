---
title: Array#push vs spread operator
setup: |
  var arr = [];
tests:
  -
    name: Array#push
    code: |
      for (var i = 0; i < 10000; i++) {
        arr.push(i)
      }
  -
    name: spread operator
    code: |
      for (var i = 0; i < 10000; i++) {
        arr = [...arr, i];
      }
---

