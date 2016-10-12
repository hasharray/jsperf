---
title: includes vs indexOf
setup: |
  
tests:
  -
    name: includes
    code: |
      ['string1', 'string2'].includes('string1')
  -
    name: indexOf
    code: |
      ['string1', 'string2'].indexOf('string1')
---
Array.prototype.includes vs Array.prototype.indexOf
