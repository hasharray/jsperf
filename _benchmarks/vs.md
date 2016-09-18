---
setup: |
  
tests:
  -
    name: ==
    code: |
      Math.random() == Math.random()
  -
    name: ===
    code: |
      Math.random() === Math.random()
---

