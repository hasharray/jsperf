---
title: is array vs length
setup: |
  var a = []
tests:
  -
    name: is array
    code: |
      if (Array.isArray(a)) {
      console.log('hello')
      } else {
      console.log('false')
      }
  -
    name: length
    code: |
      if (a.length) {
      console.log('hello')
      } else {
      console.log('false')
      }
---
balajgsd
