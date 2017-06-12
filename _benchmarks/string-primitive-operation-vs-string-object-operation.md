---
title: string primitive operation vs string object operation
setup: |
  var pri = "Hello";
  var obj = new String ("Hello");
tests:
  -
    name: string primitive operation
    code: |
      pri.indexOf('Hello');
  -
    name: string object operation
    code: |
      obj.indexOf('Hello');
---

