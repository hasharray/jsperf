---
title: Replace without regex vs Replace with regex
setup: |
  
tests:
  -
    name: Replace without regex
    code: |
      'this is a test'.split(' ').join('-')
  -
    name: Replace with regex
    code: |
      'this is a test'.replace(/ /g, '-')
---

