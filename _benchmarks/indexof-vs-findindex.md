---
title: indexof vs findIndex
setup: |
  let a = Array.apply(null, {length: 1000}).map(Function.call, Number);
  let o = Array.apply(null, {length: 1000});
  o.map((x) => {return {id: x}});
tests:
  -
    name: indexof
    code: |
      a.indexOf(500);
  -
    name: findIndex
    code: |
      o.findIndex(function(x) {
      return true;
      });
---

