---
title: Object.create(null) vs Object Literal
setup: |
  
tests:
  -
    name: Object.create(null)
    code: |
      var object = Object.create(null);
  -
    name: Object Literal
    code: |
      var object = {};
---

