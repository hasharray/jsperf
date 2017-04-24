---
title: reduce vs map/concat
setup: |
  var arr = [];
  for (var i=0; i<100; i++) {
    arr.push(['one','two','three']);
  }
tests:
  -
    name: reduce
    code: |
      var xresult = arr.reduce(function(acc,xarr) {
        return acc.concat(xarr);
      }, []);
  -
    name: map/concat
    code: |
      var yarr = arr.map(function(xarr) { return xarr; });
      var yresult = [].concat.apply([], yarr);
---
reduce vs map/concat
