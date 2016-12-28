---
title: for vs forEach vs for-of
setup: |
  var arr = [1,2,3,4,5,6,7,8,9,0]
tests:
  -
    name: for
    code: |
      for (var i = 0, len = arr.length; i < len; i++) {
        var item = arr[i];
        item + 1;
      }
  -
    name: forEach
    code: |
      arr.forEach(function(item) {
        item + 1;
      });
  -
    name: for-of
    code: |
      for (var item of arr) {
        item + 1;
      }
---
perfomance of for - foreach - for-of
