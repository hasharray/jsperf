---
title: Not null/undefined and has length when stringified vs Is truthy or 0 or false
setup: |
  var tests = [
    '',
    null,
    false,
    0,
    'hi'
  ]
tests:
  -
    name: Not null/undefined and has length when stringified
    code: |
      tests.forEach(function (V) {
        return (V != null && (""+V).length > 0)
      })
  -
    name: Is truthy or 0 or false
    code: |
      tests.forEach(function (V) {
        return (!!V || V === 0 || V === false)
      })
---

