---
title: simple compare vs object cast
setup: |
  var a = 'asd'
  var b = 'asd'
tests:
  -
    name: simple compare
    code: |
      a===b
  -
    name: object cast
    code: |
      var oa = new String(a)
      oa.valueOf()===b
---

