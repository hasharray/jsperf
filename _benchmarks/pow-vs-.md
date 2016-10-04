---
title: pow vs *
setup: |
  var p = 150 * Math.cos(76.5524 * (180/Math.PI))
tests:
  -
    name: pow
    code: |
      Math.pow(p,2)
  -
    name: *
    code: |
      p  * p
---

