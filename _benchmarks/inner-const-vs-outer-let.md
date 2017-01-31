---
title: inner const vs outer let
setup: |
  let counter = 0
tests:
  -
    name: inner const
    code: |
      for (let i = 0; i < 1000000; i++) {
        const x = Math.random()
        counter += x
      }
  -
    name: outer let
    code: |
      let x = null
      
      for (let i = 0; i < 1000000; i++) {
        x = Math.random()
        counter += x
      }
---
loop performance - inner const vs outer let
