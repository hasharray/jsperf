---
title: replace vs split join
setup: |
  
tests:
  -
    name: replace
    code: |
      'asdfasdfasdfasdf'.replace(/a/g, 'banana')
  -
    name: split join
    code: |
      'asdfasdfasdfasdf'.split('a').join('banana')
---

