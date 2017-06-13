---
title: for w/ break vs reduce
setup: |
  function closestFor(n, arr) {
    var diff;
    var result;
    for (var i = 0, l = arr.length; i < l; i++) {
      if (diff === undefined || diff > Math.abs(n - arr[i])) {
        diff = Math.abs(n - arr[i]);
        result = arr[i];
      } else {
        break;
      }
    }
    return result;
  }
  
  function closestReduce(n, arr) {
    return arr.reduce(function(result, val) { return Math.abs(val - n) < Math.abs(result - n) ? val : result; });
  }
  
  var a = Array
    .apply(null, Array(10000))
    .map(() => Math.random() * 1000000 | 0)
    .reduce((r, i) => {
      if (r.indexOf(i) === -1) {
        r.push(i);
      }
      return r;
    }, [])
    .sort((x, y) => x-y);
  
  var b = Array
    .apply(null, Array(1000))
    .map(() => (Math.random() * 2000000 | 0) - 500000);
tests:
  -
    name: for w/ break
    code: |
      for (let i = 0, l = b.length; i < l; i++) {
        closestFor(b[i], a);
      }
  -
    name: reduce
    code: |
      for (let i = 0, l = b.length; i < l; i++) {
        closestReduce(b[i], a);
      }
---

