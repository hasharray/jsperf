---
title: for..in vs keys
setup: |
  var test = {};
  for (var i = 0; i < 100000; i++) {
    test['foo' + i] = true;
  }
  
  function forInTest(obj) {
    for(var x in obj) { return false; }
    return true;
  }
  
  function keysTest(obj) {
    return Object.keys(obj).length === 0;
  }
tests:
  -
    name: for..in
    code: |
      forInTest(test);
  -
    name: keys
    code: |
      keysTest(test);
---

