---
title: Function() vs new Function()
setup: |
  
tests:
  -
    name: Function()
    code: |
      const fun = Function('a', 'b', 'return a + b');
      fun(1, 2);
  -
    name: new Function()
    code: |
      const fun = new Function('a', 'b', 'return a + b');
      fun(1, 2);
---

