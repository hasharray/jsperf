---
title: Literal vs Slice
setup: |
  var arr = [];
tests:
  -
    name: Literal
    code: |
      var a = [];
  -
    name: Slice
    code: |
      var a = arr.slice();
---
Is literal form of Array faster then slice
