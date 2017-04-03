---
title: Math.round vs parseFloat
setup: |
  
tests:
  -
    name: Math.round
    code: |
      Math.round(3.1415987 * 1000000) / 1000000
  -
    name: parseFloat
    code: |
      parseFloat(3.1415987.toFixed(6))
---
rounding test
