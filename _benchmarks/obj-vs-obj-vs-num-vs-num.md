---
title: obj vs obj vs num vs num
setup: |
  var objA = {};
  var objB = {foo: 'bar', rattle: { snake: 'snek' };
  var intA = 12;
  var intB = 32423564353;
tests:
  -
    name: obj vs obj
    code: |
      var x = objA === objB || objA === objA;
  -
    name: num vs num
    code: |
      var x = numA === numB || numA === numA;
---

