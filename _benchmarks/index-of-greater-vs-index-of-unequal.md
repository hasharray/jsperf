---
title: index of greater vs index of unequal
setup: |
  
tests:
  -
    name: index of greater
    code: |
      var a = 'string';
      a.indexOf('trin') > -1
  -
    name: index of unequal
    code: |
      var a = 'string';
      a.indexOf('trin') !== -1
---

