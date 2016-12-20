---
title: Using Map[index] vs Using array.filter()
setup: |
  const map = new Map([[1, 1], [2, 2]])
  const array = [1, 1]
tests:
  -
    name: Using Map[index]
    code: |
      const result = map[1]
  -
    name: Using array.filter()
    code: |
      const result = array.find(i => i === 1)
---

