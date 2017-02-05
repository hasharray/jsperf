---
title: implicit zero vs explicit zero
setup: |
  
tests:
  -
    name: implicit zero
    code: |
      const x = new Float32Array(3);
  -
    name: explicit zero
    code: |
      const x = Float32Array.of(0, 0, 0);
---

