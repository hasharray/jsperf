---
title: indexOf vs binaryIndexOf
setup: |
  var array = []
  for (var i = 0; i < 2000; i++){
  array.push(Math.random())
  }
  var sorted = array.sort()
  
  function binaryIndexOf(searchElement) {
  
   
      var minIndex = 0;
      var maxIndex = this.length - 1;
      var currentIndex;
      var currentElement;
   
      while (minIndex <= maxIndex) {
          currentIndex = (minIndex + maxIndex) / 2 | 0;
          currentElement = this[currentIndex];
   
          if (currentElement < searchElement) {
              minIndex = currentIndex + 1;
          }
          else if (currentElement > searchElement) {
              maxIndex = currentIndex - 1;
          }
          else {
              return currentIndex;
          }
      }
   
      return -1;
  }
tests:
  -
    name: indexOf
    code: |
      sorted.indexOf(5) > -1
  -
    name: binaryIndexOf
    code: |
      binaryIndexOf.call(sorted, 5)
---

