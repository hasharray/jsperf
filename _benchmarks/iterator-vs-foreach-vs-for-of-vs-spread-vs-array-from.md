---
title: Iterator vs forEach vs for..of vs spread vs Array.from
setup: |
  var _set = new Set();
  for (var i = 0; i < 50000; i++) {
  _set.add(i*2);
  }
tests:
  -
    name: Iterator
    code: |
      var result = [];
      var iterator = _set.values();
      var iteratorResult = iterator.next();
      while (!iteratorResult.done) {
      result.push(iteratorResult.value);
      var iteratorResult = iterator.next();
      }
  -
    name: forEach
    code: |
      var result = [];
      _set.forEach(function (value) {
      result.push(value);
      });
  -
    name: for..of
    code: |
      var result = [];
      for (var value of _set) {
          result.push(value);
      }
  -
    name: spread
    code: |
      var result = [..._set];
  -
    name: Array.from
    code: |
      var result = Array.from(_set);
---
Convert a Set into an Array
