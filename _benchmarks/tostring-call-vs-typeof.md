---
title: toString.call vs typeof
setup: |
  var fn = function() { return true; }
tests:
  -
    name: toString.call
    code: |
      return toString.call(fn);
  -
    name: typeof
    code: |
      return typeof fn === 'function'
---
typeof vs tostring.call
