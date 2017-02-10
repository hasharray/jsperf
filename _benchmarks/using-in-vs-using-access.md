---
title: using in vs using access
setup: |
  x = {'x': true}
tests:
  -
    name: using in
    code: |
      'y' in x
  -
    name: using access
    code: |
      x.y == null
---

