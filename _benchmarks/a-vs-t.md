---
title: a vs t
setup: |
  
tests:
  -
    name: a
    code: |
      var a[1000];
      for (i = 0; i < 1000; i++)
        a[i] = i;
  -
    name: t
    code: |
      var a = new UInt16Array(1000);
      for (i = 0; i < 1000; i++)
        a[i] = i;
---

