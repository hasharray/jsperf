---
title: Number vs parseInt vs String +
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
---

