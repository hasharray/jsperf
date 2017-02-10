---
title: {}; vs Object.create(null) vs new Object();
setup: |
  
tests:
  -
    name: {};
    code: |
      {};
  -
    name: Object.create(null)
    code: |
      Object.create(null)
  -
    name: new Object();
    code: |
      new Object();
---

