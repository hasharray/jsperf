---
title: String.prototype.indexOf vs String.prototype.includes
setup: |
  
tests:
  -
    name: String.prototype.indexOf
    code: |
      'Hello World'.indexOf('o') > -1
  -
    name: String.prototype.includes
    code: |
      'Hello World'.includes('o')
---

