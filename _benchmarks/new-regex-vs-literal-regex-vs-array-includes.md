---
title: new regex vs literal regex vs array includes
setup: |
  
tests:
  -
    name: new regex
    code: |
      new RegExp('^.*(de|at|ch|co.uk|ie|fr|be|nl|es|dk|it|se|no|pl|pt|xyz|localhost)$', 'gi').test(document.location.hostname)
  -
    name: literal regex
    code: |
      /^.*(de|at|ch|co.uk|ie|fr|be|nl|es|dk|it|se|no|pl|pt|xyz|localhost)$/gi.test(document.location.hostname)
  -
    name: array includes
    code: |
      ['de','at','ch','co.uk','ie','fr','be','nl','es','dk','it','se','no','pl','pt','xyz','localhost'].includes(document.location.hostname)
---

