---
title: search vs includes
setup: |
  
tests:
  -
    name: search
    code: |
      "Bootstrap".search(new RegExp('boot', 'i'))
  -
    name: includes
    code: |
      "Bootstrap".toLowerCase().includes('boot'.toLowerCase())
---

