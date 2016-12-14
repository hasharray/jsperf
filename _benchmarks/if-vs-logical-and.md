---
title: If vs Logical and
setup: |
  var comp = 596
tests:
  -
    name: If
    code: |
      if(comp < 0) {
          "do the thing"
      }
  -
    name: Logical and
    code: |
      comp < 0 && "do the thing"
---

