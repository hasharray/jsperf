---
title: num keys vs string keys
setup: |
  var n = 100;
  var nums = [];
  var strs = [];
  for(var i =0; i<n; i++) {
    nums.push(Math.random());
    strs.push(nums[i].toString());
  }
  var m = new Map();
tests:
  -
    name: num keys
    code: |
      for(var i=0; i<n; i++) {
        m.set(nums[i], 0);
      }
  -
    name: string keys
    code: |
      for(var i=0; i<n; i++) {
        m.set(strs[i], 0);
      }
---
Map string keys vs number keys
