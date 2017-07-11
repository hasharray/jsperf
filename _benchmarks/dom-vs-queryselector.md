---
title: dom vs queryselector
setup: |
  
tests:
  -
    name: dom
    code: |
      document.getElementById("actions").getElementsByTagName("button")
  -
    name: queryselector
    code: |
      document.querySelectorAll("#actions button")
---
Test a trivial dom query.
