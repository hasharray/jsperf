---
title: splice vs slice and empty
setup: |
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
tests:
  -
    name: splice
    code: |
      const clone = arr.splice(0, arr.length);
  -
    name: slice and empty
    code: |
      const clone = arr.slice();
      arr.length = 0;
---

