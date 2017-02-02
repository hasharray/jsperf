---
title: Creating a new array vs Emptying an array
setup: |
  
tests:
  -
    name: Creating a new array
    code: |
      var foo = [];
      for (var j = 0; j < 1000; ++j) {
        foo = [];
      for (var i = 0; i < 1000; ++i) {
        foo.push(10);
      }
      }
  -
    name: Emptying an array
    code: |
      var foo = [];
      for (var j = 0; j < 1000; ++j) {
        foo.length = 0;
      for (var i = 0; i < 1000; ++i) {
        foo.push(10);
      }
      }
---

