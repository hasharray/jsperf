---
setup: |
  
tests:
  -
    name: RegExp.prototype.exec
    code: |
      /o/.exec('Hello World')
  -
    name: String.prototype.match
    code: |
      'Hello World'.match(/o/)
---

