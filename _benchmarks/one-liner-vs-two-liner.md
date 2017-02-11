---
title: One liner vs Two liner
setup: |
  var array= ['a', 'b', 'c', 'd', 'e'];
  var size = array.length;
  
  function twoLine(index) {
      index= ( (index % size) + size) % size;
          
      return array[index];
  }
  
  function oneLine(index) {
      return array[ ( (index % size) + size) % size ];
  }
tests:
  -
    name: One liner
    code: |
      for (var i= 0; i < 1000; i++) {
          oneLine(i);
      }
  -
    name: Two liner
    code: |
      for (var i= 0; i < 1000; i++) {
          twoLine(i);
      }
---
Tests a one line function against a two line function
