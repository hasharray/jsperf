---
title: console.log vs console.error
setup: |
  console.log, console.error
tests:
  -
    name: console.log
    code: |
      console.log(window);
  -
    name: console.error
    code: |
      console.error(window);
---
console.log vs console.error
