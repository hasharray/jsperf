---
title: es5 if not array array vs es6 if not array array
setup: |
  let input0 = ['foo', 'bar', 'baz'];
  let input1 = 'foo';
tests:
  -
    name: es5 if not array array
    code: |
      if (!Array.isArray(input0)) {
          input0 = [input0];
      }
      if (!Array.isArray(input1)) {
          input1 = [input1];
      }
  -
    name: es6 if not array array
    code: |
      result0 = [...input0];
      result1 = [...input1];
---

