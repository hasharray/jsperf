---
title: Push vs Assign vs Unshift
setup: |
  var count = 100;
  var arr = [];
tests:
  -
    name: Push
    code: |
      for (var i = 1; i < count; i++) {
        arr.push(i);
      }
  -
    name: Assign
    code: |
      arr.length = count;
      for (var i = 1; i < count; i++) {
        arr[i] = i;
      }
  -
    name: Unshift
    code: |
      for (var i = 1; i < count; i++) {
        arr.unshift(i);
      }
---

