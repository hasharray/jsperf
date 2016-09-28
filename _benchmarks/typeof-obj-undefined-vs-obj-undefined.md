---
title: typeof obj === 'undefined' vs obj === undefined
setup: |
  obj = {};
  i = 0;
tests:
  -
    name: typeof obj === 'undefined'
    code: |
      if(typeof obj === 'undefined')
         i++;
  -
    name: obj === undefined
    code: |
      if(obj === undefined)
         i++;
---

