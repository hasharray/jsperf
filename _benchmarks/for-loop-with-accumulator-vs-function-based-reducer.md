---
title: for loop with accumulator vs function-based reducer
setup: |
  // Create a linked list
  var list = null;
  for (var i = 1e5; i >= 0; i--) {
    list = { value: i, next: list };
  }
  
  function _reduce(acc, first, test, next, reduce) {
    for (var x = first; test(x); x = next(x)) {
      acc = reduce(acc, x);
    }
    return acc;
  }
  
  function reverseList(list) {
    return _reduce(
      null,
      list,
      function(x) { return x !== null; },
      function(x) { return x.next; },
      function(acc, x) { return { value: x.value, next: acc }; }
    );
  }
tests:
  -
    name: for loop with accumulator
    code: |
      var acc = null;
      for (var x = list; x !== null; x = x.next) {
        acc = { value: x.value, next: acc };
      }
  -
    name: function-based reducer
    code: |
      reverseList(list);
---

