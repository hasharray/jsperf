---
title: concat vs push
setup: |
  var someBigArray = [];
    var anotherArray = [];
    
    for (var i = 0; i < 10000; i++) {
      someBigArray.push(10);
      anotherArray.push(10);
    }
tests:
  -
    name: concat
    code: |
      someBigArray = someBigArray.concat(anotherArray);
  -
    name: push
    code: |
      Array.prototype.push.apply(someBigArray, anotherArray);
---

