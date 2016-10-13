---
title: functional approach vs IE6
setup: |
  var obj = {1: 11, 2: 22};
tests:
  -
    name: functional approach
    code: |
      Object.keys(obj).map(function (key) { return obj[key]; });
  -
    name: IE6
    code: |
      Object.keys(obj).map(key => obj[key])
---
asd
