---
title: curried vs oldskool
setup: |
  
tests:
  -
    name: curried
    code: |
      const foo = bar => baz => biz => bar + baz + biz;
      
      
      foo(5)(4)(3);
  -
    name: oldskool
    code: |
      const foo = (bar, baz, biz) => bar + baz + biz;
      
      foo(5, 4, 3);
---

