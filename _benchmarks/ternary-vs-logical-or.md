---
title: Ternary vs Logical OR
setup: |
  let x = "definedVar";
tests:
  -
    name: Ternary
    code: |
      let z = x ? x : "undefinedVar";
  -
    name: Logical OR
    code: |
      let z = x || "undefinedVar";
---
ternary vs logical or
