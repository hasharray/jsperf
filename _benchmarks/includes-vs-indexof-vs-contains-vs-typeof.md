---
title: Includes vs IndexOf vs Contains vs typeof
setup: |
  var data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
tests:
  -
    name: Includes
    code: |
      data.includes(2)
  -
    name: IndexOf
    code: |
      data.indexOf(2) > -1
  -
    name: typeof
    code: |
      typeof data[2] !== 'undefined'
---

