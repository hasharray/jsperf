---
title: number vs string
setup: |
  
tests:
  -
    name: number
    code: |
      Math.floor("234.4323")
  -
    name: string
    code: |
      Math.floor(234.4323)
---

