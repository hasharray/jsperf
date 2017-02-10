---
title: for-in without property check vs for-in with property check
setup: |
  
tests:
  -
    name: for-in without property check
    code: |
      var y = {'a': 1, 'b': 2, 'c': 3};
      var j;
      for (var i in y) {
          j++;
      }
  -
    name: for-in with property check
    code: |
      var y = {'a': 1, 'b': 2, 'c': 3};
      var j;
      for (var i in y) {
          if (!y.hasOwnProperty(i)) continue;
          j++;
      }
---

