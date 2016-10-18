---
title: asdf vs dfg
setup: |
  
tests:
  -
    name: asdf
    code: |
      var x = navigator.getGamepads();
      if (x.length === -1) { alert('x') }
  -
    name: dfg
    code: |
      if (false) { alert('true') }
---

