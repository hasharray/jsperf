---
title: !! vs == vs ?:
setup: |
  var x = null;
  var z = 'foo';
tests:
  -
    name: !!
    code: |
      var a = !!x;
      var b = !!z;
  -
    name: ==
    code: |
      var a = x == true;
      var b = z == true;
  -
    name: ?:
    code: |
      var a = x ? true : false;
      var b = z ? true : false;
---
!! vs == vs ?:
