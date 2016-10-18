---
title: for vs Array#forEach vs Array#map
setup: |
  var arr = Array.from({ length: 100 });
tests:
  -
    name: for
    code: |
      for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * 2;
      }
  -
    name: Array#forEach
    code: |
      arr.forEach((val) => {
        val = val * 2;
      });
  -
    name: Array#map
    code: |
      arr = arr.map(val => val * 2);
---
for vs forEach vs map
