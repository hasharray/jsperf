---
title: Assign-object vs JSON Stringify
setup: |
  
tests:
  -
    name: Assign-object
    code: |
      var g = {hi: 42};
      var f = Object.assign({}, g);
  -
    name: JSON Stringify
    code: |
      var g = {hi: 42};
      var f = JSON.parse(JSON.stringify(g))
---

