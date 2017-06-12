---
title: array#indexOf vs array#findIndex vs for loop
setup: |
  const arr = Array.apply(null, {length: 1000}).map(Function.call, Number);
  const o = Array.apply(null, {length: 1000}).map(Function.call, (x) => {return {id:x}});
tests:
  -
    name: array#indexOf
    code: |
      arr.indexOf(995);
  -
    name: array#findIndex
    code: |
      o.findIndex((x) => x.id === 995);
  -
    name: for loop
    code: |
      let index = -1;
      for (let [i, x] of a.entries()) {
          if(x.id === 995) { index = i; break;};
      }
---

