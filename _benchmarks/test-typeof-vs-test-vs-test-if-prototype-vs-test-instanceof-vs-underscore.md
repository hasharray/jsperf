---
title: Test typeof vs Test ! vs Test if prototype vs Test instanceof vs Underscore
setup: |
  var obj = {};
tests:
  -
    name: Test typeof
    code: |
      typeof obj === 'object'
  -
    name: Test !
    code: |
      !! obj
  -
    name: Test if prototype
    code: |
      obj && obj.prototype
  -
    name: Test instanceof
    code: |
      obj instanceof Object
  -
    name: Underscore
    code: |
      var type = typeof obj;
      type === 'function' || type === 'object' && !!obj;
---
Check if it is an object
