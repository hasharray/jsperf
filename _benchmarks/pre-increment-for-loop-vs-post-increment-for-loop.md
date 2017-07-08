---
title: Pre-increment for loop vs Post-increment for loop
setup: |
  var n = 1000000000;
tests:
  -
    name: Pre-increment for loop
    code: |
      for (var i = 0; i < n; ++i) {}
  -
    name: Post-increment for loop
    code: |
      for (var i = 0; i < n; i++) {}
---

