---
title: Shallow equals with JSON.stringify vs Shallow equals with Object.keys
setup: |
  function shallowEquals_v1(a, b) {
          return JSON.stringify(a) === JSON.stringify(b)
  }
  
  function shallowEquals_v2(a, b) {
          const keys = Object.keys(a)
          if (keys.length !== Object.keys(b).length) { return false }
  
          for (var i=0; i<keys.length; i++) {
                  const key = keys[i]
                  if (a[key] !== b[key]) { return false }
          }
          return true
  }
  
  i = 0
  ret = { a:[], b:[] }
  o1 = { a:true, b:1, c: 'a' }
  o2 = { a:true, b:1, c: 'a' }
tests:
  -
    name: Shallow equals with JSON.stringify
    code: |
      o1[i] = i
      o2[i] = i
      ret.a[i] = shallowEquals_v1(o1, o2)
      i++
  -
    name: Shallow equals with Object.keys
    code: |
      o1[i] = i
      o2[i] = i
      ret.b[i] = shallowEquals_v2(o1, o2)
      i++
---

