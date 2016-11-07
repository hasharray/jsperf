---
title: Date now vs Incrementing object lookup
setup: |
  var obj = {
  num: 0,
  }
tests:
  -
    name: Date now
    code: |
      var test = Date.now();
  -
    name: Incrementing object lookup
    code: |
      var test = ++obj.num;
---

