---
title: void 0 vs undefined
setup: |
  
tests:
  -
    name: void 0
    code: |
      for (i = 0; i < 100; i += 1) {
            if(void 0) {
      console.log(1);
      } else {
      console.log(2);
      }
          }
  -
    name: undefined
    code: |
      for (i = 0; i < 100; i += 1) {
            if(undefined) {
      console.log(1);
      } else {
      console.log(2);
      }
          }
---

