---
title: Math.round() vs toFixed(0);
setup: |
  const n = 3.141592653589793;
tests:
  -
    name: Math.round()
    code: |
      Math.round(n);
  -
    name: toFixed(0);
    code: |
      n.toFixed(0);
---
Math.round vs toFixed();
