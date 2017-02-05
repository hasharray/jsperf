---
title: of constructor vs array assignment
setup: |
  
tests:
  -
    name: of constructor
    code: |
      const x = Float32Array.of(1, 2, 3);
  -
    name: array assignment
    code: |
      const x = new Float32Array(3);
      x[0] = 1;
      x[1] = 2;
      x[2] = 3;
---

