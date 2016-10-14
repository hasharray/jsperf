---
title: local variable dereference vs index dereference
setup: |
  var a = 'a'
  var b = { a: a }
tests:
  -
    name: local variable dereference
    code: |
      c = a
  -
    name: index dereference
    code: |
      d = b.a
---
Local variable dereference vs index
