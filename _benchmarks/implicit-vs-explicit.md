---
title: Implicit vs Explicit
setup: |
  var abc = null;
tests:
  -
    name: Implicit
    code: |
      if (!abc) { console.log("X"); }
  -
    name: Explicit
    code: |
      if (abc !== null && abc !== undefined && abc !== false) { console.log("Y"); }
---
Extremely explicit vs implicit conditionals
