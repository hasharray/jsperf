---
title: object property vs method
setup: |
  
tests:
  -
    name: object property
    code: |
      const number = 42
      Object.assign('', {
        test: createTest(number)
      })
      
      function createTest(number) {
        return () => {
          return number * 1000
        }
      }
  -
    name: method
    code: |
      const number = 42
      Object.assign('', {
        test () {
          return createTest(number)
        }
      })
      
      function createTest(number) {
        return () => {
          return number * 1000
        }
      }
---

