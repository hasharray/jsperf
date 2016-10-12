---
title: for vs reduce
setup: |
  
tests:
  -
    name: for
    code: |
      var data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      var res = 0;
      for (var i = 0; i < data.length; ++i) {
        res += data[i];
      }
  -
    name: reduce
    code: |
      var data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      data.reduce(function(a, b) {
        return a + b;
      });
---

