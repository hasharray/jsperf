---
title: double tilde vs math floor
setup: |
  
tests:
  -
    name: double tilde
    code: |
      return ~~(Math.random()*5)
  -
    name: math floor
    code: |
      return Math.floor(Math.random()*5)
---
double tilde vs math floor
