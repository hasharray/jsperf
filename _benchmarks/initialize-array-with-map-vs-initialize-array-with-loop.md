---
title: initialize array with map vs initialize array with loop
setup: |
  size = 1000
  value = false
tests:
  -
    name: initialize array with map
    code: |
      array = new Array(size).map(() => value)
  -
    name: initialize array with loop
    code: |
      array = []
      while(size--) array[size] = value
---

