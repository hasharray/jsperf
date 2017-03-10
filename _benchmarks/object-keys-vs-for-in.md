---
title: Object.keys vs for..in
setup: |
  var a = {};
tests:
  -
    name: Object.keys
    code: |
      Object.keys(a).length===0;
  -
    name: for..in
    code: |
      for(key in a) { return false }
---
Empty object test
