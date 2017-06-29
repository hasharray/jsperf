---
title: allocate vs no allocate
setup: |
  
tests:
  -
    name: allocate
    code: |
      var x = 'Str'. toLowerCase();
  -
    name: no allocate
    code: |
      'Str'. toLowerCase();
---

