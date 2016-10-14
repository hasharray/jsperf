---
title: Number vs parseInt vs String * Number vs Double invert
setup: |
  
tests:
  -
    name: Number
    code: |
      Number("123")
  -
    name: parseInt
    code: |
      parseInt("123")
  -
    name: String * Number
    code: |
      "123"*1
  -
    name: Double invert
    code: |
      ~~"123"
---
Speed comparison of String to Int methods
