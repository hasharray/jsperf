---
title: Null vs falsey vs string
setup: |
  var x = 12345;
  var y;
tests:
  -
    name: Null
    code: |
      if ((x || null) !== null) {
         y = 1;
      }
  -
    name: falsey
    code: |
      if (x) {
        y = 1;
      }
  -
    name: string
    code: |
      if (typeof x === 'string') {
        y = 1;
      }
---
Cool
