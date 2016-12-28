---
title: a vs b vs c
setup: |
  var a = {};
tests:
  -
    name: a
    code: |
      a = {};
  -
    name: b
    code: |
      a = { a: 1};
  -
    name: c
    code: |
      a = { d: 2 };
---
aaaa
