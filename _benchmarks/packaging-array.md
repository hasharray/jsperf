---
title: Packaging array
setup: |
  var n = [["foo", "bar"], ["baz", "qux"]];
tests:
  -
    name: map
    code: |
      n = n.map(function(n){
        return {first: n[0], second: n[1]};
      });
  -
    name: forEach
    code: |
      n.forEach(function(n, i){
        this[i] = {first: n[0], second: n[1]};
      }, n);
---

