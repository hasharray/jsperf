---
title: simple test vs voidtest
setup: |
  var a;
tests:
  -
    name: simple test
    code: |
      typeof a != "undefined"
  -
    name: voidtest
    code: |
      a != void 0
---
dsfdsfdsf
