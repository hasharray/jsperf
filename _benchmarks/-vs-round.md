---
title: ~~ vs round
setup: |
  
tests:
  -
    name: ~~
    code: |
      var x = ~~(102.45 + 0.5)
  -
    name: round
    code: |
      var x = Math.round(102.45 + 0.5)
---

