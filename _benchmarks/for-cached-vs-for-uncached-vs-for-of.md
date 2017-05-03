---
title: for-cached vs for-uncached vs for-of
setup: |
  var arr = [1,2,3,4,5,6,7,8,9,0]
tests:
  -
    name: for-cached
    code: |
      for (var i = 0, len = arr.length; i < len; i++) {
        var item = arr[i];
        item + 1;
      }
  -
    name: for-uncached
    code: |
      for (var i = 0; i < arr.length; i++) {
        var item = arr[i];
        item + 1;
      }
  -
    name: for-of
    code: |
      for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        item + 1;
      }
---

