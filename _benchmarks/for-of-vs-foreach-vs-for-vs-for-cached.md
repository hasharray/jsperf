---
title: for of vs forEach vs for vs for cached
setup: |
  var expensiveComputation = n => Math.pow(Math.sqrt(n) * Math.sqrt(n), 20)
  var data = []; for (let t = 0; t < 100; ++t) data.push(t);
tests:
  -
    name: for of
    code: |
      for (let n of data)
        expensiveComputation(n);
  -
    name: forEach
    code: |
      data.forEach(n => {
        expensiveComputation(n);
      })
  -
    name: for
    code: |
      for (let t = 0; t < data.length; ++t)
        expensiveComputation(data[t]);
  -
    name: for cached
    code: |
      for (let t = 0, T = data.length; t < T; ++t)
        expensiveComputation(data[t]);
---

