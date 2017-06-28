---
title: forEach vs for...of
setup: |
  const arr = [1,2,3,4,5,6,7,8,9,10]
  let t = 0
tests:
  -
    name: forEach
    code: |
      arr.forEach(n => t++)
  -
    name: for...of
    code: |
      for (let i = 0; i < arr.length; i++) {
        t++
      }
---

