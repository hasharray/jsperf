---
title: Prueba vs prueba 2
setup: |
  var a = 0;
  var i = 0;
  var length = 1000;
tests:
  -
    name: Prueba
    code: |
      for (i = 0; i<length; i++){
      a = a + i;
      }
  -
    name: prueba 2
    code: |
      for (i = 0; i<1000; i++){
      a = a + i;
      }
---
Probando esta plataforma
