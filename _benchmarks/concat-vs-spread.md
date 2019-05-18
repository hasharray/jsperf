---
title: concat vs spread
setup: |
  let a = [];
  const LIMIT = 10000;
tests:
  -
    name: concat
    code: |
      for (let i = 0; i < LIMIT;  i++) {
        a = a.concat([1]);
      }
  -
    name: spread
    code: |
      for (let i = 0; i < LIMIT;  i++) {
        a = [...a, 1];
      }
---
concat vs spread
