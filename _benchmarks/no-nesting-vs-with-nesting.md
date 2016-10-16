---
title: no nesting vs with nesting vs assign
setup: |
  window.withNesting = function () {
    return function* () {
      yield true
  }
  }
  
  window.noNesting = function* () {
  yield true
  }
tests:
  -
    name: no nesting
    code: |
      var foo = noNesting()
  -
    name: with nesting
    code: |
      var foo = withNesting()()
  -
    name: assign
    code: |
      var foo = true
---
GFN creation speed
