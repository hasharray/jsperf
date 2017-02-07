---
title: Math.abs vs * -1
setup: |
  var num = -452;
tests:
  -
    name: Math.abs
    code: |
      Math.abs(num)
  -
    name: * -1
    code: |
      num * -1
---

