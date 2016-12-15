---
title: obj vs nested obj
setup: |
  
tests:
  -
    name: obj
    code: |
      var a = { aa: 1};
      
      var old = a.aa;
      a.aa = 2;
  -
    name: nested obj
    code: |
      var a = { aa: { aaa: 1 }};
      
      var old = a.aa.aaa;
      a.aa.aaa = 2;
---
nested property accessor and assign
