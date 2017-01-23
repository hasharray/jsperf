---
title: Using Number.MAX_SAFE_INTEGER vs Using static 2147483647 vs Using private 2147483647
setup: |
  Number.MAX_SAFE_INTEGER vs 2147483647
tests:
  -
    name: Using Number.MAX_SAFE_INTEGER
    code: |
      a = [{}, {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}]
      a.sort((b)) => Number.MAX_SAFE_INTEGER)
  -
    name: Using static 2147483647
    code: |
      a = [{}, {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}]
      s = 2147483647;
      a.sort((b)) => s)
  -
    name: Using private 2147483647
    code: |
      a = [{}, {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}]
      a.sort((b)) => 2147483647)
---
Is Number.MAX_SAFE_INTEGER faster than getting a static number
