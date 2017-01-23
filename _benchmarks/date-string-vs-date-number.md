---
title: Date string vs Date number
setup: |
  
tests:
  -
    name: Date string
    code: |
      new Date("2017-01-23 23:25:54")
  -
    name: Date number
    code: |
      new Date(1485213954 * 1000)
---

