---
title: for vs map vs map
setup: |
  var arr = [],
  newArr = [];
  
  for( var i = 0; i < 10000;  i++ ) {
     arr[i] = i;
  }
tests:
  -
    name: for vs map
    code: |
      for( var l = 0; i < arr.length; i++ ) {
         newArr.push( arr[i] );
      }
  -
    name: map
    code: |
      newArr = arr.map( function(i) {
         return arr[i];
      });
---

