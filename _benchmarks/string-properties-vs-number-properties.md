---
title: String properties vs Number properties
setup: |
  var obj = {};
  var strNumbers = [];
  var numbers = [];
  
  for(var i = 0; i < 1000; i++) {
  
  numbers.push(i);
  strNumbers.push(i + '');
  obj[i + ''] = true;
  
  }
tests:
  -
    name: String properties
    code: |
      var toAssign;
      
      for(var i = 0; i < 1000; i++) {
      toAssign = obj[strNumbers[i]];
      }
  -
    name: Number properties
    code: |
      var toAssign;
      
      for(var i = 0; i < 1000; i++) {
      toAssign = obj[numbers[i]];
      }
---
Iterate on properties with number or string
