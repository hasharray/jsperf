---
title: direct vs call
setup: |
  
tests:
  -
    name: direct
    code: |
      console.error("Danger!", "Something bad happened!", "Time to debug!")
  -
    name: call
    code: |
      console.error.call(this, "Danger!", "Something bad happened!", "Time to debug!")
---

