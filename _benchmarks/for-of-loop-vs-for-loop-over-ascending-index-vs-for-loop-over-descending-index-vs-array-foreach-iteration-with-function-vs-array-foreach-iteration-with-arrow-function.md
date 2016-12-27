---
title: for...of loop vs for loop over ascending index vs for loop over descending index vs Array#forEach iteration with function vs Array#forEach iteration with arrow function
setup: |
  var arr = [];
  
  for (var i = 0; i < 1000; i++) {
      arr.push(i);
  }
tests:
  -
    name: for...of loop
    code: |
      var sum = 0;
      
      for(var i of arr) {
          sum += i;
      }
      if (sum !== 499500) throw new Error('Wrong result');
  -
    name: for loop over ascending index
    code: |
      var sum = 0, len = arr.length;
      
      for(var i = 0; i < len; i++) {
          sum += arr[i];
      }
      if (sum !== 499500) throw new Error('Wrong result');
  -
    name: for loop over descending index
    code: |
      var sum = 0, len = arr.length;
      
      for(var i = len; i--;) {
          sum += arr[i];
      }
      if (sum !== 499500) throw new Error('Wrong result');
  -
    name: Array#forEach iteration with function
    code: |
      var sum = 0;
      
      arr.forEach(function(val) {
          sum += val;
      });
      if (sum !== 499500) throw new Error('Wrong result');
  -
    name: Array#forEach iteration with arrow function
    code: |
      var sum = 0;
      
      arr.forEach(val => sum += val);
      if (sum !== 499500) throw new Error('Wrong result');
---
Compare different ways of iterating an Array instance.
