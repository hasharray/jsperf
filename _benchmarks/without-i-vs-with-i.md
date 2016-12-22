---
title: without i vs with i
setup: |
  
tests:
  -
    name: without i
    code: |
      /Mac/.test(navigator.platform)
  -
    name: with i
    code: |
      /Mac/i.test(navigator.platform)
---
comparing regex i operator
