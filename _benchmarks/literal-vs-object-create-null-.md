---
title: Literal vs Object.create(null)
setup: |
  
tests:
  -
    name: Literal
    code: |
      var a = {};
  -
    name: Object.create(null)
    code: |
      var a = Object.create(null);
---
Object: literal vs Object.create(null) - which is faster?
