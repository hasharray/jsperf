---
title: For vs For With Cached Length
setup: |
  var count = 1000 * 1000
  var data = [];

  do {
    data.push(count);
  } while(--count);
tests:
  -
    name: For
    code: |
      for (var index = 0; index < data.length; index++) {
        var obj = data[index];
        obj == obj;
      }
  -
    name: For (With Cached Length)
    code: |
      var length = data.length;
      for (var index = 0; index < length; index++) {
        var obj = data[index];
        obj == obj;
      }
---

