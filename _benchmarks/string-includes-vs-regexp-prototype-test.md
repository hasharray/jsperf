---
title: String includes vs RegExp.prototype.test
setup: |
  
tests:
  -
    name: String includes
    code: |
      '123'.includes('1');
  -
    name: RegExp.prototype.test
    code: |
      new RegExp('1').test('123');
---

