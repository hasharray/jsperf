---
title: Minus sign vs Multiply vs Divide vs sub itsefl twice
setup: |
  var a = [], b = [];
  for(var i = 0; i < 100000; i++) a[i]=i;
tests:
  -
    name: Minus sign
    code: |
      for(var i = 0; i < 100000; i++) b[i]=-(a[i]);
  -
    name: Multiply
    code: |
      for(var i = 0; i < 100000; i++) b[i]=-1 * (a[i]);
  -
    name: Divide
    code: |
      for(var i = 0; i < 100000; i++) b[i]=(a[i])/(-1);
  -
    name: sub itsefl twice
    code: |
      for(var i = 0; i < 100000; i++) b[i]=a[i] - a[i]*2;
---

