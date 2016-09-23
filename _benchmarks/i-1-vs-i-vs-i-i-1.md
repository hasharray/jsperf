---
title: i += 1 vs i ++ vs i = i + 1
setup: |
  i = 0;
tests:
  -
    name: i += 1
    code: |
      i += 1
  -
    name: i ++
    code: |
      i++
  -
    name: i = i + 1
    code: |
      i = i + 1
---
Increment i in different ways
