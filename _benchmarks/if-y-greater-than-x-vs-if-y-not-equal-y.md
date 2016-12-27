---
title: if y greater than x vs if y not equal y
setup: |
  x=1000, y=2000;
tests:
  -
    name: if y greater than x
    code: |
      if(y>x);
  -
    name: if y not equal y
    code: |
      if(y!=x);
---

