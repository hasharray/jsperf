---
title: forEach vs for
setup: |
  var arr = [];
  for(var idx = 0; idx < 500000; ++idx)
    arr.push(idx % 23);
  var sum = 0;
tests:
  -
    name: forEach
    code: |
      arr.forEach(function(v) {
        if(v < 13)
           sum += v;
      });
  -
    name: for
    code: |
      var L = arr.length;
      for(var idx = 0; idx < L; ++idx)
      {
        var v = arr[idx];
        if(v < 13)
           sum += v;
      }
---

