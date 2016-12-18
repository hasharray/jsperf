---
title: Template literal vs String concatenation vs Variable less template literal concatenation
setup: |
  const x = 57;
tests:
  -
    name: Template literal
    code: |
      `x is ${x}`
  -
    name: String concatenation
    code: |
      'x is ' + x
  -
    name: Variable less template literal concatenation
    code: |
      `x is ` + x
---
Template literals vs string concatenation
