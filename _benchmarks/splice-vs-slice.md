---
title: splice vs slice
setup: |
  var array = Array(1000).fill(1);
tests:
  -
    name: splice
    code: |
      array.splice(1,0,1)
  -
    name: slice
    code: |
      array = array.slice(1)
---

