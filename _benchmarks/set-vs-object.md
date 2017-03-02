---
title: set vs object
setup: |
  var array = Array.from(Array(1000000)).map((v, i) => 'i_' + i);
tests:
  -
    name: set
    code: |
      var checked = new Set();
      
      for (var i = 0; i < array.length; i++) {
        var item = array[i];
      
        if (!checked.has(item)) {
          checked.add(item);
        }
      }
  -
    name: object
    code: |
      var checked = {};
      
      for (var i = 0; i < array.length; i++) {
        var item = array[i];
      
        if (!checked[item]) {
          checked[item] = true;
        }
      }
---

