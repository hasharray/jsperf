---
title: tostring vs template literal
setup: |
  
tests:
  -
    name: tostring
    code: |
      77.toString()
  -
    name: template literal
    code: |
      `${77}`
---

