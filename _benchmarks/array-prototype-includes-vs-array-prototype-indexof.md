---
title: Array.prototype.includes vs Array.prototype.indexOf
setup: |
  var data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
tests:
  -
    name: Array.prototype.includes
    code: |
      data.includes(2)
  -
    name: Array.prototype.indexOf
    code: |
      data.indexOf(2) > -1
---

