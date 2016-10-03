---
title: Moving Average Array window size 5 vs Moving Average Queue window size 5 vs Moving Average Array window size 100 vs Moving Average Queue window size 5
setup: |
  var input = Array.from({length: 1<<20}).map(_ => Math.floor(1000 * Math.random()));
  
  function queue (windowSize) {
    var sum = 0;
    var windowQueue = Array.from({length: windowSize}).map(_ => 0);
    return function (n) {
      var last = windowQueue.shift();
      windowQueue.push(n);
      sum += n - last;
      return sum / windowSize;
    };
  }
  
  function array (windowSize) {
    var sum = 0;
    var windowArray = Array.from({length: windowSize}).map(_ => 0);
    var index = 0;
    return function (n) {
      var last = windowArray[index];
      windowArray[index] = n;
      index = (index + 1) % windowSize;
      sum += n - last;
      return sum / windowSize;
    };
  }
  
  var array5 = array(5);
  var queue5 = queue(5);
  var array100 = array(100);
  var queue100 = queue(100);
tests:
  -
    name: Moving Average Array window size 5
    code: |
      input.forEach(array5)
  -
    name: Moving Average Queue window size 5
    code: |
      input.forEach(queue5)
  -
    name: Moving Average Array window size 100
    code: |
      input.forEach(array100)
  -
    name: Moving Average Queue window size 5
    code: |
      input.forEach(queue100)
---

