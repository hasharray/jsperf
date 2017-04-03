---
title: dot vs string
setup: |
  var foo = {}
tests:
  -
    name: dot
    code: |
      foo.bar = 'demo'
  -
    name: string
    code: |
      foo['bar'] = 'demo'
---
dot vs []
