---
title: Simple if vs Not undefined
setup: |
  
tests:
  -
    name: Simple if
    code: |
      var a = {a: 1};
      var b = 2;
      if (a) {
       b = 3;
      }
  -
    name: Not undefined
    code: |
      var a = {a: 1};
      var b = 2;
      if (a !== undefined) {
       b = 3;
      }
---

