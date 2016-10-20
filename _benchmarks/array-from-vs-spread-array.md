---
title: Array#from vs Spread array
setup: |
  const arrOrig = Array(10000).fill(0);
tests:
  -
    name: Array#from
    code: |
      const arr_1 = Array.from(arrOrig);
  -
    name: Spread array
    code: |
      const [ ...arr_2 ] = arrOrig;
---

