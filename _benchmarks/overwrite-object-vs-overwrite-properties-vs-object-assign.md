---
title: overwrite object vs overwrite properties vs Object.assign
setup: |
  function Test(){
    Test.last = { x: 0, y: 0 };
  }
  var test = new Test();
tests:
  -
    name: overwrite object
    code: |
      test.x = 100
      test.y = 100
  -
    name: overwrite properties
    code: |
      test = { x: 100, y: 100}
  -
    name: Object.assign
    code: |
      Object.assign(test, { x: 100, y: 100 })
---
Overwrite object properties vs new object
