---
title: concat base vs concat fast vs concat call
setup: |
  var _concat, arr1, arr2, concat, concat2, fn1, fn2, fn3;
  
  _concat = [].concat;
  
  concat2 = function(as, bs) {
    return _concat.call(as, bs);
  };
  
  concat = function(arr1, arr2) {
    var i, i2, l1, l2, res;
    l1 = arr1.length;
    l2 = arr2.length;
    res = new Array(l1 + l2);
    i = 0;
    while (i < l1) {
      res[i] = arr1[i];
      i++;
    }
    i2 = 0;
    while (i2 < l2) {
      res[i + i2] = arr2[i2];
      i2++;
    }
    return res;
  };
  
  arr1 = [1, 2];
  
  arr2 = [3, 4];
  
  fn1 = function() {
    return arr1.concat(arr2);
  };
  
  fn2 = function() {
    return concat(arr1, arr2);
  };
  
  fn3 = function() {
    return concat2(arr1, arr2);
  };
tests:
  -
    name: concat base
    code: |
      arr1.concat(arr2)
  -
    name: concat fast
    code: |
      concat(arr1, arr2)
  -
    name: concat call
    code: |
      concat2(arr1, arr2)
---

