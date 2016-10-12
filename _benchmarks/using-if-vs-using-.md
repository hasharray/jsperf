---
title: using if vs using ||
setup: |
  
tests:
  -
    name: using if
    code: |
      var a = undefined;
      if (a) {
        a = '';
      }
  -
    name: using ||
    code: |
      var a = undefined;
      a = a || '';
---

