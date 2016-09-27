---
title: Number vs Number.parseFloat
setup: |
  
tests:
  -
    name: Number
    code: |
      var value = Number('16.0');
  -
    name: Number.parseFloat
    code: |
      var value = Number.parseFloat('16.0');
---

