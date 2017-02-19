---
title: multi concat vs single concat
setup: |
  const list = [1, [2], [[3]], [4], 5, 6, [[7]]]
  
  var flat1 = function (xs) { return xs.reduce(function (acc, x) { return Array.isArray(x) ? acc.concat(flat1(x)) : acc.concat(x); }, []); }
  
  var flat2 = function (xs) { return xs.reduce(function (acc, x) { return acc.concat(Array.isArray(x) ? flat2(x) : x); }, []); }
tests:
  -
    name: multi concat
    code: |
      flat1(list)
  -
    name: single concat
    code: |
      flat2(list)
---
Single vs multiple concat within recursion
