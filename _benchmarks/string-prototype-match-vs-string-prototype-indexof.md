---
title: String.prototype.match vs String.prototype.indexOf
setup: |
  
tests:
  -
    name: String.prototype.match
    code: |
      'Hello World'.match(/o/)
  -
    name: String.prototype.indexOf
    code: |
      'Hello World'.indexOf('o') > -1
---

