---
title: object.create + assignment vs object.create + object.assign vs object.
setup: |
  
tests:
  -
    name: object.create + assignment
    code: |
      var max = 10000
      var a = []
      var b = { b: 1 }
      for (var i = 0; i < max; i++) {
        var c = Object.create(b)
        c.b = 2 
        a.push(c)
      }
  -
    name: object.create + object.assign
    code: |
      var max = 10000
      var a = []
      var b = { b: 1 }
      for (var i = 0; i < max; i++) {
        var c = Object.assign(Object.create(b), {b: 2})
        a.push(c)
      }
  -
    name: object.
    code: |
      var max = 10000
      var a = []
      var b = { b: 1 }
      for (var i = 0; i < max; i++) {
        var c = Object.assign({}, c, {b: 2})
        //c.b = 2 
        a.push(c)
      }
---
Object.assign vs Object.create
