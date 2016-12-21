---
title: Math vs RightShift Operator
setup: |
  
tests:
  -
    name: Math
    code: |
      Math.floor(26/2)
  -
    name: RightShift Operator
    code: |
      26>>1
---
Testing Math.floor with division against >> operator
