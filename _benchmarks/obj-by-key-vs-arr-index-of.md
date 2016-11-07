---
title: obj by key vs arr index of
setup: |
  function range(start, end) {
      var foo = [];
      for (var i = start; i <= end; i++) {
          foo.push(i);
      }
      return foo;
  }
  obj = {}
  
  arr.forEach(function(k) {obj[k] = true})
tests:
  -
    name: obj by key
    code: |
      obj[999] === true
  -
    name: arr index of
    code: |
      arr.indexOf(999) > -1
---

