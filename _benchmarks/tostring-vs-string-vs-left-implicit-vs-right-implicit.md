---
title: toString vs String() vs left implicit vs right implicit
setup: |
  
tests:
  -
    name: toString
    code: |
      for (var i = 0, t = ''; i<1000; i++) {
        t = i.toString();
      }
  -
    name: String()
    code: |
      for (var i = 0, t = ''; i<1000; i++) {
        t = String(i);
      }
  -
    name: left implicit
    code: |
      for (var i = 0, t = ''; i<1000; i++) {
        t = ''+i;
      }
  -
    name: right implicit
    code: |
      for (var i = 0, t = ''; i<1000; i++) {
        t = i+'';
      }
---

