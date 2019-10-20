---
title: obj literal  vs constructor
setup: |
  var base = {'a': null, 'b': null}
tests:
  -
    name: obj literal 
    code: |
      for (var i = 0; i < 1000000; i++) {
      var a = {'a': null, 'b': null}
      }
  -
    name: constructor
    code: |
      for (var i = 0; i < 1000000; i++) {
      var a = Object.create(base)
      }
---

