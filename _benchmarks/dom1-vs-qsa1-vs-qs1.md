---
title: dom1 vs qsa1 vs qs1
setup: |
  
tests:
  -
    name: dom1
    code: |
      document.getElementsByTagName("input");
  -
    name: qsa1
    code: |
      document.querySelectorAll("input")
  -
    name: qs1
    code: |
      document.querySelector("input")
---

