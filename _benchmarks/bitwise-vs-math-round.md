---
title: Bitwise vs Math.round
setup: |
  
tests:
  -
    name: Bitwise
    code: |
      var x = ~~(102.45 + 0.5)
  -
    name: Math.round
    code: |
      var x = Math.round(102.45 + 0.5)
---

