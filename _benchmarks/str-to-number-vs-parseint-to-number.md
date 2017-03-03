---
title: str to number vs parseInt to Number
setup: |
  
tests:
  -
    name: str to number
    code: |
      var a = {"0": 0, "1": 1, "2": 2, "3": 3, "4": 4, "5": 5}
      a["0"]
  -
    name: parseInt to Number
    code: |
      var a = [0, 1, 2, 3, 4, 5]
      a[parseInt("0")]
---

