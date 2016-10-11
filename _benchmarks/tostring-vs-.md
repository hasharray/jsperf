---
title: toString vs + ''
setup: |
  const num = 13;
tests:
  -
    name: toString
    code: |
      num.toString();
  -
    name: + ''
    code: |
      num + '';
---
Compare toString() vs concatenating an empty string
