---
title: i++ vs ++i vs i += 1 vs i = i + 1 vs i = 1 + i
setup: |
  var i = 0;
tests:
  -
    name: i++
    code: |
      i++;
  -
    name: ++i
    code: |
      ++i;
  -
    name: i += 1
    code: |
      i += 1;
  -
    name: i = i + 1
    code: |
      i = i + 1;
  -
    name: i = 1 + i
    code: |
      i = 1 + i;
---

