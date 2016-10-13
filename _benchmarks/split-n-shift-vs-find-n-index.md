---
title: split'n'shift vs find'n'index
setup: |
  var str = 'yodoggy:hellokittycat'
tests:
  -
    name: split'n'shift
    code: |
      str.split(':').shift()
  -
    name: find'n'index
    code: |
      str.substr(0, str.indexOf(':'))
---

