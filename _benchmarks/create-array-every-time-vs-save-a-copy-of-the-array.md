---
title: Create array every time vs Save a copy of the array
setup: |
  var cached = [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]
tests:
  -
    name: Create array every time
    code: |
      var range = [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]  
      var result = range.reduce(function(x, acc){ return acc * x; }, 1)
  -
    name: Save a copy of the array
    code: |
      var result = cached.reduce(function(x, acc){ return acc * x; }, 1)
---
cached vs created-on-the-fly array literals
