---
title: reference swap vs splice
setup: |
  let a = [];
  const b = [];
  for (let i = 0; i < 10000; i++) {
  a[i] = ' ' + i;
  b[i] = ' ' + i;
  }
tests:
  -
    name: reference swap
    code: |
      a = [];
  -
    name: splice
    code: |
      b.splice(0, b.length);
---
clearing table
