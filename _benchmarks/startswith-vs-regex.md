---
title: startsWith vs REGEX
setup: |
  
tests:
  -
    name: startsWith
    code: |
      'gta'.substr(0, 'g'.length) === 'g'
  -
    name: REGEX
    code: |
      new RegExp('^g').test('gta')
---

