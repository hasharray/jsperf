---
title: Set vs array-unique
setup: |
  var array = Array.from({length: 10000}, () => Math.floor(Math.random() * 9))
tests:
  -
    name: Set
    code: |
      [...new Set(array)]
  -
    name: array-unique
    code: |
      var len = array.length;
      var i = -1;
      
      while (i++ < len) {
        var j = i + 1;
      
        for (; j < array.length; ++j) {
          if (array[i] === array[j]) {
            array.splice(j--, 1);
          }
        }
      }
---

