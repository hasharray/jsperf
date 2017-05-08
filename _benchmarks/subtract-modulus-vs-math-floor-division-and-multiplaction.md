---
title: Subtract Modulus vs Math.floor Division and Multiplaction
setup: |
  
tests:
  -
    name: Subtract Modulus
    code: |
      105 - (105 % 100)
  -
    name: Math.floor Division and Multiplaction
    code: |
      Math.floor(105 / 100) * 100
---

