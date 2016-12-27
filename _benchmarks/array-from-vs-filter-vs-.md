---
title: Array.from vs Filter vs [...]
setup: |
  const collection = document.querySelector('p')
tests:
  -
    name: Array.from
    code: |
      const collection = document.querySelector('p')
      Array.from(collection).filter(node => node)
  -
    name: Filter
    code: |
      const collection = document.querySelector('p')
      Array.prototype.filter.call(collection, node => node)
---

