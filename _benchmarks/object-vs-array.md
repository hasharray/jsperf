---
title: object vs array
setup: |
  x1 = {y: 1, z: 2};
  x2 = [1, 2]
tests:
  -
    name: object
    code: |
      x1.x
  -
    name: array
    code: |
      x2[0]
---

