---
title: apply fn vs invoke fn
setup: |
  function myFoo(a, b, c) {
    return a + b + ;
  }
tests:
  -
    name: apply fn
    code: |
      myFoo.apply(null, [1, 2, 3]);
  -
    name: invoke fn
    code: |
      myFoo(1, 2, 3);
---
apply vs invoke
