---
title: pow vs *
setup: |
  
tests:
  -
    name: pow
    code: |
      Math.pow(5, 3)
  -
    name: *
    code: |
      5 ** 3
---

