---
title: Array#push vs Array[i++] vs Array[array.length]
setup: |
  var array = []
tests:
  -
    name: Array#push
    code: |
      for (var i = 0; i < 10000; i++) {
        array.push(i)
      }
  -
    name: Array[i++]
    code: |
      var j = 0
      for (var i = 0; i < 10000; i++) {
        array[j++] = i
      }
  -
    name: Array[array.length]
    code: |
      for (var i = 0; i < 10000; i++) {
        array[array.length] = i
      }
---

