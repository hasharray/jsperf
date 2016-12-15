---
title: for vs function
setup: |
  var array = [];
  var length = 500
  for(var i=0; i<length; i++) {
  array.push(i);
  }
  var goal = length;
tests:
  -
    name: for
    code: |
      for(var i=0; i<length; i++) {
      (array[i] === goal) && break;
      }
  -
    name: function
    code: |
      var temp = (i) => array[i] === goal;
      for(var i=0; i<length; i++) {
      temp(i) && break;
      }
---

