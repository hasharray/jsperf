---
title: memory vs blank
setup: |
  var test = []
  var i
tests:
  -
    name: memory
    code: |
      for (var i =; i < 2*2*2; i++) {
      test.push(Math.random())
      }
  -
    name: blank
    code: |
      console.log("blank")
---
memory usage of lots of floats
