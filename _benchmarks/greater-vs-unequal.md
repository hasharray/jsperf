---
title: Greater vs Unequal
setup: |
  var a = 'string';
tests:
  -
    name: Greater
    code: |
      if (a.indexOf('str') > -1) {
      return true;
      }
  -
    name: Unequal
    code: |
      if (a.indexOf('str') !== -1) {
      return true;
      }
---
Compare indexOf greater against unequal
