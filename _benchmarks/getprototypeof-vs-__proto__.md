---
title: getPrototypeOf vs __proto__
setup: |
  
tests:
  -
    name: getPrototypeOf
    code: |
      console.log(Object.getPrototypeOf(Object));
  -
    name: __proto__
    code: |
      console.log(Object.__proto__);
---
Getting a prototype in different ways
