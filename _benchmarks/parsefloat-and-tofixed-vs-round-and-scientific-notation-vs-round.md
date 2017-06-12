---
title: parseFloat and toFixed vs round and scientific notation vs round
setup: |
  var test1 = function (number) {
       parseFloat(number.toFixed(3));
  };
  
  var test2 = function (number) {
       return +(Math.round(number + 'e+' + 3)  + 'e-' + 3);
  };
  
  var test3 = function (number) {
       Math.round(number*1000)/1000;
  };
tests:
  -
    name: parseFloat and toFixed
    code: |
      var x = test1(65.56133963284);
  -
    name: round and scientific notation
    code: |
      var x = test2(65.56133963284);
  -
    name: round
    code: |
      var x = test3(65.56133963284);
---
Different ways of truncating a float
