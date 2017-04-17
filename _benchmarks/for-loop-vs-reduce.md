---
title: For loop vs Reduce
setup: |
  
tests:
  -
    name: For loop
    code: |
      var values = []; //ten million
      for (var i = 0; i < 10000000; i++) {
      	values.push(i);
      }
      var total = 0;
      for (var i = 0; i < 1000000; i++) {
      	total += values[i];
      }
  -
    name: Reduce
    code: |
      var values = []; //ten million
      for (var i = 0; i < 10000000; i++) {
      	values.push(i);
      }
      var reduceSum = values.reduce( function(  total, val ) {
      	return total + val;
      });
---
I am trying to compare the a calulated sum of a large array to determine which is more performant.
