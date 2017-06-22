---
title: Object.assign() vs ES spread
setup: |
  
tests:
  -
    name: Object.assign()
    code: |
      let a = { foo: 1 };
      let b = { bar: 2 };
      
      let obj = Object.assign(a, b);
  -
    name: ES spread
    code: |
      let a = { foo: 1 };
      let b = { bar: 2 };
      
      let obj = {
        ...a,
        ...b
      }
---

