---
title: for loop with with array length cached vs for loop that reads array length every time
setup: |
  
tests:
  -
    name: for loop with with array length cached
    code: |
      var a = new Array(100).fill(1)
      var len = a.length
      var b = []
      for (var i = 0; i < len; i++) {
        b.push(i)
      }
  -
    name: for loop that reads array length every time
    code: |
      var a = new Array(100).fill(1)
      var len = a.length
      var b = []
      for (var i = 0; i < len; i++) {
        b.push(i)
      }
---

