---
title: assignment vs recalculation
setup: |
  var source = {c: "c", d: "d"};
tests:
  -
    name: assignment
    code: |
      var result = Object.assign({}, source);
  -
    name: recalculation
    code: |
      var result = {c: "c", d: "d"};
---
assignment vs recalculation
