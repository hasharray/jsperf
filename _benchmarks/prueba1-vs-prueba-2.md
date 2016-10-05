---
title: Prueba1 vs Prueba 2
setup: |
  var a = 0;
  var j = 10000;
tests:
  -
    name: Prueba1
    code: |
      for (i = 0; i < j.length; i++){
      a = a + i;
      }
  -
    name: Prueba 2
    code: |
      for (i = 0; i < 10000; i++){
      a = a + i;
      }
---
Prueba 1 vs prueba 2
