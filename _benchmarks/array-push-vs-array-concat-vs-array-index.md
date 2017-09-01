---
title: Array#push vs Array#concat vs Array index
setup: |
  var n = 1000 * 1000* 2;
  var a = [];
  for (var i = 0; i < n; i++) {
    a.push(i % 4444);
  }
  var b = [10, 5];
tests:
  -
    name: Array#push
    code: |
      var m = a.length;
      for (var i = 0; i < m; i++) {
        b.push(a[i]);
      }
      console.log(b.length);
  -
    name: Array#concat
    code: |
      var m = a.length;
      b = b.concat(a);
      console.log(b.length);
  -
    name: Array index
    code: |
      var m = a.length;
      var blen = b.length;
      for (var i = 0; i < m; i++) {
        b[blen + i] = a[i];
      }
      console.log(b.length);
---

