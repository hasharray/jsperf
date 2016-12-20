---
title: Array#concat vs Array#push
setup: |
  var array1 = Array.apply(undefined, {length: 23});
  var array2 = Array.apply(undefined, {length: 230});
tests:
  -
    name: Array#concat
    code: |
      var array1 = Array.apply(undefined, {length: 23});
      var array2 = Array.apply(undefined, {length: 230});
      
      array1 = array1.concat(array2);
  -
    name: Array#push
    code: |
      var array1 = Array.apply(undefined, {length: 23});
      var array2 = Array.apply(undefined, {length: 230});
      
      Array.prototype.push.apply(array1, array2);
---
Array.concat vs Array.push
