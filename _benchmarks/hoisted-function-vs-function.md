---
title: hoisted function vs function
setup: |
  
tests:
  -
    name: hoisted function
    code: |
      fn();
      function fn() {}
  -
    name: function
    code: |
      function fn() {}
      fn();
---

