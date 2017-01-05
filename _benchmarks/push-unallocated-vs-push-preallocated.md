---
title: push unallocated vs push preallocated
setup: |
  var n=10000;
  var myArray = [];
  var myArray2 = new Array(n);
tests:
  -
    name: push unallocated
    code: |
      var i=0;
      while (i<n) { myArray[i]=i; i++; }
  -
    name: push preallocated
    code: |
      var i=0;
      while (i<n) { myArray2[i]=i; i++; }
---

