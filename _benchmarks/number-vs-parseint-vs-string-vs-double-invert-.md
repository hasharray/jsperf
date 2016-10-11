---
title: Number vs parseInt vs String + vs Double Invert
setup: |
  
tests:
  -
    name: Number
    code: |
      Number(123)
  -
    name: parseInt
    code: |
      parseInt("123")
  -
    name: String +
    code: |
      "123"+0
  -
    name: Double Invert
    code: |
      ~~"123"
---

