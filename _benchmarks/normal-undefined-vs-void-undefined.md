---
title: normal undefined vs void undefined
setup: |
  
tests:
  -
    name: normal undefined
    code: |
      a = undefined;
      value = 1;
      for (let i = 0; i < 100000; ++i) {
          if (a === undefined) value++;
      }
  -
    name: void undefined
    code: |
      a = undefined;
      value = 1;
      for (let i = 0; i < 100000; ++i) {
          if (a === void 0) value++;
      }
---

