---
title: for loop vs .filter() inline vs .filter() prepared
setup: |
  var items = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
  var prepared = i => i % 2 == 0;
tests:
  -
    name: for loop
    code: |
      var result = [];
      for(var i in items) {
          if (items[i] % 2 == 0) {
              result.push(items[i]);
          }
      }
  -
    name: .filter() inline
    code: |
      var result = items.filter(i => i % 2 == 0);
  -
    name: .filter() prepared
    code: |
      var result = items.filter(prepared);
---

