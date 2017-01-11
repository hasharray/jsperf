---
title: demo_for vs demo_promise
setup: |
  let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
tests:
  -
    name: demo_for
    code: |
      const step = value => value < 10 ? step(value-1) : value
      
      step(10)
  -
    name: demo_promise
    code: |
      const promise_step = promise => promise.then(value => value < 10 ? promise_step(Promise.resolve(value -1)) : value)
      
      promise_step(Promise.resolve(10))
---

