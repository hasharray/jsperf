---
title: CommonLookup vs Object.getOwnPropertyDescriptor
setup: |
  var myObject = {
     property1: "value1"
  };
tests:
  -
    name: CommonLookup
    code: |
      myObject.property1;
  -
    name: Object.getOwnPropertyDescriptor
    code: |
      Object.getOwnPropertyDescriptor(myObject, "property1");
---

