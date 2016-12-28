---
title: simple vs regular
setup: |
  
tests:
  -
    name: simple
    code: |
      var b = Math.floor(15.614484464845454)
  -
    name: regular
    code: |
      var b = 15.614484464845454|0
---

