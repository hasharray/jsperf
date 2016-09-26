---
title: forEach array iteration vs for array iteration
setup: |
  
tests:
  -
    name: forEach array iteration
    code: |
      function() {
        var testArray = [1,2,3,4];
        testArray.forEach(function(node) {
          document.body.innerHTML += node;
        });
      }
  -
    name: for array iteration
    code: |
      function() {
        var testArray = [1,2,3,4];
        for (var i = 0; i < testArray.length; i++) {
          document.body.innerHTML += testArray[i];
        }
      }
---

