---
title: asobj vs asarray
setup: |
  
tests:
  -
    name: asobj
    code: |
      o = {justatest: {}}
      a = {}
      
      for( let i=100; i--; ) {
        a[o] = true
        delete a[o]
      }
  -
    name: asarray
    code: |
      o = {justatest: {}}
      a = []
      
      for( let i=100; i--; )
      {
        a.push( o )
        a.splice( a.indexOf(o), 1 )
      }
---

