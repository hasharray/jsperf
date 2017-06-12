---
title: typeof vs direct
setup: |
  var obj = {'foo': 1}
tests:
  -
    name: typeof
    code: |
      typeof obj['foo'] !== 'undefined'
      typeof obj['bar'] !== 'undefined'
  -
    name: direct
    code: |
      obj['foo'] !== undefined
      obj['bar'] !== undefined
---

