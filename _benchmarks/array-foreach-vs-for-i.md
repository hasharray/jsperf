---
title: Array#forEach vs for i
setup: |
  
tests:
  -
    name: Array#forEach
    code: |
      function() {
        var testArray = [1,2,3,4];
        testArray.forEach(function(node) {
          console.log(node)
        });
      }
  -
    name: for i
    code: |
      function() {
        var testArray = [1,2,3,4];
        for (var i = 0; i < testArray.length; i++) {
          console.log(testArray[i]);
        }
      }
---
Faster for or foreach
