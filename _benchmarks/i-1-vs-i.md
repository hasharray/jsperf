---
title: i + 1 vs ++i
setup: |
  var i = 0;
tests:
  -
    name: i + 1
    code: |
      i = i +1;
  -
    name: ++i
    code: |
      ++i
---

