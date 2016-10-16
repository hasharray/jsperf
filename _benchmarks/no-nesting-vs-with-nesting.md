---
title: no nesting vs with nesting
setup: |
  window.withNesting = function () {
    return function* () {
      yield 2
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
---
GFN creation speed
