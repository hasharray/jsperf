---
setup: |
  
tests:
  -
    name: RegExp.prototype.exec
    code: |
      /o/.exec('Hello World')
  -
    name: RegExp.prototype.test
    code: |
      /o/.test('Hello World')
---

