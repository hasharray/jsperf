---
title: Clear TypedArray with for loop vs Set method with instance vs Set method with map function
setup: |
  var intArray = new Uint32Array(Math.pow(2,24));
  for (var i=0,len=intArray.length;i<len;i++) intArray[i]=(i*i*i)%255;
tests:
  -
    name: Clear TypedArray with for loop
    code: |
      for (var i = 0;i<intArray.length;i++) intArray[i] = 0;
  -
    name: Set method with instance
    code: |
      intArray.set(new Uint32Array(intArray.length));
  -
    name: Set method with map function
    code: |
      intArray.set(intArray.map(function () { return 0}));
---
Ways to clear a TypedArray
