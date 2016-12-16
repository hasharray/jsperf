---
title: spread vs split
setup: |
  function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
  
  var a = 'hello'
tests:
  -
    name: spread
    code: |
      var c = [].concat(_toConsumableArray(a))
  -
    name: split
    code: |
      var d = a.split('')
---
split versus spread
