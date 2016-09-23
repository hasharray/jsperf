---
title: Concat vs Literal
setup: |
  var foo = "foo";
  var bar = "bar";
tests:
  -
    name: Concat
    code: |
      console.log(foo + " and" + bar);
  -
    name: Literal
    code: |
      console.log(`${foo} and ${bar}`);
---

