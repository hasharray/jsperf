---
title: Iteration vs Assignment
setup: |
  var obj = {thing:5, a: 8, b: 4, c: 5, d:6, e:7, f:8, g:9, h:10};
  var otherObj = {};
tests:
  -
    name: Iteration
    code: |
      for(var key in obj) {
        otherObj[key] = obj[key];
      }
  -
    name: Assignment
    code: |
      otherObj.thing = obj.thing;
      otherObj.a = obj.a;
      otherObj.b = obj.b;
      otherObj.c = obj.c;
      otherObj.d = obj.d;
      otherObj.e = obj.e;
      otherObj.f = obj.f;
      otherObj.g = obj.g;
      otherObj.h = obj.h;
---
Iteration vs direct assignment
