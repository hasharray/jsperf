---
title: first element splice vs new slice
setup: |
  var array = Array(1000).fill(1)
tests:
  -
    name: first element splice
    code: |
      array.splice(0,1)
  -
    name: new slice
    code: |
      array = array.slice(1)
---

