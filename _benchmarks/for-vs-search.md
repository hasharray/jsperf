---
title: for vs search
setup: |
  var foo = 'um texto bem grande         ';
tests:
  -
    name: for
    code: |
      var c = 0;
      for (var i = foo.length - 1; i > 0; i--) {
        if (foo[i] == ' ') c++; else break;
      }
  -
    name: search
    code: |
      foo.search(/\s$/)
---

