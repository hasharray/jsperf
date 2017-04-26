---
title: modulo vs floor
setup: |
  
tests:
  -
    name: modulo
    code: |
      var a = 123.456
      var b = 0.2
      var c = a % b
  -
    name: floor
    code: |
      var a = 123.456
      var b = 0.2
      var c = a / b
      c = 1 - Math.floor(c)
---

