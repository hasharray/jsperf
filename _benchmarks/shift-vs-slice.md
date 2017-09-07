---
title: shift vs slice
setup: |
  var arr = [1,2,3,4,5,6,7,8,9,10]
tests:
  -
    name: shift
    code: |
      arr.shift()
  -
    name: slice
    code: |
      arr.slice(1)
---
shift vs slice
