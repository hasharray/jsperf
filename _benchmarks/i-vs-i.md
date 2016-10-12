---
title: i++ vs ++i
setup: |
  var i;
tests:
  -
    name: i++
    code: |
      for (i = 0; i < 1000; i++) {
        console.log(i);
      }
  -
    name: ++i
    code: |
      for (i = 0; i < 1000; ++i) {
        console.log(i);
      }
---

