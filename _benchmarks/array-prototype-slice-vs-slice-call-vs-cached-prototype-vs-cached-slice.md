---
title: Array.prototype.slice vs [].slice.call vs cached prototype vs cached [].slice
setup: |
  var items = [1, 2, 3, 4, 5],
        slice = Array.prototype.slice,
        _slice = [].slice;
tests:
  -
    name: Array.prototype.slice
    code: |
      (function() {
          var x;
          (function() {
              var y = 9;
              (function() {
                  var z = 3;
                  Array.prototype.slice.call(items);
              })()
          })()
      })()
  -
    name: [].slice.call
    code: |
      (function() {
          var x;
          (function() {
              var y = 9;
              (function() {
                  var z = 3;
                  [].slice.call(items);
              })()
          })()
      })()
  -
    name: cached prototype
    code: |
      (function() {
          var x;
          (function() {
              var y = 9;
              (function() {
                  var z = 3;
                  slice.call(items);
              })()
          })()
      })()
  -
    name: cached [].slice
    code: |
      (function() {
          var x;
          (function() {
              var y = 9;
              (function() {
                  var z = 3;
                  _slice.call(items);
              })()
          })()
      })()
---

