---
title: Object Based Args vs Raw Array Args vs Wrapped Array Args
setup: |
  function objArgs(obj){
  'use strict';
  return obj.a+obj.b+obj.c;
  }
  function rawArgs(a,b,c){
  'use strict';
  return a+b+c;
  }
  function arrArgs(arr){
  'use strict';
  return arr[0]+arr[1]+arr[2];
  }
tests:
  -
    name: Object Based Args
    code: |
      for (let i = 0; i < 1000; i++) {
        objArgs({a:1,b:1,c:1});
      }
  -
    name: Raw Array Args
    code: |
      for (let i = 0; i < 1000; i++) {
        rawArgs(1,1,1);
      }
  -
    name: Wrapped Array Args
    code: |
      for (let i = 0; i < 1000; i++) {
        arrArgs([1,1,1]);
      }
---
This tests how the browser accesses the JS -> C++ bridge in context of passing args to functions and which method is faster, Array/Args/Object
