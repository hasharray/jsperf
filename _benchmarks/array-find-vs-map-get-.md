---
title: Array#find() vs Map#get()
setup: |
  var array = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}];
  var map = new Map([[1, 1], [2, 2], [3, 3], [4, 4], [5, 5]])
tests:
  -
    name: Array#find()
    code: |
      for (let a = 0; a < 1000; a++) {
        array.find(item => item.id === 1);
      }
  -
    name: Map#get()
    code: |
      for (let a = 0; a < 1000; a++) {
        map.get(1);
      }
---

