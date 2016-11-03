---
title: direct equality vs Array.prototype.includes
setup: |
  var myVar = 5;
  var myList = [4,5];
tests:
  -
    name: direct equality
    code: |
      myVar === 5 && myVar !== 3
  -
    name: Array.prototype.includes
    code: |
      myList.includes(myVar)
---
Determine which is faster: Array.includes(val) or comparing the same var twice.
