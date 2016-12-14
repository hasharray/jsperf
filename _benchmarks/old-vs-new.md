---
title: Old vs New
setup: |
  hasOwn = Object.prototype.hasOwnProperty
  
  function shallowEqualOld(a, b) {
    if (a === b) return true
  
    let countA = 0
    let countB = 0
    
    for (let key in a) {
      if (hasOwn.call(a, key) && a[key] !== b[key]) return false
      countA++
    }
  
    for (let key in b) {
      if (hasOwn.call(b, key)) countB++
    }
  
    return countA === countB
  }
  
  function shallowEqualNew(a, b) {
    if (a === b) return true
  
    let countA = 0
    let countB = 0
    
    for (let key in a) {
      if (hasOwn.call(a, key) && a[key] !== b[key]) return false
      countA++
    }
  
    for (let key in b) {
      if (hasOwn.call(b, key) && countA < ++countB) return false
    }
  
    return true
  }
  
  function twoObjects () {
    let a = {}
    let b = {}
    let idx = Math.floor(Math.random() * 100)
    for (let i = 0; i < 100; i++) {
      let key = 'i' + i
      if (i < idx) a[key] = i
      b[key] = i
    }
    return [a, b]
  }
tests:
  -
    name: Old
    code: |
      shallowEqualOld.apply(null, twoObjects())
  -
    name: New
    code: |
      shallowEqualNew.apply(null, twoObjects())
---

