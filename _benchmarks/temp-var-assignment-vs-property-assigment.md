---
title: Temp var Assignment vs Property Assigment
setup: |
  var a = { b: 1 };
tests:
  -
    name: Temp var Assignment
    code: |
      var b = a.b;
      var c = b;
      var d = b;
  -
    name: Property Assigment
    code: |
      var c = a.b;
      var d = a.b;
---

